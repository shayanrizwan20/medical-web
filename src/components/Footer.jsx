// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 pt-24 pb-12 text-white">
//       <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
//         <div className="col-span-2">
//           <h2 className="text-3xl font-black tracking-tighter mb-6">DIRECT<span className="text-seafoam">CARE</span></h2>
//           <p className="text-slate-400 max-w-sm leading-relaxed">Providing high-quality NDIS disability support services across Victoria.</p>
//         </div>
//         <div>
//           <h4 className="text-xs font-black uppercase tracking-[0.3em] text-seafoam mb-6">Quick Links</h4>
//           <div className="flex flex-col gap-4 text-slate-400 font-bold text-sm">
//             <Link to="/services">Services</Link>
//             <Link to="/vacancies">Vacancies</Link>
//             <Link to="/careers">Careers</Link>
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-white/5 pt-8 text-center text-[10px] font-black uppercase tracking-widest text-slate-500">
//         &copy; 2025 Direct Care Assistance. Registered NDIS Provider.
//       </div>
//     </footer>
//   );
// }







// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 pt-24 pb-12 text-white overflow-hidden relative">
//       {/* Decorative Glow */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam/5 blur-[120px] rounded-full -mr-32 -mt-32" />

//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
//           {/* Brand Column */}
//           <div className="col-span-1 lg:col-span-1">
//             <h2 className="text-3xl font-black tracking-tighter mb-6 italic">
//               DIRECT<span className="text-seafoam font-serif">CARE.</span>
//             </h2>
//             <p className="text-slate-400 text-sm leading-relaxed mb-8">
//               Empowering independence through premium NDIS support. We provide tailored care solutions across Victoria with a focus on dignity and excellence.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-seafoam hover:border-seafoam transition-all">
//                 <Facebook size={18} />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-seafoam hover:border-seafoam transition-all">
//                 <Instagram size={18} />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-seafoam hover:border-seafoam transition-all">
//                 <Linkedin size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-seafoam mb-8">Navigation</h4>
//             <div className="flex flex-col gap-4 text-slate-400 font-bold text-sm">
//               <Link to="/" className="hover:text-white transition-colors">Home</Link>
//               <Link to="/aboutus" className="hover:text-white transition-colors">About Us</Link>
//               <Link to="/vacancies" className="hover:text-white transition-colors">Vacancies</Link>
//               <Link to="/resources" className="hover:text-white transition-colors">Blogs & Resources</Link>
//               <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
//               <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
//             </div>
//           </div>

//           {/* Services Links */}
//           <div>
//             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-seafoam mb-8">Our Services</h4>
//             <div className="flex flex-col gap-4 text-slate-400 font-bold text-sm">
//               <Link to="/services" className="hover:text-white transition-colors">In-Home Care</Link>
//               <Link to="/services" className="hover:text-white transition-colors">SIL & SDA Housing</Link>
//               <Link to="/services" className="hover:text-white transition-colors">Nursing Support</Link>
//               <Link to="/services" className="hover:text-white transition-colors">Community Access</Link>
//               <Link to="/services" className="hover:text-white transition-colors">Attendant Care</Link>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-seafoam mb-8">Contact</h4>
//             <div className="flex flex-col gap-6">
//               <div className="flex gap-4">
//                 <Phone size={18} className="text-seafoam shrink-0" />
//                 <span className="text-sm font-bold text-slate-300">1300 493 717</span>
//               </div>
//               <div className="flex gap-4">
//                 <Mail size={18} className="text-seafoam shrink-0" />
//                 <span className="text-sm font-bold text-slate-300">intake@directcare.com.au</span>
//               </div>
//               <div className="flex gap-4">
//                 <MapPin size={18} className="text-seafoam shrink-0" />
//                 <span className="text-sm font-bold text-slate-300 leading-tight">
//                   Suite 23, Level 3, 799 Springvale Rd, Mulgrave VIC 3170
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/5 pt-12">
//   <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
    
