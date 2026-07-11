import React from 'react';
import { Award, ShieldAlert, Award as CertIcon, Hammer, Users, HeartHandshake, Eye } from 'lucide-react';
import { TRUST_FACTORS } from '../data';

export default function AboutSection() {
  const materials = [
    { category: 'Structural Cement', brands: 'UltraTech Super, Coromandel King, Penna Concrete M45' },
    { category: 'TMT Reinforcement Steel', brands: 'JSW Neosteel Fe550, Tata Tiscon SD, Sail TMT' },
    { category: 'Electrical Conduits & Cabling', brands: 'Finolex FRLS, Polycab Multiwire, Anchor ROMA switches' },
    { category: 'Plumbing Shafts & PVC', brands: 'Ashirvad CPVC, Supreme heavy-duty agricultural pipes' },
    { category: 'External Weather Waterproofing', brands: 'Fosroc Brushbond, Dr. Fixit Dampguard, Asian Paints Apex Ultima' },
  ];

  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold bg-slate-100 px-3 py-1 rounded">Our Profile</span>
          <h2 className="text-3xl font-black text-slate-900 mt-3 uppercase tracking-tight">
            Engineering Integrity. <br />
            No Compromise on Cement or Steel.
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-slate-600 text-sm">
            Based in Chennai, Balaji Constructions provides robust, licensed civil contracting 
            services across South India. We focus on rigid structural frameworks, honest pricing, and high durability.
          </p>
        </div>

        {/* Section 1: Intro with stats card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Why Local Property Owners Prefer Balaji Constructions
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We started with a simple belief: a building is only as strong as its foundation and the quality of its shuttering. 
              While many contractors attempt to lower their quotes by using non-standard river-sand alternatives, unbranded 
              local steel bars, or diluted cement mixtures, we refuse to cut these dangerous corners.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every column poured by our team is vibration-compacted using professional needle vibrators, ensuring no internal 
              honeycombing or weak pockets. We cure all concrete columns and slabs for a minimum of 14 days under continuous 
              wet gunny-bag supervision. That is our formula for buildings that stand safe for generations.
            </p>

            <div className="border-l-4 border-yellow-500 bg-slate-50 p-4 rounded-r-lg">
              <p className="text-xs font-bold text-slate-900 uppercase">Licensed Government Registration</p>
              <p className="text-xs text-slate-600 mt-1">
                Class-I Registered Civil Contractor compliant with all local municipality rules, labor insurance schemes, 
                and safety norms.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST_FACTORS.map((tf) => (
              <div key={tf.id} className="bg-slate-50 border border-slate-200 p-6 rounded-xl relative overflow-hidden group hover:border-slate-300 hover:bg-slate-100/50 transition-all">
                <span className="absolute -right-4 -bottom-4 text-7xl font-black text-slate-200/50 select-none group-hover:scale-110 transition-transform">
                  {tf.number}
                </span>
                <div className="text-3xl font-black text-slate-900 mb-1">{tf.number}</div>
                <div className="text-sm font-bold text-slate-950 mb-2">{tf.label}</div>
                <p className="text-xs text-slate-500 leading-relaxed relative z-10">{tf.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Material Brand Transparency - Extremely Realistic */}
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-8 lg:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-yellow-500 text-slate-950 font-extrabold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider">
                Material Standards
              </div>
              <h4 className="text-2xl font-black uppercase text-white tracking-tight">
                Our Materials Specifications
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Property construction is a 50-year investment. We provide complete chemical test reports for every batch of reinforcement steel and cement arriving on our sites.
              </p>
              <div className="flex items-center space-x-2.5 text-xs text-yellow-500 font-bold">
                <span>ISI Certified Materials Only</span>
                <span>•</span>
                <span>Third-Party Lab Tested</span>
              </div>
            </div>

            <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-xl divide-y divide-slate-800">
              {materials.map((m, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0 text-xs">
                  <span className="font-bold text-slate-300">{m.category}</span>
                  <span className="text-slate-400 font-mono text-right">{m.brands}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Core Operating Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-600">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-md font-bold text-slate-950 uppercase">Experienced Native Work Crews</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              No middle-man brokers. We employ our own trusted supervisors, carpenters for shuttering, bar-bending steel workers, 
              and mason groups who have worked with us for over 8 years.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-600">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="text-md font-bold text-slate-950 uppercase">Strict Site Supervision</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every project is assigned a dedicated civil engineer who remains present at the site from 8:30 AM concrete batching 
              to 6:00 PM safety lockup, checking brick alignment with standard plumb-bobs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-600">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-md font-bold text-slate-950 uppercase">Honest Transparent Billing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We divide bills into 7 clear structural milestones (e.g., foundation level, lintel level, slab casting, plastering). 
              You pay strictly based on verified work progress on site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
