// import React from 'react';

// export default function Privacy() {
//   return (
//     <div className="pt-40 pb-20 px-6">
//       <div className="container mx-auto max-w-3xl">
//         <h1 className="text-4xl font-black tracking-tighter mb-10">Privacy <span className="text-seafoam font-serif italic">Policy.</span></h1>
//         <div className="prose prose-slate max-w-none space-y-6 text-slate-600 font-medium leading-relaxed">
//           <p>Direct Care Assistance is committed to protecting your privacy and personal information in accordance with the Privacy Act 1988 (Cth).</p>
//           <h3 className="text-xl font-black text-slate-900 mt-8">1. Information Collection</h3>
//           <p>We collect personal information that is necessary for us to provide you with disability support services and to manage our relationship with you.</p>
//           <h3 className="text-xl font-black text-slate-900 mt-8">2. Data Security</h3>
//           <p>We take all reasonable steps to protect your personal information from misuse, loss, and unauthorized access.</p>
//         </div>
//       </div>
//     </div>
//   );
// }




import React from 'react';

export default function Privacy() {
  return (
    <div className="pt-40 pb-20 px-6 bg-white selection:bg-seafoam/30">
      <div className="container mx-auto max-w-3xl">
        {/* Header with the signature Serif Italic accent */}
        <div className="border-b border-black/5 pb-10 mb-12">
          <h1 className="text-6xl font-black tracking-tighter text-black">
            Privacy <br/>
            <span className="text-seafoam font-serif italic">Policy.</span>
          </h1>
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
            Last Updated: December 2025
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <p className="text-xl text-black/70 font-medium leading-relaxed">
              Direct Care Assistance is committed to protecting your privacy and personal information in accordance with the 
              <span className="text-black font-bold"> Privacy Act 1988 (Cth)</span> and the NDIS Code of Conduct.
            </p>
          </section>

          <section className="group">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-px w-8 bg-seafoam group-hover:w-12 transition-all duration-500" />
               <h3 className="text-2xl font-black text-black">1. Information Collection</h3>
            </div>
            <p className="text-black/60 font-medium leading-relaxed pl-12">
              We collect personal information that is necessary for us to provide you with disability support services 
              and to manage our relationship with you. This includes health records, contact details, and NDIS plan information.
            </p>
          </section>

          <section className="group">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-px w-8 bg-seafoam group-hover:w-12 transition-all duration-500" />
               <h3 className="text-2xl font-black text-black">2. Data Security</h3>
            </div>
            <p className="text-black/60 font-medium leading-relaxed pl-12">
              We take all reasonable steps to protect your personal information from misuse, loss, and unauthorized access. 
              Our digital systems are encrypted, and physical files are stored in secure, restricted-access locations.
            </p>
          </section>

          <section className="group">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-px w-8 bg-seafoam group-hover:w-12 transition-all duration-500" />
               <h3 className="text-2xl font-black text-black">3. Disclosure</h3>
            </div>
            <p className="text-black/60 font-medium leading-relaxed pl-12">
              Your information is only shared with third parties (such as the NDIA or medical professionals) 
              when essential for your care or required by Australian law.
            </p>
          </section>

        
        </div>
      </div>
    </div>
  );
}