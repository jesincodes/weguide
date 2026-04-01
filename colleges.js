/**
 * This file contains the list of all colleges.
 * You can easily ADD or DELETE brochure and fee structure links here.
 *
 * HOW TO USE:
 * - To ADD a brochure or fee structure: Place your PDF in the "assets/brochures" folder,
 *   then edit the 'brochure' and 'feeStructure' fields below with the correct path.
 *   Example:  brochure: "assets/brochures/my-college.pdf"
 * 
 * - To DELETE or remove a link: Leave the field completely empty like this: 
 *   brochure: ""
 */

const COLLEGE_DB = [
  // Bangalore Tier 1
  { name: "Christ University", city: "Bangalore", tier: "Tier 1", categories: ["Business", "Creative", "IT"], brochure: "", feeStructure: "" },
  { name: "RV College of Engineering (RVCE)", city: "Bangalore", tier: "Tier 1", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "PES University", city: "Bangalore", tier: "Tier 1", categories: ["IT", "Engineering", "Business"], brochure: "", feeStructure: "" },
  { name: "MS Ramaiah Institute of Technology (MSRIT)", city: "Bangalore", tier: "Tier 1", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "St. Joseph's College of Commerce (SJCC)", city: "Bangalore", tier: "Tier 1", categories: ["Business"], brochure: "", feeStructure: "" },
  { name: "Mount Carmel College", city: "Bangalore", tier: "Tier 1", categories: ["Business", "Creative"], brochure: "", feeStructure: "" },
  { name: "Jain University", city: "Bangalore", tier: "Tier 1", categories: ["Business", "IT", "Engineering"], brochure: "", feeStructure: "" },
  { name: "Kristu Jayanti College", city: "Bangalore", tier: "Tier 1", categories: ["Business", "IT"], brochure: "", feeStructure: "" },
  { name: "IIIT Bangalore", city: "Bangalore", tier: "Tier 1", categories: ["IT"], brochure: "", feeStructure: "" },
  { name: "Dayananda Sagar College of Engineering (DSCE)", city: "Bangalore", tier: "Tier 1", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  
  // Bangalore Tier 2
  { name: "BMS Institute of Technology (BMSIT)", city: "Bangalore", tier: "Tier 2", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "New Horizon College of Engineering", city: "Bangalore", tier: "Tier 2", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "CMR Institute of Technology", city: "Bangalore", tier: "Tier 2", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "Alliance University", city: "Bangalore", tier: "Tier 2", categories: ["Business", "Engineering"], brochure: "", feeStructure: "" },
  { name: "Reva University", city: "Bangalore", tier: "Tier 2", categories: ["Engineering", "Business", "IT"], brochure: "", feeStructure: "" },
  { name: "Presidency College", city: "Bangalore", tier: "Tier 2", categories: ["Business"], brochure: "", feeStructure: "" },
  { name: "AIMS Institutes", city: "Bangalore", tier: "Tier 2", categories: ["Business"], brochure: "", feeStructure: "" },
  { name: "ISME Bangalore", city: "Bangalore", tier: "Tier 2", categories: ["Business"], brochure: "", feeStructure: "" },
  { name: "Nitte Meenakshi Institute of Technology (NMIT)", city: "Bangalore", tier: "Tier 2", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  
  // Bangalore Tier 3
  { name: "Oxford College of Science", city: "Bangalore", tier: "Tier 3", categories: ["Medical", "Creative", "Business"], brochure: "", feeStructure: "" },
  { name: "Garden City University", city: "Bangalore", tier: "Tier 3", categories: ["Business", "Creative", "IT"], brochure: "", feeStructure: "" },
  { name: "Acharya Institute of Technology", city: "Bangalore", tier: "Tier 3", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "East Point College", city: "Bangalore", tier: "Tier 3", categories: ["Engineering", "Medical"], brochure: "", feeStructure: "" },
  { name: "Sai Vidya Institute of Technology", city: "Bangalore", tier: "Tier 3", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "Brindavan College", city: "Bangalore", tier: "Tier 3", categories: ["Business", "Engineering"], brochure: "", feeStructure: "" },
  { name: "T John College", city: "Bangalore", tier: "Tier 3", categories: ["Business", "Medical"], brochure: "", feeStructure: "" },
  { name: "RR Institute of Technology", city: "Bangalore", tier: "Tier 3", categories: ["Engineering"], brochure: "", feeStructure: "" },
  { name: "Koshys Group of Institutions", city: "Bangalore", tier: "Tier 3", categories: ["Business", "Engineering"], brochure: "", feeStructure: "" },
  { name: "AMC Engineering College", city: "Bangalore", tier: "Tier 3", categories: ["Engineering"], brochure: "", feeStructure: "" },
  
  // Mysore
  { name: "JSS Science and Technology University (SJCE)", city: "Mysore", tier: "Tier 1", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "JSS Academy of Higher Education & Research", city: "Mysore", tier: "Tier 1", categories: ["Medical"], brochure: "", feeStructure: "" },
  { name: "NIE (National Institute of Engineering)", city: "Mysore", tier: "Tier 1", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "Vidyavardhaka College of Engineering (VVCE)", city: "Mysore", tier: "Tier 2", categories: ["Engineering"], brochure: "", feeStructure: "" },
  { name: "ATME College of Engineering", city: "Mysore", tier: "Tier 2", categories: ["Engineering"], brochure: "", feeStructure: "" },
  { name: "Maharaja's College Mysore", city: "Mysore", tier: "Tier 3", categories: ["Business", "Creative"], brochure: "", feeStructure: "" },
  { name: "St. Philomena's College Mysore", city: "Mysore", tier: "Tier 3", categories: ["Business", "Medical"], brochure: "", feeStructure: "" },
  
  // Mangalore
  { name: "St. Aloysius College (Deemed University)", city: "Mangalore", tier: "Tier 1", categories: ["Business", "Creative"], brochure: "", feeStructure: "" },
  { name: "NITTE University", city: "Mangalore", tier: "Tier 1", categories: ["Medical", "Engineering"], brochure: "", feeStructure: "" },
  { name: "Yenepoya University", city: "Mangalore", tier: "Tier 1", categories: ["Medical"], brochure: "", feeStructure: "" },
  { name: "Sahyadri College of Engineering & Management", city: "Mangalore", tier: "Tier 2", categories: ["Engineering", "IT"], brochure: "", feeStructure: "" },
  { name: "Mangalore Institute of Technology & Engineering (MITE)", city: "Mangalore", tier: "Tier 2", categories: ["Engineering"], brochure: "", feeStructure: "" },
  { name: "Canara Engineering College", city: "Mangalore", tier: "Tier 3", categories: ["Engineering"], brochure: "", feeStructure: "" }
];
