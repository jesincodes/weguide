import { COLLEGES } from "../colleges.js";
import { initContact } from "./contact.js";
import { initExplore } from "./explore.js";
import { renderFeaturedColleges } from "./featured.js";

const $ = (id) => document.getElementById(id);

renderFeaturedColleges($("featuredCollegesGrid"), COLLEGES);

initExplore({
  colleges: COLLEGES,
  searchInput: $("collegeSearchInput"),
  citySelect: $("cityFilterSelect"),
  grid: $("exploreGrid"),
  emptyState: $("searchEmptyState"),
  showMoreBtn: $("showMoreBtn"),
});

initContact($("contactForm"), $("formStatus"));
