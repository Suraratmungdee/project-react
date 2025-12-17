import { Info, XCircle, Star, Send, Bold, Italic, Underline, List, Paperclip, Image as ImageIcon } from 'lucide-react';

export default function MessageDetail() {
  return (
    <section className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex justify-between items-start">
        <div className="flex gap-4">
          <img src="https://i.pravatar.cc/150?u=1" className="w-14 h-14 rounded-full border-2 border-white shadow-sm" alt="avatar" />
          <div>
            <h3 className="text-lg font-black text-slate-800">Franco Johana <span className="text-blue-600 text-sm font-bold ml-2">Indonesian</span></h3>
            <p className="text-slate-400 text-xs font-medium">Franco.Johana@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 text-slate-300">
          <Info size={18} /> <XCircle size={18} /> <Star size={18} />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-8">
        <h2 className="text-2xl font-black text-slate-800 mb-6 leading-tight">Lorem ipsum dolor sit amet, consetetur</h2>
        <div className="text-slate-600 leading-relaxed text-sm space-y-4">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200" className="rounded-3xl w-full h-72 object-cover shadow-lg mt-6" alt="food" />
        </div>
      </div>

      <div className="p-6">
        <div className="border border-slate-200 rounded-[28px] overflow-hidden">
          <div className="flex items-center gap-1 px-4 py-2 bg-slate-50 border-b border-slate-100">
            <button className="p-2 text-blue-600 bg-blue-50 rounded-lg mr-2"><Send size={16} className="-rotate-45" /></button>
            <Bold size={16} className="text-slate-400 mx-1" />
            <Italic size={16} className="text-slate-400 mx-1" />
            <List size={16} className="text-slate-400 mx-1" />
            <div className="flex-1" />
            <Paperclip size={18} className="text-slate-400" />
            <ImageIcon size={18} className="text-slate-400" />
          </div>
          <textarea className="w-full p-5 h-24 outline-none text-sm resize-none" placeholder="Write your message..."></textarea>
        </div>
      </div>
    </section>
  );
}