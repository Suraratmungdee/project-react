// import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8 gap-6 shrink-0">
      {/* <span className="text-sm font-semibold text-slate-500 cursor-pointer">Account Admin</span> */}
      <div className="flex items-center gap-3 pl-6">
        <img src="https://i.pravatar.cc/150?u=sanan" className="w-9 h-9 rounded-full object-cover" alt="user" />
        <span className="font-bold text-sm text-slate-800">Sanan Thonginot</span>
        <button className="bg-[#E11D48] text-white text-xs px-4 py-1.5 rounded-lg font-bold">Log out</button>
      </div>
      {/* <div className="flex items-center gap-2 border rounded-lg px-2 py-1 bg-slate-50">
        <img src="https://flagcdn.com/w20/gb.png" className="w-5 h-3" alt="en" />
        <span className="text-xs font-bold">EN</span>
      </div> */}
    </header>
  );
}