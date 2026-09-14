export const profile = {
  name: "Vijay Baskaran Arjun Dev",
  headline:
    "Head of Software Technologies @ Retailetics | AI/ML Developer | Mobile Systems & Scaled Engineering",
  location: "Federal Territory of Kuala Lumpur, Malaysia",
  company: {
    name: "Retailetics",
    href: "https://retailetics.com",
  },
  resumeHref: "/VB_Google__Resume.pdf",
  github: {
    href: "https://github.com",
    label: "GitHub",
    isPlaceholder: true,
    note: "A public GitHub username was not listed on the attached resume, so this control opens GitHub.",
  },
  linkedin: null as { href: string; label: string } | null,
} as const;

export const experience = {
  company: "Retailetics",
  title: "Head of Software Technologies",
  location: "Federal Territory of Kuala Lumpur, Malaysia",
  dates: "Present",
  summary:
    "I lead software for AI-infused in-store retail: scan-pay-go carts, kiosks, cart security, and aisle wayfinding — the systems that let shoppers skip the queue while stores still see what is happening between the aisles.",
  bullets: [
    "Own the software surface for Retailetics’ in-store stack: AI-infused smart trolleys, weight-sensor self-checkout kiosks, automatic antitheft cart locking, and indoor product navigation.",
    "Lead mobile systems and scaled services so scan, weigh, pay, and wayfinding stay in lockstep across carts, kiosks, and store operations.",
    "Apply computer vision, on-device inference, and cloud models so product validation, promotions, and hyperlocal insights land while the shopper is still in the aisle.",
    "Set engineering standards across client, backend, and ML so retailers can roll out scan-pay-go without ripping out existing POS.",
  ],
} as const;

export const featuredWork = [
  {
    slug: "smart-trolley",
    title: "AI-infused Smart Trolley",
    image: "/work/smart-trolley.png",
    tag: "Scan · Pay · Go",
    copy: "A POS on wheels. Shoppers scan as they shop, see promotions and product data on the cart screen, and pay without a cashier line. Vision, weight, and barcode checks keep the basket honest.",
  },
  {
    slug: "antitheft-lock",
    title: "Auto antitheft locking system",
    image: "/work/antitheft-lock.png",
    tag: "Cart security",
    copy: "Smart wheels and perimeter locking keep trolleys in circulation. When a cart leaves a defined zone — car park, mall exit, store boundary — the lock engages so hardware stays an asset, not shrink.",
  },
  {
    slug: "self-checkout-kiosk",
    title: "Self-checkout kiosk",
    image: "/work/self-checkout-kiosk.png",
    tag: "Station checkout",
    copy: "A weight-sensor kiosk for shoppers who want a fixed station instead of a cart. Scan, bag, pay with QR or card, and walk. Same validation stack as the trolley, built for smaller footprints.",
  },
  {
    slug: "indoor-navigation",
    title: "Indoor navigation",
    image: "/work/indoor-navigation.png",
    tag: "Product finder",
    copy: "Beacon-backed wayfinding that turns a shopping list into a path. Find the SKU, route the aisle, and surface a promotion at the shelf — not after the shopper has already walked past it.",
  },
] as const;

export const skillGroups = [
  {
    title: "Mobile systems",
    items: [
      "iOS",
      "Android",
      "Swift",
      "Kotlin",
      "Java",
      "Mobile architecture",
      "Sensor-connected clients",
    ],
  },
  {
    title: "Backend & scale",
    items: [
      "REST APIs",
      "Distributed services",
      "Cloud",
      "SQL",
      "Caching",
      "CI/CD",
      "Observability",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Computer vision",
      "On-device inference",
      "Model architecture",
      "Master prompting",
      "Retail analytics",
    ],
  },
  {
    title: "In-store systems",
    items: [
      "Scan-pay-go",
      "POS integration",
      "IoT & beacons",
      "Weight sensors",
      "In-aisle payments",
    ],
  },
  {
    title: "Engineering craft",
    items: ["SOLID", "Git", "Agile", "System design", "Technical leadership"],
  },
] as const;

export const education = {
  degree: "Bachelor of Engineering in Computer Science and Engineering",
  school: "Anna University Chennai",
} as const;

export const certifications = [
  {
    name: "Mobile iOS & Android development",
    issuer: "Target Software, Chennai",
  },
  {
    name: "SOLID Principles",
    issuer: "Coursera",
  },
  {
    name: "AI/ML Architecture",
    issuer: "IBM",
  },
  {
    name: "Master prompting",
    issuer: "Claude and Coursera",
  },
] as const;

export const tanIntelligence = {
  company: "TAN Intelligence",
  role: "Founder",
  tag: "Independent venture",
  title: "AI-powered forex trading indicator",
  image: "/work/tan-intelligence.png",
  summary:
    "TAN Intelligence is my own company. I am building an original Artificial Intelligence trading indicator for the forex market — founder work, not a second employer on the timeline.",
  body: [
    "The product starts as an indicator: models that read FX structure and turn it into a clear, inspectable overlay a trader can actually use.",
    "The longer system direction is indicator, then signals, then an automated bot with explicit risk controls. That is the build path — not a live book, AUM, or performance claim.",
  ],
} as const;

export const goals = {
  shortTerm: {
    title: "Mastering Artificial Intelligence technologies and Machine Learning",
    ai: "I am taking the AI already in the store stack — vision, prompting, on-device inference — and going deeper on what is shipping now: agentic systems that plan and call tools, multimodal models that can read a chart with the surrounding text, edge ML that does not wait on a round-trip, retrieval-augmented generation for grounded research, and MLOps so an experiment can become a service.",
    ml: "On Machine Learning, the work is practical: train, evaluate, and productionize models — data, metrics, and the path into a real runtime, not a notebook that never leaves the laptop.",
  },
  longTerm: {
    title: "Building a profitable AI/ML trading indicator and bot system",
    copy: "The research-to-product path is sequential and forex-first: an original indicator, a signal layer that is honest about confidence, then a bot that can execute with hard risk limits. Profit is the product goal. It is not a track record.",
  },
} as const;

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#tan", label: "TAN" },
  { href: "#goals", label: "Goals" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
