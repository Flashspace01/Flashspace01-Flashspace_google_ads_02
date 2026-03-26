export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface PageContent {
  slug: string;
  heroTitle: string;
  heroHighlight?: string;
  heroSubtitle: string;
  heroImage?: string;
  inquiryType: string;
  trustLogos: string[];
  features: Feature[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  metaTitle: string;
  metaDescription: string;
}

const sharedTrustLogos = [
  "Dubai Chamber",
  "IFZA",
  "RAKEZ",
  "DMCC",
  "DET",
  "DAFZA",
];

const sharedTestimonials: Testimonial[] = [
  {
    name: "Ahmad Al Rashid",
    role: "CEO, Rashid Trading LLC",
    text: "Flash Space made our UAE company formation seamless. From licensing to visa, everything was handled professionally.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Founder, Chen Digital",
    text: "The team's expertise in free zone setup saved us weeks of research. Highly recommend their end-to-end service.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Managing Director, Torres Consulting",
    text: "Outstanding PRO services and bank account assistance. They truly understand the UAE business landscape.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder, NexGen Tech",
    text: "From Golden Visa processing to office setup, Flash Space delivered beyond expectations. A true one-stop shop.",
    rating: 5,
  },
];

// ========== SET A: Business Setup Pages ==========

const freeZoneOverview: PageContent = {
  slug: "free-zone-overview",
  heroTitle: "UAE Free Zone Company Formation",
  heroSubtitle: "Enjoy 100% foreign ownership, zero corporate tax, and full profit repatriation in over 45 free zones across the UAE.",
  inquiryType: "Free Zone Setup",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "100% Foreign Ownership", description: "Retain full control of your company with no local sponsor requirement in any UAE free zone.", icon: "Shield" },
    { title: "0% Corporate & Income Tax", description: "Benefit from tax-free profits for up to 50 years with guaranteed government-backed incentives.", icon: "Wallet" },
    { title: "Full Profit Repatriation", description: "Transfer 100% of your earnings to any country with no currency restrictions or capital controls.", icon: "ArrowUpRight" },
    { title: "Fast Company Registration", description: "Get your trade license issued in as little as 2 working days with our streamlined digital process.", icon: "Zap" },
    { title: "45+ Free Zones Available", description: "Choose from specialized zones for tech, media, healthcare, trading, and more across all 7 emirates.", icon: "MapPin" },
    { title: "Visa Packages Included", description: "Get investor and employee residence visas bundled with your free zone license package.", icon: "Users" },
  ],
  faqs: [
    { question: "What is a UAE free zone?", answer: "A free zone is a designated economic area in the UAE that offers special incentives including 100% foreign ownership, tax exemptions, and simplified import/export procedures to attract international businesses." },
    { question: "How much does a free zone license cost?", answer: "Costs range from AED 5,750 to AED 50,000+ depending on the free zone, business activity, and visa package. Flash Space helps you find the most cost-effective option for your needs." },
    { question: "Can I do business in the UAE mainland with a free zone license?", answer: "Free zone companies can sell globally and within the free zone. To trade directly in the UAE mainland market, you may need a dual license or appoint a local distributor." },
    { question: "How long does it take to set up a free zone company?", answer: "With Flash Space, most free zone companies are fully operational within 3-5 working days, including trade license issuance and initial visa processing." },
    { question: "Do I need to be physically present in the UAE?", answer: "Many free zones allow remote incorporation. However, you will need to visit the UAE for Emirates ID biometrics and visa stamping if applying for residency." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Free Zone Company Setup | Flash Space",
  metaDescription: "Set up your free zone company in the UAE with 100% ownership, 0% tax, and fast licensing. Expert guidance from Flash Space.",
};

const businessActivities: PageContent = {
  slug: "business-activities",
  heroTitle: "2,000+ Licensed Business Activities",
  heroSubtitle: "Choose from thousands of DED-approved commercial, professional, and industrial activities for your UAE business.",
  inquiryType: "Business Activities",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Commercial Activities", description: "Trading, import/export, e-commerce, general trading — access the full spectrum of commercial licenses.", icon: "ShoppingCart" },
    { title: "Professional Activities", description: "Consulting, IT services, marketing, legal, accounting — over 1,000 professional service categories.", icon: "Briefcase" },
    { title: "Industrial Activities", description: "Manufacturing, food production, packaging — set up industrial operations with the right permits.", icon: "Factory" },
    { title: "Activity Grouping", description: "Combine multiple related activities under a single license to maximize your business scope.", icon: "Layers" },
    { title: "Expert Activity Matching", description: "Our consultants match your business model to the optimal activity codes for licensing efficiency.", icon: "Target" },
    { title: "Regulatory Compliance", description: "We handle approvals from DED, DHA, SCA, and other regulators for specialized activities.", icon: "ClipboardCheck" },
  ],
  faqs: [
    { question: "How many activities can I add to one license?", answer: "Most free zones allow 1-3 activities per license, while mainland licenses can include up to 10 related activities. Additional activities may incur extra fees." },
    { question: "What is the difference between commercial and professional activities?", answer: "Commercial activities involve trading goods, while professional activities are service-based. This distinction affects license type, office requirements, and visa quotas." },
    { question: "Can I change my business activity later?", answer: "Yes, business activities can be added, removed, or changed during license renewal. Some changes may require additional approvals or a new license category." },
    { question: "Do I need special approvals for certain activities?", answer: "Yes, activities in healthcare, education, food, legal services, and financial services require additional approvals from their respective regulatory bodies." },
    { question: "How do I know which activity code fits my business?", answer: "Flash Space consultants analyze your business model and recommend the most suitable activity codes, ensuring compliance and operational flexibility." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Business Activities & License Types | Flash Space",
  metaDescription: "Explore 2,000+ approved business activities in the UAE. Get expert guidance on selecting the right license type for your company.",
};

const uaeResidencyVisa: PageContent = {
  slug: "uae-residency-visa",
  heroTitle: "UAE Residence Visa Services",
  heroSubtitle: "Complete end-to-end visa processing including medical tests, Emirates ID, and visa stamping for investors and employees.",
  inquiryType: "Visa Services",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Investor Visa", description: "Secure your 2 or 3-year UAE residence visa as a company owner with full sponsorship support.", icon: "Award" },
    { title: "Employee Visas", description: "Sponsor employees on your company license with quota management and labor card processing.", icon: "Users" },
    { title: "Family Visa Sponsorship", description: "Sponsor your spouse, children, and parents for UAE residency under your investor visa.", icon: "Heart" },
    { title: "Medical & Emirates ID", description: "We coordinate DHA medical fitness tests and ICP Emirates ID biometric appointments.", icon: "HeartPulse" },
    { title: "Visa Renewal & Cancellation", description: "Hassle-free renewals before expiry and compliant cancellation when needed.", icon: "RefreshCw" },
    { title: "Status Change Services", description: "Convert visit or tourist visas to residence visas without leaving the UAE.", icon: "ArrowRightLeft" },
  ],
  faqs: [
    { question: "How long does the visa process take?", answer: "The full process including entry permit, medical test, Emirates ID, and visa stamping typically takes 7-15 working days depending on the emirate and visa type." },
    { question: "What documents do I need for a UAE residence visa?", answer: "You need a valid passport (6+ months validity), passport-size photos, medical fitness certificate, Emirates ID application, and your company trade license." },
    { question: "Can I sponsor my family on an investor visa?", answer: "Yes, investor visa holders earning above AED 4,000/month or holding a 1-bedroom tenancy contract can sponsor their spouse, children under 18 (or 25 if studying), and parents." },
    { question: "Do I need to be in the UAE for the visa process?", answer: "You need to be in the UAE for the medical test and Emirates ID biometrics. The entry permit can be applied for while you are outside the country." },
    { question: "What is the cost of a UAE residence visa?", answer: "Visa costs range from AED 3,000 to AED 7,000 depending on the type (investor vs. employee), emirate, and processing speed (normal vs. express)." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Residence Visa Processing | Flash Space",
  metaDescription: "End-to-end UAE residence visa processing for investors and employees. Medical tests, Emirates ID, and visa stamping handled by experts.",
};

const freeZoneLicenseLocations: PageContent = {
  slug: "free-zone-license-locations",
  heroTitle: "Free Zone License Locations & Pricing",
  heroSubtitle: "Compare 45+ UAE free zones by cost, location, activities, and visa quota to find your ideal setup.",
  inquiryType: "Free Zone Pricing",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "IFZA (Fujairah)", description: "From AED 5,750 — one of the most affordable free zones with flexible visa packages and 1,500+ activities.", icon: "MapPin" },
    { title: "DMCC (Dubai)", description: "The world's #1 free zone for commodities trading, located in JLT with premium office facilities.", icon: "Building2" },
    { title: "RAKEZ (Ras Al Khaimah)", description: "Budget-friendly setup from AED 6,500 with industrial and commercial zones available.", icon: "Factory" },
    { title: "DAFZA (Dubai Airport)", description: "Strategic location near Dubai International Airport, ideal for logistics and aviation businesses.", icon: "Plane" },
    { title: "Dubai Silicon Oasis", description: "Tech-focused free zone with incubator programs and access to a thriving innovation ecosystem.", icon: "Cpu" },
    { title: "Abu Dhabi Global Market", description: "International financial centre with its own common law jurisdiction and world-class regulatory framework.", icon: "Landmark" },
  ],
  faqs: [
    { question: "Which is the cheapest free zone in the UAE?", answer: "IFZA in Fujairah and Ajman Free Zone offer some of the most competitive packages starting from AED 5,750 including license and one visa." },
    { question: "Can I have a Dubai address from a non-Dubai free zone?", answer: "No, your registered address will be in the emirate where the free zone is located. However, you can operate and meet clients anywhere in the UAE." },
    { question: "Do all free zones offer the same activities?", answer: "No, each free zone has its own list of approved activities. Specialized zones like Dubai Healthcare City or twofour54 focus on specific sectors." },
    { question: "How many visas can I get per free zone license?", answer: "Visa quotas vary: flexi-desk packages offer 1-3 visas, while dedicated office spaces can provide 6-20+ visas based on office size." },
    { question: "Can I upgrade my free zone package later?", answer: "Yes, you can upgrade from a flexi-desk to a dedicated office, add visas, or include additional activities during your license renewal." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Free Zone License Locations & Pricing in UAE | Flash Space",
  metaDescription: "Compare 45+ UAE free zones by cost and location. Find the best free zone for your business with Flash Space.",
};

const registrationProcess: PageContent = {
  slug: "registration-process",
  heroTitle: "Company Registration Process",
  heroSubtitle: "Our streamlined 4-step process gets your UAE business registered and operational in as little as 3 working days.",
  inquiryType: "Registration Process",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Step 1: Consultation", description: "Free expert consultation to determine the best jurisdiction, license type, and business activity for your goals.", icon: "MessageCircle" },
    { title: "Step 2: Documentation", description: "We prepare and review all incorporation documents, MOA, and application forms for error-free submission.", icon: "FileText" },
    { title: "Step 3: License Issuance", description: "Submit applications to the relevant authority and receive your trade license digitally within 2-5 days.", icon: "CheckCircle" },
    { title: "Step 4: Post-Setup", description: "Bank account opening, visa processing, office setup, and operational launch support.", icon: "Rocket" },
    { title: "Dedicated Account Manager", description: "A single point of contact manages your entire setup journey from start to finish.", icon: "UserCheck" },
    { title: "Digital-First Process", description: "95% of the registration process is completed online — no unnecessary government office visits.", icon: "Laptop" },
  ],
  faqs: [
    { question: "What documents do I need to register a company?", answer: "You typically need passport copies, proof of address, a business plan (for some zones), and filled application forms. Flash Space prepares everything for you." },
    { question: "How long does company registration take?", answer: "Free zone registration takes 2-5 working days. Mainland registration takes 5-10 working days including initial approvals and license issuance." },
    { question: "Can I register a company remotely?", answer: "Yes, many jurisdictions allow remote incorporation via power of attorney. You only need to visit the UAE for visa-related biometrics." },
    { question: "What happens after I get my trade license?", answer: "After licensing, we assist with bank account opening, visa processing, office lease registration, and any regulatory approvals needed for operations." },
    { question: "Is there a minimum capital requirement?", answer: "Most free zones have no minimum capital requirement. Mainland LLCs technically require AED 300,000 but this is declared, not deposited." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Company Registration Process | Flash Space",
  metaDescription: "Register your UAE company in 3-5 days with our streamlined 4-step process. Expert handling from consultation to operations.",
};

const freeZoneSolution: PageContent = {
  slug: "free-zone-solution",
  heroTitle: "Our Free Zone Solution",
  heroSubtitle: "A complete, all-inclusive package that takes you from idea to fully operational UAE free zone company.",
  inquiryType: "Free Zone Solution",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "All-Inclusive Packages", description: "License, visa, office address, and post-setup support bundled in transparent, fixed-price packages.", icon: "Package" },
    { title: "Zone Selection Engine", description: "Our proprietary matching system recommends the best free zone based on your budget, activity, and visa needs.", icon: "Cpu" },
    { title: "Compliance Guaranteed", description: "We ensure your setup meets all regulatory requirements — no penalties, no surprises, no compliance gaps.", icon: "ShieldCheck" },
    { title: "Partner Network", description: "Direct relationships with 45+ free zone authorities for expedited processing and exclusive rates.", icon: "Handshake" },
    { title: "Post-Setup Support", description: "12 months of ongoing support including renewals, amendments, and government correspondence.", icon: "LifeBuoy" },
    { title: "Transparent Pricing", description: "No hidden fees. Every cost is itemized upfront so you know exactly what you're paying for.", icon: "Receipt" },
  ],
  faqs: [
    { question: "What is included in Flash Space's free zone package?", answer: "Our packages include trade license, establishment card, immigration card, 1-3 residence visas, registered office address, and 12 months of post-setup support." },
    { question: "How is Flash Space different from other setup consultants?", answer: "We offer AI-powered zone matching, transparent fixed pricing with no hidden fees, and a dedicated account manager for every client — not just a call center." },
    { question: "Do you handle renewals?", answer: "Yes, we manage your annual license renewal, visa renewals, and any amendments or additions to your license throughout the year." },
    { question: "Can I switch free zones later?", answer: "Yes, though it involves closing the company in one zone and re-registering in another. We handle the transition process to minimize disruption." },
    { question: "What if my application is rejected?", answer: "Rejections are rare with Flash Space (under 1%) because we pre-screen all applications. If it happens, we resolve the issue at no additional cost." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Complete Free Zone Solution | Flash Space",
  metaDescription: "All-inclusive UAE free zone company formation packages with transparent pricing, visa support, and 12 months of post-setup assistance.",
};

const dubaiMainland: PageContent = {
  slug: "dubai-mainland",
  heroTitle: "Dubai Mainland Company Setup",
  heroSubtitle: "Access the entire UAE market with a DET-licensed mainland company — trade freely with government, local, and international clients.",
  inquiryType: "Mainland Setup",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Full Market Access", description: "Trade anywhere in the UAE — with government entities, mainland businesses, and free zone companies.", icon: "Globe" },
    { title: "100% Foreign Ownership", description: "Since 2021, most mainland activities allow 100% foreign ownership without a local service agent.", icon: "Shield" },
    { title: "DET Licensing", description: "Obtain your commercial, professional, or industrial license from the Dubai Department of Economy and Tourism.", icon: "Landmark" },
    { title: "Unlimited Visas", description: "Visa quota based on office size — no cap on employee sponsorship with the right premises.", icon: "Users" },
    { title: "Government Contracts", description: "Only mainland companies can bid on UAE government tenders and public sector contracts.", icon: "FileText" },
    { title: "Branch Office Option", description: "Establish a UAE branch of your existing foreign company with no separate legal entity required.", icon: "GitBranch" },
  ],
  faqs: [
    { question: "Do I need a local partner for a mainland company?", answer: "For most activities since June 2021, no local partner is needed. Some strategic activities (oil, gas, banking) still require Emirati shareholding." },
    { question: "What is the difference between mainland and free zone?", answer: "Mainland companies can trade freely within the UAE and bid on government contracts. Free zone companies are limited to trading within their zone or internationally." },
    { question: "How much does a mainland license cost?", answer: "A Dubai mainland license typically costs AED 15,000-30,000 including license fees, establishment card, and initial approvals. Office lease is additional." },
    { question: "Do I need a physical office for a mainland company?", answer: "Yes, all mainland companies need a registered office address with an EJARI tenancy contract. Flash Space offers compliant office solutions." },
    { question: "Can I convert a free zone company to mainland?", answer: "You cannot directly convert, but you can establish a new mainland entity and transfer operations. Flash Space manages the full transition." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Dubai Mainland Company Formation | Flash Space",
  metaDescription: "Set up a Dubai mainland company with full market access. 100% foreign ownership, DET licensing, and unlimited visa quota.",
};

const mainlandSponsorship: PageContent = {
  slug: "mainland-sponsorship",
  heroTitle: "UAE Mainland Sponsorship",
  heroSubtitle: "Navigate local sponsorship requirements with confidence — we connect you with vetted Emirati sponsors for strategic activities.",
  inquiryType: "Sponsorship Services",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Vetted Sponsors", description: "Access our network of pre-screened, reliable Emirati sponsors with proven business track records.", icon: "ShieldCheck" },
    { title: "Legal Protection", description: "Robust side agreements and escrow arrangements to protect your investment and operational control.", icon: "Scale" },
    { title: "Annual Fee Management", description: "Transparent sponsor fee structures with clear payment schedules — no hidden charges or surprises.", icon: "Wallet" },
    { title: "Regulatory Compliance", description: "All sponsorship arrangements comply with UAE Commercial Companies Law and anti-fronting regulations.", icon: "ClipboardCheck" },
    { title: "Activity-Specific Matching", description: "We match you with sponsors experienced in your specific industry sector for smoother operations.", icon: "Target" },
    { title: "Exit Planning", description: "Clear exit mechanisms built into every sponsorship agreement for future flexibility.", icon: "ArrowRightLeft" },
  ],
  faqs: [
    { question: "Which activities still require a local sponsor?", answer: "Strategic sectors including oil & gas, banking, insurance, and some government-related activities still require 51% Emirati ownership or a local service agent." },
    { question: "How much does a local sponsor charge?", answer: "Annual sponsorship fees typically range from AED 15,000-50,000 depending on the activity, license type, and number of visas." },
    { question: "Is my investment protected with a sponsor?", answer: "Yes, Flash Space prepares comprehensive side agreements, profit-sharing contracts, and power of attorney documents to legally protect your interests." },
    { question: "Can I remove the sponsor later?", answer: "If your activity qualifies for 100% foreign ownership, we can help restructure your company to remove the sponsor arrangement." },
    { question: "What is a local service agent?", answer: "A local service agent is an Emirati individual or company who acts as a government liaison for your mainland LLC. They hold no ownership in your company." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Mainland Sponsorship Services | Flash Space",
  metaDescription: "Vetted Emirati sponsors for UAE mainland companies. Full legal protection and transparent fee structures with Flash Space.",
};

const mainlandLicence: PageContent = {
  slug: "dubai-mainland-licence",
  heroTitle: "Dubai Mainland Trade Licence",
  heroSubtitle: "Obtain your DET commercial, professional, or industrial trade license with expert guidance through every approval stage.",
  inquiryType: "Mainland Licence",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Commercial Licence", description: "For trading, import/export, and retail businesses — the most versatile mainland license type.", icon: "ShoppingCart" },
    { title: "Professional Licence", description: "For consultants, freelancers, and service providers — lower cost with flexible office requirements.", icon: "Briefcase" },
    { title: "Industrial Licence", description: "For manufacturing and production activities — includes workshop/factory space arrangements.", icon: "Factory" },
    { title: "Instant Licence (DET)", description: "Get your Dubai mainland license issued within 5 minutes through DET's Instant Licence program.", icon: "Zap" },
    { title: "Multi-Activity Licence", description: "Combine up to 10 related activities under a single mainland license for maximum flexibility.", icon: "Layers" },
    { title: "E-Trader Licence", description: "Sell products online from home — a cost-effective option for UAE nationals and residents.", icon: "Monitor" },
  ],
  faqs: [
    { question: "What types of mainland licenses are available?", answer: "Dubai offers commercial, professional, industrial, and tourism licenses. The type depends on your business activity classification." },
    { question: "How quickly can I get a mainland license?", answer: "DET's Instant Licence issues professional licenses in 5 minutes. Standard commercial licenses take 3-7 working days." },
    { question: "What is the difference between a commercial and professional license?", answer: "Commercial licenses are for trading goods and require a larger office space. Professional licenses are for services and have lower capital and space requirements." },
    { question: "Do I need initial approval before the license?", answer: "Yes, mainland licensing follows a multi-step process: trade name reservation, initial approval, office lease registration, and final license issuance." },
    { question: "Can I add activities to my license later?", answer: "Yes, additional activities can be added during your annual renewal or at any time through an amendment request to DET." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Dubai Mainland Trade Licence | Flash Space",
  metaDescription: "Get your Dubai mainland commercial, professional, or industrial licence. Fast DET processing with expert Flash Space guidance.",
};

const mainlandVisas: PageContent = {
  slug: "mainland-visas",
  heroTitle: "UAE Mainland Visa Services",
  heroSubtitle: "Complete mainland visa processing for investors, partners, employees, and dependents with dedicated PRO support.",
  inquiryType: "Mainland Visas",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Partner/Investor Visa", description: "Residence visa for mainland company shareholders and partners — valid for 2 or 3 years.", icon: "Award" },
    { title: "Employment Visa", description: "Sponsor employees with labor cards, work permits, and residence visa processing.", icon: "UserPlus" },
    { title: "Dependent Visas", description: "Family sponsorship for spouse, children, and parents on your mainland investor visa.", icon: "Heart" },
    { title: "PRO Processing", description: "Dedicated PRO handles all government typing, document clearing, and ministry visits.", icon: "BadgeCheck" },
    { title: "Medical & Biometrics", description: "Coordinated medical fitness tests at DHA-approved centres and Emirates ID biometrics.", icon: "HeartPulse" },
    { title: "Express Processing", description: "Urgent visa processing available for critical hires and time-sensitive relocations.", icon: "Zap" },
  ],
  faqs: [
    { question: "How many visas can I get on a mainland license?", answer: "Visa quota depends on your office space. A standard desk allocation provides 3 visas per 9 sqm of office space, with no upper cap for larger offices." },
    { question: "What is the difference between a work permit and a residence visa?", answer: "A work permit (labor card) authorizes employment; a residence visa authorizes living in the UAE. You need both to legally work and reside in the country." },
    { question: "How long does the mainland visa process take?", answer: "Full processing from entry permit to visa stamping takes 10-20 working days depending on the employee's nationality and processing type." },
    { question: "Can mainland visa holders work anywhere in the UAE?", answer: "Yes, mainland visa holders can work at any location within the UAE — there are no geographic restrictions like with some free zone visas." },
    { question: "What happens if an employee's visa is cancelled?", answer: "Cancelled employees receive a 30-day grace period to find new sponsorship, change to a tourist visa, or leave the UAE." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Mainland Visa Processing | Flash Space",
  metaDescription: "Mainland visa services for investors, employees, and dependents. PRO support and express processing available.",
};

const virtualSetup: PageContent = {
  slug: "virtual-setup",
  heroTitle: "VirtuFit: Virtual Business Setup",
  heroSubtitle: "Start your UAE business with a virtual desk — no physical office required. EJARI-free starter packages from AED 5,000.",
  inquiryType: "Virtual Setup",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Virtual Office Address", description: "A prestigious UAE business address for mail, licensing, and client communication — no physical space needed.", icon: "MapPin" },
    { title: "EJARI-Free Options", description: "Save on office lease costs with virtual desk packages that don't require an EJARI tenancy contract.", icon: "Wallet" },
    { title: "Mail Handling", description: "Professional mail receipt, scanning, and forwarding services for your business correspondence.", icon: "Mail" },
    { title: "Meeting Room Access", description: "Book professional meeting rooms on demand for client meetings and presentations.", icon: "Monitor" },
    { title: "Phone Answering", description: "Dedicated local phone number with professional receptionist services in your company name.", icon: "Phone" },
    { title: "Upgrade Path", description: "Seamlessly upgrade from virtual to physical office space as your business grows.", icon: "TrendingUp" },
  ],
  faqs: [
    { question: "What is a virtual office in the UAE?", answer: "A virtual office provides a registered business address and administrative services without a physical office space. It's ideal for startups and remote businesses." },
    { question: "Can I get a visa with a virtual office?", answer: "Some free zones offer visa packages with virtual offices (typically 1-3 visas). Mainland virtual offices may have limited visa options." },
    { question: "Is a virtual office address legitimate for licensing?", answer: "Yes, many free zones accept virtual office addresses for trade license registration. Flash Space only partners with government-approved virtual office providers." },
    { question: "How much does a virtual office cost?", answer: "Virtual office packages range from AED 3,000-10,000 per year depending on the location, services included, and visa quota." },
    { question: "Can I use a virtual office for bank account opening?", answer: "Yes, but some banks prefer physical office addresses. Flash Space advises on the best configuration for your banking needs." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Virtual Business Setup UAE | VirtuFit by Flash Space",
  metaDescription: "Start your UAE business virtually with no physical office. EJARI-free packages, mail handling, and meeting room access.",
};

// ========== SET B: Essential Services ==========

const bankAccount: PageContent = {
  slug: "bank-account",
  heroTitle: "UAE Bank Account Opening",
  heroSubtitle: "Open your corporate bank account with leading UAE banks including Wio, Emirates NBD, ADCB, and Mashreq — hassle-free.",
  inquiryType: "Bank Account",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Multi-Bank Options", description: "Choose from 15+ UAE banks including Wio, Emirates NBD, RAK Bank, ADCB, and digital-first neobanks.", icon: "Building2" },
    { title: "Guaranteed Opening", description: "Our banking relationships ensure a 95%+ success rate for corporate account applications.", icon: "CheckCircle" },
    { title: "Digital Banks", description: "Access modern neobanks like Wio Business for instant account setup and seamless digital banking.", icon: "Smartphone" },
    { title: "Multi-Currency Accounts", description: "Open accounts in AED, USD, EUR, GBP, and other major currencies for international operations.", icon: "Globe" },
    { title: "Documentation Support", description: "We prepare bank-ready documentation packages that meet stringent KYC and compliance requirements.", icon: "FileText" },
    { title: "Relationship Management", description: "Direct introductions to dedicated relationship managers at partner banks for priority service.", icon: "Handshake" },
  ],
  faqs: [
    { question: "How long does it take to open a corporate bank account?", answer: "Digital banks like Wio can approve accounts in 24-48 hours. Traditional banks typically take 2-4 weeks for full approval and activation." },
    { question: "What documents do I need for bank account opening?", answer: "Trade license, MOA/AOA, passport copies of all shareholders, proof of address, business plan, and reference letters. Flash Space prepares the complete package." },
    { question: "Can I open a bank account before getting my trade license?", answer: "No, a valid UAE trade license is required for corporate bank account opening. However, we can pre-introduce you to banks to speed up the process." },
    { question: "Which bank is best for startups?", answer: "Wio Business and RAK Bank are popular choices for startups due to lower minimum balance requirements and competitive fee structures." },
    { question: "Do I need to visit the bank in person?", answer: "Most banks require at least one in-person visit for KYC verification. Some digital banks can complete the process remotely." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Corporate Bank Account Opening | Flash Space",
  metaDescription: "Open your UAE corporate bank account with Wio, Emirates NBD, and more. 95%+ success rate with Flash Space banking experts.",
};

const accountingVat: PageContent = {
  slug: "accounting-vat",
  heroTitle: "Accounting & VAT Compliance",
  heroSubtitle: "Stay compliant with UAE Corporate Tax (9%) and VAT (5%) regulations. Expert bookkeeping, filing, and audit services.",
  inquiryType: "Accounting Services",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Corporate Tax Compliance", description: "Navigate the 9% UAE corporate tax regime with expert filing, calculation, and optimization strategies.", icon: "Calculator" },
    { title: "VAT Registration & Filing", description: "Mandatory 5% VAT registration, quarterly returns, and compliance for businesses above AED 375,000 revenue.", icon: "Receipt" },
    { title: "Monthly Bookkeeping", description: "Cloud-based bookkeeping with real-time financial dashboards using Zoho Books, QuickBooks, or Xero.", icon: "BookOpen" },
    { title: "Annual Audit", description: "Statutory audit preparation and coordination with approved audit firms for free zone compliance.", icon: "ClipboardCheck" },
    { title: "Payroll Processing", description: "WPS-compliant payroll processing, salary transfers, and end-of-service gratuity calculations.", icon: "Wallet" },
    { title: "Tax Optimization", description: "Legitimate tax planning strategies to minimize your effective tax rate within UAE regulations.", icon: "TrendingDown" },
  ],
  faqs: [
    { question: "When did UAE corporate tax start?", answer: "UAE Corporate Tax became effective on June 1, 2023, at a rate of 9% on taxable income exceeding AED 375,000. All businesses must register with the FTA." },
    { question: "Do free zone companies pay corporate tax?", answer: "Qualifying free zone persons benefit from a 0% corporate tax rate on qualifying income. Non-qualifying income is taxed at 9%." },
    { question: "When should I register for VAT?", answer: "VAT registration is mandatory when taxable supplies exceed AED 375,000 per year, and voluntary when they exceed AED 187,500." },
    { question: "How often do I need to file VAT returns?", answer: "Most businesses file VAT returns quarterly, though some may be assigned monthly or annual filing periods by the FTA." },
    { question: "Does Flash Space provide audit services?", answer: "We prepare all financial statements and coordinate with FTA-approved audit firms. Many free zones require audited financials for annual license renewal." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Accounting & VAT Services | Flash Space",
  metaDescription: "Expert UAE accounting, VAT filing, and corporate tax compliance. Cloud bookkeeping and audit preparation with Flash Space.",
};

const complianceServices: PageContent = {
  slug: "compliance-services",
  heroTitle: "Corporate Compliance Services",
  heroSubtitle: "Stay on the right side of UAE regulations with comprehensive AML, ESR, UBO, and corporate governance compliance support.",
  inquiryType: "Compliance Services",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "AML Compliance", description: "Anti-Money Laundering policy development, training, and suspicious transaction reporting protocols.", icon: "Shield" },
    { title: "Economic Substance (ESR)", description: "Annual ESR notifications and reports for relevant activities — avoid penalties up to AED 50,000.", icon: "FileText" },
    { title: "Ultimate Beneficial Owner", description: "UBO declaration and register maintenance as required by UAE Corporate Transparency regulations.", icon: "Users" },
    { title: "Data Protection", description: "UAE PDPL compliance framework, privacy policies, and data processing agreements for your business.", icon: "Lock" },
    { title: "Annual Return Filing", description: "Timely filing of annual returns, financial statements, and compliance certificates with relevant authorities.", icon: "Calendar" },
    { title: "Compliance Audit", description: "Regular compliance health checks to identify and address regulatory gaps before they become penalties.", icon: "Search" },
  ],
  faqs: [
    { question: "What is Economic Substance Regulation (ESR)?", answer: "ESR requires UAE companies performing relevant activities (banking, insurance, shipping, etc.) to demonstrate adequate economic substance in the UAE through employees, expenditure, and physical presence." },
    { question: "What are the penalties for non-compliance?", answer: "ESR penalties range from AED 10,000-50,000 for notification failures and AED 50,000-400,000 for filing failures. AML penalties can be significantly higher." },
    { question: "Do all companies need AML compliance?", answer: "Yes, all UAE businesses must have basic AML/CFT policies. Designated Non-Financial Businesses and Professions (DNFBPs) have enhanced requirements." },
    { question: "What is UBO reporting?", answer: "Ultimate Beneficial Owner reporting requires companies to identify and declare individuals who ultimately own or control 25% or more of the company." },
    { question: "How often do compliance requirements change?", answer: "UAE regulations are evolving rapidly. Flash Space monitors all regulatory updates and proactively notifies clients of new requirements." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Corporate Compliance Services | Flash Space",
  metaDescription: "AML, ESR, UBO, and data protection compliance for UAE businesses. Avoid penalties with Flash Space compliance experts.",
};

const payrollManagement: PageContent = {
  slug: "payroll-management",
  heroTitle: "Payroll Management Services",
  heroSubtitle: "WPS-compliant payroll processing, salary disbursement, and end-of-service gratuity calculations for UAE businesses.",
  inquiryType: "Payroll Services",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "WPS Compliance", description: "Fully compliant Wage Protection System processing through approved agents and exchange houses.", icon: "ShieldCheck" },
    { title: "Salary Processing", description: "Monthly salary calculations, deductions, allowances, and bank transfer processing for your team.", icon: "Wallet" },
    { title: "Gratuity Calculations", description: "Accurate end-of-service gratuity computations in line with UAE Labour Law requirements.", icon: "Calculator" },
    { title: "Leave Management", description: "Annual leave tracking, sick leave, maternity leave, and balance calculations integrated with payroll.", icon: "Calendar" },
    { title: "Employee Self-Service", description: "Digital portals for employees to access payslips, leave balances, and personal information.", icon: "Monitor" },
    { title: "Compliance Reporting", description: "MOHRE reports, pension contributions (for GCC nationals), and year-end financial summaries.", icon: "FileText" },
  ],
  faqs: [
    { question: "What is the Wage Protection System (WPS)?", answer: "WPS is a MOHRE electronic salary transfer system that ensures employees receive their wages on time. All UAE employers must use WPS for salary disbursement." },
    { question: "How is end-of-service gratuity calculated?", answer: "For limited contracts: 21 days' basic salary per year for the first 5 years, 30 days per year after that. Unlimited contracts have a reduced rate for the first year." },
    { question: "Do I need WPS for free zone employees?", answer: "Free zone authorities have their own WPS requirements. Most free zones require salary transfers through approved channels, though the specific system may differ." },
    { question: "Can Flash Space handle multi-entity payroll?", answer: "Yes, we manage payroll for companies with employees across multiple entities, free zones, and mainland operations with consolidated reporting." },
    { question: "What happens if I miss a WPS payment?", answer: "Late WPS payments can result in fines, work permit suspensions, and potential blacklisting. Flash Space ensures on-time processing every month." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Payroll Management Services | Flash Space",
  metaDescription: "WPS-compliant payroll processing and salary disbursement for UAE businesses. Accurate gratuity calculations and leave management.",
};

const healthInsurance: PageContent = {
  slug: "health-insurance",
  heroTitle: "Corporate Health Insurance",
  heroSubtitle: "Mandatory health insurance for UAE employees and dependents. Compare plans from leading providers at competitive rates.",
  inquiryType: "Health Insurance",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "DHA Compliance", description: "Mandatory health insurance meeting Dubai Health Authority minimum benefit requirements.", icon: "ShieldCheck" },
    { title: "Multi-Provider Options", description: "Compare plans from Daman, AXA, Oman Insurance, Orient, and other leading UAE insurers.", icon: "Building2" },
    { title: "Group Schemes", description: "Competitive group health insurance rates for companies with 3+ employees.", icon: "Users" },
    { title: "Dependent Coverage", description: "Extend coverage to employees' families including spouse, children, and parents.", icon: "Heart" },
    { title: "Claims Management", description: "Dedicated support for claims processing, pre-authorization, and reimbursement tracking.", icon: "ClipboardCheck" },
    { title: "Wellness Programs", description: "Optional wellness benefits including dental, optical, maternity, and mental health coverage.", icon: "HeartPulse" },
  ],
  faqs: [
    { question: "Is health insurance mandatory in the UAE?", answer: "Yes, health insurance is mandatory for all residents in Dubai (DHA) and Abu Dhabi (HAAD). Employers must provide coverage for their employees." },
    { question: "What is the minimum coverage required?", answer: "Dubai requires Essential Benefits Plans with minimum coverage of AED 150,000 annual limit and access to a network of approved healthcare providers." },
    { question: "How much does employee health insurance cost?", answer: "Basic mandatory plans start from AED 600-1,500 per employee per year. Comprehensive plans with wider networks cost AED 3,000-10,000+." },
    { question: "Can employees choose their own insurance plan?", answer: "Employers select the group plan, but employees can purchase additional top-up coverage at their own expense for enhanced benefits." },
    { question: "What happens if I don't provide health insurance?", answer: "Non-compliance results in fines of AED 500 per employee per month in Dubai, and may affect visa renewals and labor card processing." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Corporate Health Insurance | Flash Space",
  metaDescription: "Mandatory health insurance for UAE businesses. Compare plans from top providers with Flash Space.",
};

const itServices: PageContent = {
  slug: "it-services",
  heroTitle: "Business IT Services",
  heroSubtitle: "Enterprise-grade IT infrastructure, cybersecurity, and digital solutions tailored for UAE startups and SMEs.",
  inquiryType: "IT Services",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Cloud Infrastructure", description: "Microsoft 365, Google Workspace, and AWS/Azure setup with domain configuration and user management.", icon: "Cloud" },
    { title: "Cybersecurity", description: "Endpoint protection, firewall management, and UAE NESA-aligned cybersecurity frameworks.", icon: "Shield" },
    { title: "Website & App Development", description: "Custom websites, web applications, and mobile apps built with modern technology stacks.", icon: "Code" },
    { title: "IT Support", description: "24/7 remote and on-site technical support with guaranteed SLA response times.", icon: "Headphones" },
    { title: "Network Setup", description: "Office networking, Wi-Fi configuration, VPN, and Etisalat/du business line setup.", icon: "Wifi" },
    { title: "Data Backup", description: "Automated cloud backup solutions with disaster recovery planning and testing.", icon: "HardDrive" },
  ],
  faqs: [
    { question: "Do I need IT services for a new company?", answer: "At minimum, you need email (business domain), cloud storage, and basic cybersecurity. Flash Space offers starter IT packages from AED 500/month." },
    { question: "Which email platform should I use?", answer: "Microsoft 365 Business is the most popular choice for UAE businesses, offering email, Teams, and Office apps. Google Workspace is a strong alternative." },
    { question: "Do UAE companies need cybersecurity compliance?", answer: "While not mandatory for all, companies handling personal data must comply with UAE PDPL. Financial and critical infrastructure sectors have additional NESA requirements." },
    { question: "Can you set up my Etisalat/du business lines?", answer: "Yes, we handle the full setup of business internet, phone lines, and mobile plans from both Etisalat and du." },
    { question: "Do you provide ongoing IT maintenance?", answer: "Yes, our managed IT service plans include monthly maintenance, security patching, backup monitoring, and user support." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Business IT Services UAE | Flash Space",
  metaDescription: "Enterprise IT solutions for UAE businesses. Cloud setup, cybersecurity, IT support, and digital transformation with Flash Space.",
};

const legalServices: PageContent = {
  slug: "legal-services",
  heroTitle: "Corporate Legal Services",
  heroSubtitle: "Expert legal counsel for UAE businesses — from company formation agreements to commercial litigation and dispute resolution.",
  inquiryType: "Legal Services",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Corporate Agreements", description: "Shareholder agreements, MOA/AOA drafting, and partnership contracts tailored to UAE law.", icon: "FileText" },
    { title: "Commercial Contracts", description: "Employment contracts, supplier agreements, NDAs, and SLAs reviewed and drafted by licensed UAE lawyers.", icon: "ScrollText" },
    { title: "Dispute Resolution", description: "Mediation, arbitration, and litigation support through DIFC Courts, DIAC, and local courts.", icon: "Gavel" },
    { title: "Regulatory Advisory", description: "Legal guidance on UAE commercial law, foreign investment regulations, and sector-specific compliance.", icon: "Scale" },
    { title: "Intellectual Property", description: "Trademark, patent, and copyright registration and enforcement across the GCC region.", icon: "BookmarkCheck" },
    { title: "Real Estate Legal", description: "Commercial lease review, RERA compliance, and property transaction legal support.", icon: "Building2" },
  ],
  faqs: [
    { question: "Do I need a lawyer to set up a company in the UAE?", answer: "While not legally required for basic setups, legal counsel is recommended for shareholder agreements, complex structures, and activities requiring regulatory approvals." },
    { question: "What court system does the UAE use?", answer: "The UAE has local courts, DIFC Courts (common law), and ADGM Courts. International businesses often prefer DIFC jurisdiction for its English-language, common law system." },
    { question: "How much do legal services cost in the UAE?", answer: "Basic contract review starts from AED 2,000-5,000. Company formation legal packages range from AED 5,000-15,000. Litigation is typically charged hourly." },
    { question: "Can Flash Space handle employment disputes?", answer: "Yes, our legal team handles MOHRE labor complaints, termination disputes, and end-of-service benefit claims." },
    { question: "Do you offer retainer legal services?", answer: "Yes, monthly legal retainer packages start from AED 3,000/month and include a set number of consultation hours, contract reviews, and priority response." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Corporate Legal Services | Flash Space",
  metaDescription: "Corporate legal services in the UAE. Agreements, disputes, IP protection, and regulatory advisory from Flash Space legal team.",
};

const mailManagement: PageContent = {
  slug: "mail-management",
  heroTitle: "Business Mail Management",
  heroSubtitle: "Professional mail handling, scanning, forwarding, and storage services for your UAE business — wherever you work.",
  inquiryType: "Mail Management",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Mail Receipt", description: "Receive business mail at a prestigious UAE address — letters, parcels, and government correspondence.", icon: "Mail" },
    { title: "Digital Scanning", description: "Same-day scanning and email forwarding of all received mail for remote access from anywhere.", icon: "Scan" },
    { title: "International Forwarding", description: "Parcel and document forwarding to any international address via DHL, Aramex, or Emirates Post.", icon: "Plane" },
    { title: "Secure Storage", description: "Physical mail storage for up to 90 days in our secure, climate-controlled facilities.", icon: "Lock" },
    { title: "Notification Alerts", description: "Instant email and SMS notifications when new mail arrives at your registered address.", icon: "Bell" },
    { title: "Government Mail", description: "Specialized handling of government correspondence including court notices and regulatory documents.", icon: "Landmark" },
  ],
  faqs: [
    { question: "Why do I need a mail management service?", answer: "If you use a virtual office or work remotely, you need a physical address to receive government notices, bank statements, and client correspondence." },
    { question: "How quickly is mail scanned?", answer: "All mail is scanned and forwarded digitally within 4 business hours of receipt. Express scanning within 1 hour is available for premium plans." },
    { question: "Can you forward parcels internationally?", answer: "Yes, we partner with DHL, Aramex, FedEx, and Emirates Post for international parcel forwarding at negotiated corporate rates." },
    { question: "What happens to uncollected mail?", answer: "Mail is stored securely for 90 days. After 90 days, we contact you for disposition instructions (forward, collect, or dispose)." },
    { question: "Is the mail handling address suitable for company registration?", answer: "Yes, our mail handling addresses are approved for use on trade licenses and company registration documents." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Business Mail Management UAE | Flash Space",
  metaDescription: "Professional mail handling, scanning, and forwarding for UAE businesses. Digital mail management from Flash Space.",
};

const virtualReceptionist: PageContent = {
  slug: "virtual-receptionist",
  heroTitle: "Virtual Receptionist Service",
  heroSubtitle: "A professional receptionist answers calls in your company name — perfect for businesses without a physical front desk.",
  inquiryType: "Virtual Receptionist",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Dedicated Phone Number", description: "A local UAE landline number dedicated to your business with professional greeting.", icon: "Phone" },
    { title: "Live Call Answering", description: "Trained receptionists answer calls in your company name during UAE business hours.", icon: "Headphones" },
    { title: "Message Forwarding", description: "Instant call summaries and messages delivered via email, WhatsApp, or SMS.", icon: "MessageCircle" },
    { title: "Call Transfer", description: "Calls transferred to your mobile, Skype, or any international number in real-time.", icon: "ArrowRightLeft" },
    { title: "Multilingual Support", description: "Receptionists available in English, Arabic, Hindi, and other major languages.", icon: "Globe" },
    { title: "CRM Integration", description: "Call logging and lead capture integrated with popular CRM systems.", icon: "Database" },
  ],
  faqs: [
    { question: "How does a virtual receptionist work?", answer: "Calls to your dedicated number are answered by a trained receptionist using your company name and custom greeting. Messages are instantly forwarded to you." },
    { question: "What are the operating hours?", answer: "Standard coverage is Sun-Thu, 9am-6pm UAE time. Extended hours and 24/7 packages are available for additional fees." },
    { question: "Can the receptionist schedule appointments?", answer: "Yes, receptionists can manage a shared calendar and schedule appointments based on your availability preferences." },
    { question: "How many calls are included?", answer: "Plans start from 50 calls/month with additional calls at per-minute rates. Unlimited call packages are available for high-volume businesses." },
    { question: "Can I keep my existing phone number?", answer: "Yes, you can port your existing UAE landline or redirect calls from your current number to the virtual receptionist." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Virtual Receptionist Service UAE | Flash Space",
  metaDescription: "Professional call answering in your company name. Live receptionists, message forwarding, and call transfer for UAE businesses.",
};

const touristVisa: PageContent = {
  slug: "tourist-visa",
  heroTitle: "UAE Tourist Visa Services",
  heroSubtitle: "Fast-track tourist and visit visa processing for business travelers, investors, and their families visiting the UAE.",
  inquiryType: "Tourist Visa",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "30-Day Tourist Visa", description: "Standard single or multiple entry tourist visa for business visitors and short-term stays.", icon: "Calendar" },
    { title: "90-Day Visit Visa", description: "Extended visit visa for investors, job seekers, and those exploring business opportunities.", icon: "Clock" },
    { title: "Multi-Entry Visa", description: "Frequent traveler? Get a 5-year multi-entry visa for seamless UAE access.", icon: "Repeat" },
    { title: "Express Processing", description: "48-hour express visa processing for urgent business travel requirements.", icon: "Zap" },
    { title: "Visit-to-Residence", description: "Convert your tourist visa to a residence visa without leaving the UAE — status change services.", icon: "ArrowRightLeft" },
    { title: "Airport Fast Track", description: "VIP immigration fast-track and airport meet-and-assist services on arrival.", icon: "Plane" },
  ],
  faqs: [
    { question: "Who needs a tourist visa for the UAE?", answer: "Visa requirements depend on nationality. GCC citizens don't need visas, while citizens of 40+ countries receive visa on arrival. Others need a pre-arranged visa." },
    { question: "How long does tourist visa processing take?", answer: "Standard processing takes 3-5 working days. Express processing is available in 24-48 hours for an additional fee." },
    { question: "Can I extend a tourist visa?", answer: "Yes, tourist visas can typically be extended once for an additional 30 days. Beyond that, a status change or exit/re-entry is required." },
    { question: "Can I work on a tourist visa?", answer: "No, working on a tourist visa is illegal in the UAE. You need a proper work permit and residence visa to engage in any employment." },
    { question: "What documents are needed for a tourist visa?", answer: "A valid passport (6+ months validity), passport-size photo, and completed application form. Some nationalities may need additional documentation." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Tourist Visa Services | Flash Space",
  metaDescription: "Fast-track UAE tourist and visit visa processing. 30, 60, and 90-day visas with express processing from Flash Space.",
};

const goldenVisa: PageContent = {
  slug: "golden-visa",
  heroTitle: "UAE Golden Visa Services",
  heroSubtitle: "Secure your 10-year UAE Golden Visa as an investor, entrepreneur, scientist, creative talent, or exceptional student.",
  inquiryType: "Golden Visa",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Investor Visa (10 Years)", description: "For investors with AED 2M+ in property, deposits, or a company with AED 2M+ capital.", icon: "Landmark" },
    { title: "Entrepreneur Visa", description: "For startup founders with innovative projects approved by UAE accelerators or incubators.", icon: "Rocket" },
    { title: "Specialized Talent", description: "Scientists, doctors, engineers, creative professionals, and athletes with exceptional achievements.", icon: "Award" },
    { title: "Real Estate Investors", description: "Property investors with AED 2M+ in UAE real estate qualify for the Golden Visa.", icon: "Building2" },
    { title: "Outstanding Students", description: "Top graduates from UAE and international universities with GPA 3.8+ or equivalent.", icon: "GraduationCap" },
    { title: "Family Sponsorship", description: "Golden Visa holders can sponsor their entire family including spouse, children, and domestic helpers.", icon: "Heart" },
  ],
  faqs: [
    { question: "What are the eligibility criteria for a Golden Visa?", answer: "Eligibility categories include investors (AED 2M+), entrepreneurs, specialized talent, outstanding students, humanitarian pioneers, and frontline heroes." },
    { question: "How long does Golden Visa processing take?", answer: "Processing typically takes 2-4 weeks from application to approval. Express processing may be available for certain categories." },
    { question: "Do I need to live in the UAE with a Golden Visa?", answer: "No, the Golden Visa has no minimum stay requirement. Unlike regular residence visas, you won't lose your visa status by spending time abroad." },
    { question: "Can I sponsor my family on a Golden Visa?", answer: "Yes, Golden Visa holders can sponsor their spouse, children of any age, and unlimited domestic helpers without salary requirements." },
    { question: "How much does Golden Visa processing cost?", answer: "Government fees are approximately AED 2,800-4,500. Flash Space service fees are in addition, covering the full application preparation and submission." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Golden Visa Application | Flash Space",
  metaDescription: "10-year UAE Golden Visa for investors, entrepreneurs, and talented professionals. Expert application support from Flash Space.",
};

const secondCitizenship: PageContent = {
  slug: "second-citizenship",
  heroTitle: "Second Citizenship & Residency",
  heroSubtitle: "Expand your global mobility with citizenship-by-investment and residency programs in the Caribbean, Europe, and beyond.",
  inquiryType: "Second Citizenship",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Caribbean Citizenship", description: "Citizenship by investment in St. Kitts, Dominica, Grenada, and Antigua from USD 100,000.", icon: "Globe" },
    { title: "European Residency", description: "Golden visa programs in Portugal, Spain, Greece, and Malta for EU access.", icon: "Landmark" },
    { title: "Turkish Citizenship", description: "Fast-track citizenship through USD 400,000 real estate investment with passport in 3-6 months.", icon: "Flag" },
    { title: "Vanuatu Citizenship", description: "One of the fastest CBI programs — citizenship in 30-60 days from USD 130,000.", icon: "Palmtree" },
    { title: "Due Diligence Support", description: "Full application preparation including background checks, document authentication, and submission.", icon: "Search" },
    { title: "Tax Planning", description: "Strategic citizenship selection based on tax optimization, visa-free travel, and business needs.", icon: "Calculator" },
  ],
  faqs: [
    { question: "What is citizenship by investment?", answer: "CBI programs grant citizenship in exchange for a qualifying economic contribution — typically real estate purchase or a donation to a national development fund." },
    { question: "Which is the fastest citizenship program?", answer: "Vanuatu offers the fastest processing at 30-60 days. Caribbean programs typically take 3-6 months. European programs can take 6-18 months." },
    { question: "Can I hold dual citizenship as a UAE resident?", answer: "The UAE does not offer citizenship to most foreign nationals, but holding a second passport alongside UAE residence is common and fully legal." },
    { question: "What are the benefits of a second passport?", answer: "Enhanced visa-free travel, tax optimization opportunities, business expansion access, political stability hedge, and legacy planning for family." },
    { question: "How much do CBI programs cost?", answer: "Programs range from USD 100,000 (Dominica donation) to USD 1.5M+ (European programs). Real estate options often provide better long-term value." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "Second Citizenship & Residency Programs | Flash Space",
  metaDescription: "Citizenship by investment in Caribbean, Europe, and more. Second passport programs from USD 100,000 with Flash Space.",
};

const proServices: PageContent = {
  slug: "pro-services",
  heroTitle: "PRO & Government Services",
  heroSubtitle: "Dedicated PRO officers handle all your government paperwork — MOHRE, Immigration, DET, and municipality visits done for you.",
  inquiryType: "PRO Services",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "Document Clearing", description: "All government document typing, submission, and collection from DET, MOHRE, GDRFA, and more.", icon: "FileText" },
    { title: "Visa Processing", description: "Employment visa applications, entry permits, status changes, and cancellations handled end-to-end.", icon: "Stamp" },
    { title: "License Renewals", description: "Annual trade license renewal, amendments, and activity additions with all required approvals.", icon: "RefreshCw" },
    { title: "Labor Cards", description: "New labor card applications, renewals, and quota management through MOHRE portals.", icon: "CreditCard" },
    { title: "Attestation Services", description: "Document attestation from MOFA, embassies, and notary public for legal validity.", icon: "Award" },
    { title: "Establishment Card", description: "New establishment card registration and annual renewal for immigration purposes.", icon: "BadgeCheck" },
  ],
  faqs: [
    { question: "What does a PRO officer do?", answer: "A Public Relations Officer handles all government interactions on behalf of your company — document submission, application follow-up, and permit collection." },
    { question: "Do I need PRO services if I'm in a free zone?", answer: "Free zones handle most administrative tasks internally. However, you still need PRO services for visa processing, medical coordination, and Emirates ID." },
    { question: "How much do PRO services cost?", answer: "PRO packages start from AED 500-1,500 per transaction or AED 2,000-5,000/month for retainer services covering all government interactions." },
    { question: "Can PRO services handle urgent requests?", answer: "Yes, express processing is available for most services. Urgent visa processing, emergency labor card issues, and same-day attestation are all offered." },
    { question: "What government offices does Flash Space visit?", answer: "Our PROs regularly visit DET, MOHRE, GDRFA, AMER centers, Tasheel, Tas-heel, MOFA, health authorities, and all free zone customer service centers." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "PRO & Government Services UAE | Flash Space",
  metaDescription: "Expert PRO services for UAE businesses. Document clearing, visa processing, and government liaison from Flash Space.",
};

const willPreparation: PageContent = {
  slug: "will-preparation",
  heroTitle: "UAE Will Preparation",
  heroSubtitle: "Protect your UAE assets and family with a legally valid will registered with DIFC Wills Service Centre or Dubai Courts.",
  inquiryType: "Will Preparation",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "DIFC Registered Wills", description: "Register your will with the DIFC Wills Service Centre for international recognition and English-language courts.", icon: "Landmark" },
    { title: "Full Estate Wills", description: "Comprehensive wills covering real estate, bank accounts, investments, and personal property in the UAE.", icon: "Building2" },
    { title: "Guardianship Wills", description: "Designate guardians for minor children in case of both parents' incapacity or death.", icon: "Heart" },
    { title: "Business Succession", description: "Business succession planning to ensure smooth transfer of company ownership and operations.", icon: "ArrowRightLeft" },
    { title: "Property Wills", description: "Specific wills for UAE real estate assets registered with the Dubai Land Department.", icon: "Home" },
    { title: "Will Updates", description: "Regular reviews and amendments to reflect changes in assets, family, and circumstances.", icon: "RefreshCw" },
  ],
  faqs: [
    { question: "Do I need a will in the UAE?", answer: "Without a UAE-registered will, your assets will be distributed according to UAE Sharia law, which may differ significantly from your wishes, especially for non-Muslims." },
    { question: "What is the DIFC Wills Service Centre?", answer: "The DIFC WSC allows non-Muslims to register wills under common law principles, enforceable across the UAE for assets within its jurisdiction." },
    { question: "How much does a UAE will cost?", answer: "DIFC Will registration fees start from AED 7,500 for a single full estate will. Guardianship-only wills start from AED 5,000." },
    { question: "Can I write a will for assets in multiple emirates?", answer: "Yes, a DIFC-registered will can cover assets across all seven emirates. Alternatively, separate wills can be prepared for different jurisdictions." },
    { question: "How often should I update my will?", answer: "Review your will whenever there are significant life changes: new property purchase, birth of a child, marriage, divorce, or changes in applicable laws." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE Will Preparation & Registration | Flash Space",
  metaDescription: "Protect your UAE assets with DIFC-registered wills. Full estate, guardianship, and business succession planning from Flash Space.",
};

const trademarkRegistration: PageContent = {
  slug: "trademark-registration",
  heroTitle: "Trademark Registration",
  heroSubtitle: "Protect your brand identity across the UAE and GCC with comprehensive trademark registration and IP enforcement services.",
  inquiryType: "Trademark Registration",
  trustLogos: sharedTrustLogos,
  features: [
    { title: "UAE Registration", description: "Register your trademark with the UAE Ministry of Economy for nationwide protection across all emirates.", icon: "ShieldCheck" },
    { title: "GCC-Wide Filing", description: "Extend protection across Saudi Arabia, Bahrain, Kuwait, Oman, and Qatar through the GCC trademark system.", icon: "Globe" },
    { title: "Trademark Search", description: "Comprehensive prior art search to ensure your brand doesn't conflict with existing registrations.", icon: "Search" },
    { title: "Class Selection", description: "Strategic Nice Classification selection to maximize protection across all relevant goods and services.", icon: "Layers" },
    { title: "Opposition Defense", description: "Defend your application against oppositions and protect your marks from infringement.", icon: "Shield" },
    { title: "Renewal Management", description: "Proactive renewal tracking and filing to maintain continuous trademark protection.", icon: "RefreshCw" },
  ],
  faqs: [
    { question: "How long does trademark registration take in the UAE?", answer: "The full process takes 6-12 months including filing, publication, and certificate issuance. Trademark protection begins from the filing date." },
    { question: "How much does trademark registration cost?", answer: "UAE registration costs approximately AED 6,000-10,000 per class including government and professional fees. GCC-wide filing costs vary by country." },
    { question: "What can I trademark?", answer: "You can register brand names, logos, slogans, color combinations, sounds, and even packaging shapes as trademarks in the UAE." },
    { question: "How long does trademark protection last?", answer: "UAE trademarks are valid for 10 years from the filing date and can be renewed indefinitely in 10-year periods." },
    { question: "What if someone copies my trademark?", answer: "Flash Space assists with cease-and-desist letters, customs recordal for counterfeit seizure, and litigation support through local courts." },
  ],
  testimonials: sharedTestimonials,
  metaTitle: "UAE & GCC Trademark Registration | Flash Space",
  metaDescription: "Protect your brand with UAE and GCC trademark registration. Comprehensive IP protection and enforcement from Flash Space.",
};

// ========== Export all pages ==========

export const allPages: PageContent[] = [
  // Business Setup - Free Zones
  freeZoneOverview,
  businessActivities,
  freeZoneLicenseLocations,
  uaeResidencyVisa,
  registrationProcess,
  freeZoneSolution,
  // Business Setup - Mainland
  dubaiMainland,
  mainlandSponsorship,
  mainlandLicence,
  mainlandVisas,
  virtualSetup,
  // Essential Services
  bankAccount,
  accountingVat,
  complianceServices,
  payrollManagement,
  healthInsurance,
  // Operational Services
  itServices,
  legalServices,
  mailManagement,
  virtualReceptionist,
  // Support Services
  touristVisa,
  goldenVisa,
  secondCitizenship,
  proServices,
  willPreparation,
  trademarkRegistration,
];

export const getPageBySlug = (slug: string): PageContent | undefined =>
  allPages.find((p) => p.slug === slug);
