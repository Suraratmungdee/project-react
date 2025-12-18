import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="h-full w-full min-h-[400px] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* วงกลมหมุน */}
        <Loader2 className="h-12 w-12 animate-spin text-[#3730A3]" />
        
        {/* Effect แสงฟุ้งๆ ด้านหลัง */}
        <div className="absolute inset-0 blur-xl bg-indigo-500/30 rounded-full -z-10"></div>
      </div>
      <p className="text-slate-400 font-medium animate-pulse text-sm">
        Loading data...
      </p>
    </div>
  );
};

export default Loading;