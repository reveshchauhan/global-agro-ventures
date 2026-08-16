export const site = {
  name: "TriCore Global Ventures",
  short: "TriCore",
  tagline: "Engineering, Energy & Global Commodity Trade",
  email: "info@tricoreglobal.com",
  phone: "+971 4 000 0000",
  addressLines: ["Business Bay Tower, Office 1204", "Dubai, United Arab Emirates"],
  hours: "Sun – Fri, 09:00 – 18:00 GST",
};

export type Service = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "civil-construction",
    code: "01",
    title: "Civil Construction",
    summary:
      "Turnkey civil works for industrial, commercial and residential developments — delivered to schedule with disciplined quality control.",
    points: [
      "Structural design coordination & value engineering",
      "Site development, foundations and RCC works",
      "Project management, QA/QC and safety compliance",
      "Fit-out, finishing and handover documentation",
    ],
  },
  {
    slug: "solar-energy",
    code: "02",
    title: "Solar Energy Solutions",
    summary:
      "Rooftop and ground-mount solar plants engineered for maximum yield, lower tariffs and measurable carbon reduction.",
    points: [
      "Feasibility studies, shadow analysis and yield modelling",
      "EPC delivery for rooftop, ground-mount and hybrid plants",
      "Grid interconnection, net-metering and approvals",
      "O&M contracts with remote performance monitoring",
    ],
  },
  {
    slug: "it-services",
    code: "03",
    title: "IT & Technology Support",
    summary:
      "Managed infrastructure, cloud and cybersecurity services that keep distributed operations online around the clock.",
    points: [
      "Network design, deployment and managed monitoring",
      "Cloud migration, backup and disaster recovery",
      "Endpoint security, hardening and compliance reviews",
      "24/7 helpdesk with defined response SLAs",
    ],
  },
  {
    slug: "import-export",
    code: "04",
    title: "Import & Export",
    summary:
      "End-to-end cross-border trade: sourcing, documentation, customs clearance and multimodal freight across four continents.",
    points: [
      "Supplier qualification and pre-shipment inspection",
      "Letters of credit, incoterms and trade documentation",
      "Customs brokerage and regulatory compliance",
      "Sea, air and land freight with live shipment tracking",
    ],
  },
  {
    slug: "contract-staffing",
    code: "05",
    title: "Contract & Workforce Services",
    summary:
      "Skilled manpower supply and workforce management for project peaks, without the overhead of permanent headcount.",
    points: [
      "Technical, industrial and administrative staffing",
      "Mobilisation, visas and onboarding support",
      "Payroll, timesheets and statutory compliance",
      "Performance tracking and demobilisation planning",
    ],
  },
  {
    slug: "trading",
    code: "06",
    title: "General Trading & Supply",
    summary:
      "Industrial supplies, equipment and consumables sourced competitively and delivered against firm lead times.",
    points: [
      "Category sourcing and vendor consolidation",
      "Quality assurance and third-party verification",
      "Warehousing, kitting and scheduled deliveries",
      "Transparent landed-cost pricing",
    ],
  },
];

export type ProductCategory = {
  slug: string;
  name: string;
  blurb: string;
  items: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "grains-cereals",
    name: "Grains & Cereals",
    blurb: "Milling and feed-grade grains shipped in bulk or bagged containers.",
    items: ["Wheat", "Maize / Corn", "Barley", "Sorghum", "Oats"],
  },
  {
    slug: "rice",
    name: "Rice",
    blurb: "Long grain, parboiled and aromatic varieties from origin mills.",
    items: ["Basmati", "Sella / Parboiled", "IR64 White", "Broken Rice", "Jasmine"],
  },
  {
    slug: "pulses-beans",
    name: "Pulses & Beans",
    blurb: "Machine-cleaned, sortex-graded pulses for retail and food service.",
    items: ["Chickpeas", "Green Mung", "Red Lentils", "Pigeon Peas", "Kidney Beans"],
  },
  {
    slug: "edible-oils",
    name: "Edible Oils & Oil Seeds",
    blurb: "Refined and crude oils in drums, flexitanks and consumer packs.",
    items: ["Sunflower Oil", "Soybean Oil", "Palm Olein", "Sesame Seeds", "Groundnut"],
  },
  {
    slug: "sugar-sweeteners",
    name: "Sugar & Sweeteners",
    blurb: "Refined and raw sugar with full origin and quality documentation.",
    items: ["ICUMSA 45", "ICUMSA 150", "Raw Brown Sugar", "Jaggery", "Glucose Syrup"],
  },
  {
    slug: "spices",
    name: "Spices & Seasonings",
    blurb: "Whole and ground spices from verified origin cooperatives.",
    items: ["Turmeric", "Cumin", "Coriander", "Black Pepper", "Chilli"],
  },
  {
    slug: "dry-fruits-nuts",
    name: "Dry Fruits & Nuts",
    blurb: "Premium grades packed for retail brands and hospitality supply.",
    items: ["Cashew", "Almond", "Pistachio", "Raisins", "Dates"],
  },
  {
    slug: "dairy-canned",
    name: "Dairy & Canned Foods",
    blurb: "Shelf-stable staples with extended validity for distribution.",
    items: ["Milk Powder", "Evaporated Milk", "Canned Tuna", "Tomato Paste", "Canned Beans"],
  },
];

export const stats = [
  { value: "12+", label: "Years in operation" },
  { value: "38", label: "Countries served" },
  { value: "450+", label: "Projects & shipments" },
  { value: "96%", label: "Client retention" },
];

export const regions = [
  {
    name: "Middle East",
    detail: "UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain",
    note: "Regional headquarters and consolidation hub in Dubai.",
  },
  {
    name: "South & Southeast Asia",
    detail: "India, Pakistan, Vietnam, Thailand, Indonesia",
    note: "Origin sourcing, mill partnerships and inspection teams.",
  },
  {
    name: "Africa",
    detail: "Kenya, Nigeria, Ghana, Egypt, Tanzania, Djibouti",
    note: "Distributor network for staple foods and project supply.",
  },
  {
    name: "Europe & CIS",
    detail: "Netherlands, Türkiye, Ukraine, Kazakhstan",
    note: "Grain and oilseed origination with EU-compliant documentation.",
  },
];
