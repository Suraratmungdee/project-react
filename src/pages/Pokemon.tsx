import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { Table, type Column } from '../components/Table'; // Import Table ที่สร้าง
import { SquarePen, Swords, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

// 1. กำหนด Type ของข้อมูล
interface PokemonData {
  id: number;
  name: string;
  image: string;
  type: string;
  stats: { hp: number; atk: number };
}

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export default function Pokemon() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // เพิ่ม state สำหรับจำนวนทั้งหมด
  const itemsPerPage = 10;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const offset = (currentPage - 1) * itemsPerPage;
        const listResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`, {
          signal: abortController.signal
        });

        setTotalItems(listResponse.data.count); // เก็บจำนวนทั้งหมดจาก API

        // ...existing code... (Logic ดึง details เหมือนเดิม)
        const detailsPromises = listResponse.data.results.map((item: PokemonListItem) => 
          axios.get(item.url, { signal: abortController.signal })
        );

        const detailsResponses = await Promise.all(detailsPromises);

        const mappedData: PokemonData[] = detailsResponses.map((res) => {
          const rawData = res.data;
          return {
            id: rawData.id,
            name: rawData.name,
            image: rawData.sprites.other.home.front_default,
            type: rawData.types[0].type.name,
            stats: {
              hp: rawData.stats.find((s: PokemonStat) => s.stat.name === 'hp')?.base_stat || 0,
              atk: rawData.stats.find((s: PokemonStat) => s.stat.name === 'attack')?.base_stat || 0
            }
          };
        });

        setData(mappedData);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.error(error);
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => abortController.abort();
  }, [currentPage]);

  // 3. กำหนด Columns
  const columns: Column<PokemonData>[] = [
    {
      header: '#',
      render: (row) => <span className="text-slate-500">{row.id}</span>,
    },
    {
      header: 'Name',
      render: (row) => (
        <div className="font-medium text-slate-800 flex items-center gap-4">
          {/* เพิ่ม bg-slate-100 เพื่อให้เห็นวงกลมชัดเจน และ shrink-0 ป้องกันวงกลมบี้ */}
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
            <img src={row.image} alt={row.name} className="w-8 h-8 object-contain" />
          </div>
          {/* เพิ่ม capitalize และ text-base */}
          <span className="capitalize text-base">{row.name}</span>
        </div>
      ),
    },
    {
      header: 'Type',
      render: (row) => {
        // Logic สีตาม Type แบบง่ายๆ
        const colorClass = row.type === 'Grass'
          ? 'bg-green-100 text-green-700'
          : 'bg-orange-100 text-orange-700';

        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
            {row.type}
          </span>
        );
      },
    },
    {
      header: 'Stats',
      render: (row) => (
        <>
          <div className="font-medium text-slate-800 flex items-center gap-2">
            <Heart size={18} className="text-red-500" /> {row.stats.hp} | <Swords size={18} className="text-slate-400" /> {row.stats.atk}
          </div>
        </>
      ),
    },
    // {
    //   header: 'Action',
    //   className: 'text-right',
    //   render: () => ( 
    //     <div className="flex justify-end gap-3">
    //         <button className="text-[#3730A3] hover:text-indigo-700 font-medium text-sm transition-colors">
    //           <SquarePen size={20} />
    //         </button>
    //     </div>
    //   ),
    // },
  ];

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // ฟังก์ชันเปลี่ยนหน้า (รวม Logic ไว้ที่นี่)
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // const handlePrevPage = () => {
  //   handlePageChange(currentPage - 1);
  // };

  // const handleNextPage = () => {
  //   handlePageChange(currentPage + 1);
  // };

  return (
    <div className="space-y-8 pb-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Pokemon</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px] bg-white rounded-2xl border border-slate-100">
            <Loading />
          </div>
        ) : (
          <Table
            data={data}
            columns={columns}
            pagination={{
              currentPage: currentPage,
              totalPages: totalPages || 1,
              onPageChange: handlePageChange // ส่งฟังก์ชันหลักไปให้ Table ใช้
            }}
          />
        )}
      </div>
    </div>
  );
}