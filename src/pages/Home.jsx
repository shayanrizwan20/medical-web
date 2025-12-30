


// import React from 'react';
// import { ArrowRight, Heart, Shield, Star, Home as HomeIcon, Briefcase } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div className="pt-20">
//       {/* 1. Refined Hero Section with Image */}
//       <section className="py-20 md:py-32 bg-slate-50 px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-6xl md:text-[8rem] font-black leading-[0.8] tracking-tighter text-slate-900 mb-10">
//                 Better <br/><span className="text-seafoam font-serif italic">Support.</span>
//               </h1>
//               <p className="text-xl text-slate-500 max-w-md mb-10 font-medium leading-relaxed">
//                 Personalized NDIS care that puts your independence first. Join our community today.
//               </p>
//               <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-seafoam transition-all">
//                 Start Journey <ArrowRight size={20} />
//               </Link>
//             </div>
//             <div className="relative">
//               <div className="absolute -inset-4 bg-seafoam/10 rounded-[4rem] rotate-3 -z-10"></div>
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D" 
//                 alt="medical care" 
//                 className="rounded-[3.5rem] shadow-2xl w-full h-[500px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. About Us Summary */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="order-2 md:order-1">
//               <h2 className="text-5xl font-black tracking-tighter mb-6 italic font-serif text-seafoam">Built on Empathy.</h2>
//               <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
//                 Direct Care Assistance was founded on the principle that clinical excellence should be paired with genuine human connection.
//               </p>
//               <Link to="/aboutus" className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-seafoam transition-colors">
//                 Learn More About Us <ArrowRight size={14} />
//               </Link>
//             </div>
//             <div className="order-1 md:order-2">
//               <img 
//                 src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80" 
//                 className="rounded-[3rem] shadow-xl h-[400px] w-full object-cover" 
//                 alt="Support Team" 
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. Vacancies Summary */}
//       <section className="py-24 bg-slate-900 mx-4 rounded-[4rem] px-6 text-white">
//         <div className="container mx-auto max-w-6xl text-center">
//             <h2 className="text-5xl font-black tracking-tighter mb-4">Available <span className="text-seafoam font-serif italic">Homes.</span></h2>
//             <p className="text-slate-400 max-w-md mx-auto font-medium mb-12">Explore our premium SIL and SDA accommodation vacancies available right now.</p>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {['Cranbourne Residence', 'Pakenham Villa'].map((home, i) => (
//               <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-left group hover:bg-white/10 transition-all">
//                 <HomeIcon className="text-seafoam mb-4" size={32} />
//                 <h3 className="text-2xl font-black">{home}</h3>
//                 <p className="text-slate-500 text-sm mt-2">Immediate Vacancy Available</p>
//               </div>
//             ))}
//           </div>
//           <Link to="/vacancies" className="inline-block bg-seafoam text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
//             View All Vacancies
//           </Link>
//         </div>
//       </section>

//       {/* 4. Careers Summary */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="bg-seafoam/10 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10">
//             <div>
//               <Briefcase className="text-seafoam mb-4" size={40} />
//               <h2 className="text-4xl font-black tracking-tighter">Join our <span className="font-serif italic">Team.</span></h2>
//               <p className="text-slate-600 font-medium mt-2">We are looking for passionate workers and nurses.</p>
//             </div>
//             <Link to="/careers" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-seafoam transition-all">
//               Apply Now
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 5. Final Contact CTA */}
//       <section className="py-24 text-center">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black tracking-tighter mb-10">Need more <span className="text-seafoam font-serif italic">Info?</span></h2>
//           <Link to="/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-seafoam transition-all shadow-xl">
//             Contact Us Today <ArrowRight size={24} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }









