



import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Vacancies() {
  const [filter, setFilter] = useState('All');
  
  const openContact = (e) => {
    e?.preventDefault();
    window.dispatchEvent(new Event('open-contact'));
  };

  const houses = [
    { name: "Brighton Suite", type: "SIL", location: "Brighton, VIC", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
    { name: "Cranbourne Villa", type: "SDA", location: "Cranbourne, VIC", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
    { name: "Pakenham Manor", type: "SIL", location: "Pakenham, VIC", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" },
    { name: "Berwick Garden", type: "SDA", location: "Berwick, VIC", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80" },
    { name: "Frankston House", type: "SIL", location: "Frankston, VIC", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80" },
    { name: "Mornington Retreat", type: "SDA", location: "Mornington, VIC", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80" }
  ];

  const filtered = filter === 'All' ? houses : houses.filter(h => h.type === filter);

  return (
    <div className="pt-24 pb-16 px-6 container mx-auto max-w-6xl">
      {/* Header & Filter Controls - Reduced mb-16 to mb-10 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-4">
            Available <br/><span className="text-seafoam font-serif italic">Vacancies.</span>
          </h1>
          <p className="text-slate-400 font-normal text-sm max-w-sm leading-relaxed">
            Premium SIL and SDA accommodations designed for independence, safety, and comfort.
          </p>
        </div>

        {/* Filter Bar - Tightened padding and shadows */}
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100">
          <select 
            onChange={(e) => setFilter(e.target.value)} 
            value={filter}
            className="pl-4 pr-8 py-3 rounded-xl bg-slate-50 font-bold text-[9px] uppercase tracking-widest outline-none border-none cursor-pointer hover:bg-slate-100 transition-colors appearance-none"
          >
            <option value="All">All Types</option>
            <option value="SIL">SIL Accommodation</option>
            <option value="SDA">SDA Housing</option>
          </select>
          
          <button 
            onClick={() => setFilter('All')} 
            className="px-6 py-3 rounded-xl font-bold text-[9px] uppercase tracking-widest transition-all bg-black text-white hover:bg-seafoam hover:text-black shadow-md"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Property Grid - Reduced gap-12 to gap-8 */}
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((house, i) => (
          <div key={i} className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500">
            {/* Image Wrap - Reduced height */}
            <div className="h-[320px] md:h-[350px] overflow-hidden relative">
              <img 
                src={house.img} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" 
                alt={house.name}
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full font-bold text-[9px] uppercase tracking-widest text-seafoam shadow-sm border border-seafoam/10">
                  {house.type} Available
                </span>
              </div>
            </div>

            {/* Details wrap - Reduced padding from p-10 to p-8 */}
            <div className="p-8 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 text-slate-400 mb-1.5">
                  <MapPin size={12} className="text-seafoam" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">{house.location}</span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-black">{house.name}</h3>
              </div>
              
              <button
                onClick={openContact}
                className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-seafoam hover:text-black hover:rotate-45 transition-all duration-500 shadow-lg shadow-black/5"
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Fallback */}
      {filtered.length === 0 && (
        <div className="text-center py-32">
          <h3 className="text-xl font-extrabold text-slate-300">No vacancies match your search.</h3>
          <button onClick={() => setFilter('All')} className="mt-2 text-seafoam font-bold uppercase tracking-widest text-[10px] underline decoration-2 underline-offset-4">
            View all listings
          </button>
        </div>
      )}
    </div>
  );
}