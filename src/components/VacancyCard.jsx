import React from 'react';
import { MapPin, Bed, Bath, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VacancyCard({ name, type, location, img }) {
  return (
    <div className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:shadow-seafoam/10">
      <div className="h-72 overflow-hidden relative">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-seafoam">{type} Available</span>
        </div>
      </div>
      
      <div className="p-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-2">{name}</h3>
            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
              <MapPin size={16} className="text-seafoam" /> {location}
            </div>
          </div>
          <Link to="/contact" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-seafoam transition-colors">
            <ArrowUpRight size={20} />
          </Link>
        </div>
        
        <div className="flex gap-6 pt-6 border-t border-gray-50">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
            <Bed size={16} /> 1-2 Rooms
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
            <Bath size={16} /> Accessible
          </div>
        </div>
      </div>
    </div>
  );
}