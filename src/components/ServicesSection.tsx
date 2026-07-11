import React from 'react';
import { Building2, Home, ShoppingBag, Warehouse, Hammer, ArrowRight, Check, Sparkles, HelpCircle } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = React.useState<string | null>('s1');

  // Helper to map string to Lucide Icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Home': return <Home className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Warehouse': return <Warehouse className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      default: return <Building2 className="w-6 h-6" />;
    }
  };

  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section className="py-16 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold bg-slate-200 px-3 py-1 rounded">Our Expertise</span>
          <h2 className="text-3xl font-black text-slate-900 mt-3 uppercase tracking-tight">
            Comprehensive Civil Contracts
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-slate-600 text-sm">
            We operate as a single-point contractor handling structural safety, municipal code inspections, 
            and final finish handover. Select a service to see full technical breakdowns and pricing indices.
          </p>
        </div>

        {/* Master-Detail Interactive Service View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Service Selector Menu */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 pl-2">Select a Service Sector</h3>
            <div className="space-y-2.5">
              {SERVICES.map((s) => {
                const isActive = s.id === selectedServiceId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-slate-900 border-slate-950 text-white shadow-md'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-yellow-500 text-slate-950' : 'bg-slate-100 text-slate-700'}`}>
                        {getIcon(s.iconName)}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-tight">{s.title}</h4>
                        <p className={`text-xs mt-0.5 line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                          {s.shortDescription}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-yellow-500 translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Detailed Service Spec Sheet */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-yellow-500"></div>
            
            <div className="space-y-6">
              {/* Header inside spec sheet */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0 pb-5 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center space-x-1 text-[11px] font-bold uppercase text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Technical Spec Sheet</span>
                  </div>
                  <h3 className="text-xl font-black uppercase text-slate-900">{activeService.title}</h3>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg text-right shrink-0">
                  <div className="text-[10px] uppercase font-bold text-slate-500">Estimated Cost Index</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">{activeService.costIndicator}</div>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-2">Service Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{activeService.fullDescription}</p>
              </div>

              {/* Target Audience callout */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-bold text-slate-500">Service Targets:</span>
                {activeService.targetAudience.map((target, idx) => (
                  <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-[11px] px-2.5 py-0.5 rounded-full">
                    {target}
                  </span>
                ))}
              </div>

              {/* Core Features list */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-3">Key Civil Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Indicator */}
              <div className="bg-slate-50 rounded-lg p-3.5 flex justify-between items-center text-xs">
                <span className="text-slate-500 font-semibold">Average Execution Timeline:</span>
                <span className="font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-1 rounded">
                  {activeService.avgTimeline}
                </span>
              </div>
            </div>

            {/* Action button in spec sheet */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => onSelectService(activeService.title)}
                className="w-full bg-slate-900 hover:bg-slate-950 text-white py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Request Quotation for {activeService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
