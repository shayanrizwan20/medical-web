// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { ArrowRight } from 'lucide-react';

// // export default function Careers() {
// //   return (
// //     <div className="pt-32 pb-20">
// //       <div className="container mx-auto px-6 max-w-4xl text-center">
// //         <h1 className="text-6xl font-black tracking-tighter mb-8">Join the <span className="text-seafoam-500 font-serif italic">Team.</span></h1>
// //         <p className="text-xl text-slate-500 font-medium mb-16">We are always looking for passionate Support Workers and Registered Nurses.</p>
        
// //         <div className="space-y-4 text-left">
// //           {['Support Worker', 'Registered Nurse', 'Care Coordinator'].map(job => (
// //             <div key={job} className="bg-slate-50 p-8 rounded-[2.5rem] flex justify-between items-center hover:bg-white border-2 border-transparent hover:border-seafoam-500 transition-all group">
// //               <div>
// //                 <h3 className="text-2xl font-black">{job}</h3>
// //                 <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">Full-Time / Casual • Melbourne</p>
// //               </div>
// //               <Link to="/contact" className="bg-slate-900 text-white p-4 rounded-2xl group-hover:bg-seafoam-500 transition-colors">
// //                 <ArrowRight />
// //               </Link>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }












// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Briefcase, Heart, GraduationCap, ArrowRight } from 'lucide-react';

// const positions = [
//   { title: "Registered Nurse (RN)", type: "Casual / Part Time", location: "Melbourne, VIC" },
//   { title: "Disability Support Worker", type: "Casual", location: "South East Melbourne" },
//   { title: "SIL House Manager", type: "Full Time", location: "Cranbourne, VIC" },
// ];

// export default function Careers() {
//   return (
//     <div className="pt-32">
//       {/* Hero Header */}
//       <section className="bg-slate-900 text-white py-32 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <span className="text-seafoam font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Join Our Mission</span>
//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
//             Work that <br/><span className="text-seafoam font-serif italic font-light">Matters.</span>
//           </h1>
//           <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">
//             We are looking for compassionate professionals to join our growing team in Victoria. Build a career where you actually see the impact of your work.
//           </p>
//         </div>
//       </section>

//       {/* Why Join Us */}
//       <section className="py-32 px-6 container mx-auto max-w-6xl">
//         <div className="grid md:grid-cols-3 gap-16">
//           {[
//             { icon: <Heart className="text-seafoam" />, title: "Care First", desc: "Our culture is built on empathy for both our participants and our staff." },
//             { icon: <GraduationCap className="text-seafoam" />, title: "Growth", desc: "We provide ongoing training and pathways to leadership roles." },
//             { icon: <Briefcase className="text-seafoam" />, title: "Flexibility", desc: "Work-life balance is a priority with flexible shift arrangements." }
//           ].map((item, i) => (
//             <div key={i}>
//               <div className="mb-6">{item.icon}</div>
//               <h3 className="text-2xl font-black mb-4">{item.title}</h3>
//               <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section className="pb-32 px-6 container mx-auto max-w-6xl">
//         <h2 className="text-4xl font-black mb-12 tracking-tight text-slate-900">Open <span className="text-seafoam">Positions</span></h2>
//         <div className="space-y-4">
//           {positions.map((job, i) => (
//             <Link key={i} to="/contact" className="group flex flex-col md:flex-row md:items-center justify-between p-10 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-seafoam/10 transition-all border border-transparent hover:border-slate-100">
//               <div>
//                 <h4 className="text-2xl font-black text-slate-900 mb-1">{job.title}</h4>
//                 <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
//                   <span>{job.type}</span>
//                   <span className="text-seafoam">•</span>
//                   <span>{job.location}</span>
//                 </div>
//               </div>
//               <div className="mt-6 md:mt-0 flex items-center gap-4 font-black text-[10px] uppercase tracking-widest text-slate-900">
//                 Apply Now <ArrowRight size={18} className="text-seafoam group-hover:translate-x-2 transition-transform" />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Heart, GraduationCap, ArrowRight } from 'lucide-react';

const positions = [
  { title: "Registered Nurse (RN)", type: "Casual / Part Time", location: "Melbourne, VIC" },
  { title: "Disability Support Worker", type: "Casual", location: "South East Melbourne" },
  { title: "SIL House Manager", type: "Full Time", location: "Cranbourne, VIC" },
];

export default function Careers() {
  return (
    <div className="pt-20">
      {/* 1. Hero Header - Bold Black Background */}
      <section className="bg-black text-white py-32 px-6 relative overflow-hidden">
        {/* Subtle Brand Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam/10 blur-[120px] rounded-full -mr-20 -mt-20" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <span className="text-seafoam font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">Join Our Mission</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
            Work that <br/><span className="text-seafoam font-serif italic">Matters.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl font-medium leading-relaxed">
            We are looking for compassionate professionals to join our growing team in Victoria. Build a career where you actually see the impact of your work.
          </p>
        </div>
      </section>

      {/* 2. Why Join Us - High Contrast Grid */}
      <section className="py-32 px-6 container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-16">
          {[
            { icon: <Heart className="text-seafoam" size={32} />, title: "Care First", desc: "Our culture is built on empathy for both our participants and our staff." },
            { icon: <GraduationCap className="text-seafoam" size={32} />, title: "Growth", desc: "We provide ongoing training and pathways to leadership roles." },
            { icon: <Briefcase className="text-seafoam" size={32} />, title: "Flexibility", desc: "Work-life balance is a priority with flexible shift arrangements." }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="mb-6 p-4 bg-seafoam/10 w-fit rounded-2xl group-hover:bg-seafoam transition-colors duration-500">
                <div className="group-hover:text-black transition-colors duration-500">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 text-black">{item.title}</h3>
              <p className="text-black/50 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Open Positions - Clean Cards with Hover Interaction */}
      <section className="pb-32 px-6 container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12 border-b border-black/5 pb-8">
            <h2 className="text-5xl font-black tracking-tighter text-black">Open <span className="text-seafoam font-serif italic text-black/40">Roles</span></h2>
            <p className="text-black/30 font-black text-[10px] uppercase tracking-widest hidden md:block">Victoria, Australia</p>
        </div>

        <div className="space-y-4">
          {positions.map((job, i) => (
            <Link 
                key={i} 
                to="/contact" 
                className="group flex flex-col md:flex-row md:items-center justify-between p-10 bg-slate-50 rounded-[3rem] hover:bg-black transition-all duration-500 border border-transparent"
            >
              <div className="transition-all duration-500">
                <h4 className="text-2xl font-black text-black group-hover:text-seafoam mb-2">{job.title}</h4>
                <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-black/40 group-hover:text-white/40">
                  <span>{job.type}</span>
                  <span className="text-seafoam">•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex items-center gap-4 font-black text-[11px] uppercase tracking-widest text-black group-hover:text-white">
                Apply To Role 
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-seafoam group-hover:text-black transition-all duration-500">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA - Inverted Color block */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-seafoam p-16 rounded-[4rem] text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-8">
                Don't see the right role?
            </h2>
            <p className="text-black/60 font-bold mb-10 max-w-lg mx-auto uppercase tracking-tighter">
                Send us your resume anyway! We are always growing and looking for great talent.
            </p>
            <Link to="/contact" className="bg-black text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                General Application
            </Link>
        </div>
      </section>
    </div>
  );
}