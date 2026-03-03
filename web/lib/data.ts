import config from "./site.config.json";

// ─── Data-driven exports (source: site.config.json) ───────────────────────
export const caseStudies = config.work;          // project case studies
export const services = config.services;         // service offerings
export const contactData = config.contact;       // email + note
export const team = config.team;                 // team members (empty = hidden)
export const testimonials = config.testimonials; // { show: bool, items: [] }
export const serviceAreas = config.serviceAreas; // cities we serve
export const socialLinks = config.social;        // github, linkedin, etc.
export const footerData = config.footer;         // logo, tagline, email, copyright

export const siteConfig = config;
export default config;
