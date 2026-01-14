export const siteConfig = {
  name: "zalag ai",
  tagline: "Custom AI systems engineered for real-world impact",
  description:
    "NebulaFoundry AI is a boutique team of AI developers specializing in production-grade generative AI platforms, intelligent automation, and machine learning systems for forward-thinking companies.",
  url: "https://www.nebulafoundry.ai",
  email: "hello@nebulafoundry.ai",
  phone: "+1-800-555-0110",
  address: {
    street: "88 Neural Drive",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    country: "USA",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/nebulafoundry",
    github: "https://github.com/nebulafoundry",
    x: "https://x.com/nebulafoundry",
  },
  services: ["AI product design", "Custom LLM development", "Intelligent automation", "Data infrastructure"],
  menu: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;

