


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

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
  const [openId, setOpenId] = useState("community"); 
  const openContact = (e) => {
    e?.preventDefault();
    window.dispatchEvent(new Event('open-contact'));
  };

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Section - Reduced mb-20 to mb-12 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black leading-[0.9]">
            Our <br/><span className="text-seafoam font-serif italic">Services.</span>
          </h1>
          <p className="text-black/50 font-bold uppercase tracking-[0.2em] text-[10px] max-w-xs leading-relaxed">
            Registered NDIS provider delivering clinical excellence across Victoria.
          </p>
        </div>
        
        {/* Services Accordion List - Reduced mb-32 to mb-20 */}
        <div className="space-y-3 mb-20">
          {servicesData.map((s) => {
            const isActive = openId === s.id;
            return (
              <div 
                key={s.id} 
                className={`transition-all duration-500 rounded-[2rem] border ${
                  isActive 
                    ? 'bg-black border-black p-3' 
                    : 'bg-white border-slate-100 p-0 hover:border-seafoam/50'
                }`}
              >
                <button 
                  onClick={() => setOpenId(isActive ? null : s.id)}
                  className={`w-full py-6 px-7 flex justify-between items-center text-left transition-colors ${
                    isActive ? 'text-white' : 'text-black'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`text-xs font-bold italic font-serif ${isActive ? 'text-seafoam' : 'text-slate-300'}`}>
                      0{servicesData.indexOf(s) + 1}
                    </span>
                    <span className="text-xl md:text-2xl font-extrabold tracking-tight">{s.title}</span>
                  </div>
                  <div className={`p-1.5 rounded-full transition-all duration-500 ${
                    isActive ? 'bg-seafoam text-black rotate-180' : 'bg-slate-50 text-slate-400'
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-8 space-y-6">
                        <div className="h-px bg-white/10 w-full" />
                        
                        <p className="text-white/60 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
                          {s.info}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {s.details.map(detail => (
                            <div 
                              key={detail} 
                              className="flex items-center gap-3 bg-white/5 border border-white/5 p-3.5 rounded-xl group hover:border-seafoam/20 transition-colors"
                            >
                              <CheckCircle2 size={16} className="text-seafoam" /> 
                              <span className="text-white font-bold text-[11px] uppercase tracking-wide">{detail}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={openContact}
                          className="inline-flex items-center gap-2 text-seafoam font-bold text-[9px] uppercase tracking-[0.3em] hover:text-white transition-colors"
                        >
                          Enquire About This Service <ArrowRight size={12} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Coordination CTA - Reduced p-20 to p-12 */}
        <section className="bg-seafoam rounded-[3rem] p-10 md:p-14 text-black relative overflow-hidden shadow-xl shadow-seafoam/10">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Zap size={180} strokeWidth={3} />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 leading-tight">
              Not sure which <br/>support you need?
            </h2>
            <p className="text-black/70 text-base font-bold mb-8 leading-relaxed uppercase tracking-tighter">
              Our intake team can help you navigate your NDIS plan and find the right fit for your goals.
            </p>
            <button
              onClick={openContact}
              className="bg-black text-white px-8 py-4 rounded-xl font-extrabold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all shadow-lg"
            >
              Get a Free Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}