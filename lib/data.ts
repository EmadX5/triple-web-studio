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
    name: "Launch Website Deposit",
    description: "Secure your project start for the Launch Website package.",
    amount: 50000,
    currency: "cad"
  },
  "business-deposit": {
    id: "business-deposit",
    name: "Business Website Deposit",
    description: "Secure your project start for the Business Website package.",
    amount: 75000,
    currency: "cad"
  },
  "premium-deposit": {
    id: "premium-deposit",
    name: "Growth Website Deposit",
    description: "Secure your project start for the Growth Website package.",
    amount: 100000,
    currency: "cad"
  },
  "starter-full": {
    id: "starter-full",
    name: "Launch Website Full Payment",
    description: "Full payment for the Launch Website package.",
    amount: 150000,
    currency: "cad"
  },
  "business-full": {
    id: "business-full",
    name: "Business Website Full Payment",
    description: "Full payment for the Business Website package.",
    amount: 250000,
    currency: "cad"
  },
  "premium-full": {
    id: "premium-full",
    name: "Growth Website Full Payment",
    description: "Full payment for the Growth Website package.",
    amount: 400000,
    currency: "cad"
  },
  "care-basic": {
    id: "care-basic",
    name: "Website Care Monthly Maintenance",
    description: "Monthly website care for hosting coordination, checks, and small updates.",
    amount: 19900,
    currency: "cad",
    interval: "month"
  },
  "care-growth": {
    id: "care-growth",
    name: "Local Care Monthly Maintenance",
    description: "Monthly website care with Google Business Profile support and review alerts.",
    amount: 39900,
    currency: "cad",
    interval: "month"
  },
  "care-premium": {
    id: "care-premium",
    name: "Growth Care Monthly Maintenance",
    description: "Monthly website care with more edit time, GBP support, reporting, and improvements.",
    amount: 59900,
    currency: "cad",
    interval: "month"
  }
};

export const packages: Package[] = [
  {
    id: "starter",
    name: "Launch Website",
    price: "from $1,500",
    depositItemId: "starter-deposit",
    fullItemId: "starter-full",
    bestFor: "Businesses without a website that need a professional online presence quickly.",
    delivery: "Launch within 1 week after content approval",
    features: [
      "Up to 4 pages",
      "Optimized for phones and tablets",
      "Contact form",
      "Basic SEO setup",
      "Google Maps embed",
      "Click-to-call button",
      "SSL/deployment guidance",
      "2 revision rounds"
    ]
  },
  {
    id: "business",
    name: "Business Website",
    price: "from $2,500",
    depositItemId: "business-deposit",
    fullItemId: "business-full",
    badge: "Most Popular",
    bestFor: "Established local businesses that want stronger trust, service pages, and lead flow.",
    delivery: "Launch within 1 week after content approval",
    features: [
      "Up to 7 pages",
      "Custom homepage sections",
      "Service pages",
      "Contact/quote form",
      "Local SEO setup",
      "Google Analytics setup",
      "Google Search Console setup",
      "Google Business Profile checklist",
      "Performance optimization",
      "2 revision rounds"
    ]
  },
  {
    id: "premium",
    name: "Growth Website",
    price: "from $4,000",
    depositItemId: "premium-deposit",
    fullItemId: "premium-full",
    bestFor: "Growth-focused companies that want stronger brand impact, conversion, and integrations.",
    delivery: "Launch within 1 week after content approval",
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

export const maintenancePlans = [
  {
    id: "care-basic" as PaymentItemId,
    name: "Website Care",
    price: "$199/month",
    description: "Hosting coordination, uptime/form checks, basic health checks, and one small update request per month."
  },
  {
    id: "care-growth" as PaymentItemId,
    name: "Local Care",
    price: "$399/month",
    description: "Website Care plus Google Business Profile updates, bad review alerts, response drafts, and a monthly local visibility snapshot."
  },
  {
    id: "care-premium" as PaymentItemId,
    name: "Growth Care",
    price: "$599/month",
    description: "Local Care plus up to 4 hours of monthly edits, priority support, and ongoing website improvement recommendations."
  }
];

export const services = [
  {
    title: "Website Design",
    description:
      "Clean, fast websites optimized for phones, tablets, and desktops so your business looks credible before customers call."
  },
  {
    title: "Website Redesigns",
    description:
      "Modernize an outdated website with stronger messaging, better structure, and clearer calls to action."
  },
  {
    title: "Local SEO & GBP Setup",
    description:
      "Page titles, descriptions, indexing setup, maps, and Google Business Profile basics that help nearby customers understand you."
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
      "Monthly care plans for updates, monitoring, Google Business Profile support, and calm help after launch."
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
      "Your site is built for speed, optimized for mobile, and structured around the actions you want visitors to take."
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
      "Launch websites start at $1,500 CAD. Lead-focused business websites usually start around $2,500 CAD, while larger custom builds with integrations start around $4,000 CAD. Scope, pages, revisions, and launch support are confirmed before work starts."
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Most standard websites can launch within 1 week after content, access, and approval are ready. Larger custom integrations or major scope changes are confirmed before work starts so the timeline stays clear."
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
      "Yes. Monthly care plans start at $199/month and can include website checks, small updates, analytics review, uptime checks, Google Business Profile support, bad review alerts, and improvement recommendations."
  },
  {
    question: "Can you help with my Google Business Profile?",
    answer:
      "Yes. We can help keep your profile accurate, update services or photos, monitor new reviews, draft responses, and send simple performance snapshots. We do not promise paid Google rankings."
  },
  {
    question: "Can you add Stripe payments to my own website?",
    answer:
      "Yes, as an optional add-on service. Adding Stripe payments to your own business website is a separate implementation service starting from $299."
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
