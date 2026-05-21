export type Package = {
  id: string;
  name: string;
  price: string;
  depositItemId: PaymentItemId;
  fullItemId: PaymentItemId;
  badge?: string;
  bestFor: string;
  delivery: string;
  features: string[];
};

export type PaymentItem = {
  id: string;
  name: string;
  description: string;
  amount: number;
  currency: "cad";
  interval?: "month";
};

export type PaymentItemId =
  | "starter-deposit"
  | "business-deposit"
  | "premium-deposit"
  | "starter-full"
  | "business-full"
  | "premium-full"
  | "care-basic"
  | "care-growth"
  | "care-premium";

export const paymentItems: Record<PaymentItemId, PaymentItem> = {
  "starter-deposit": {
    id: "starter-deposit",
    name: "Starter Website Deposit",
    description: "Secure your project start for the Starter Website package.",
    amount: 30000,
    currency: "cad"
  },
  "business-deposit": {
    id: "business-deposit",
    name: "Business Website Deposit",
    description: "Secure your project start for the Business Website package.",
    amount: 50000,
    currency: "cad"
  },
  "premium-deposit": {
    id: "premium-deposit",
    name: "Premium Growth Website Deposit",
    description: "Secure your project start for the Premium Growth Website package.",
    amount: 75000,
    currency: "cad"
  },
  "starter-full": {
    id: "starter-full",
    name: "Starter Website Full Payment",
    description: "Full payment for the Starter Website package.",
    amount: 89900,
    currency: "cad"
  },
  "business-full": {
    id: "business-full",
    name: "Business Website Full Payment",
    description: "Full payment for the Business Website package.",
    amount: 189900,
    currency: "cad"
  },
  "premium-full": {
    id: "premium-full",
    name: "Premium Growth Website Full Payment",
    description: "Full payment for the Premium Growth Website package.",
    amount: 349900,
    currency: "cad"
  },
  "care-basic": {
    id: "care-basic",
    name: "Care Basic Monthly Maintenance",
    description: "Monthly website care for light updates and routine checkups.",
    amount: 5900,
    currency: "cad",
    interval: "month"
  },
  "care-growth": {
    id: "care-growth",
    name: "Care Growth Monthly Maintenance",
    description: "Monthly website care with analytics review, updates, and priority support.",
    amount: 9900,
    currency: "cad",
    interval: "month"
  },
  "care-premium": {
    id: "care-premium",
    name: "Care Premium Monthly Maintenance",
    description: "Monthly website care with conversion improvements, SEO monitoring, and integration support.",
    amount: 19900,
    currency: "cad",
    interval: "month"
  }
};

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: "$899",
    depositItemId: "starter-deposit",
    fullItemId: "starter-full",
    bestFor: "New ventures that need a sharp, credible digital presence.",
    delivery: "7-10 business day delivery",
    features: [
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Maps embed",
      "Click-to-call button",
      "SSL/deployment guidance",
      "1 revision round"
    ]
  },
  {
    id: "business",
    name: "Business Website",
    price: "$1,899",
    depositItemId: "business-deposit",
    fullItemId: "business-full",
    badge: "Most Popular",
    bestFor: "Established service companies that want stronger lead flow.",
    delivery: "2-3 week delivery",
    features: [
      "Up to 6 pages",
      "Custom homepage sections",
      "Service pages",
      "Contact/quote form",
      "Local SEO setup",
      "Google Analytics setup",
      "Google Search Console setup",
      "Performance optimization",
      "2 revision rounds"
    ]
  },
  {
    id: "premium",
    name: "Premium Growth Website",
    price: "$3,499",
    depositItemId: "premium-deposit",
    fullItemId: "premium-full",
    bestFor: "Growth-focused companies that want stronger brand impact, conversion, and integrations.",
    delivery: "30 days post-launch support",
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "Conversion-focused copy structure",
      "Booking integration",
      "Blog/news setup",
      "Advanced forms",
      "Basic schema markup",
      "Speed optimization",
      "3 revision rounds"
    ]
  }
];

export const addOns = [
  ["Extra page", "$150"],
  ["Logo refresh", "from $299"],
  ["Copywriting", "from $399"],
  ["Stripe payment setup for client websites", "from $299"],
  ["Booking system setup", "from $249"],
  ["Local SEO boost", "from $499"],
  ["E-commerce setup", "from $1,499"]
];

export const maintenancePlans = [
  {
    id: "care-basic" as PaymentItemId,
    name: "Care Basic",
    price: "$59/month",
    description: "Hosting guidance, backups/checkups, small updates."
  },
  {
    id: "care-growth" as PaymentItemId,
    name: "Care Growth",
    price: "$99/month",
    description: "Monthly updates, analytics review, uptime checks, priority support."
  },
  {
    id: "care-premium" as PaymentItemId,
    name: "Care Premium",
    price: "$199/month",
    description: "More update time, conversion improvements, SEO monitoring, integration support."
  }
];

