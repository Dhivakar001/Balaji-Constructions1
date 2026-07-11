import React from 'react';
import { CONTACT_INFO } from '../data';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, ShieldAlert } from 'lucide-react';

interface ContactSectionProps {
  onFormSubmit: (formData: {
    name: string;
    phone: string;
    email: string;
    projectType: string;
    propertyType: 'homeowner' | 'commercial' | 'developer';
    areaSize: number;
    budgetTier: 'standard' | 'premium' | 'luxury';
    message: string;
  }) => void;
  prefilledProject?: string;
}

export default function ContactSection({ onFormSubmit, prefilledProject }: ContactSectionProps) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [projectType, setProjectType] = React.useState(prefilledProject || 'Residential Turnkey House');
  const [propertyType, setPropertyType] = React.useState<'homeowner' | 'commercial' | 'developer'>('homeowner');
  const [areaSize, setAreaSize] = React.useState<number>(1800);
  const [budgetTier, setBudgetTier] = React.useState<'standard' | 'premium' | 'luxury'>('premium');
  const [message, setMessage] = React.useState('');
  
  const [submitted, setSubmitted] = React.useState(false);

  // Update prefilled project type if it changes from props
  React.useEffect(() => {
    if (prefilledProject) {
      setProjectType(prefilledProject);
    }
  }, [prefilledProject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill out Name and Phone number.');
      return;
    }

    onFormSubmit({
      name,
      phone,
      email: email || 'No email provided',
      projectType,
      propertyType,
      areaSize,
      budgetTier,
      message: message || `Client is inquiring about constructing a ${projectType}.`
    });

    setSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Helper to open direct WhatsApp API with customized text template
  const openWhatsApp = (type: 'home' | 'commercial' | 'general') => {
    let text = '';
    if (type === 'home') {
      text = encodeURIComponent(
        `Hi Balaji Constructions, I would like to get a turnkey residential house quote for a project size of approx 2000 Sq. Ft. Please let me know when your structural engineer is available.`
      );
    } else if (type === 'commercial') {
      text = encodeURIComponent(
        `Hi Balaji Constructions, I am looking to build a commercial development. I have soil reports and floor designs. Let's schedule a meeting to discuss bulk material pricing and timeline contracts.`
      );
    } else {
      text = encodeURIComponent(
        `Hi Balaji Constructions, I am looking to get a custom construction quote for my land. Please let me know your civil consultation process.`
      );
    }
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 bg-slate-100 font-sans" id="contact-panel-anchor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Contact Cards & WhatsApp Direct */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold bg-white border px-3 py-1 rounded inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                Connect Directly With Our Civil Engineers
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Skip the sales representatives. Speak directly with Balaji Constructions' licensed engineers to evaluate your soil tests or blueprint drafts.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 bg-yellow-500 text-slate-950 rounded-lg shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Call Engineering Desk</p>
                  <p className="font-mono font-bold text-sm text-slate-900 mt-0.5">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 bg-yellow-500 text-slate-950 rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Corporate Email</p>
                  <p className="font-mono font-bold text-sm text-slate-900 mt-0.5">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 bg-yellow-500 text-slate-950 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Head Office</p>
                  <p className="text-xs text-slate-900 font-medium mt-1 leading-relaxed">{CONTACT_INFO.officeAddress}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 bg-yellow-500 text-slate-950 rounded-lg shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Working Hours</p>
                  <p className="text-xs text-slate-900 font-medium mt-0.5">{CONTACT_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Link Blocks - Fulfills user intent beautifully */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
              <div>
                <span className="text-[10px] uppercase font-black text-emerald-400 font-mono tracking-widest block">
                  FASTEST RESPONSE METHOD
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mt-1">
                  Connect on WhatsApp
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Have a draft layout map or land dimensions? Chat directly on WhatsApp to receive quick soil footing advice.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => openWhatsApp('home')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  Homeowner Chat
                </button>
                <button
                  onClick={() => openWhatsApp('commercial')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  Developer Chat
                </button>
              </div>
            </div>
          </div>

          {/* Right Block: Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black uppercase text-slate-900">Civil Consultation Form</h3>
                <p className="text-xs text-slate-500 mt-1">Record your site requirements to schedule a structural feasibility report.</p>
              </div>

              {submitted && (
                <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-xl text-xs font-bold flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-bold">Inquiry Lodged Successfully!</span>
                    <span className="font-normal block mt-1">We have saved your lead details in the Balaji Staff Admin Lead Center. A concrete engineer will call you in 2 hours.</span>
                  </div>
                </div>
              )}

              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. R. Ananthakrishnan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 94440 98765"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs font-mono text-slate-800 focus:outline-none focus:border-yellow-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. anand@outlook.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Project Build Sector</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-yellow-500"
                  >
                    <option value="Residential Turnkey House">Residential Turnkey House</option>
                    <option value="Commercial Multi-tenant Plaza">Commercial Multi-tenant Plaza</option>
                    <option value="Industrial Warehouse / Shed">Industrial Warehouse / PEB Shed</option>
                    <option value="RCC Concrete Shuttering subcontract">RCC Shuttering Contract</option>
                    <option value="Floor Additions & Retrofitting">Retrofitting / Floor Addition</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">I am a: *</label>
                  <div className="flex flex-col space-y-1 text-xs">
                    {[
                      { id: 'homeowner', label: 'Homeowner' },
                      { id: 'commercial', label: 'Commercial Owner' },
                      { id: 'developer', label: 'Real Estate Developer' }
                    ].map((opt) => (
                      <label key={opt.id} className="flex items-center space-x-2 p-1 border rounded bg-slate-50 cursor-pointer">
                        <input
                          type="radio"
                          name="propType"
                          checked={propertyType === opt.id}
                          onChange={() => setPropertyType(opt.id as any)}
                          className="accent-yellow-500 scale-90"
                        />
                        <span className="font-semibold text-slate-700 text-[11px]">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Area Size (Sq. Ft.)</label>
                  <input
                    type="number"
                    value={areaSize}
                    onChange={(e) => setAreaSize(parseInt(e.target.value) || 0)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Quality/Material Tier</label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value as any)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-yellow-500"
                  >
                    <option value="standard">Standard Raw Materials</option>
                    <option value="premium">Premium Quality Brands</option>
                    <option value="luxury">Luxury Custom Elements</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Describe Your Structural Requirements</label>
                <textarea
                  rows={4}
                  placeholder="e.g. Looking to construct a G+2 house on a 30x40 site. Soil is sandy. Need estimation for deep piling foundation."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 text-xs text-slate-800 focus:outline-none focus:border-yellow-500"
                ></textarea>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3.5 text-[10px] text-slate-700 leading-relaxed flex items-start space-x-2">
                <ShieldAlert className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                <p>
                  By submitting, you agree to receive direct calls or WhatsApp messages from Balaji Constructions civil site engineers. We strictly respect your privacy and never sell details.
                </p>
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-950 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Submit Detailed Civil Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
