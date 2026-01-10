
import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Mail, Phone, Send, MapPin } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact', handleOpen);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('open-contact', handleOpen);
  }, [isOpen]);

  return (
    <>
      {/* 1. DRAWER OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. SLIDE-UP DRAWER */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[250] bg-white rounded-t-[3.5rem] shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: '90vh', overflowY: 'auto' }}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-3 bg-black text-white rounded-full z-[260] hover:scale-110 transition-transform"
        >
          <X size={20} />
        </button>

        <div className="container mx-auto max-w-6xl px-6 pt-20 pb-12">
          {/* Top Section: Form and Text */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-7xl font-black tracking-tighter leading-[0.9] mb-8">
                Let's <br/><span className="text-seafoam font-serif italic">Connect.</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 font-black mb-1">Phone</p>
                  <p className="text-2xl font-bold tracking-tight">1300 000000</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 font-black mb-1">Email</p>
                  <p className="text-2xl font-bold tracking-tight">Medicalcare@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-10 rounded-[3rem] shadow-2xl">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-seafoam transition-colors" />
                  <input type="text" placeholder="Phone" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-seafoam transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-seafoam transition-colors" />
                <textarea placeholder="How can we help you?" rows="3" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-seafoam resize-none transition-colors"></textarea>
                <button className="w-full bg-seafoam text-black font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-colors">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section: Map */}
          <div className="rounded-[3rem] overflow-hidden bg-slate-100 border border-black/5 relative min-h-[400px]">
            <div className="grid lg:grid-cols-3 h-full min-h-[400px]">
              {/* Address Sidebar on Map */}
              <div className="p-12 flex flex-col justify-center bg-white">
                <MapPin className="text-seafoam mb-4" size={32} />
                <h4 className="text-xl font-black uppercase tracking-tight mb-4">Our Head Office</h4>
                <p className="text-lg text-black/60 leading-relaxed font-medium">
                  Suite 4, Level 1<br />
                  10-14 Market Lane<br />
                  USA</p>
                <a 
                  href="https://www.google.com/maps/dir//10-14+Market+Ln,+Pakenham+VIC+3810/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-8 text-[11px] font-black uppercase tracking-widest text-seafoam hover:text-black transition-colors"
                >
                  Get Directions →
                </a>
              </div>

              {/* Interactive Google Map */}
              <div className="lg:col-span-2 h-[400px] lg:h-full grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  title="Medical Care Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.564553256133!2d145.48175247672223!3d-38.057161971914944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad617300300665b%3A0xc07c9751e3309e3!2s10-14%20Market%20Ln%2C%20Pakenham%20VIC%203810!5e0!3m2!1sen!2sau!4v1709214561000!5m2!1sen!2sau" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE STICKY BUTTON */}
      <div className="fixed bottom-10 right-10 z-[100]">
        <button 
          onClick={() => setIsOpen(true)}
          className={`group flex items-center gap-3 bg-seafoam text-black px-8 py-5 rounded-full shadow-2xl transition-all duration-500 hover:pr-10 active:scale-95 ${
            isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">
            Contact Us
          </span>
          {/* <MessageSquare size={18} className="transition-transform group-hover:rotate-12" /> */}
        </button>
      </div>
    </>
  );
}