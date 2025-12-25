export interface ServiceLink {
  label: string;
  href: string;
}

// Shared services data for Header and Footer
export const servicesLinks: ServiceLink[] = [
  { label: "CBCT Scan", href: "/services/cbct" },
  { label: "OPG", href: "/services/opg" },
  { label: "LCEPH", href: "/services/lceph" },
  { label: "Soft Tissue Screening", href: "/services/sts" },
  { label: "Pathology", href: "/services/pathology" },
  { label: "Telereporting", href: "/services/tele" },
  { label: "Intraoral Scanner", href: "/services/intra-oral" },
];
