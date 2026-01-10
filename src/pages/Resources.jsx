





import React from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  { 
    id: 1, 
    title: "Navigating the Supported Independent Living (SIL) Process", 
    author: "Admin",
    date: "Oct 20, 2025",
    img: "https://directcareassistance.com.au/wp-content/uploads/2025/08/Graphics-for-Social-Media-7.png",
    link: "/resources/sil-process"
  },
  { 
    id: 2, 
    title: "Advance medical solutions for every patient's needs", 
    author: "Admin",
    date: "Aug 14, 2025",
    img: "https://directcareassistance.com.au/wp-content/uploads/2025/08/image-2.png",
    link: "/resources/medical-solutions"
  },
  { 
    id: 3, 
    title: "Understanding NDIS Plans and Community Support", 
    author: "Admin",
    date: "July 05, 2025",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80",
    link: "/resources/ndis-plans"
  }
];

export default function Resources() {
  const openContact = (e) => {
    e?.preventDefault();
    window.dispatchEvent(new Event('open-contact'));
  };
  return (
    <div className="pt-16 pb-16 bg-white">
      {/* --- Page Header: Reduced py-32 to py-16 --- */}
      <div className="bg-black py-16 md:py-20 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-seafoam/10 blur-[100px] rounded-full -mr-20 -mt-20" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <p className="text-seafoam font-bold text-[10px] uppercase tracking-[0.4em] mb-3">Latest Insights</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[0.9]">
            News & <br/><span className="text-seafoam font-serif italic">Blogs.</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Tightened gap from 8 to 6 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <div key={post.id} className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 hover:border-seafoam/30 hover:shadow-xl transition-all duration-500 overflow-hidden">
              
              {/* Image Section: Reduced height to h-60 */}
              <div className="relative h-60 overflow-hidden m-2.5 rounded-[1.5rem]">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 z-20">
                    <span className="bg-black/80 text-seafoam text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm">
                        NDIS Resources
                    </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 pt-2 flex flex-col flex-grow">
                {/* Meta Info: Lighter font weight */}
                <div className="flex items-center gap-4 text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1.5">
                    <User size={12} className="text-seafoam" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-seafoam" />
                    {post.date}
                  </div>
                </div>

                {/* Title: Reduced from text-2xl to text-xl */}
                <h3 className="text-xl font-extrabold leading-tight text-black group-hover:text-seafoam transition-colors line-clamp-2">
                  <Link to={post.link}>{post.title}</Link>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* --- Update Section: Reduced padding and mt-32 to mt-20 --- */}
        <div className="mt-20 bg-seafoam p-10 md:p-14 rounded-[3rem] text-black flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg shadow-seafoam/5">
            <div className="max-w-md text-center md:text-left">
                <h2 className="text-3xl font-extrabold tracking-tighter leading-tight mb-3">Stay updated with <br/>Direct Care.</h2>
                <p className="font-normal text-xs text-black/70">We regularly post updates regarding NDIS legislation and care standards.</p>
            </div>
            <button onClick={openContact} className="bg-black text-white px-8 py-4 rounded-xl font-extrabold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                Get In Touch
            </button>
        </div>
      </div>
    </div>
  );
}