import React from 'react';
import { Phone, Mail, Clock, HardHat, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCalculator: () => void;
  leadCount: number;
}

export default function Navbar({ activeTab, setActiveTab, onOpenCalculator, leadCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact & Inquiries' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md font-sans">
      {/* Top Banner - Corporate Trust Info */}
      <div className="hidden lg:block bg-slate-900 text-slate-100 text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-yellow-500" />
              Call Support: <strong className="ml-1 text-white">{CONTACT_INFO.phone}</strong>
            </span>
            <span className="flex items-center text-slate-300">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-yellow-500" />
              Email: <span className="ml-1 text-white">{CONTACT_INFO.email}</span>
            </span>
            <span className="flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-yellow-500" />
              {CONTACT_INFO.workingHours}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded text-[11px] font-semibold border border-slate-700">
              <ShieldCheck className="w-3 h-3 mr-1 text-yellow-500" /> Government Registered Contractor
            </span>
            <button
              onClick={() => handleNavClick('leads')}
              className={`flex items-center space-x-1.5 hover:text-yellow-400 transition-colors text-[11px] uppercase tracking-wider font-bold ${activeTab === 'leads' ? 'text-yellow-400' : 'text-slate-300'}`}
              id="nav-lead-center"
            >
              <span>Lead Center</span>
              {leadCount > 0 && (
                <span className="bg-yellow-500 text-slate-950 font-extrabold text-[10px] px-1.5 rounded-full min-w-[16px] h-4 flex items-center justify-center animate-pulse">
                  {leadCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 cursor-pointer select-none group"
          id="brand-logo"
        >
          <div className="p-2.5 bg-slate-900 text-yellow-500 rounded-lg shadow-sm border border-slate-800 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-colors">
            <HardHat className="w-6 h-6 stroke-[2.25]" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 uppercase">
                Balaji
              </span>
              <span className="ml-1 px-1.5 py-0.5 bg-yellow-500 text-slate-950 font-black text-xs rounded uppercase tracking-wider">
                Constructions
              </span>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">
              Quality • Strength • Trust
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-2 rounded-md text-sm transition-all font-semibold ${
                activeTab === item.id
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
              id={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          {/* Admin tab only visible highlighted if active */}
          {activeTab === 'leads' && (
            <button
              onClick={() => handleNavClick('leads')}
              className="px-3.5 py-2 rounded-md text-sm bg-slate-900 text-yellow-400 font-bold ml-1 border border-yellow-500/30"
            >
              Leads Admin
            </button>
          )}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenCalculator}
            className="flex items-center space-x-2 bg-yellow-500 text-slate-950 hover:bg-yellow-600 active:bg-yellow-700 px-4 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:shadow transition-all group"
            id="nav-cta-quote"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center space-x-2">
          {leadCount > 0 && (
            <button
              onClick={() => handleNavClick('leads')}
              className="bg-yellow-100 text-yellow-800 p-1.5 rounded-full relative"
            >
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {leadCount}
              </span>
              <span className="text-xs font-bold px-1 text-slate-900">Leads</span>
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 shadow-inner">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                  activeTab === item.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('leads')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold flex justify-between items-center transition-all ${
                activeTab === 'leads'
                  ? 'bg-slate-900 text-yellow-400'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Lead Center (Staff Admin)</span>
              {leadCount > 0 ? (
                <span className="bg-yellow-500 text-slate-950 text-xs px-2 py-0.5 rounded-full font-bold">
                  {leadCount} New
                </span>
              ) : (
                <span className="text-xs text-slate-400">0 leads</span>
              )}
            </button>
          </div>
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full text-center bg-yellow-500 text-slate-950 font-bold py-3 rounded-lg text-sm shadow hover:bg-yellow-600 transition-all block"
            >
              Get a Free Quote
            </button>
            <div className="flex flex-col items-center space-y-1 text-xs text-slate-500 text-center">
              <p className="font-semibold text-slate-700">Call support: {CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.workingHours}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
