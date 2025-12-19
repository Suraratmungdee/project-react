import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Column<T> {
  header: string;
  render: (item: T) => React.ReactNode;
  className?: string;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number; // เพิ่ม totalPages เพื่อคำนวณเลขหน้า
  onPageChange: (page: number) => void; // เปลี่ยนจาก onPrev/onNext เป็น onPageChange อันเดียว
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  pagination?: PaginationProps;
}

export function Table<T>({ data, columns, pagination }: TableProps<T>) {
  
  // ฟังก์ชันสำหรับสร้างเลขหน้า (แสดงแบบ 1 2 3 ... 10)
  const getPageNumbers = () => {
    if (!pagination) return [];
    const { currentPage, totalPages } = pagination;
    const delta = 2; // จำนวนหน้าที่แสดงรอบๆ หน้าปัจจุบัน
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* ...existing code... (ส่วน thead และ tbody เหมือนเดิม) */}
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              {columns.map((col, index) => (
                <th 
                  key={index} 
                  className={`p-4 text-sm font-semibold text-slate-600 ${col.className || ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length > 0 ? (
              data.map((item, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-slate-50 transition-colors">
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className={`p-4 ${col.className || ''}`}>
                      {col.render(item)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="p-8 text-center text-slate-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ส่วน Pagination Footer แบบใหม่ */}
      {pagination && (
        <div className="flex justify-end items-center p-4 gap-2 border-t border-slate-100 bg-slate-50/50">
          {/* ปุ่ม Previous */}
          <button
            onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className="p-2 rounded-lg hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-slate-600"
          >
            <ChevronLeft size={20} />
          </button>

          {/* ปุ่มตัวเลข */}
          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && pagination.onPageChange(page)}
                disabled={page === '...'}
                className={`min-w-[32px] h-8 px-2 rounded-lg text-sm font-medium transition-colors ${
                  page === pagination.currentPage
                    ? 'bg-[#3730A3] text-white shadow-sm'
                    : page === '...'
                    ? 'cursor-default text-slate-400'
                    : 'text-slate-600 hover:bg-slate-200 bg-white border border-slate-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* ปุ่ม Next */}
          <button
            onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            className="p-2 rounded-lg hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-slate-600"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}