export const services = [
  {
    title: "Website Design",
    description:
      "Clean, fast, mobile-first websites that make your business look credible from the first click."
  },
  {
    title: "Website Redesigns",
    description:
      "Modernize an outdated website with stronger messaging, better structure, and clearer calls to action."
  },
  {
    title: "Local SEO Setup",
    description:
      "Page titles, descriptions, indexing setup, maps, and location signals that help nearby customers find you."
  },
  {
    title: "Booking & Contact Forms",
    description:
      "Quote requests, appointment forms, click-to-call buttons, and lead paths built for busy owners."
  },
  {
    title: "Google Maps & Analytics",
    description:
      "Maps, Search Console, and Analytics setup so your website is easier to find and easier to measure."
  },
  {
    title: "Maintenance & Support",
    description:
      "Monthly care plans for updates, monitoring, improvements, and support after launch."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "We learn what you do, where leads come from, what is not working now, and what your website needs to accomplish."
  },
  {
    step: "02",
    title: "Content and Strategy",
    description:
      "We shape your pages, services, proof points, calls to action, and local SEO structure before design begins."
  },
  {
    step: "03",
    title: "Design and Build",
    description:
      "Your site is designed mobile-first, built for speed, and structured around the actions you want visitors to take."
  },
  {
    step: "04",
    title: "Review and Revisions",
    description:
      "You review the website, request refinements, and approve the final version before launch."
  },
  {
    step: "05",
    title: "Launch and Support",
    description:
      "We help connect the domain, guide deployment, submit indexing basics, and support you after launch."
  }
];

export const portfolioItems = [
  {
    name: "Northline Plumbing",
    category: "Plumber website concept",
    result: "Emergency service calls, quote form, service-area SEO",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Cedar & Comb",
    category: "Barber shop website concept",
    result: "Booking CTA, service menu, local trust signals",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Harbour Table",
    category: "Restaurant website concept",
    result: "Menu highlights, reservations, Google Maps path",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Peak Motion Clinic",
    category: "Clinic website concept",
    result: "Appointment requests, practitioner credibility, FAQs",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "FrameFit Studio",
    category: "Gym website concept",
    result: "Membership lead capture, class schedule, trial CTA",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Maple Clean Co.",
    category: "Cleaning company website concept",
    result: "Quote form, service pages, review-ready layout",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
  }
];

export const faqs = [
  {
    question: "How much does a professional website cost?",
    answer:
      "Focused professional websites start at $899 for a polished foundation. Lead-focused service websites usually land around $1,899, while larger custom builds with integrations start at $3,499."
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Starter websites usually launch in 7-10 business days after content is ready. Business and Premium projects typically take 2-3 weeks depending on pages, revisions, integrations, and how quickly feedback arrives."
  },
  {
    question: "Do I own my website?",
    answer:
      "Yes. Once the project is paid in full, your website files, copy structure, and launch assets belong to your business, subject to any third-party platform or plugin licenses."
  },
  {
    question: "Can you help with domain and hosting?",
    answer:
      "Yes. We can guide domain connection, SSL, deployment, hosting choices, and DNS basics so your website launches properly."
  },
  {
    question: "Can you redesign my old website?",
    answer:
      "Absolutely. We can keep what still works, rewrite what does not, modernize the design, improve mobile usability, and rebuild the site around stronger lead generation."
  },
  {
    question: "Do you offer monthly maintenance?",
    answer:
      "Yes. Monthly care plans start at $59/month and can include checkups, small updates, analytics review, uptime checks, SEO monitoring, and integration support."
  },
  {
    question: "Can I pay my deposit online?",
    answer:
      "Yes. Deposits, full package payments, and monthly maintenance plans can be paid securely through Stripe Checkout on this website."
  },
  {
    question: "Can you add Stripe payments to my own website?",
    answer:
      "Yes, as an optional add-on service. Stripe Checkout on this website is for paying Triple Web Studio. Adding Stripe payments to your own business website is a separate implementation service starting from $299."
  },
  {
    question: "What do I need to provide before we start?",
    answer:
      "Helpful items include your logo, service list, business details, preferred photos, examples you like, domain access if you already have one, and a clear idea of the action you want visitors to take."
  }
];

export const businessTypes = [
  "Contractors",
  "Plumbers",
  "Electricians",
  "Barbers",
  "Salons",
  "Restaurants",
  "Clinics",
  "Gyms",
  "Consultants",
  "Real estate agents",
  "Cleaning companies",
  "Retail shops"
];
