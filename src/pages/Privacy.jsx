


import React from 'react';

export default function Privacy() {
  return (
    // Reduced pt-40 to pt-24 and pb-20 to pb-16
    <div className="pt-24 pb-16 px-6 bg-white selection:bg-seafoam/30">
      <div className="container mx-auto max-w-3xl">
        
        {/* Header - Tightened margins and padding */}
        <div className="border-b border-black/5 pb-8 mb-10">
          <h1 className="text-5xl font-extrabold tracking-tighter text-black">
            Privacy <br/>
            <span className="text-seafoam font-serif italic">Policy.</span>
          </h1>
          <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.3em] text-black/40">
            Last Updated: December 2025
          </p>
        </div>

        {/* Reduced space-y-12 to space-y-8 */}
        <div className="space-y-8">
          <section>
            <p className="text-lg text-black/70 font-normal leading-relaxed">
              Direct Care Assistance is committed to protecting your privacy and personal information in accordance with the 
              <span className="text-black font-semibold"> Privacy Act 1988 (Cth)</span> and the NDIS Code of Conduct.
            </p>
          </section>

          <section className="group">
            <div className="flex items-center gap-4 mb-3">
               <div className="h-px w-6 bg-seafoam group-hover:w-10 transition-all duration-500" />
               <h3 className="text-xl font-extrabold text-black">1. Information Collection</h3>
            </div>
            {/* Reduced pl-12 to pl-10 and changed font to normal */}
            <p className="text-black/60 text-sm font-normal leading-relaxed pl-10">
              We collect personal information that is necessary for us to provide you with disability support services 
              and to manage our relationship with you. This includes health records, contact details, and NDIS plan information.
            </p>
          </section>

          <section className="group">
            <div className="flex items-center gap-4 mb-3">
               <div className="h-px w-6 bg-seafoam group-hover:w-10 transition-all duration-500" />
               <h3 className="text-xl font-extrabold text-black">2. Data Security</h3>
            </div>
            <p className="text-black/60 text-sm font-normal leading-relaxed pl-10">
              We take all reasonable steps to protect your personal information from misuse, loss, and unauthorized access. 
              Our digital systems are encrypted, and physical files are stored in secure, restricted-access locations.
            </p>
          </section>

          <section className="group">
            <div className="flex items-center gap-4 mb-3">
               <div className="h-px w-6 bg-seafoam group-hover:w-10 transition-all duration-500" />
               <h3 className="text-xl font-extrabold text-black">3. Disclosure</h3>
            </div>
            <p className="text-black/60 text-sm font-normal leading-relaxed pl-10">
              Your information is only shared with third parties (such as the NDIA or medical professionals) 
              when essential for your care or required by Australian law.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}