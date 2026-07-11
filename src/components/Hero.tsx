import React from 'react';
import { ArrowRight, FileText, CheckCircle, ShieldCheck, HelpCircle, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface HeroProps {
  onOpenCalculator: () => void;
  onNavigate: (tabId: string) => void;
  onSelectAudience: (audience: 'homeowner' | 'commercial' | 'developer') => void;
}

export default function Hero({ onOpenCalculator, onNavigate, onSelectAudience }: HeroProps) {
  return (
    <div className="relative font-sans overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920"
          alt="Balaji Construction Site"
          className="w-full h-full object-cover opacity-25 object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 flex flex-col justify-center min-h-[70vh]">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-500 font-bold uppercase text-[11px] tracking-wider">
              Licensed Civil Contractor • South India
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase">
            Concrete Foundations. <br className="hidden sm:inline" />
            <span className="text-yellow-500">Solid Shuttering.</span> <br />
            Turnkey Execution.
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
            We don't build conceptual dreamscapes. We pour solid RCC, lay precise masonry, 
            and hand over robust, compliant, long-lasting physical structures. Balaji Constructions 
            is your trusted partner for turnkey homes, commercial plazas, and heavy industrial sheds.
          </p>

          {/* Quick trust bullet points */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
            <div className="flex items-center space-x-2.5 text-slate-200 bg-slate-900/50 border border-slate-800 p-2.5 rounded-lg">
              <CheckCircle className="w-5 h-5 text-yellow-500 shrink-0" />
              <span className="text-sm font-semibold">100% ISI-Marked Cement & Steel Only</span>
            </div>
            <div className="flex items-center space-x-2.5 text-slate-200 bg-slate-900/50 border border-slate-800 p-2.5 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-yellow-500 shrink-0" />
              <span className="text-sm font-semibold">Strict Standard Sand Alternatives</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onOpenCalculator}
              className="flex items-center justify-center space-x-3 bg-yellow-500 text-slate-950 hover:bg-yellow-600 active:bg-yellow-700 px-8 py-4 rounded-lg font-extrabold shadow-lg transition-all text-base uppercase tracking-wide group"
              id="hero-cta-quote"
            >
              <FileText className="w-5 h-5" />
              <span>Get a Free Quote Estimate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center space-x-2.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white px-6 py-4 rounded-lg font-bold shadow transition-all text-sm group"
              id="hero-cta-contact"
            >
              <PhoneCall className="w-4 h-4 text-yellow-500" />
              <span>Contact Civil Engineer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Target Audience Quick Portal - Realistic Business Needs */}
      <div className="relative bg-slate-100 border-t border-b border-slate-200 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold">Who We Partner With</h2>
            <p className="text-lg font-bold text-slate-900 mt-1">Tailored civil construction services for realistic budgets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Target 1: Homeowners */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-yellow-500/60 hover:shadow-md transition-all">
              <div>
                <div className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">For Homeowners</div>
                <h3 className="text-lg font-bold text-slate-950 mb-3">Independent Turnkey Houses</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Frustrated by unreliable daily masonry workers? We offer complete material-inclusive structural building, 
                  plumbing, electrical shafts, and plaster finish with strict timelines and transparent billing.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                    M20-M25 grade column casting
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                    Regular WhatsApp progress reports
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onSelectAudience('homeowner')}
                className="w-full bg-slate-900 hover:bg-slate-950 text-white py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-colors"
              >
                Estimate Home Construction Cost
              </button>
            </div>

            {/* Target 2: Commercial Property Owners */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-yellow-500/60 hover:shadow-md transition-all">
              <div>
                <div className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">For Commercial Owners</div>
                <h3 className="text-lg font-bold text-slate-950 mb-3">Shops, Warehouses & Office Blocks</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Maximize your rental yields with efficient commercial building layouts. We construct high-durability showrooms, 
                  multitenant blocks, and PEB structural warehouses built to withstand heavy operations.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                    High-strength industrial concrete flooring
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                    Compliance-ready fire escape layouts
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onSelectAudience('commercial')}
                className="w-full bg-slate-900 hover:bg-slate-950 text-white py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-colors"
              >
                Estimate Commercial Build Cost
              </button>
            </div>

            {/* Target 3: Real Estate Developers */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-yellow-500/60 hover:shadow-md transition-all">
              <div>
                <div className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">For Developers</div>
                <h3 className="text-lg font-bold text-slate-950 mb-3">RCC Framing & Contract Slabs</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Accelerate your multi-story projects with a reliable sub-contract partner. We handle deep pile foundations, 
                  scaffolding, precise plywood shuttering, steel binding, and concrete casting at industrial speed.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                    Own premium shuttering & staging inventory
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                    Dedicated highly trained bar-bending crews
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onSelectAudience('developer')}
                className="w-full bg-slate-900 hover:bg-slate-950 text-white py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-colors"
              >
                Inquire Developer Sub-Contract
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
