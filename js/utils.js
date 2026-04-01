/** Small helpers shared by college UI modules. */

const FALLBACK_IMAGE = "assets/weguide-logo.png";

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** @param {{ name: string, brochure?: string, feeStructure?: string }} college */
export function brochureUrl(college) {
  const c = typeof college.brochure === "string" ? college.brochure.trim() : "";
  return c || `assets/brochures/${slugify(college.name)}.pdf`;
}

/** @param {{ name: string, brochure?: string, feeStructure?: string }} college */
export function feeStructureUrl(college) {
  const c = typeof college.feeStructure === "string" ? college.feeStructure.trim() : "";
  return c || `assets/brochures/${slugify(college.name)}-fees.pdf`;
}

/** @param {{ image?: string }} college */
export function cardImageSrc(college) {
  const u = typeof college.image === "string" ? college.image.trim() : "";
  return u || FALLBACK_IMAGE;
}
