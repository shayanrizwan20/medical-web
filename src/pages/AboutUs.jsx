








// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Shield, Target, Users, Heart, ArrowRight } from 'lucide-react';

// export default function AboutUs() {
//   return (
//     <div className="pt-40 pb-20 bg-white">
//       <div className="container mx-auto px-6 max-w-5xl">
//         {/* --- Hero Section --- */}
//         <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="rounded-[3.5rem] shadow-2xl h-[600px] overflow-hidden border-8 border-seafoam/5"
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
//               className="w-full h-full object-cover" 
//               alt="Care team"
//             />
//           </motion.div>
          
//           <motion.div
//              initial={{ opacity: 0, x: 20 }}
//              animate={{ opacity: 1, x: 0 }}
//           >
//             <h2 className="text-6xl font-black tracking-tighter mb-6 leading-tight">
//               Built for <span className="text-seafoam font-serif italic">You.</span>
//             </h2>
//             <p className="text-slate-500 text-xl leading-relaxed mb-10 font-medium">
//               Direct Care Assistance was founded on the principle that clinical excellence should be paired with genuine human connection. We don't just provide care; we build communities.
//             </p>
            
//             <div className="space-y-4">
//               <div className="flex gap-5 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 items-center">
//                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center font-black text-seafoam shadow-sm text-xl italic font-serif">
//                   1
//                 </div>
//                 <div>
//                   <p className="font-black text-slate-900 text-lg">Our Mission</p>
//                   <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Independence & Dignity For All</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* --- Core Values Section --- */}
//         <section className="py-24 bg-seafoam/5 rounded-[4rem] px-12 mb-32 border border-seafoam/10">
//           <div className="text-center mb-16">
//             <h3 className="text-4xl font-black tracking-tighter">Our Living <span className="text-seafoam font-serif italic">Values.</span></h3>
//           </div>
//           <div className="grid md:grid-cols-3 gap-12">
//             {[
//               { icon: <Shield size={24} />, title: "Integrity", desc: "We are honest, ethical and transparent in every interaction." },
//               { icon: <Heart size={24} />, title: "Compassion", desc: "We treat every participant with genuine warmth and respect." },
//               { icon: <Target size={24} />, title: "Excellence", desc: "We strive for the highest standards in clinical support." }
//             ].map((value, i) => (
//               <div key={i} className="text-center md:text-left">
//                 <div className="text-seafoam mb-4 flex justify-center md:justify-start">{value.icon}</div>
//                 <h4 className="text-2xl font-black mb-4 tracking-tight">{value.title}</h4>
//                 <p className="text-slate-500 font-medium leading-relaxed">{value.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* --- Leadership Section --- */}
//         <div className="mb-32">
//           <h3 className="text-center text-4xl font-black mb-16 tracking-tighter">Our <span className="text-seafoam font-serif italic">Leadership.</span></h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="group flex items-center gap-8 p-10 bg-slate-900 text-white rounded-[3rem] transition-all hover:bg-slate-800">
//               <div className="w-32 h-32 bg-gray-700 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
//                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
//               </div>
//               <div>
//                 <p className="text-2xl font-black">Operations Manager</p>
//                 <p className="text-seafoam font-black text-[10px] uppercase tracking-[0.3em] mt-2">Strategic Coordination</p>
//                 <p className="text-slate-400 text-sm mt-3 font-medium opacity-80">Ensuring excellence in every care plan.</p>
//               </div>
//             </div>

//             <div className="group flex items-center gap-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl">
//               <div className="w-32 h-32 bg-gray-200 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
//                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
//               </div>
//               <div>
//                 <p className="text-2xl font-black text-slate-900">Clinical Lead</p>
//                 <p className="text-seafoam font-black text-[10px] uppercase tracking-[0.3em] mt-2">Nursing Excellence</p>
//                 <p className="text-slate-500 text-sm mt-3 font-medium">Oversight of complex health supports.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- Refined Join Team CTA --- */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -5 }}
//           className="relative p-12 md:p-24 bg-slate-900 text-white rounded-[4rem] text-center overflow-hidden shadow-2xl shadow-seafoam/20"
//         >
//           {/* Decorative Background Elements */}
//           <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam/20 blur-[120px] rounded-full -mr-32 -mt-32" />
//           <div className="absolute bottom-0 left-0 w-64 h-64 bg-seafoam/10 blur-[80px] rounded-full -ml-20 -mb-20" />
          
//           <div className="relative z-10 max-w-3xl mx-auto">
//             <div className="flex justify-center gap-4 mb-8">
//               <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-seafoam border border-white/5">
//                 We're Hiring
//               </span>
//               <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60 border border-white/5">
//                 Victoria, AU
//               </span>
//             </div>

//             <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
//               Ready to join <br/>our <span className="text-seafoam font-serif italic">Community?</span>
//             </h2>
            
