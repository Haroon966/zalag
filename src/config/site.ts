function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (base && process.env.GITHUB_REPOSITORY) {
    const [owner] = process.env.GITHUB_REPOSITORY.split("/");
    return `https://${owner.toLowerCase()}.github.io${base}`;
  }
  return "https://www.zalag.ai";
}

export const siteConfig = {
  name: "ZALAG ai",
  tagline: "Custom AI systems engineered for real-world impact",
  description:
    "zalag ai is a boutique AI studio specializing in production-grade generative platforms, intelligent automation, and machine learning systems for forward-thinking companies.",
  url: getSiteUrl(),
  email: "hello@zalag.ai",
  phone: "+1-800-555-0110",
  address: {
    street: "88 Neural Drive",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    country: "USA",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/zalagai",
    github: "https://github.com/zalagai",
    x: "https://x.com/zalagai",
  },
  services: [
    "AI product design",
    "Custom LLM development",
    "Intelligent automation",
    "Data infrastructure",
  ],
  menu: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about/" },
    { label: "Services", link: "/services/" },
    { label: "Contact", link: "/contact/" },
  ],
  stats: [
    { value: "40+", label: "Production launches" },
    { value: "12", label: "Industries served" },
    { value: "99.9%", label: "Platform uptime" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
