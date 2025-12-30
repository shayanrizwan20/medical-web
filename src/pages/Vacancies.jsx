


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Vacancies() {
  const [filter, setFilter] = useState('All');

  const houses = [
    { name: "Brighton Suite", type: "SIL", location: "Brighton, VIC", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
    { name: "Cranbourne Villa", type: "SDA", location: "Cranbourne, VIC", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
    { name: "Pakenham Manor", type: "SIL", location: "Pakenham, VIC", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" },
    { name: "Berwick Garden", type: "SDA", location: "Berwick, VIC", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80" },
    { name: "Frankston House", type: "SIL", location: "Frankston, VIC", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80" },
    { name: "Mornington Retreat", type: "SDA", location: "Mornington, VIC", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80" },
    { name: "Dandenong Rise", type: "SIL", location: "Dandenong, VIC", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80" },
    { name: "Clayton Courtyard", type: "SDA", location: "Clayton, VIC", img: "https://images.unsplash.com/photo-1592595820565-62b08888523c?auto=format&fit=crop&q=80" }
  ];

  const filtered = filter === 'All' ? houses : houses.filter(h => h.type === filter);

  return (
    <div className="pt-40 pb-20 px-6 container mx-auto">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4">
            Available <br/><span className="text-seafoam font-serif italic">Vacancies.</span>
          </h1>
          <p className="text-slate-400 font-medium max-w-md">Discover premium SIL and SDA accommodations designed for independence and comfort.</p>
        </div>

        <div className="flex items-center gap-3 bg-white p-2 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <select 
            onChange={(e) => setFilter(e.target.value)} 
            value={filter}
            className="p-4 rounded-2xl bg-slate-50 font-black text-[10px] uppercase tracking-widest outline-none border-none cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <option value="All">All Types</option>
            <option value="SIL">SIL Accommodation</option>
            <option value="SDA">SDA Housing</option>
          </select>
          
          <button 
            onClick={() => setFilter('All')} 
            className="px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all bg-slate-900 text-white hover:bg-seafoam active:scale-95 shadow-lg shadow-slate-900/20"
          >
            Clear Filter
          </button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
        {filtered.map((house, i) => (
          <div key={i} className="group relative bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
            {/* Image Wrap */}
            <div className="h-[450px] overflow-hidden relative">
              <img 
                src={house.img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                alt={house.name}
              />
              <div className="absolute top-8 left-8">
                <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest text-seafoam shadow-sm">
                  {house.type} Available
                </span>
              </div>
            </div>

            {/* Details wrap */}
            <div className="p-10 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <MapPin size={14} className="text-seafoam" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{house.location}</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-slate-900">{house.name}</h3>
              </div>
              
              <Link 
                to="/contact" 
                className="w-16 h-16 bg-slate-900 text-white rounded-[1.5rem] flex items-center justify-center hover:bg-seafoam hover:rotate-45 transition-all duration-500"
              >
                <ArrowUpRight size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Fallback */}
      {filtered.length === 0 && (
        <div className="text-center py-40">
          <h3 className="text-2xl font-black text-slate-300">No vacancies match your search.</h3>
          <button onClick={() => setFilter('All')} className="mt-4 text-seafoam font-black uppercase tracking-widest text-xs underline">View all listings</button>
        </div>
      )}
    </div>
  );
}