import React from 'react';
import { ArrowRight, Home as HomeIcon, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="py-20 md:py-32 bg-slate-50 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter text-black mb-10">
                Better <br/><span className="text-seafoam font-serif italic">Support.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-md mb-10 font-medium leading-relaxed">
                Personalized NDIS care that puts your independence first. Join our community today.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-seafoam hover:text-black transition-all duration-300">
                Start Journey <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              {/* Mint Glow Background */}
              <div className="absolute -inset-4 bg-seafoam/20 rounded-[4rem] rotate-3 -z-10"></div>
              <img 
                src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=800&auto=format&fit=crop&q=80" 
                alt="Medical Care" 
                className="rounded-[3.5rem] shadow-2xl w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Summary */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl font-black tracking-tighter mb-6 italic font-serif text-seafoam">Built on Empathy.</h2>
              <p className="text-black text-lg leading-relaxed mb-8 font-medium">
                Direct Care Assistance was founded on the principle that clinical excellence should be paired with genuine human connection.
              </p>
              <Link to="/WhyUs" className="text-black font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-seafoam transition-colors">
                Learn More About Us <ArrowRight size={14} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80" 
                className="rounded-[3rem] shadow-xl h-[400px] w-full object-cover" 
                alt="Support Team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vacancies - Dark Theme with Mint Accents */}
      {/* <section className="py-24 bg-black mx-4 rounded-[4rem] px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-seafoam/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
            <h2 className="text-5xl font-black tracking-tighter mb-4">Available <span className="text-seafoam font-serif italic">Homes.</span></h2>
            <p className="text-slate-400 max-w-md mx-auto font-medium mb-12">Explore our premium SIL and SDA accommodation vacancies available right now.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {['Cranbourne Residence', 'Pakenham Villa'].map((home, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-left group hover:border-seafoam/50 transition-all cursor-pointer">
                <HomeIcon className="text-seafoam mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-2xl font-black group-hover:text-seafoam transition-colors">{home}</h3>
                <p className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest">Immediate Vacancy</p>
              </div>
            ))}
          </div>
          <Link to="/vacancies" className="inline-block bg-seafoam text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
            View All Vacancies
          </Link>
        </div>
      </section> */}

      <section className="py-24 bg-seafoam mx-4 rounded-[4rem] px-6 text-black overflow-hidden relative">
  {/* Subtler dark glow for depth */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 blur-[100px] rounded-full"></div>
  
  <div className="container mx-auto max-w-6xl text-center relative z-10">
    <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
      Available <span className="font-serif italic text-black/80">Homes.</span>
    </h2>
    <p className="text-black/70 max-w-md mx-auto font-bold uppercase tracking-widest text-[11px] mb-12">
      Explore our premium SIL and SDA accommodation vacancies available right now.
    </p>
  
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {['Cranbourne Residence', 'Pakenham Villa'].map((home, i) => (
        <div 
          key={i} 
          className="bg-black/5 border border-black/10 p-10 rounded-[3rem] text-left group hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
        >
          {/* Icon switches from black to seafoam on hover */}
          <HomeIcon className="text-black mb-4 group-hover:text-seafoam group-hover:scale-110 transition-all duration-500" size={32} />
          <h3 className="text-2xl font-black">{home}</h3>
          <p className="text-black/50 group-hover:text-seafoam/70 text-sm mt-2 font-bold uppercase tracking-widest transition-colors">
            Immediate Vacancy Available
          </p>
        </div>
      ))}
    </div>

    {/* Button is now black with seafoam text to stand out against the seafoam background */}
    <Link 
      to="/vacancies" 
      className="inline-block bg-black text-seafoam px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-xl shadow-black/10"
    >
      View All Vacancies
    </Link>
  </div>
</section>

      {/* 4. Careers - Mint Card with Black Button */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-seafoam rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-black">
              <Briefcase className="text-black mb-4" size={40} />
              <h2 className="text-4xl font-black tracking-tighter">Join our <span className="font-serif italic">Team.</span></h2>
              <p className="font-bold uppercase tracking-widest text-[10px] mt-2 opacity-70">We are looking for passionate workers and nurses.</p>
            </div>
            <Link to="/careers" className="bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Final Contact CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black tracking-tighter text-black mb-10">Need more <span className="text-seafoam font-serif italic">Info?</span></h2>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-seafoam hover:text-black transition-all shadow-2xl shadow-seafoam/20">
            Contact Us Today <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}