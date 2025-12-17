import { Search } from 'lucide-react';

export default function InboxList() {
  return (
    <section className="w-[400px] bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="p-5 flex justify-between items-center border-b border-slate-50">
        <h2 className="text-xl font-black text-slate-800 italic">Inbox <span className="text-slate-400 font-medium text-sm not-italic ml-1">24 Unread</span></h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input className="bg-slate-50 border border-slate-100 rounded-full py-2 pl-9 pr-4 text-xs w-36 outline-none" placeholder="Search..." />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`p-5 border-b border-slate-50 cursor-pointer transition-colors ${i === 1 ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}>
            <div className="flex gap-4">
              <img src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full" alt="avatar" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-extrabold text-sm truncate">Franco Johana</h4>
                  <span className="text-[10px] text-blue-600 font-bold whitespace-nowrap">16:11 PM</span>
                </div>
                <p className="text-blue-500 text-[10px] font-bold mb-1 uppercase">Indonesian</p>
                <p className="text-xs text-slate-400 line-clamp-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex justify-between items-center text-slate-400 text-xs font-bold">
        <span>Show Posts 1-10 of 50</span>
        <button className="bg-[#4338CA] text-white px-6 py-2 rounded-xl">Next ›</button>
      </div>
    </section>
  );
}