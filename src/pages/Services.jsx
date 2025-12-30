// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const servicesData = [
//   {
//     id: "community",
//     title: "In-Home & Community Support",
//     info: "We provide personalized support within your home and out in the community to enhance independence.",
//     details: ["Personal Care", "Meal Preparation", "Social Outings", "Household Tasks"]
//   },
//   {
//     id: "accommodation",
//     title: "Accommodation (SIL/SDA)",
//     info: "Specialist housing solutions designed for comfort, safety, and 24/7 onsite support.",
//     details: ["24/7 Nursing Care", "High Physical Support", "Improved Liveability", "Community Integration"]
//   },
//   {
//     id: "nursing",
//     title: "Nursing Support",
//     info: "Clinical care delivered by registered nurses to manage complex health needs at home.",
//     details: ["Wound Management", "Medication Admin", "Post-Hospital Care", "Health Assessments"]
//   }
// ];

// export default function Services() {
//   const [openId, setOpenId] = useState(null);

//   return (
//     <div className="pt-32 pb-20 bg-white">
//       <div className="container mx-auto px-6 max-w-4xl">
//         <h1 className="text-6xl font-black tracking-tighter mb-16">Our <span className="text-seafoam-500 font-serif italic">Services.</span></h1>
        
//         <div className="space-y-4">
//           {servicesData.map((s) => (
//             <div key={s.id} className="border-b border-slate-100">
//               <button 
//                 onClick={() => setOpenId(openId === s.id ? null : s.id)}
//                 className="w-full py-8 flex justify-between items-center text-left hover:text-seafoam-600 transition-colors"
//               >
//                 <span className="text-2xl font-black tracking-tight">{s.title}</span>
//                 <ChevronDown className={`transition-transform duration-300 ${openId === s.id ? 'rotate-180' : ''}`} />
//               </button>
              
//               <AnimatePresence>
//                 {openId === s.id && (
//                   <motion.div 
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     className="overflow-hidden"
//                   >
//                     <div className="pb-8 space-y-6">
//                       <p className="text-slate-500 text-lg font-medium">{s.info}</p>
//                       <div className="grid grid-cols-2 gap-4">
//                         {s.details.map(detail => (
//                           <div key={detail} className="flex items-center gap-2 text-slate-700 font-bold text-sm">
//                             <CheckCircle2 size={16} className="text-seafoam-500" /> {detail}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>

    
        
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: "community",
    title: "In-Home & Community Support",
    info: "We provide personalized support within your home and out in the community to enhance independence.",
    details: ["Personal Care", "Meal Preparation", "Social Outings", "Household Tasks"]
  },
  {
    id: "accommodation",
    title: "Accommodation (SIL/SDA)",
    info: "Specialist housing solutions designed for comfort, safety, and 24/7 onsite support.",
    details: ["24/7 Nursing Care", "High Physical Support", "Improved Liveability", "Community Integration"]
  },
  {
    id: "nursing",
    title: "Nursing Support",
    info: "Clinical care delivered by registered nurses to manage complex health needs at home.",
    details: ["Wound Management", "Medication Admin", "Post-Hospital Care", "Health Assessments"]
  }
];

export default function Services() {
  const [openId, setOpenId] = useState("community"); // Default first one open for better UX

  return (
    <div className="pt-40 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-none">
            Our <br/><span className="text-seafoam font-serif italic">Services.</span>
          </h1>
          <p className="text-black/50 font-bold uppercase tracking-[0.3em] text-[11px] max-w-xs leading-relaxed">
            Registered NDIS provider delivering clinical excellence across Victoria.
          </p>
        </div>
        
        {/* Services Accordion List */}
        <div className="space-y-4 mb-32">
          {servicesData.map((s) => {
            const isActive = openId === s.id;
            return (
              <div 
                key={s.id} 
                className={`transition-all duration-500 rounded-[2.5rem] border ${
                  isActive 
                    ? 'bg-black border-black p-4' 
                    : 'bg-white border-slate-100 p-0 hover:border-seafoam'
                }`}
              >
                <button 
                  onClick={() => setOpenId(isActive ? null : s.id)}
                  className={`w-full py-8 px-8 flex justify-between items-center text-left transition-colors ${
                    isActive ? 'text-white' : 'text-black'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-black italic font-serif ${isActive ? 'text-seafoam' : 'text-slate-300'}`}>
                      0{servicesData.indexOf(s) + 1}
                    </span>
                    <span className="text-2xl md:text-3xl font-black tracking-tight">{s.title}</span>
                  </div>
                  <div className={`p-2 rounded-full transition-all duration-500 ${
                    isActive ? 'bg-seafoam text-black rotate-180' : 'bg-slate-50 text-slate-400'
                  }`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 space-y-8">
                        <div className="h-px bg-white/10 w-full" />
                        
                        <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                          {s.info}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {s.details.map(detail => (
                            <div 
                              key={detail} 
                              className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-2xl group hover:border-seafoam/30 transition-colors"
                            >
                              <CheckCircle2 size={18} className="text-seafoam" /> 
                              <span className="text-white font-bold text-sm tracking-wide">{detail}</span>
                            </div>
                          ))}
                        </div>

                        <Link 
                          to="/contact" 
                          className="inline-flex items-center gap-2 text-seafoam font-black text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors"
                        >
                          Enquire About This Service <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Coordination CTA */}
        <section className="bg-seafoam rounded-[3.5rem] p-12 md:p-20 text-black relative overflow-hidden shadow-2xl shadow-seafoam/20">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Zap size={200} strokeWidth={3} />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
              Not sure which <br/>support you need?
            </h2>
            <p className="text-black/70 text-lg font-bold mb-10 leading-relaxed uppercase tracking-tight">
              Our intake team can help you navigate your NDIS plan and find the right fit for your goals.
            </p>
            <Link 
              to="/contact" 
              className="bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-xl shadow-black/10"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}