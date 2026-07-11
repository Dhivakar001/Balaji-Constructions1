import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsGallery from './components/ProjectsGallery';
import QuoteCalculator from './components/QuoteCalculator';
import ContactSection from './components/ContactSection';
import LeadCenter from './components/LeadCenter';
import Footer from './components/Footer';
import { Inquiry } from './types';
import { CONTACT_INFO } from './data';
import { Calculator, HardHat, Landmark, PhoneCall, Star, Quote, ArrowUpRight, CheckCircle, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<string>('home');
  const [prefilledProject, setPrefilledProject] = React.useState<string>('');
  const [defaultAudience, setDefaultAudience] = React.useState<'homeowner' | 'commercial' | 'developer' | undefined>(undefined);
  const [isCalculatorOpen, setIsCalculatorOpen] = React.useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = React.useState<boolean>(false);

  // Scroll event listener to show/hide Scroll to Top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Inquiries State loaded from LocalStorage
  const [inquiries, setInquiries] = React.useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('balaji_inquiries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    }
    // Return empty by default, we can add mock entries on mount or with a button
    return [];
  });

  // Persist inquiries to LocalStorage
  React.useEffect(() => {
    localStorage.setItem('balaji_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Prepopulate 3 realistic leads if list is empty, to showcase Lead Center immediately
  React.useEffect(() => {
    if (inquiries.length === 0) {
      handlePopulateSampleLeads();
    }
  }, []);

  const handlePopulateSampleLeads = () => {
    const sampleLeads: Inquiry[] = [
      {
        id: 'mock-1',
        name: 'S. Anantha Krishnan',
        phone: '+91 94440 98765',
        email: 'ananth.s@gmail.com',
        projectType: 'Residential Turnkey House',
        propertyType: 'homeowner',
        areaSize: 2200,
        budgetTier: 'premium',
        calculatedEstimate: 4290000,
        message: 'Looking to construct an independent duplex house in Sholinganallur. Site dimension is 30x40 feet. Have soil report showing loose sandy soil.',
        timestamp: new Date(Date.now() - 3600000 * 4).toISOString(), // 4 hours ago
        status: 'new'
      },
      {
        id: 'mock-2',
        name: 'Arunachalam Promoters',
        phone: '+91 98401 12345',
        email: 'bids@arunachalampromoters.com',
        projectType: 'RCC Concrete Shuttering subcontract',
        propertyType: 'developer',
        areaSize: 18500,
        budgetTier: 'standard',
        calculatedEstimate: 25900000,
        message: 'Inquiring for structural frame casting subcontract for our upcoming apartment scheme in OMR Chennai. Need shuttering staging pricing.',
        timestamp: new Date(Date.now() - 3600000 * 24).toISOString(), // 24 hours ago
        status: 'contacted'
      },
      {
        id: 'mock-3',
        name: 'Dr. Ramesh Sundar',
        phone: '+91 98845 54321',
        email: 'dr.ramesh@sundarclinic.co.in',
        projectType: 'Commercial Multi-tenant Plaza',
        propertyType: 'commercial',
        areaSize: 6200,
        budgetTier: 'luxury',
        calculatedEstimate: 16430000,
        message: 'Planning to build a G+2 polyclinic center. Need high-efficiency design with post-tensioned columns for parking clearance.',
        timestamp: new Date(Date.now() - 3600000 * 48).toISOString(), // 48 hours ago
        status: 'proposal_sent'
      }
    ];
    setInquiries(sampleLeads);
  };

  // Add inquiries
  const handleAddInquiry = (formData: Omit<Inquiry, 'id' | 'timestamp' | 'status'>) => {
    const newInq: Inquiry = {
      ...formData,
      id: `inq-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'new'
    };
    setInquiries((prev) => [newInq, ...prev]);
  };

  // From Quote Calculator
  const handleAddEstimateInquiry = (estData: {
    projectType: string;
    propertyType: string;
    areaSize: number;
    soilType: string;
    materialTier: string;
    totalEstimate: number;
    addons: string[];
  }) => {
    const newInq: Inquiry = {
      id: `inq-${Date.now()}`,
      name: 'Estimate Client (' + estData.projectType.split(' ')[0] + ')',
      phone: CONTACT_INFO.phone, // fallback phone
      email: 'no-email-provided@estimator.com',
      projectType: estData.projectType,
      propertyType: estData.propertyType as any,
      areaSize: estData.areaSize,
      budgetTier: estData.materialTier.includes('Standard') ? 'standard' : estData.materialTier.includes('Premium') ? 'premium' : 'luxury',
      calculatedEstimate: estData.totalEstimate,
      message: `Automatic estimate generated via civil calculator. Soil requirement: ${estData.soilType}. Addons requested: ${estData.addons.join(', ') || 'None'}.`,
      timestamp: new Date().toISOString(),
      status: 'new'
    };
    setInquiries((prev) => [newInq, ...prev]);
  };

  // Update Status
  const handleUpdateStatus = (id: string, newStatus: Inquiry['status']) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  // Delete Lead
  const handleDeleteLead = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
  };

  // Click handler from services section
  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPrefilledProject(serviceTitle);
    setActiveTab('contact');
    setTimeout(() => {
      const anchor = document.getElementById('contact-panel-anchor');
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Select target audience from hero portal
  const handleSelectAudience = (audience: 'homeowner' | 'commercial' | 'developer') => {
    setDefaultAudience(audience);
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-yellow-500 selection:text-slate-950">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        leadCount={inquiries.filter((i) => i.status === 'new').length}
      />

      {/* Main Container */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="space-y-0">
            {/* Hero Banner */}
            <Hero
              onOpenCalculator={() => setIsCalculatorOpen(true)}
              onNavigate={setActiveTab}
              onSelectAudience={handleSelectAudience}
            />

            {/* In-Page Quick Estimator Pitch block */}
            <section className="py-16 bg-slate-50 font-sans border-t border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold bg-slate-200 px-3 py-1 rounded inline-block">
                      Cost Transparency
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                      Calculate Your Civil Work Estimates Instantly
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We understand that the biggest fear in construction is budget overruns. Balaji's instant estimate tool computes real-time concrete masonry values based on live material standards.
                    </p>

                    <div className="space-y-4 text-xs font-semibold text-slate-700">
                      <div className="flex items-center space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></span>
                        <span>Compiles foundation shoring multipliers for loose soil</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></span>
                        <span>Factors in ISI brand standard cement and steel rates</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></span>
                        <span>Itemizes lines for excavation, slab frame, and masonry</span>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center space-x-4">
                      <button
                        onClick={() => setIsCalculatorOpen(true)}
                        className="bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs uppercase tracking-wide px-5 py-3 rounded-lg"
                      >
                        Launch Interactive Calculator
                      </button>
                      <button
                        onClick={() => setActiveTab('contact')}
                        className="text-slate-950 border-b-2 border-slate-950 font-bold text-xs uppercase tracking-wide py-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors"
                      >
                        Contact Civil Engineer
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-white p-2 rounded-2xl shadow border border-slate-200">
                    <QuoteCalculator
                      onSubmitEstimate={handleAddEstimateInquiry}
                      defaultAudience={defaultAudience}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials block */}
            <section className="py-16 bg-white font-sans border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-12">
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold bg-slate-100 px-3 py-1 rounded">
                    Client Testimonials
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 mt-3 uppercase tracking-tight">
                    Trusted By Developers & Homeowners
                  </h2>
                  <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Testimonial 1 */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex text-yellow-500">
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                      </div>
                      <p className="text-xs text-slate-600 italic leading-relaxed">
                        "Balaji Constructions handled the factory extension for our spinning mill. Their engineers setup excellent separation barriers so no dust affected our loom machinery. The cement slab is perfectly flat."
                      </p>
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">K. S. Senthil Kumar</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">MD, Saraswathi Weaving Mills</p>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex text-yellow-500">
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                      </div>
                      <p className="text-xs text-slate-600 italic leading-relaxed">
                        "Building a home in Bengaluru while living in Dubai is stressful, but their team sent video updates on WhatsApp every Friday without fail. Complete material billing was fully transparent."
                      </p>
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Mrs. Malini Viswanathan</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Independent House Owner</p>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex text-yellow-500">
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500" />
                      </div>
                      <p className="text-xs text-slate-600 italic leading-relaxed">
                        "We subcontracted the shuttering and RCC framing for our 18-unit apartment project to Balaji. Alignment and spacing of steel reinforcement was perfect. Prevents usual delay and material wastage."
                      </p>
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">V. R. Subramanian</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Senior Project Lead, Meadows Estates</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'about' && <AboutSection />}

        {activeTab === 'services' && (
          <ServicesSection onSelectService={handleSelectServiceForInquiry} />
        )}

        {activeTab === 'projects' && (
          <ProjectsGallery onInquireSimilar={handleSelectServiceForInquiry} />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            onFormSubmit={handleAddInquiry}
            prefilledProject={prefilledProject}
          />
        )}

        {activeTab === 'leads' && (
          <LeadCenter
            inquiries={inquiries}
            onUpdateStatus={handleUpdateStatus}
            onDeleteLead={handleDeleteLead}
            onAddMockInquiries={handlePopulateSampleLeads}
          />
        )}
      </main>

      {/* Floating Estimate Calculator Modal (Slide-over/Centered overlay) */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative border border-slate-300 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsCalculatorOpen(false)}
              className="absolute top-4 right-4 z-10 bg-slate-900 hover:bg-yellow-500 hover:text-slate-950 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm border border-slate-800"
              title="Close Calculator"
            >
              ✕
            </button>
            <QuoteCalculator
              onSubmitEstimate={(est) => {
                handleAddEstimateInquiry(est);
                setIsCalculatorOpen(false);
                setActiveTab('leads');
              }}
              defaultAudience={defaultAudience}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onNavigate={setActiveTab} activeTab={activeTab} />

      {/* Subtle Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-slate-900 hover:bg-yellow-500 hover:text-slate-950 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-xl transition-all duration-300 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 group animate-in fade-in slide-in-from-bottom-4 duration-200"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  );
}
