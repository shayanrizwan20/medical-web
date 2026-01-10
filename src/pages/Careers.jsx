


import React from 'react';
import { Briefcase, Heart, GraduationCap, ArrowRight } from 'lucide-react';

const positions = [
  { title: "Registered Nurse (RN)", type: "Casual / Part Time", location: "Melbourne, VIC" },
  { title: "Disability Support Worker", type: "Casual", location: "South East Melbourne" },
  { title: "SIL House Manager", type: "Full Time", location: "Cranbourne, VIC" },
];

export default function Careers() {
  const openContact = (e) => {
    e?.preventDefault();
    window.dispatchEvent(new Event('open-contact'));
  };

  return (
    <div className="pt-16"> {/* Reduced pt-20 to pt-16 */}
      
      {/* 1. Hero Header - Reduced py-32 to py-20 */}
      <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam/10 blur-[120px] rounded-full -mr-20 -mt-20" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <span className="text-seafoam font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Join Our Mission</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            Work that <br/><span className="text-seafoam font-serif italic">Matters.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl font-normal leading-relaxed">
            We are looking for compassionate professionals to join our growing team in Victoria. Build a career where you actually see the impact of your work.
          </p>
        </div>
      </section>

      {/* 2. Why Join Us - Reduced py-32 to py-20 */}
      <section className="py-20 px-6 container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10"> {/* Reduced gap from 16 to 10 */}
          {[
            { icon: <Heart className="text-seafoam" size={28} />, title: "Care First", desc: "Our culture is built on empathy for both our participants and our staff." },
            { icon: <GraduationCap className="text-seafoam" size={28} />, title: "Growth", desc: "We provide ongoing training and pathways to leadership roles." },
            { icon: <Briefcase className="text-seafoam" size={28} />, title: "Flexibility", desc: "Work-life balance is a priority with flexible shift arrangements." }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="mb-5 p-3.5 bg-seafoam/10 w-fit rounded-xl group-hover:bg-seafoam transition-colors duration-500">
                <div className="group-hover:text-black transition-colors duration-500">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-black">{item.title}</h3>
              <p className="text-black/50 text-sm font-normal leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Open Positions - Reduced pb-32 to pb-20 and gap/padding */}
      <section className="pb-20 px-6 container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-8 border-b border-black/5 pb-6">
            <h2 className="text-4xl font-extrabold tracking-tighter text-black">Open <span className="text-seafoam font-serif italic text-black/40">Roles</span></h2>
            <p className="text-black/30 font-bold text-[9px] uppercase tracking-widest hidden md:block">Victoria, Australia</p>
        </div>

        <div className="space-y-3"> {/* Reduced space-y-4 to space-y-3 */}
          {positions.map((job, i) => (
            <button 
                key={i} 
                onClick={openContact}
                className="w-full text-left group flex flex-col md:flex-row md:items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] hover:bg-black transition-all duration-500 border border-transparent outline-none"
            >
              <div className="transition-all duration-500">
                  <h4 className="text-xl font-extrabold text-black group-hover:text-seafoam mb-1.5">
                      {job.title}
                  </h4>
                  <div className="flex gap-4 text-[9px] font-bold uppercase tracking-widest text-black/40 group-hover:text-white/40">
                      <span>{job.type}</span>
                      <span className="text-seafoam">•</span>
                      <span>{job.location}</span>
                  </div>
              </div>

              <div className="mt-6 md:mt-0 flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-black group-hover:text-white">
                  Apply To Role 
                  <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-seafoam group-hover:text-black transition-all duration-500">
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA - Reduced p-16 to p-12 */}
      <section className="container mx-auto px-6 pb-16">
        <div className="bg-seafoam p-12 rounded-[3rem] text-center shadow-lg shadow-seafoam/10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-black mb-6">
                Don't see the right role?
            </h2>
            <p className="text-black/60 text-xs font-bold mb-8 max-w-lg mx-auto uppercase tracking-tight">
                Send us your resume anyway! We are always growing and looking for great talent.
            </p>
            <button onClick={openContact} className="bg-black text-white px-10 py-5 rounded-xl font-extrabold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                General Application
            </button>
        </div>
      </section>
    </div>
  );
}