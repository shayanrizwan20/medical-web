
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Heart, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const openContact = (e) => {
    e?.preventDefault();
    window.dispatchEvent(new Event('open-contact'));
  };

  return (
    // Reduced top padding from pt-40 to pt-28
    <div className="pt-28 pb-16 bg-white selection:bg-seafoam/30">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* --- Hero Section --- */}
        {/* Reduced bottom margin from mb-32 to mb-20 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // Reduced height from h-[600px] to h-[500px]
            className="rounded-[3rem] shadow-2xl h-[500px] overflow-hidden border-4 border-seafoam/10"
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
            {/* Font weight reduced to font-extrabold */}
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-[1] text-black">
              Built for <br/><span className="text-seafoam font-serif italic">You.</span>
            </h2>
            {/* Font weight reduced to font-normal */}
            <p className="text-black/60 text-lg leading-relaxed mb-8 font-normal">
              Direct Care Assistance was founded on the principle that clinical excellence should be paired with genuine human connection. We don't just provide care; we build communities.
            </p>
            
            <div className="space-y-3">
              <div className="flex gap-5 p-6 bg-seafoam/10 rounded-[2rem] border border-seafoam/20 items-center">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center font-extrabold text-seafoam shadow-lg text-lg italic font-serif">
                  1
                </div>
                <div>
                  <p className="font-bold text-black text-base">Our Mission</p>
                  <p className="text-[10px] text-black/40 uppercase font-bold tracking-widest">Independence & Dignity For All</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Core Values --- */}
        {/* Reduced py-24 to py-16 and mb-32 to mb-20 */}
        <section className="py-16 bg-seafoam mx-[-1rem] md:mx-0 rounded-[3rem] px-10 mb-20 shadow-xl shadow-seafoam/10 text-black">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-extrabold tracking-tighter">Our Living <span className="font-serif italic text-black/70">Values.</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={24} />, title: "Integrity", desc: "We are honest, ethical and transparent in every interaction." },
              { icon: <Heart size={24} />, title: "Compassion", desc: "We treat every participant with genuine warmth and respect." },
              { icon: <Target size={24} />, title: "Excellence", desc: "We strive for the highest standards in clinical support." }
            ].map((value, i) => (
              <div key={i} className="bg-black/5 p-7 rounded-[2rem] border border-black/5 group hover:bg-black transition-all duration-500">
                <div className="text-black mb-4 group-hover:text-seafoam transition-colors">{value.icon}</div>
                <h4 className="text-xl font-extrabold mb-2 tracking-tight group-hover:text-white transition-colors">{value.title}</h4>
                <p className="text-black/70 text-sm font-normal leading-relaxed group-hover:text-white/60 transition-colors">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Leadership --- */}
        <div className="mb-20">
          <h3 className="text-center text-4xl font-extrabold mb-12 tracking-tighter text-black">Our <span className="text-seafoam font-serif italic">Leadership.</span></h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group flex flex-col md:flex-row items-center gap-6 p-8 bg-black text-white rounded-[2.5rem] transition-all hover:scale-[1.01] duration-500">
              <div className="w-32 h-32 bg-gray-800 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Manager" />
              </div>
              <div>
                <p className="text-xl font-extrabold group-hover:text-seafoam transition-colors">Operations Manager</p>
                <p className="text-seafoam/70 font-bold text-[9px] uppercase tracking-[0.3em] mt-1">Strategic Coordination</p>
                <p className="text-white/40 text-xs mt-2 font-normal">Ensuring excellence in every care plan across Victoria.</p>
              </div>
            </div>

            <div className="group flex flex-col md:flex-row items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200 transition-all hover:bg-white hover:shadow-xl hover:border-transparent hover:scale-[1.01] duration-500">
              <div className="w-32 h-32 bg-gray-200 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Lead" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-black">Clinical Lead</p>
                <p className="text-seafoam font-bold text-[9px] uppercase tracking-[0.3em] mt-1">Nursing Excellence</p>
                <p className="text-black/40 text-xs mt-2 font-normal">Leading our specialized nursing and health support team.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Join Team CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-16 bg-black text-white rounded-[3rem] text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-seafoam/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter leading-[1]">
              Ready to join <br/>our <span className="text-seafoam font-serif italic">Community?</span>
            </h2>
            
            <p className="text-white/50 text-base font-normal mb-10 max-w-lg mx-auto leading-relaxed">
              We welcome partners in care. If you are a passionate nurse or support worker, let’s build something meaningful together.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {[
                { label: 'Flexible Shifts', icon: '✨' },
                { label: 'Competitive Pay', icon: '💰' },
                { label: 'Growth Paths', icon: '📈' },
                { label: 'Supportive Team', icon: '🤝' }
              ].map((benefit, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <div className="text-lg mb-1">{benefit.icon}</div>
                  <div className="text-[9px] font-bold uppercase tracking-tight text-white/60">{benefit.label}</div>
                </div>
              ))}
            </div>
            
            <button
              onClick={openContact}
              className="inline-flex items-center gap-3 bg-seafoam text-black px-10 py-5 rounded-xl font-extrabold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg group"
            >
              Apply To Join Us 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}