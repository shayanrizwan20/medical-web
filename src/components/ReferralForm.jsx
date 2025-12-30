import React, { useState } from 'react';

export default function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-12 text-center">
        <div className="w-20 h-20 bg-seafoam/10 text-seafoam rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
        <p className="text-slate-500 font-medium">Thank you for reaching out. Our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-10 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
          <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-seafoam outline-none transition-all font-medium" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
          <input required type="email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-seafoam outline-none transition-all font-medium" placeholder="john@example.com" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Service Required</label>
        <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-seafoam outline-none transition-all font-black text-xs uppercase tracking-widest">
          <option>In-Home Support</option>
          <option>Accommodation (SIL/SDA)</option>
          <option>Community Nursing</option>
          <option>Employment / Careers</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
        <textarea rows="4" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-seafoam outline-none transition-all font-medium" placeholder="How can we help you?"></textarea>
      </div>

      <button type="submit" className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black uppercase tracking-widest hover:bg-seafoam transition-all shadow-xl shadow-slate-900/10">
        Submit Inquiry
      </button>
    </form>
  );
}