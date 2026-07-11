import { Project, Service, Testimonial, TrustFactor } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Sri Balaji Business Plaza',
    category: 'commercial',
    location: 'OMR Road, Chennai',
    area: '48,500 Sq. Ft.',
    duration: '16 Months',
    client: 'Sri Balaji Developers & Co',
    description: 'A modern 5-story commercial office complex with integrated double-height basement parking, post-tensioned slabs for optimal space, and high-efficiency concrete masonry.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2025,
    highlights: [
      'Seismic-resistant structural frame',
      'Advanced waterproofing for double basements',
      'Completed 15 days ahead of schedule',
      'Zero-accident safety record over 120,000 man-hours'
    ],
    safetyHours: 120000
  },
  {
    id: 'p2',
    title: 'Golden Enclave Residential Apartments',
    category: 'residential',
    location: 'Whitefield, Bengaluru',
    area: '32,000 Sq. Ft. (18 Units)',
    duration: '14 Months',
    client: 'Golden Meadows Estates',
    description: 'A structural concrete-framed G+4 residential community. Features custom red-brick masonry partitions, modern plumbing shafts, premium exterior plastering, and rainwater harvesting structures.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2025,
    highlights: [
      'Premium RCC (Reinforced Cement Concrete) structure using M25 grade cement',
      'Integrated solar panel roof mounts',
      'Fully compliant with local building sanctions (BBMP approved)',
      'Underground sumps with 45,000-liter capacity'
    ],
    safetyHours: 85000
  },
  {
    id: 'p3',
    title: 'Vigneshwara Logistics Hub',
    category: 'industrial',
    location: 'L&T Bypass, Coimbatore',
    area: '85,000 Sq. Ft.',
    duration: '10 Months',
    client: 'Vignesh Transport & Warehousing',
    description: 'Heavy-duty industrial warehouse boasting flat-floor concrete technology (FM2 compliance for high-reach forklifts), heavy-gauge PEB structural steel columns, and continuous concrete driveways.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2024,
    highlights: [
      'Laser-screed flooring with high abrasion resistance',
      'Heavy structural steel truss setup with corrosion-resistant primer',
      '6 high-speed docking bays with heavy-duty dock levellers',
      'Designed for 10-ton axle loading capacity'
    ],
    safetyHours: 95000
  },
  {
    id: 'p4',
    title: 'Balaji Metro Link Pier & Bridge Works',
    category: 'infrastructure',
    location: 'Kukatpally Phase-II, Hyderabad',
    area: '2.4 Km Stretch (Civil Contract)',
    duration: '22 Months',
    client: 'State Infrastructure Board (Subcontract)',
    description: 'Precision engineering and casting of heavy RCC piers, hammerhead caps, and prestressed girders. Performed highly critical night-time heavy lifts and structural concrete pouring under dense traffic conditions.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2024,
    highlights: [
      'High-grade M45 & M50 structural concrete with fly-ash blending',
      'Complex pre-tensioning and post-tensioning operations',
      'Rigid adherence to national highways safety standards',
      'Successful placement of 42 pre-cast concrete girders'
    ],
    safetyHours: 240000
  },
  {
    id: 'p5',
    title: 'The Royal Oak Custom Villa',
    category: 'residential',
    location: 'ECR Road, Chennai',
    area: '4,200 Sq. Ft.',
    duration: '9 Months',
    client: 'Mr. R. Karthikeyan (Businessman)',
    description: 'A premium custom load-bearing independent villa. Engineered with high-strength structural brickwork, premium double-glazed windows, solid foundation piling for sandy soil, and fine custom marble flooring prep.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2026,
    highlights: [
      'Friction-pile foundation specifically engineered for seaside sandy terrain',
      'Teak-wood joinery and custom concealed conduits for smart home automation',
      '100% compliant with Vastu Shastra principles as per client request',
      'Double-coat cement plaster with textured acrylic weather-shield finish'
    ],
    safetyHours: 18000
  },
  {
    id: 'p6',
    title: 'Coimbatore Textile Factory Extension',
    category: 'industrial',
    location: 'Peelamedu, Coimbatore',
    area: '18,500 Sq. Ft.',
    duration: '6 Months',
    client: 'Saraswathi Weaving Mills',
    description: 'Fast-track structural concrete addition to an active manufacturing mill. Required strict dust-control boundaries, zero manufacturing downtime, and heavy-duty slab integration to support weaving looms.',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2026,
    highlights: [
      'Dampener concrete foundations to isolate loom machinery vibrations',
      'Structural steel roof truss with insulated metal sheets to control humidity',
      'Zero interruption to the ongoing 24/7 textile factory operations',
      'Completed in record 180 days with local raw material sourcing'
    ],
    safetyHours: 42000
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Civil & Structural Concrete Construction',
    iconName: 'Building2',
    shortDescription: 'From high-strength heavy foundations to complete multi-story RCC framing for commercial and residential builders.',
    fullDescription: 'We deliver uncompromising structural safety using the highest quality grades of cement and premium thermo-mechanically treated (TMT) steel. Our expertise covers deep column foundations, pile structures, post-tensioned slabs, high-accuracy formwork, and precision concrete masonry.',
    features: [
      'High-grade RCC casting (M25 to M50 concrete)',
      'Precision automatic steel bar bending & placement',
      'Shoring and deep excavation support',
      'Strict quality checks with concrete cube testing logs'
    ],
    costIndicator: '₹1,400 - ₹1,800 per Sq. Ft.',
    avgTimeline: '6 - 12 Months',
    targetAudience: ['Real estate developers', 'Commercial property owners']
  },
  {
    id: 's2',
    title: 'Turnkey Residential Home Building',
    iconName: 'Home',
    shortDescription: 'Complete single-point responsibility for building your dream home from site analysis to housewarming ready.',
    fullDescription: 'We handle every phase of independent house construction, taking away the stress of managing multiple laborers. Our package includes architectural drafting assistance, structural design, local municipal building approvals, raw material procurement, civil masonry, plumbing, electrical piping, and high-quality plaster finish.',
    features: [
      'Detailed billing with zero hidden charges',
      'Vastu Shastra compliant layout planning',
      'Regular photo updates on WhatsApp twice a week',
      '1-Year post-handover structural guarantee'
    ],
    costIndicator: '₹1,850 - ₹2,400 per Sq. Ft. (Fully finished)',
    avgTimeline: '8 - 14 Months',
    targetAudience: ['Homeowners']
  },
  {
    id: 's3',
    title: 'Commercial & Retail Construction',
    iconName: 'ShoppingBag',
    shortDescription: 'Constructing durable, spacious multi-tenant commercial centers, shopping complexes, and retail storefronts.',
    fullDescription: 'We construct retail spaces optimized for high footfalls and maximum usable area. Our commercial designs integrate wide open column spans, dedicated service shafts, compliance-ready fire exits, high-capacity underground water tanks, and durable glass-and-plaster exterior facades.',
    features: [
      'High-span columns for adaptable layout configurations',
      'Built-in provisions for heavy central HVAC ducts',
      'Full compliance with Commercial Fire Safety & Parking norms',
      'Heavy-duty exterior paving for commercial vehicle loads'
    ],
    costIndicator: '₹1,600 - ₹2,100 per Sq. Ft.',
    avgTimeline: '10 - 16 Months',
    targetAudience: ['Commercial property owners', 'Real estate developers']
  },
  {
    id: 's4',
    title: 'Industrial Warehouses & PEB Structures',
    iconName: 'Warehouse',
    shortDescription: 'Large-scale flat-floor concrete warehousing solutions and structural steel Pre-Engineered Buildings (PEB).',
    fullDescription: 'We design and erect high-durability industrial structures suited for logistics, machinery, and textiles. Our teams are certified in advanced steel welding, rigid frame truss erections, heavy foundation dampening, and dustless industrial super-flat concrete floors.',
    features: [
      'Super-flat concrete floors (FM2 standard compliance)',
      'Corrosion-resistant Pre-Engineered structural steel framing',
      'Sandwich panel insulated sheeting for interior temperature control',
      'Heavy-duty crane gantry support girders built in'
    ],
    costIndicator: '₹1,200 - ₹1,550 per Sq. Ft.',
    avgTimeline: '5 - 9 Months',
    targetAudience: ['Commercial property owners', 'Real estate developers']
  },
  {
    id: 's5',
    title: 'Renovation, Floor Additions & Retrofitting',
    iconName: 'Hammer',
    shortDescription: 'Adding additional floors safely to existing buildings and repairing weakened structural columns or beams.',
    fullDescription: 'Increase the life and utility of your existing property without demolishing it. We carry out precision structural load calculations, install support scaffolding, drill chemical anchoring bolts, and perform steel-jacketing to strengthen older pillars before adding additional floors.',
    features: [
      'Thorough non-destructive concrete rebound hammer testing',
      'High-precision load calculations by certified structural engineers',
      'Chemical micro-concrete anchoring for flawless joints',
      'Slab cutouts and reinforced steel retrofitting'
    ],
    costIndicator: 'Based on actual structural assessment',
    avgTimeline: '2 - 5 Months',
    targetAudience: ['Homeowners', 'Commercial property owners']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'K. S. Senthil Kumar',
    role: 'Managing Director',
    company: 'Saraswathi Weaving Mills',
    text: 'Balaji Constructions handled the factory extension for our high-speed weaving mill. We were extremely concerned about dust and machinery vibration, but their engineers set up excellent separation barriers. The concrete floor slab is absolutely flat, and they completed it with zero downtime for our existing production line. Highly trustworthy civil contractor!',
    rating: 5,
    projectType: 'Industrial Mill Extension',
    avatarSeed: 'senthil'
  },
  {
    id: 't2',
    name: 'Mrs. Malini Viswanathan',
    role: 'Independent House Owner',
    text: 'Building a home in Chennai while living abroad is usually a nightmare. Balaji Constructions made it completely worry-free. Their site supervisor sent us photos and video updates on WhatsApp every Tuesday and Friday without fail. Every single truckload of cement and steel was documented. There were absolutely no surprise costs, and the finish is beautiful.',
    rating: 5,
    projectType: '3BHK Custom Turnkey Villa',
    avatarSeed: 'malini'
  },
  {
    id: 't3',
    name: 'V. R. Subramanian',
    role: 'Senior Project Lead',
    company: 'Golden Meadows Estates',
    text: 'We subcontracted the structural concrete framing and brick masonry for our 18-unit residential apartment project to Balaji. Their shuttering quality, alignment, and spacing of reinforcing steel are excellent. They have their own reliable labor workforce and batching concrete contacts, which prevented the usual labor delays. Will definitely partner on our next commercial layout.',
    rating: 5,
    projectType: 'RCC Apartment Frame Structure',
    avatarSeed: 'subbu'
  },
  {
    id: 't4',
    name: 'Arun Prasath',
    role: 'Commercial Promoter',
    company: 'Prasath Retail Complexes',
    text: 'Balaji Constructions recently completed our commercial building on OMR. Their team demonstrated high technical knowledge regarding deep excavation shoring and high-efficiency concrete. They worked smoothly with local authorities for compliance safety certificates, saving us a massive amount of running around.',
    rating: 4.8,
    projectType: 'Commercial Retail Plaza',
    avatarSeed: 'arun'
  }
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    id: 'tf1',
    number: '12+',
    label: 'Years of Experience',
    sublabel: 'Delivering solid structural builds across Tamil Nadu & Karnataka.',
    iconName: 'Briefcase'
  },
  {
    id: 'tf2',
    number: '150+',
    label: 'Completed Projects',
    sublabel: 'A robust portfolio ranging from individual houses to large warehouses.',
    iconName: 'CheckCircle'
  },
  {
    id: 'tf3',
    number: '100%',
    label: 'Approved Material Standards',
    sublabel: 'We strictly use ISI-marked cement, standard FE550 TMT steel bars, and river-sand alternatives.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'tf4',
    number: '620k+',
    label: 'Safe Man-Hours',
    sublabel: 'Rigid on-site helmets, harness safety nets, and certified scaffolding protocols.',
    iconName: 'HardHat'
  }
];

export const CONTACT_INFO = {
  phone: '+91 98450 12345',
  whatsapp: '+919845012345',
  email: 'inquiries@balajiconstructions.com',
  officeAddress: 'No. 45, 1st Floor, Balaji Towers, Nehru Nagar Outer Ring Road, Chennai, Tamil Nadu - 600096',
  workingHours: 'Mon - Sat: 9:00 AM - 6:30 PM (Sunday Closed)'
};
