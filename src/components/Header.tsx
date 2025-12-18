import { useAuth } from '../context/AuthContext';

export default function Header() {
const { logout } = useAuth();
  const handleLogout = () => {
    // Logic for logging out the user
    logout();
  };

  return (
    <header className="h-16 flex items-center justify-end p-4 gap-6 shrink-0">
      <div className="flex items-center gap-3 pl-6">
        <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-[15px] bg-white border border-slate-200">
          <img src="https://i.pravatar.cc/150?u=sanan" className="w-9 h-9 rounded-full object-cover" alt="user" />
          <span className="font-bold text-[18px] text-slate-800">Sanan Thonginot</span>
          <button className="bg-[#E11D48] text-white text-[14px] py-2 px-4 rounded-xl font-bold hover:bg-[#f01040] transition-colors shadow-lg shadow-red-500/30" onClick={handleLogout}>Log out</button>
        </div>
      </div>
      {/* <div className="flex items-center gap-2 border rounded-lg px-2 py-1 bg-slate-50">
        <img src="https://flagcdn.com/w20/gb.png" className="w-5 h-3" alt="en" />
        <span className="text-xs font-bold">EN</span>
      </div> */}
    </header>
  );
}