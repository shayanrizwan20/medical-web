// import React from 'react';
// import ReferralForm from '../components/ReferralForm';
// import { Mail, Phone, MapPin } from 'lucide-react';

// export default function Contact() {
//   return (
//     <div className="pt-40 pb-20">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-20 items-start">
//           <div>
//             <h1 className="text-6xl font-black tracking-tighter mb-8">Let's <span className="text-seafoam font-serif italic">Connect.</span></h1>
//             <p className="text-xl text-slate-500 font-medium mb-12 max-w-md">Whether you are looking for care or a career, our team is ready to assist you.</p>
            
//             <div className="space-y-8">
//               <div className="flex gap-6 items-center">
//                 <div className="w-14 h-14 bg-seafoam/10 text-seafoam rounded-2xl flex items-center justify-center">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Us</p>
//                   <p className="text-xl font-black text-slate-900">1300 000 000</p>
//                 </div>
//               </div>
//               <div className="flex gap-6 items-center">
//                 <div className="w-14 h-14 bg-seafoam/10 text-seafoam rounded-2xl flex items-center justify-center">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Us</p>
//                   <p className="text-xl font-black text-slate-900">info@directcare.com.au</p>
//                 </div>
//               </div>
//               <div className="flex gap-6 items-center">
//                 <div className="w-14 h-14 bg-seafoam/10 text-seafoam rounded-2xl flex items-center justify-center">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Head Office</p>
//                   <p className="text-xl font-black text-slate-900">Melbourne, Victoria</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-[3rem] shadow-2xl shadow-seafoam/10 p-2 border border-gray-50">
//             <ReferralForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// import React from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// export default function Contact() {
//   return (
//     <div className="pt-40 pb-20 px-6 bg-white">
//       <div className="container mx-auto max-w-6xl">
//         <div className="grid lg:grid-cols-2 gap-20">
          
//           {/* Info Side */}
//           <div>
//             <h1 className="text-7xl font-black tracking-tighter leading-[0.85] mb-8">
//               Let's <span className="text-seafoam font-serif italic font-light">Connect.</span>
//             </h1>
//             <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
//               Have questions about NDIS funding, our housing vacancies, or joining our team? We're here to help.
//             </p>

//             <div className="space-y-8">
//               <div className="flex gap-6 items-start">
//                 <div className="w-12 h-12 bg-seafoam/10 rounded-2xl flex items-center justify-center text-seafoam shrink-0">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
//                   <p className="text-xl font-black text-slate-900">intake@directcareassistance.com.au</p>
//                 </div>
//               </div>

//               <div className="flex gap-6 items-start">
//                 <div className="w-12 h-12 bg-seafoam/10 rounded-2xl flex items-center justify-center text-seafoam shrink-0">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
//                   <p className="text-xl font-black text-slate-900">1300 493 717</p>
//                 </div>
//               </div>

//               <div className="flex gap-6 items-start">
//                 <div className="w-12 h-12 bg-seafoam/10 rounded-2xl flex items-center justify-center text-seafoam shrink-0">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Our Office</p>
//                   <p className="text-xl font-black text-slate-900">Suite 23, Level 3, Mulgrave, VIC</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form Side */}
//           <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-slate-200">
//             <form className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
//                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-seafoam outline-none transition-colors" placeholder="John Doe" />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
//                   <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-seafoam outline-none transition-colors" placeholder="john@example.com" />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
//                 <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:border-seafoam outline-none transition-colors appearance-none">
//                   <option className="bg-slate-900">General Inquiry</option>
//                   <option className="bg-slate-900">Housing Vacancy</option>
//                   <option className="bg-slate-900">Career Application</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
//                 <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-seafoam outline-none transition-colors" placeholder="How can we help?"></textarea>
//               </div>

//               <button className="w-full bg-seafoam hover:bg-white hover:text-slate-900 text-white font-black uppercase tracking-widest py-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-seafoam/20">
//                 Send Message <Send size={18} />
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }










import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-40 pb-20 px-6 bg-white selection:bg-seafoam/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* 1. Info Side - Editorial Style */}
          <div>
            <span className="text-seafoam font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">Get in touch</span>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-black">
              Let's <br/><span className="text-seafoam font-serif italic">Connect.</span>
            </h1>
            <p className="text-black/50 text-xl font-medium mb-12 leading-relaxed max-w-md">
              Have questions about NDIS funding, our housing vacancies, or joining our team? Our intake specialists are ready to help.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-seafoam shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-seafoam/10">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-1">Email Us</p>
                  <p className="text-xl font-black text-black hover:text-seafoam transition-colors cursor-pointer">intake@directcareassistance.com.au</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-seafoam shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-seafoam/10">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-1">Call Us</p>
                  <p className="text-xl font-black text-black hover:text-seafoam transition-colors cursor-pointer">1300 493 717</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-seafoam shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-seafoam/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-1">Our Office</p>
                  <p className="text-xl font-black text-black">Suite 23, Level 3, Mulgrave, VIC</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Form Side - Deep Black Card */}
          <div className="bg-black p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-seafoam/10 relative overflow-hidden">
            {/* Ambient Seafoam Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-seafoam/10 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-seafoam/5 blur-[80px] rounded-full -ml-10 -mb-10" />

            <form className="relative z-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-2">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-seafoam focus:bg-white/10 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-seafoam focus:bg-white/10 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-2">How can we help?</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white/60 focus:border-seafoam outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-black">General Inquiry</option>
                    <option className="bg-black">Housing Vacancy (SIL/SDA)</option>
                    <option className="bg-black">Career Application</option>
                    <option className="bg-black">Nursing Support</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-seafoam">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-2">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-seafoam focus:bg-white/10 outline-none transition-all resize-none" placeholder="Tell us about your needs..."></textarea>
              </div>

              <button className="w-full bg-seafoam hover:bg-white text-black font-black uppercase tracking-widest py-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-seafoam/20 active:scale-[0.98]">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}