/**
 * COLLEGE DATA — edit only this file to add/remove colleges and documents.
 *
 * Schema (each row):
 *   name          — display name (required)
 *   city          — "Bangalore" | "Mysore" | "Mangalore"
 *   tier          — "Tier 1" | "Tier 2" | "Tier 3"
 *   brochure      — path to PDF, or "" to use auto path assets/brochures/<slug>.pdf
 *   feeStructure  — path to PDF, or "" to use auto path assets/brochures/<slug>-fees.pdf
 *   summary       — short text for “Colleges We Work With” (optional)
 *   featured      — true to show in that section (optional; else first 4 are used)
 *   image         — optional image URL; if missing, site logo is shown on cards
 *
 * ADD COLLEGE: copy one object, change fields, save.
 * REMOVE COLLEGE: delete its whole { ... } block (keep commas valid in the array).
 */

export const COLLEGES = [
  // Bangalore Tier 1
  { name: "Christ University", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "", featured: true, summary: "Strong programs in commerce, arts, science, and professional courses." },
  { name: "RV College of Engineering (RVCE)", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "", featured: true, summary: "Top-ranked engineering with strong placements and research." },
  { name: "PES University", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "", featured: true, summary: "Known for engineering, management, and multidisciplinary options." },
  { name: "MS Ramaiah Institute of Technology (MSRIT)", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "", featured: true, summary: "Established institute with wide engineering and tech offerings." },
  { name: "St. Joseph's College of Commerce (SJCC)", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "", summary: "Leading commerce and business studies college." },
  { name: "Mount Carmel College", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "Jain University", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "Kristu Jayanti College", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "IIIT Bangalore", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "Dayananda Sagar College of Engineering (DSCE)", city: "Bangalore", tier: "Tier 1", brochure: "", feeStructure: "" },

  // Bangalore Tier 2
  { name: "BMS Institute of Technology (BMSIT)", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "New Horizon College of Engineering", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "CMR Institute of Technology", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "CMR University", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "Alliance University", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "Reva University", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "Presidency College", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "AIMS Institutes", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "ISME Bangalore", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "Nitte Meenakshi Institute of Technology (NMIT)", city: "Bangalore", tier: "Tier 2", brochure: "", feeStructure: "" },

  // Bangalore Tier 3
  { name: "Oxford College of Science", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "Garden City University", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "Acharya Institute of Technology", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "East Point College", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "Sai Vidya Institute of Technology", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "Brindavan College", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "T John College", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "RR Institute of Technology", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "Koshys Group of Institutions", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "AMC Engineering College", city: "Bangalore", tier: "Tier 3", brochure: "", feeStructure: "" },

  // Mysore
  { name: "JSS Science and Technology University (SJCE)", city: "Mysore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "JSS Academy of Higher Education & Research", city: "Mysore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "NIE (National Institute of Engineering)", city: "Mysore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "Vidyavardhaka College of Engineering (VVCE)", city: "Mysore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "ATME College of Engineering", city: "Mysore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "Maharaja's College Mysore", city: "Mysore", tier: "Tier 3", brochure: "", feeStructure: "" },
  { name: "St. Philomena's College Mysore", city: "Mysore", tier: "Tier 3", brochure: "", feeStructure: "" },

  // Mangalore
  { name: "St. Aloysius College (Deemed University)", city: "Mangalore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "NITTE University", city: "Mangalore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "Yenepoya University", city: "Mangalore", tier: "Tier 1", brochure: "", feeStructure: "" },
  { name: "Sahyadri College of Engineering & Management", city: "Mangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "Mangalore Institute of Technology & Engineering (MITE)", city: "Mangalore", tier: "Tier 2", brochure: "", feeStructure: "" },
  { name: "Canara Engineering College", city: "Mangalore", tier: "Tier 3", brochure: "", feeStructure: "" },
];
