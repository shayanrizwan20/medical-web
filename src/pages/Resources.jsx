



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { User, Calendar, ArrowRight } from 'lucide-react';

// const blogs = [
//   { 
//     id: 1, 
//     title: "Navigating the Supported Independent Living (SIL) Process with Direct Care Assistance", 
//     author: "Admin",
//     date: "Oct 20, 2025",
//     img: "https://directcareassistance.com.au/wp-content/uploads/2025/08/Graphics-for-Social-Media-7.png",
//     link: "/resources/sil-process"
//   },
//   { 
//     id: 2, 
//     title: "Advance medical solutions for every patient's needs", 
//     author: "Admin",
//     date: "Aug 14, 2025",
//     img: "https://directcareassistance.com.au/wp-content/uploads/2025/08/image-2.png",
//     link: "/resources/medical-solutions"
//   },
//   { 
//     id: 3, 
//     title: "Understanding NDIS Plans and Community Support", 
//     author: "Admin",
//     date: "July 05, 2025",
//     img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80",
//     link: "/resources/ndis-plans"
//   }
// ];

// export default function Resources() {
//   return (
//     <div className="pt-32 pb-20 bg-white">
//       {/* --- Page Header (Matches Live Site) --- */}
//       <div className="bg-slate-50 py-20 mb-16">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900">
//             Blogs
//           </h1>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {blogs.map((post) => (
//             <div key={post.id} className="group flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
//               {/* Image Section */}
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={post.img} 
//                   alt={post.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* Content Section */}
//               <div className="p-8 flex flex-col flex-grow">
//                 {/* Meta Info */}
//                 <div className="flex items-center gap-4 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-4">
//                   <div className="flex items-center gap-1.5">
//                     <User size={14} className="text-seafoam" />
//                     By {post.author}
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <Calendar size={14} className="text-seafoam" />
//                     {post.date}
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-black leading-tight text-slate-900 mb-6 group-hover:text-seafoam transition-colors line-clamp-2">
//                   <Link to={post.link}>{post.title}</Link>
//                 </h3>

                
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  { 
    id: 1, 
    title: "Navigating the Supported Independent Living (SIL) Process with Direct Care Assistance", 
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
  return (
    <div className="pt-20 pb-20 bg-white">
      {/* --- Page Header: High Contrast & Bold --- */}
      <div className="bg-black py-24 md:py-32 mb-16 relative overflow-hidden">
        {/* Decorative Seafoam Blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam/20 blur-[120px] rounded-full -mr-20 -mt-20" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <p className="text-seafoam font-black text-[11px] uppercase tracking-[0.4em] mb-4">Latest Insights</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
            News & <br/><span className="text-seafoam font-serif italic">Blogs.</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 hover:border-seafoam/50 hover:shadow-2xl hover:shadow-seafoam/10 transition-all duration-500 overflow-hidden">
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden m-3 rounded-[2rem]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-black text-seafoam text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md">
                        NDIS Resources
                    </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-4 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-seafoam" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-seafoam" />
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black leading-tight text-black mb-6 group-hover:text-seafoam transition-colors line-clamp-3">
                  <Link to={post.link}>{post.title}</Link>
                </h3>

              
              </div>
            </div>
          ))}
        </div>

        {/* --- Newsletter/Update Section --- */}
        <div className="mt-32 bg-seafoam p-12 md:p-20 rounded-[4rem] text-black flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md text-center md:text-left">
                <h2 className="text-4xl font-black tracking-tighter leading-none mb-4">Stay updated with <br/>Direct Care.</h2>
                <p className="font-bold text-sm opacity-70">We regularly post updates regarding NDIS legislation and care standards.</p>
            </div>
            <Link to="/contact" className="bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all whitespace-nowrap">
                Contact For More Info
            </Link>
        </div>
      </div>
    </div>
  );
}
