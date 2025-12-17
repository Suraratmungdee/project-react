import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, Route, Users, UserCircle, Package, CreditCard, Inbox, FileText } from 'lucide-react';
import type { NavItemProps } from '../types';

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, badge }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center justify-between px-4 py-3 rounded-2xl transition-all
      ${isActive ? 'bg-[#3730A3] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'}
    `}
  >
    <div className="flex items-center gap-3 font-semibold text-base">
      {icon} <span>{label}</span>
    </div>
    {badge && <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-bold">{badge}</span>}
  </NavLink>
);

export default function Sidebar() {

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboards', path: '/dashboard' },
    { icon: Search, label: 'Discover', path: '/discover' },
    { icon: Route, label: 'Route', path: '/route' },
    { icon: Users, label: 'Service providers', path: '/services' },
    { icon: UserCircle, label: 'Account', path: '/account' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: CreditCard, label: 'Payment', path: '/payment', badge: "10" },
    { icon: Inbox, label: 'Inbox', path: '/inbox', badge: "24" },
    { icon: FileText, label: 'Reports', path: '/reports', badge: "5" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-4 shrink-0">
      <div className="flex items-center gap-2 px-2 mb-8 text-pink-500 font-bold text-xl">
        {/* <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">🌸</div> */}
        <span className="text-slate-800">Adventure Earth</span>
      </div>
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavItem
            key={item.path}
            icon={<item.icon size={20} />}
            label={item.label}
            to={item.path}
            badge={item.badge}
          />
        ))}
      </nav>
    </aside>
  );
}