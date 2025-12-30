// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { MessageSquare } from 'lucide-react';

// export default function FloatingContact() {
//   const location = useLocation();

//   // Don't show the button if we are on the contact page
//   if (location.pathname === '/contact') return null;

//   return (
//     <Link 
//       to="/contact" 
//       className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-seafoam transition-all hover:scale-105 active:scale-95"
//     >
//       <span className="text-[11px] font-black uppercase tracking-widest overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
//         Contact Us
//       </span>
//       <MessageSquare size={20} />
//     </Link>
//   );
// }


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function FloatingContact() {
  const location = useLocation();

  // Don't show the button if we are on the contact page
  if (location.pathname === '/contact') return null;

  return (
    <Link 
      to="/contact" 
      className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full shadow-2xl shadow-black/20 hover:bg-seafoam hover:text-black transition-all duration-500 hover:scale-105 active:scale-95"
    >
      <span className="text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        Get In Touch
      </span>
      <div className="relative">
        <MessageSquare size={22} className="group-hover:rotate-[15deg] transition-transform duration-500" />
        {/* Small brand notification dot */}
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-seafoam rounded-full group-hover:bg-black transition-colors" />
      </div>
    </Link>
  );
}