//     {/* Left Side: Terms */}
//     <div className="flex justify-center md:justify-start">
//       <Link to="/terms" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">
//         Terms & Conditions
//       </Link>
//     </div>

//     {/* Middle Side: Copyright */}
//     <div className="flex justify-center">
//       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">
//         &copy; 2025 Direct Care Assistance. Registered NDIS Provider.
//       </p>
//     </div>

//     {/* Right Side: Privacy */}
//     <div className="flex justify-center md:justify-end">
//       <Link to="/privacy" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">
//         Privacy Policy
//       </Link>
//     </div>

//   </div>
// </div>
//       </div>
//     </footer>
//   );
// }





import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 text-white overflow-hidden relative">
      {/* Subtle Seafoam Glow to anchor the bottom of the page */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam/10 blur-[120px] rounded-full -mr-32 -mt-32" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. Brand Identity */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-black tracking-tighter mb-6 italic leading-none">
              DIRECT<span className="text-seafoam font-serif">CARE.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Empowering independence through premium NDIS support. We provide tailored care solutions across Victoria with a focus on dignity and excellence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, link: "#" },
                { icon: <Instagram size={18} />, link: "#" },
                { icon: <Linkedin size={18} />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-11 h-11 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-seafoam hover:text-black hover:border-seafoam transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-seafoam mb-8">Company</h4>
            <div className="flex flex-col gap-4 text-white/50 font-bold text-sm">
              <Link to="/WhyUs" className="hover:text-seafoam transition-colors">Why Us</Link>
              <Link to="/vacancies" className="hover:text-seafoam transition-colors">Vacancies</Link>
              <Link to="/News&Blogs" className="hover:text-seafoam transition-colors">News & Blogs</Link>
              <Link to="/careers" className="hover:text-seafoam transition-colors">Careers</Link>
            </div>
          </div>

          {/* 3. Specialized Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-seafoam mb-8">Our Services</h4>
            <div className="flex flex-col gap-4 text-white/50 font-bold text-sm">
              <Link to="/services" className="hover:text-white transition-colors">SIL & SDA Housing</Link>
              <Link to="/services" className="hover:text-white transition-colors">Nursing Support</Link>
              <Link to="/services" className="hover:text-white transition-colors">In-Home Support</Link>
              <Link to="/services" className="hover:text-white transition-colors">Community Access</Link>
              <Link to="/contact" className="text-seafoam/80 hover:text-white transition-colors italic">Enquire Now →</Link>
            </div>
          </div>

          {/* 4. Direct Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-seafoam mb-8">Contact</h4>
            <div className="flex flex-col gap-6">
              <div className="group flex gap-4 cursor-pointer">
                <Phone size={18} className="text-seafoam shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-black text-white/80 group-hover:text-white transition-colors">1300 493 717</span>
              </div>
              <div className="group flex gap-4 cursor-pointer">
                <Mail size={18} className="text-seafoam shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-black text-white/80 group-hover:text-white transition-colors">intake@directcare.com.au</span>
              </div>
              <div className="flex gap-4">
                <MapPin size={18} className="text-seafoam shrink-0" />
                <span className="text-sm font-medium text-white/40 leading-tight">
                  Suite 23, Level 3, 799 Springvale Rd,<br/>Mulgrave VIC 3170
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Legal & Copyright Bar --- */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-10">
              <Link to="/terms" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-seafoam transition-colors">
                Terms & Conditions
              </Link>
              
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 text-center">
              &copy; 2025 <span className="text-white/40">Direct Care Assistance.</span> Registered NDIS Provider.
            </p>

            {/* Right Side: Privacy */}
     <div className="flex justify-center md:justify-end">
       <Link to="/privacy" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-seafoam transition-colors">
         Privacy Policy
       </Link>
     </div>
          </div>
        </div>
      </div>
    </footer>
  );
}