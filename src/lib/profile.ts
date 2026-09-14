export const profile = {
  name: "Vijay Baskaran Arjun Dev",
  headline:
    "Head of Software Technologies @ Retailetics | AI/ML Developer | Mobile Systems & Scaled Engineering",
  location: "Federal Territory of Kuala Lumpur, Malaysia",
  email: "yoursvijii@gmail.com",
  phone: "+91 8088413589",
  company: {
    name: "Retailetics",
    legalName: "Retailetics SDN BHD",
    href: "https://retailetics.com",
  },
  resumeHref: "/VB_Google__Resume.pdf",
  github: {
    href: null as string | null,
    label: "GitHub",
    note: "A GitHub username was not listed on the resume, so this control is not linked to a personal repository.",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/vijaybaskar",
    label: "linkedin.com/in/vijaybaskar",
  },
} as const;

export const experience = {
  company: "Retailetics SDN BHD",
  title: "Head of Software Technologies",
  location: "Kuala Lumpur, Malaysia",
  dates: "February 2021 – Present",
  summary:
    "I lead software for Retailetics’ in-store stack — AI-infused self-checkout, aisle wayfinding, staff tools, and shopping assistance — so shoppers skip the queue and stores still see what happens between the aisles.",
  bullets: [
    "Spearheaded Retailetics’ AI-infused self-checkout smart trolley (ezyCart): architecture, stakeholder design, and a real-time socket pipeline between IoT devices and the ezyCart Android app so carts stay in sync without slow transfers or extra permission prompts.",
    "Delivered an AI-powered indoor navigation system that saved over $2M by removing the need for thousands of Bluetooth beacon devices.",
    "Conceptualized, designed, and developed a cross-platform Flutter support-staff app and an Android TV cart monitor.",
    "Built Lisa, an AI shopping assistant that answers customer queries and serves real-time product recommendations and promotions in store.",
    "Developed and deployed machine learning models across the in-store product line.",
    "Automated build pipelines and deployment for merchants and outlets, cutting the time to roll software across stores.",
    "Led split testing that drove multi-million-dollar revenue growth and sharper in-store customer experiences.",
  ],
} as const;

export const featuredWork = [
  {
    slug: "smart-trolley",
    title: "ezyCart smart trolley",
    image: "/work/smart-trolley.png",
    tag: "AI self-checkout",
    copy: "Retailetics’ AI-infused self-checkout shopping cart. Architecture, UX, and a live socket pipeline from IoT hardware into the ezyCart Android app — scan, pay, and skip the queue.",
  },
  {
    slug: "indoor-navigation",
    title: "Indoor navigation",
    image: "/work/indoor-navigation.png",
    tag: "$2M savings",
    copy: "AI-powered indoor navigation that replaced thousands of Bluetooth beacons. Shoppers find the SKU; the store keeps the aisle map without a hardware forest — more than $2M saved.",
  },
  {
    slug: "staff-monitor",
    title: "Staff app & cart monitor",
    image: "/work/staff-app-tv-monitor.png",
    tag: "Flutter · Android TV",
    copy: "A cross-platform Flutter app for support staff, paired with an Android TV cart monitor so the floor can see which trolleys need help without walking the whole store.",
  },
  {
    slug: "lisa-ai",
    title: "Lisa AI shopping assistant",
    image: "/work/lisa-ai-assistant.png",
    tag: "In-aisle AI",
    copy: "Lisa answers shopper questions and surfaces live product recommendations and promotions while they are still between the shelves.",
  },
] as const;

export const skillGroups = [
  {
    title: "Mobile systems",
    items: [
      "Android",
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Flutter",
      "Dart",
      "Kotlin Multiplatform",
      "iOS",
    ],
  },
  {
    title: "Backend & scale",
    items: [
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Spring Boot",
      "Postgres",
      "SQLite",
      "Microservices",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "OpenCV",
      "On-device ML",
      "NLP",
      "Model quantization",
    ],
  },
  {
    title: "In-store systems",
    items: [
      "ezyCart",
      "IoT sockets",
      "Indoor navigation",
      "Android TV",
      "Bluetooth / IMU",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Jenkins",
      "Fastlane",
      "Docker",
      "Git",
      "CI/CD",
      "Split testing",
    ],
  },
  {
    title: "Engineering craft",
    items: [
      "SOLID",
      "Clean Architecture",
      "MVVM",
      "MVP",
      "BLoC",
      "Technical leadership",
    ],
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
