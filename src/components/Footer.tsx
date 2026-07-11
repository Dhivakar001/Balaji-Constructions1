import React from 'react';
import { CONTACT_INFO } from '../data';
import { HardHat, ShieldCheck, Mail, Phone, Clock, Landmark, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  activeTab: string;
}

export default function Footer({ onNavigate, activeTab }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [hasActiveEstimate, setHasActiveEstimate] = React.useState(false);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('balaji_current_estimate');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && (Date.now() - parsed.timestamp < 3600000 * 2)) {
          setHasActiveEstimate(true);
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleWhatsAppChat = () => {
    let estimateData: any = null;
    try {
      const saved = localStorage.getItem('balaji_current_estimate');
      if (saved) {
        estimateData = JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to retrieve current estimate', e);
    }

    let text = '';
    if (estimateData && (Date.now() - estimateData.timestamp < 3600000 * 2)) {
      const formattedTotal = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(estimateData.totalEstimate);

      text = `Hi Balaji Constructions, I am looking to get a custom quote. I used your online estimator and got the following details:\n\n` +
             `*Sector:* ${estimateData.projectType}\n` +
             `*Built-up Area:* ${estimateData.areaSize.toLocaleString()} Sq. Ft.\n` +
             `*Soil Condition:* ${estimateData.soilType}\n` +
             `*Material Tier:* ${estimateData.materialTier}\n` +
             `*Estimated Civil Cost:* ${formattedTotal}\n` +
             (estimateData.addons && estimateData.addons.length > 0 ? `*Addons Requested:* ${estimateData.addons.join(', ')}\n` : '') +
             `\nPlease advise on the next steps and availability for a site inspection.`;
    } else {
      text = `Hi Balaji Constructions, I would like to inquire about a civil/construction project. Please let me know your availability for a free consultation.`;
    }

    const cleanPhone = CONTACT_INFO.whatsapp.replace(/[+\s()-]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-slate-900 text-slate-100 font-sans border-t-4 border-yellow-500 relative z-10">
      {/* Top Footer Segment - Quick Contacts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1.5 space-y-4">
            <div className="flex items-center space-x-3 select-none">
              <div className="p-2 bg-yellow-500 text-slate-950 rounded-lg">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white uppercase">Balaji</span>
                <span className="ml-1 px-1.5 py-0.5 bg-yellow-500 text-slate-950 font-black text-xs rounded uppercase tracking-wider">Constructions</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              South India's trustworthy turnkey residential home builder and heavy-duty concrete masonry subcontract partner. Over 12 years of solid structural expertise.
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-bold bg-slate-950 py-1.5 px-3 rounded border border-slate-800 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
              <span>Government Registered Civil Class-I Contractor</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-extrabold">Site Directory</h4>
            <div className="flex flex-col space-y-2.5 text-xs text-slate-400">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'Company Profile & Safety' },
                { id: 'services', label: 'Civil Services spec' },
                { id: 'projects', label: 'Completed Builds Gallery' },
                { id: 'contact', label: 'Consultation & WhatsApp' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left hover:text-yellow-500 transition-colors font-semibold ${
                    activeTab === link.id ? 'text-yellow-500' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Licenses & Norms Col */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-extrabold">Engineering Audits</h4>
            <div className="space-y-2 text-xs text-slate-400 font-medium">
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 shrink-0"></span>
                IS: 456 - RCC Code Compliant
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 shrink-0"></span>
                IS: 1786 - Fe550 Grade Steel Checked
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 shrink-0"></span>
                Certified Soil bearing-capacity drill reports
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 shrink-0"></span>
                Class-I Labor Insurance Active
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 shrink-0"></span>
                GSTIN: 33AAFBB9450C1Z5 (Registered)
              </p>
            </div>
          </div>

          {/* Office Desk Col */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-extrabold">Headquarters</h4>
            <div className="text-xs text-slate-400 space-y-3 font-medium">
              <p className="leading-relaxed">
                {CONTACT_INFO.officeAddress}
              </p>
              <div className="pt-2 flex flex-col space-y-1.5">
                <span className="flex items-center text-slate-300">
                  <Phone className="w-3.5 h-3.5 mr-2 text-yellow-500" />
                  {CONTACT_INFO.phone}
                </span>
                <span className="flex items-center text-slate-300">
                  <Mail className="w-3.5 h-3.5 mr-2 text-yellow-500" />
                  {CONTACT_INFO.email}
                </span>
              </div>
              
              <div className="pt-2">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Engineering Desk Live</span>
                  </div>
                  <button
                    onClick={handleWhatsAppChat}
                    className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-[11px] font-extrabold uppercase tracking-wider py-2 px-3 rounded-lg shadow-md transition-all border border-emerald-500/20"
                  >
                    <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                    <span>{hasActiveEstimate ? 'Share Estimate on WhatsApp' : 'Chat on WhatsApp'}</span>
                  </button>
                  <p className="text-[9px] text-slate-500 leading-normal">
                    {hasActiveEstimate ? 'Send your configured calculator parameters to our team.' : 'Send area size & soil details to get an instant review.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
        <p>© {currentYear} Balaji Constructions. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate('leads')}
            className={`hover:text-yellow-500 transition-colors uppercase font-bold tracking-wider text-[10px] ${
              activeTab === 'leads' ? 'text-yellow-500' : ''
            }`}
          >
            Staff CRM Portal Login
          </button>
          <span>•</span>
          <span className="text-[10px]">Quality Concrete. Enduring Structures.</span>
        </div>
      </div>
    </footer>
  );
}
