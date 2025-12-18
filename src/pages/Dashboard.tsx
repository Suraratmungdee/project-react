import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight } from 'lucide-react';
import Loading from '../components/Loading';
import type { StatCardProps, DashboardData } from '../types';

const StatCard = ({ title, value, change, icon: Icon, color }: StatCardProps) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-3xl font-bold text-slate-800 mt-2">{value}</h3>
      </div>
      <div className={`p-3 rounded-2xl ${color} text-white shadow-lg shadow-indigo-500/20`}>
        <Icon size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className="text-emerald-500 font-bold flex items-center bg-emerald-50 px-2 py-0.5 rounded-full">
        <ArrowUpRight size={14} className="mr-1" /> {change}
      </span>
      <span className="text-slate-400 ml-2">vs last month</span>
    </div>
  </div>
);

export default function Dashboard() {
  // 2. สร้าง State สำหรับเก็บข้อมูล และ Loading
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 3. ฟังก์ชันสำหรับดึงข้อมูล (Async Function)
    const fetchDashboardData = async () => {
      try {
        // --- ส่วนนี้คือการจำลอง API Call (Mock) ---
        // ในการใช้งานจริง ให้ลบส่วน Mock นี้ทิ้งแล้วใช้ fetch ด้านล่าง
        await new Promise(resolve => setTimeout(resolve, 1500)); // รอ 1.5 วิ
        
        const mockResponse: DashboardData = {
          revenue: { value: "$54,230", change: "+12%" },
          activeUsers: { value: "2,543", change: "+5.2%" },
          newOrders: { value: "1,254", change: "+3.8%" },
          growthRate: { value: "18.2%", change: "+2.4%" },
        };
        
        setData(mockResponse);
        // ---------------------------------------

        /* 
        // --- ตัวอย่างการเรียก API จริง ---
        const response = await fetch('https://api.example.com/dashboard/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
        */

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load dashboard data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) return <Loading />;
  
  if (error) return <div className="text-red-500 text-center p-10">{error}</div>;

  return (
    <div className="space-y-8 pb-8 animate-fade-in"> 
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back! Here's what's happening with your projects today.</p>
        </div>
        <button className="bg-[#3730A3] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30">
          Download Report
        </button>
      </div>

      {/* Stats Grid - 4. นำข้อมูลจาก State (data) มาแสดงผล */}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value={data.revenue.value}
            change={data.revenue.change}
            icon={DollarSign}
            color="bg-indigo-500"
          />
          <StatCard
            title="Active Users"
            value={data.activeUsers.value}
            change={data.activeUsers.change}
            icon={Users}
            color="bg-pink-500"
          />
          <StatCard
            title="New Orders"
            value={data.newOrders.value}
            change={data.newOrders.change}
            icon={Activity}
            color="bg-orange-500"
          />
          <StatCard
            title="Growth Rate"
            value={data.growthRate.value}
            change={data.growthRate.change}
            icon={TrendingUp}
            color="bg-emerald-500"
          />
        </div>
      )}

      {/* ...existing code... (Main Content Area) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section (Placeholder) */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl text-slate-800">Revenue Analytics</h3>
            <select className="bg-slate-50 border-none text-slate-500 text-sm rounded-lg px-3 py-2 outline-none">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[300px] flex items-center justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <span className="text-slate-400 font-medium">Chart Visualization Placeholder</span>
          </div>
        </div>

        {/* Recent Activity List */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
          <h3 className="font-bold text-xl text-slate-800 mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">New user registered</p>
                  <p className="text-xs text-slate-500 mt-0.5">User ID #{202400 + i} created an account.</p>
                  <p className="text-[10px] text-slate-400 mt-1">{i * 5} minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}