import React from 'react';
import { Calculator, ShieldAlert, ArrowRight, Check, Sparkles, FileText, Download, CheckCircle } from 'lucide-react';

interface QuoteCalculatorProps {
  onSubmitEstimate: (estimateDetails: {
    projectType: string;
    propertyType: string;
    areaSize: number;
    soilType: string;
    materialTier: string;
    totalEstimate: number;
    addons: string[];
  }) => void;
  defaultAudience?: 'homeowner' | 'commercial' | 'developer';
}

export default function QuoteCalculator({ onSubmitEstimate, defaultAudience }: QuoteCalculatorProps) {
  const [projectType, setProjectType] = React.useState<'residential' | 'commercial' | 'industrial'>(
    defaultAudience === 'commercial' ? 'commercial' : defaultAudience === 'developer' ? 'commercial' : 'residential'
  );
  const [areaSize, setAreaSize] = React.useState<number>(1800);
  const [soilType, setSoilType] = React.useState<'hard' | 'sandy' | 'clay'>('hard');
  const [materialTier, setMaterialTier] = React.useState<'standard' | 'premium' | 'luxury'>('premium');
  
  // Addons states
  const [addons, setAddons] = React.useState<{ [key: string]: boolean }>({
    sump: false,
    rainwater: true,
    waterproofing: false,
    retainingWall: false,
  });

  // Keep state updated if defaultAudience changes
  React.useEffect(() => {
    if (defaultAudience === 'commercial' || defaultAudience === 'developer') {
      setProjectType('commercial');
      setAreaSize(10000);
    } else if (defaultAudience === 'homeowner') {
      setProjectType('residential');
      setAreaSize(1800);
    }
  }, [defaultAudience]);

  // Pricing constants (in ₹ per sq ft)
  const baseRates = {
    residential: {
      standard: 1450,
      premium: 1950,
      luxury: 2450
    },
    commercial: {
      standard: 1600,
      premium: 2100,
      luxury: 2650
    },
    industrial: {
      standard: 1200,
      premium: 1550,
      luxury: 1900
    }
  };

  const soilMultiplier = {
    hard: 1.0,    // No foundation multiplier
    sandy: 1.15,  // Piling foundation (+15%)
    clay: 1.22    // Deep excavation/soil stabilization (+22%)
  };

  const addonCosts = {
    sump: 120000,          // Underground RCC Sump - 20k Liters
    rainwater: 45000,      // Rainwater harvesting structure
    waterproofing: 35000,  // Rooftop waterproofing membrane
    retainingWall: 85000   // Structural Retaining Wall
  };

  // Calculations
  const baseRatePerSqFt = baseRates[projectType][materialTier];
  const adjustedRate = Math.round(baseRatePerSqFt * soilMultiplier[soilType]);
  const structuralCivilCost = adjustedRate * areaSize;
  
  let addonTotal = 0;
  const activeAddonNames: string[] = [];
  if (addons.sump) { addonTotal += addonCosts.sump; activeAddonNames.push('Underground RCC Sump (20kL)'); }
  if (addons.rainwater) { addonTotal += addonCosts.rainwater; activeAddonNames.push('Rainwater Harvesting System'); }
  if (addons.waterproofing) { addonTotal += addonCosts.waterproofing; activeAddonNames.push('Rooftop Waterproofing Membrane'); }
  if (addons.retainingWall) { addonTotal += addonCosts.retainingWall; activeAddonNames.push('Structural Concrete Retaining Wall'); }

  const totalCostEstimate = structuralCivilCost + addonTotal;

  // Cost breakdown percentages (approximate structural realities)
  const foundationPct = soilType === 'hard' ? 0.12 : soilType === 'sandy' ? 0.22 : 0.25;
  const concreteFramePct = 0.35; // Pillars, Slabs, Beams
  const brickworkMasonryPct = 0.23; // Walls, Interior Plastering
  const finishesUtilityPct = 1 - foundationPct - concreteFramePct - brickworkMasonryPct; // Plumb, Elect, Curing, Finishes

  const breakdown = {
    foundation: Math.round(structuralCivilCost * foundationPct),
    concreteFrame: Math.round(structuralCivilCost * concreteFramePct),
    brickwork: Math.round(structuralCivilCost * brickworkMasonryPct),
    finishes: Math.round(structuralCivilCost * finishesUtilityPct)
  };

  React.useEffect(() => {
    const list: string[] = [];
    if (addons.sump) list.push('Underground RCC Sump (20kL)');
    if (addons.rainwater) list.push('Rainwater Harvesting System');
    if (addons.waterproofing) list.push('Rooftop Waterproofing Membrane');
    if (addons.retainingWall) list.push('Structural Concrete Retaining Wall');

    const activeDetails = {
      projectType: projectType === 'residential' ? 'Residential Turnkey Build' : projectType === 'commercial' ? 'Commercial Office/Retail' : 'Industrial PEB Shed/Warehouse',
      areaSize: areaSize,
      soilType: soilType === 'hard' ? 'Hard Red Soil' : soilType === 'sandy' ? 'Sandy Coast Soil (Piling Required)' : 'Clay Cotton Soil (Shoring Required)',
      materialTier: materialTier === 'standard' ? 'Standard Tier' : materialTier === 'premium' ? 'Premium (Recommended)' : 'Luxury Teak/Marble Tier',
      totalEstimate: totalCostEstimate,
      addons: list,
      timestamp: Date.now()
    };
    localStorage.setItem('balaji_current_estimate', JSON.stringify(activeDetails));
  }, [projectType, areaSize, soilType, materialTier, addons, totalCostEstimate]);

  const [submitted, setSubmitted] = React.useState(false);

  const handleInquirySubmit = () => {
    onSubmitEstimate({
      projectType: projectType === 'residential' ? 'Residential Turnkey Build' : projectType === 'commercial' ? 'Commercial Office/Retail' : 'Industrial PEB Shed/Warehouse',
      propertyType: projectType === 'residential' ? 'homeowner' : 'commercial',
      areaSize: areaSize,
      soilType: soilType === 'hard' ? 'Hard Red Soil' : soilType === 'sandy' ? 'Sandy Coast Soil (Piling Required)' : 'Clay Cotton Soil (Shoring Required)',
      materialTier: materialTier === 'standard' ? 'Standard Tier' : materialTier === 'premium' ? 'Premium (Recommended)' : 'Luxury Teak/Marble Tier',
      totalEstimate: totalCostEstimate,
      addons: activeAddonNames
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden font-sans">
      <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-yellow-500 text-slate-950 rounded-lg">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm uppercase tracking-wide">Balaji Estimate Engine</h3>
            <p className="text-[10px] text-slate-400">Civil and Structural Cost Evaluator</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-1 text-[11px] font-bold uppercase text-yellow-500">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real-time Indian Standards</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Input Parameters Section */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
          {/* Step 1: Project Classification */}
          <div>
            <label className="text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-3">
              1. Project Sector
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'residential', label: 'Residential' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'industrial', label: 'Industrial/PEB' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setProjectType(opt.id as any);
                    if (opt.id === 'commercial' && areaSize < 4000) setAreaSize(8000);
                    if (opt.id === 'industrial' && areaSize < 6000) setAreaSize(15000);
                    if (opt.id === 'residential' && areaSize > 8000) setAreaSize(2500);
                  }}
                  className={`py-2.5 rounded-lg text-xs font-bold transition-all border ${
                    projectType === opt.id
                      ? 'bg-slate-900 border-slate-950 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Soil Foundation Assessment */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                2. Site Soil Condition (Affects Foundation)
              </label>
              <span className="text-[10px] text-slate-400 font-bold font-mono">Select Soil Type</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'hard', label: 'Hard Red Clay', sub: 'Standard footing' },
                { id: 'sandy', label: 'Sandy/Seaside', sub: 'Pile foundations (+15%)' },
                { id: 'clay', label: 'Black Cotton', sub: 'Deep excavation (+22%)' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSoilType(opt.id as any)}
                  className={`p-3 rounded-lg text-left transition-all border flex flex-col justify-between h-[72px] ${
                    soilType === opt.id
                      ? 'bg-slate-900 border-slate-950 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-bold block">{opt.label}</span>
                  <span className={`text-[9px] ${soilType === opt.id ? 'text-yellow-500' : 'text-slate-500'}`}>
                    {opt.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Area slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                3. Built-Up Area Size
              </label>
              <div className="bg-slate-100 border border-slate-200 rounded px-2.5 py-1 text-xs font-mono font-bold text-slate-900">
                {areaSize.toLocaleString()} Sq. Ft.
              </div>
            </div>
            <input
              type="range"
              min={projectType === 'residential' ? 600 : projectType === 'commercial' ? 1500 : 3000}
              max={projectType === 'residential' ? 10000 : projectType === 'commercial' ? 45000 : 80000}
              step={projectType === 'residential' ? 100 : 500}
              value={areaSize}
              onChange={(e) => setAreaSize(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-500 focus:outline-none"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold font-mono mt-1.5">
              <span>Min: {projectType === 'residential' ? '600' : projectType === 'commercial' ? '1.5k' : '3k'} Sq.Ft.</span>
              <span>Max: {projectType === 'residential' ? '10k' : projectType === 'commercial' ? '45k' : '80k'} Sq.Ft.</span>
            </div>
          </div>

          {/* Step 4: Quality & Material Brands tier */}
          <div>
            <label className="text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-3">
              4. Raw Material Brand & Finish Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'standard', label: 'Standard Tier', cost: `₹${baseRates[projectType].standard}/sqft`, desc: 'ISI Local cement, Standard FE500 steel, basic vitrified flooring.' },
                { id: 'premium', label: 'Premium Tier', cost: `₹${baseRates[projectType].premium}/sqft`, desc: 'UltraTech Cement, JSW Fe550 Neosteel, Kajaria Tiles, Finolex wires (Recommended).' },
                { id: 'luxury', label: 'Luxury Custom', cost: `₹${baseRates[projectType].luxury}/sqft`, desc: 'Grade M45 Concrete, Teak frames, Italian marble prep, premium smart automation pipes.' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setMaterialTier(opt.id as any)}
                  className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between h-36 ${
                    materialTier === opt.id
                      ? 'bg-slate-900 border-slate-950 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold block">{opt.label}</span>
                    <p className={`text-[10px] leading-tight mt-1.5 line-clamp-3 ${materialTier === opt.id ? 'text-slate-300' : 'text-slate-500'}`}>
                      {opt.desc}
                    </p>
                  </div>
                  <span className={`text-xs font-mono font-black mt-2 block ${materialTier === opt.id ? 'text-yellow-500' : 'text-slate-900'}`}>
                    {opt.cost}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Optional Structural Addons */}
          <div>
            <label className="text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-3">
              5. Add Concrete Structural Addons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'sump', label: 'Underground RCC Sump (20k Liters)', cost: '₹1,20,000' },
                { id: 'rainwater', label: 'Rainwater Harvesting System', cost: '₹45,000' },
                { id: 'waterproofing', label: 'Rooftop Waterproofing Shield', cost: '₹35,000' },
                { id: 'retainingWall', label: 'Heavy RCC Retaining Wall', cost: '₹85,000' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAddons({ ...addons, [opt.id]: !addons[opt.id] })}
                  className={`p-3 rounded-lg text-left border transition-all flex items-center justify-between ${
                    addons[opt.id]
                      ? 'bg-slate-900 border-slate-950 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${addons[opt.id] ? 'bg-yellow-500 border-yellow-600 text-slate-950' : 'border-slate-300 bg-white'}`}>
                      {addons[opt.id] && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-bold">{opt.label}</span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold shrink-0 ml-2 ${addons[opt.id] ? 'text-yellow-500' : 'text-slate-500'}`}>
                    {opt.cost}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculation Result / Spec Sheet Output */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 flex flex-col justify-between">
          <div className="space-y-6">
            <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
              Project Quotation Output
            </h4>

            {/* Total Cost Display Card */}
            <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-widest block">
                  Estimated Project Cost
                </span>
                <span className="text-[10px] text-slate-400 font-sans hidden sm:inline">*approx estimate</span>
              </div>
              <div className="text-2xl sm:text-3xl xl:text-4xl font-black text-yellow-500 font-mono flex flex-wrap items-baseline gap-x-2">
                <span>₹{totalCostEstimate.toLocaleString()}</span>
                <span className="text-[10px] font-normal text-slate-400 font-sans sm:hidden">*approx estimate</span>
              </div>
              <div className="mt-3.5 pt-3.5 border-t border-slate-800 flex justify-between text-xs text-slate-300 font-mono">
                <span>Rate per Sq. Ft.</span>
                <span className="font-bold text-white">₹{adjustedRate.toLocaleString()}</span>
              </div>
            </div>

            {/* Subtotal Itemized Details */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider block">
                Line Item Costing (Estimated Realities)
              </span>
              <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 text-xs shadow-sm">
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-600 font-medium">Foundation, Excavation & Shoring:</span>
                  <span className="font-mono font-bold text-slate-900">₹{breakdown.foundation.toLocaleString()}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-600 font-medium">RCC Column, Slab Frame casting:</span>
                  <span className="font-mono font-bold text-slate-900">₹{breakdown.concreteFrame.toLocaleString()}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-600 font-medium">Red Brickwork Masonry & Plastering:</span>
                  <span className="font-mono font-bold text-slate-900">₹{breakdown.brickwork.toLocaleString()}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-600 font-medium">Concealed Plumb, Elect & Basic Prep:</span>
                  <span className="font-mono font-bold text-slate-900">₹{breakdown.finishes.toLocaleString()}</span>
                </div>
                {addonTotal > 0 && (
                  <div className="p-3.5 flex justify-between bg-yellow-50/50">
                    <span className="text-yellow-800 font-bold">Concrete Structural Addons:</span>
                    <span className="font-mono font-bold text-yellow-900">₹{addonTotal.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Material Assurance disclaimer */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 flex items-start space-x-2.5 text-[11px] text-slate-700">
              <ShieldAlert className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                *Estimates are calculated using current Chennai steel and concrete indices. Actual values may vary slightly based on raw steel procurement dates. No non-standard sands are ever used.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 space-y-2.5">
            {submitted ? (
              <div className="bg-green-100 border border-green-300 text-green-800 p-3.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Estimate Saved & Sent to Inquiries Room!</span>
              </div>
            ) : (
              <button
                onClick={handleInquirySubmit}
                className="w-full bg-slate-900 hover:bg-slate-950 text-white font-extrabold py-4 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow shadow-slate-900/10"
                id="calc-submit-lead"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Lead & Book Consultation</span>
              </button>
            )}
            <p className="text-[10px] text-slate-400 text-center">
              Your generated estimate will be recorded in the Balaji Staff Lead Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