//             <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
//               We don’t just hire employees; we welcome partners in care. If you are a passionate nurse or support worker, let’s build something meaningful together.
//             </p>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//               {[
//                 { label: 'Flexible Shifts', icon: '✨' },
//                 { label: 'Competitive Pay', icon: '💰' },
//                 { label: 'Growth Paths', icon: '📈' },
//                 { label: 'Supportive Team', icon: '🤝' }
//               ].map((benefit, i) => (
//                 <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
//                   <div className="text-xl mb-1">{benefit.icon}</div>
//                   <div className="text-[10px] font-black uppercase tracking-tight text-slate-300">{benefit.label}</div>
//                 </div>
//               ))}
//             </div>
            
//             <Link 
//               to="/contact" 
//               className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-900 transition-all shadow-xl group"
//             >
//               Apply To Join Us 
//               <ArrowRight size={20} />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }








import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Target, Heart, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-40 pb-20 bg-white selection:bg-seafoam/30">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* --- Hero Section: Bold Black Typography --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[3.5rem] shadow-2xl h-[600px] overflow-hidden border-8 border-seafoam/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover" 
              alt="Care team"
            />
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9] text-black">
              Built for <br/><span className="text-seafoam font-serif italic">You.</span>
            </h2>
            <p className="text-black/60 text-xl leading-relaxed mb-10 font-medium">
              Direct Care Assistance was founded on the principle that clinical excellence should be paired with genuine human connection. We don't just provide care; we build communities.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-5 p-8 bg-seafoam/10 rounded-[2.5rem] border border-seafoam/20 items-center">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center font-black text-seafoam shadow-lg text-xl italic font-serif">
                  1
                </div>
                <div>
                  <p className="font-black text-black text-lg">Our Mission</p>
                  <p className="text-[10px] text-black/40 uppercase font-black tracking-widest">Independence & Dignity For All</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Core Values: High-Contrast Seafoam Background --- */}
        <section className="py-24 bg-seafoam mx-[-1rem] md:mx-0 rounded-[4rem] px-12 mb-32 shadow-2xl shadow-seafoam/20 text-black">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black tracking-tighter">Our Living <span className="font-serif italic text-black/70">Values.</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Shield size={28} />, title: "Integrity", desc: "We are honest, ethical and transparent in every interaction." },
              { icon: <Heart size={28} />, title: "Compassion", desc: "We treat every participant with genuine warmth and respect." },
              { icon: <Target size={28} />, title: "Excellence", desc: "We strive for the highest standards in clinical support." }
            ].map((value, i) => (
              <div key={i} className="bg-black/5 p-8 rounded-[2.5rem] border border-black/5 group hover:bg-black transition-all duration-500">
                <div className="text-black mb-6 group-hover:text-seafoam transition-colors">{value.icon}</div>
                <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-white transition-colors">{value.title}</h4>
                <p className="text-black/60 font-medium leading-relaxed group-hover:text-white/60 transition-colors">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Leadership: Minimalist Black & White --- */}
        <div className="mb-32">
          <h3 className="text-center text-5xl font-black mb-16 tracking-tighter text-black">Our <span className="text-seafoam font-serif italic">Leadership.</span></h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group flex flex-col md:flex-row items-center gap-8 p-10 bg-black text-white rounded-[3rem] transition-all hover:scale-[1.02] duration-500">
              <div className="w-40 h-40 bg-gray-800 rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Manager" />
              </div>
              <div>
                <p className="text-2xl font-black group-hover:text-seafoam transition-colors">Operations Manager</p>
                <p className="text-seafoam/70 font-black text-[10px] uppercase tracking-[0.3em] mt-2">Strategic Coordination</p>
                <p className="text-white/40 text-sm mt-3 font-medium">Ensuring excellence in every customized care plan across Victoria.</p>
              </div>
            </div>

            <div className="group flex flex-col md:flex-row items-center gap-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-200 transition-all hover:bg-white hover:shadow-2xl hover:border-transparent hover:scale-[1.02] duration-500">
              <div className="w-40 h-40 bg-gray-200 rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Lead" />
              </div>
              <div>
                <p className="text-2xl font-black text-black">Clinical Lead</p>
                <p className="text-seafoam font-black text-[10px] uppercase tracking-[0.3em] mt-2">Nursing Excellence</p>
                <p className="text-black/40 text-sm mt-3 font-medium">Leading our specialized nursing and complex health support team.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Join Team CTA: Dark Mode with Seafoam Accents --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-24 bg-black text-white rounded-[4rem] text-center overflow-hidden"
        >
          {/* Mint Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam/10 blur-[120px] rounded-full -mr-32 -mt-32" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
              Ready to join <br/>our <span className="text-seafoam font-serif italic">Community?</span>
            </h2>
            
            <p className="text-white/50 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              We welcome partners in care. If you are a passionate nurse or support worker, let’s build something meaningful together.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Flexible Shifts', icon: '✨' },
                { label: 'Competitive Pay', icon: '💰' },
                { label: 'Growth Paths', icon: '📈' },
                { label: 'Supportive Team', icon: '🤝' }
              ].map((benefit, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-seafoam/50 transition-colors">
                  <div className="text-xl mb-1">{benefit.icon}</div>
                  <div className="text-[10px] font-black uppercase tracking-tight text-white/70">{benefit.label}</div>
                </div>
              ))}
            </div>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 bg-seafoam text-black px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-xl group"
            >
              Apply To Join Us 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}