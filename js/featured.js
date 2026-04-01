import { brochureUrl, feeStructureUrl } from "./utils.js";

const DEFAULT_FEATURED = 4;

/**
 * @param {HTMLElement | null} container
 * @param {Array<Record<string, unknown>>} colleges
 */
export function renderFeaturedColleges(container, colleges) {
  if (!container) return;
  const flagged = colleges.filter((c) => c.featured === true);
  const list = flagged.length ? flagged.slice(0, DEFAULT_FEATURED) : colleges.slice(0, DEFAULT_FEATURED);

  container.replaceChildren();
  for (const c of list) {
    const summaryDefault = `${c.city} · ${c.tier}`;
    const summary =
      typeof c.summary === "string" && c.summary.trim() ? c.summary.trim() : summaryDefault;

    const art = document.createElement("article");
    art.className = "card";

    const h4 = document.createElement("h4");
    h4.textContent = String(c.name);

    const p = document.createElement("p");
    p.textContent = summary;

    const links = document.createElement("div");
    links.className = "explore-links card-doc-links";

    const aBro = document.createElement("a");
    aBro.className = "explore-btn explore-btn-secondary";
    aBro.href = brochureUrl(c);
    aBro.target = "_blank";
    aBro.rel = "noopener";
    aBro.textContent = "Brochure";

    const aFee = document.createElement("a");
    aFee.className = "explore-btn explore-btn-secondary";
    aFee.href = feeStructureUrl(c);
    aFee.target = "_blank";
    aFee.rel = "noopener";
    aFee.textContent = "Fee Structure";

    links.append(aBro, aFee);
    art.append(h4, p, links);
    container.appendChild(art);
  }
}
