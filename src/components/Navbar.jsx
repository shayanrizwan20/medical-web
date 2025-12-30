// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900">
//           DIRECT<span className="text-seafoam">CARE</span>
//         </Link>

//         <div className="hidden lg:flex items-center gap-10">
//           {/* <Link to="/" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">Home</Link> */}
//           <Link to="/aboutus" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">Why Us</Link>
          
       
//           <div className="relative group">
//             <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-seafoam transition-colors">
//               Services <ChevronDown size={14} />
//             </button>
//             <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="bg-white shadow-2xl rounded-2xl p-4 w-64 border border-gray-50 flex flex-col gap-1">
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">In-Home & Community</Link>
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">Accommodation</Link>
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">Attendant Care</Link>
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl text-seafoam">Show All Services</Link>
//               </div>
//             </div>
//           </div>

//           <Link to="/vacancies" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">Vacancies</Link>
//           <Link to="/resources" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">News & Blogs</Link>

//           <Link to="/careers" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">Careers</Link>
//           <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-seafoam transition-all">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }









// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';

// export default function Navbar() {
//   return (
//     // Height reduced to h-16, bg-transparent, no border
//     <nav className="fixed top-0 w-full z-[100] bg-transparent h-16 flex items-center">
//       <div className="container mx-auto px-6 flex justify-start items-center gap-16"> 
//         {/* justify-start + gap-16 keeps links close to the logo */}
        
//         <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 shrink-0">
//           DIRECT<span className="text-seafoam">CARE</span>
//         </Link>

//         <div className="hidden lg:flex items-center gap-8">
//           <Link to="/aboutus" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Why Us</Link>
          
//           <div className="relative group">
//             <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-seafoam transition-colors">
//               Services <ChevronDown size={14} />
//             </button>
//             <div className="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="bg-white shadow-2xl rounded-2xl p-4 w-64 border border-gray-50 flex flex-col gap-1">
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">In-Home & Community</Link>
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">Accommodation</Link>
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl text-seafoam">Show All Services</Link>
//               </div>
//             </div>
//           </div>

//           <Link to="/vacancies" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Vacancies</Link>
//           <Link to="/resources" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">News & Blogs</Link>
//           <Link to="/careers" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Careers</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }











// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-[100] bg-transparent h-16 flex items-center">
//       {/* 1. Removed 'container mx-auto' to prevent large side margins.
//          2. Changed 'px-6' to 'pl-4' to move the logo closer to the left edge.
//          3. 'gap-8' or 'gap-12' controls the space between logo and links.
//       */}
//       <div className="w-full pl-4 pr-6 flex justify-start items-center gap-10"> 
        
//         <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 shrink-0">
//           DIRECT<span className="text-seafoam">CARE</span>
//         </Link>

//         <div className="hidden lg:flex items-center gap-8">
//           <Link to="/aboutus" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Why Us</Link>
          
//           <div className="relative group">
//             <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-seafoam transition-colors">
//               Services <ChevronDown size={14} />
//             </button>
//             <div className="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="bg-white shadow-2xl rounded-2xl p-4 w-64 border border-gray-50 flex flex-col gap-1">
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">In-Home & Community</Link>
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">Accommodation</Link>
//                 <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl text-seafoam">Show All Services</Link>
//               </div>
//             </div>
//           </div>

//           <Link to="/vacancies" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Vacancies</Link>
//           <Link to="/resources" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">News & Blogs</Link>
//           <Link to="/careers" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Careers</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }









import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the URL changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Why Us', path: '/aboutus' },
    { name: 'Vacancies', path: '/vacancies' },
    { name: 'News & Blogs', path: '/resources' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-transparent h-16 flex items-center">
      <div className="w-full pl-4 pr-6 flex justify-between lg:justify-start items-center gap-10">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 shrink-0 relative z-[110]">
          DIRECT<span className="text-seafoam">CARE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/WhyUs" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Why Us</Link>
          
          <div className="relative group">
            <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-seafoam transition-colors">
              Services <ChevronDown size={14} />
            </button>
            <div className="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white shadow-2xl rounded-2xl p-4 w-64 border border-gray-50 flex flex-col gap-1">
                <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">In-Home & Community</Link>
                <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl">Accommodation</Link>
                <Link to="/services" className="p-3 text-[11px] font-bold uppercase hover:bg-gray-50 rounded-xl text-seafoam">Show All Services</Link>
              </div>
            </div>
          </div>

          <Link to="/vacancies" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Vacancies</Link>
          <Link to="/News&Blogs" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">News & Blogs</Link>
          <Link to="/careers" className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">Careers</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[110] p-2 text-slate-900"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl lg:hidden z-[105] flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-4xl font-black tracking-tighter text-slate-900 hover:text-seafoam transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/services"
                className="text-4xl font-black tracking-tighter text-slate-900 hover:text-seafoam transition-colors"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-xl font-black uppercase tracking-widest text-seafoam mt-4"
              >
                Get in Touch →
              </Link>
            </div>

            {/* Bottom Info in Mobile Menu */}
            <div className="absolute bottom-10 left-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Direct Care Assistance
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}