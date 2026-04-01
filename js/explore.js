import { brochureUrl, feeStructureUrl, cardImageSrc } from "./utils.js";

const PAGE_SIZE = 12;

/**
 * @param {object} options
 * @param {Array<Record<string, unknown>>} options.colleges
 * @param {HTMLInputElement | null} options.searchInput
 * @param {HTMLSelectElement | null} options.citySelect
 * @param {HTMLElement | null} options.grid
 * @param {HTMLElement | null} options.emptyState
 * @param {HTMLButtonElement | null} options.showMoreBtn
 */
export function initExplore({
  colleges,
  searchInput,
  citySelect,
  grid,
  emptyState,
  showMoreBtn,
}) {
  if (!grid || !searchInput || !citySelect || !emptyState) return;

  let visible = PAGE_SIZE;

  function getFiltered() {
    const q = searchInput.value.trim().toLowerCase();
    const city = citySelect.value;
    return colleges.filter((c) => {
      const name = String(c.name).toLowerCase();
      const cCity = String(c.city);
      const byQ = !q || name.includes(q) || cCity.toLowerCase().includes(q);
      const byCity = !city || cCity === city;
      return byQ && byCity;
    });
  }

  function renderCard(college) {
    const card = document.createElement("article");
    card.className = "explore-card";

    const img = document.createElement("img");
    img.src = cardImageSrc(college);
    img.alt = `${college.name} campus`;
    img.loading = "lazy";

    const body = document.createElement("div");
    body.className = "explore-body";

    const h4 = document.createElement("h4");
    h4.textContent = String(college.name);

    const meta = document.createElement("p");
    meta.textContent = [college.city, college.tier].filter(Boolean).join(" · ");

    const links = document.createElement("div");
    links.className = "explore-links";

    const aBro = document.createElement("a");
    aBro.className = "explore-btn explore-btn-secondary";
    aBro.href = brochureUrl(college);
    aBro.target = "_blank";
    aBro.rel = "noopener";
    aBro.textContent = "Brochure";

    const aFee = document.createElement("a");
    aFee.className = "explore-btn explore-btn-secondary";
    aFee.href = feeStructureUrl(college);
    aFee.target = "_blank";
    aFee.rel = "noopener";
    aFee.textContent = "Fee Structure";

    links.append(aBro, aFee);
    body.append(h4, meta, links);
    card.append(img, body);
    return card;
  }

  function render() {
    const items = getFiltered();
    grid.replaceChildren();
    const slice = items.slice(0, visible);
    for (const c of slice) grid.appendChild(renderCard(c));
    emptyState.hidden = items.length > 0;
    if (showMoreBtn) showMoreBtn.hidden = items.length <= visible || items.length === 0;
  }

  function resetAndRender() {
    visible = PAGE_SIZE;
    render();
  }

  searchInput.addEventListener("input", resetAndRender);
  citySelect.addEventListener("change", resetAndRender);
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      visible += PAGE_SIZE;
      render();
    });
  }

  resetAndRender();
}
