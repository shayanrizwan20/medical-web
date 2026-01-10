


import React from 'react';
import { ArrowRight, Home as HomeIcon, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const openContact = (e) => {
    e?.preventDefault();
    window.dispatchEvent(new Event('open-contact'));
  };

  return (
    <div className="pt-12 overflow-x-hidden"> 
      
      {/* 1. Ultra-Compact Hero Section */}
      <section className="py-8 md:py-12 bg-slate-50 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="z-10 mt-0">
              <h1 className="text-5xl md:text-[6rem] font-extrabold leading-[0.85] tracking-tighter text-black mb-4">
                Better <br/>
                <span className="text-seafoam font-serif italic">Support.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 max-w-xs mb-6 font-normal leading-snug">
                Personalized NDIS care that puts your independence first. Join our community today.
              </p>
              <button 
                onClick={openContact} 
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-extrabold uppercase tracking-widest text-[10px] hover:bg-seafoam hover:text-black transition-all duration-300"
              >
                Start Journey <ArrowRight size={16} />
              </button>
            </div>

            <div className="relative mt-6 md:mt-0">
              <div className="absolute -inset-2 bg-seafoam/20 rounded-[2.5rem] rotate-1 -z-10"></div>
              <img 
                src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=800&auto=format&fit=crop&q=80" 
                alt="Medical Care" 
                className="rounded-[2.5rem] shadow-xl w-full h-[280px] md:h-[400px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. About Summary */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-extrabold tracking-tighter mb-3 italic font-serif text-seafoam">Built on Empathy.</h2>
              <p className="text-black text-base leading-relaxed mb-5 font-normal">
                Direct Care Assistance was founded on the principle that clinical excellence should be paired with genuine human connection.
              </p>
              <Link to="/WhyUs" className="text-black font-extrabold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:text-seafoam transition-colors">
                Learn More About Us <ArrowRight size={12} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80" 
                className="rounded-[2rem] shadow-lg h-[250px] w-full object-cover" 
                alt="Support Team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vacancies Section */}
      <section className="py-12 bg-seafoam mx-4 rounded-[2.5rem] px-6 text-black relative">
        <div className="container mx-auto max-w-5xl text-center z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-2">
            Available <span className="font-serif italic text-black/80">Homes.</span>
          </h2>
          <p className="text-black/70 max-w-md mx-auto font-bold uppercase tracking-widest text-[8px] mb-8">
            Explore our premium SIL and SDA vacancies.
          </p>
        
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {['Cranbourne Residence', 'Pakenham Villa'].map((home, i) => (
              <div 
                key={i} 
                className="bg-black/5 border border-black/10 p-6 rounded-[2rem] text-left group hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
              >
                <HomeIcon className="text-black mb-2 group-hover:text-seafoam transition-all duration-500" size={24} />
                <h3 className="text-lg font-extrabold">{home}</h3>
                <p className="text-black/50 group-hover:text-seafoam/70 text-[9px] mt-1 font-bold uppercase tracking-widest transition-colors">
                  Immediate Vacancy
                </p>
              </div>
            ))}
          </div>

          <Link 
            to="/vacancies" 
            className="inline-block bg-black text-seafoam px-8 py-4 rounded-xl font-extrabold uppercase tracking-widest text-[9px] hover:bg-white hover:text-black transition-all shadow-md"
          >
            View All Vacancies
          </Link>
        </div>
      </section>

      {/* 4. Careers Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-seafoam rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-black text-center md:text-left">
              <Briefcase className="text-black mb-2 mx-auto md:mx-0" size={28} />
              <h2 className="text-2xl font-extrabold tracking-tighter">Join our <span className="font-serif italic">Team.</span></h2>
              <p className="font-bold uppercase tracking-widest text-[8px] mt-1 opacity-70">Looking for passionate workers and nurses.</p>
            </div>
            <Link to="/careers" className="bg-black text-white px-8 py-4 rounded-xl font-extrabold uppercase tracking-widest text-[9px] hover:bg-white hover:text-black transition-all">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Final Contact CTA */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold tracking-tighter text-black mb-6">Need more <span className="text-seafoam font-serif italic">Info?</span></h2>
          <button onClick={openContact} className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-xl font-extrabold uppercase tracking-widest text-[9px] hover:bg-seafoam hover:text-black transition-all">
            Contact Us Today <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}