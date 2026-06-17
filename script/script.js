const API_URL  = "https://ixd-supsi.github.io/n70api/data.json";
const IMG_BASE = "https://ixd-supsi.github.io/n70api/immagini/";

function imgUrl(p, idx = 0) {
  const src = p.immagine && p.immagine[idx];
  if (!src || src.startsWith("...") || src.length < 5) return null;
  if (src.startsWith("http")) return src;
  return IMG_BASE + src;
}

const FALLBACK = [
  {titolo:"Project Moonbound",descrizione:"The project isn't just a game. Once all the challenges are completed, the experience culminates with a visual journey to the Moon and becomes a veritable historical archive. Players are rewarded with an interface that allows them to explore original videos and NASA archive footage for each of the facilities they encounter (from David Scott's original experiment on the Moon to actual footage of the Centrifuge and the N.B.L. pool).",immagine:["projectmoonbound_1.jpg","projectmoonbound_2.jpg"],url:"https://riccardovosti.github.io/TESTGRAVITY/",data:{giorno:21,mese:4,anno:2026},autore:"Riccardo Vosti",tags:["game","historical-archives","apollo-program","apollo","2d"]},
  {titolo:"Perseverance Rover",descrizione:"An interactive page designed for scientific outreach and virtual exploration of the Mars 2020 mission and NASA's Perseverance rover. The project is a digital laboratory where the user stops being a passive spectator and becomes a virtual operator, discovering every detail of the mission.",immagine:["perseverancerover_1.jpg","perseverancerover_2.jpg"],url:"https://naheleee.github.io/Progetto_1_PerseveranceRover/",data:{giorno:21,mese:4,anno:2026},autore:"Nahele Belli",tags:["rover","perseverance","3d","educational","mars","space","exploration","mission","discovery","robot","aerospace","planet"]},
  {titolo:"Radiowawe NASA",descrizione:"Radiowawe NASA is an interactive digital archive that collects and visually presents the ten most iconic audio transmissions in NASA history.",immagine:["Radiowawe_NASA_1.jpg","Radiowawe_NASA_2.jpg"],url:"https://claudio-ceppi.github.io/CV429.01-Interaction-Design/Radiowave_NASA/files/",data:{giorno:21,mese:4,anno:2026},autore:"Claudio Ceppi",tags:["audio","huston","sounds","apollo","archive"]},
  {titolo:"Other Worlds",descrizione:"An interactive exploration of 11 confirmed exoplanets from the NASA Exoplanet Archive, selected to show the extreme diversity of worlds beyond our solar system.",immagine:["otherworlds_1.jpg","otherworlds_2.jpg"],url:"https://djordjaa.github.io/Other_Worlds/",data:{giorno:21,mese:4,anno:2026},autore:"Djordja Krsteva",tags:["planet","exoplanets","extreme words","nasa archive","astronomy","deep space"]},
  {titolo:"MoonPrint",descrizione:"This interactive archive explores how global media reported the Apollo 11 moon landing in July 1969. Through dynamic visualization, the site compares journalistic narratives from different countries, highlighting differences in tone, language, and perspective among international publications. The project illuminates the geopolitical context of the Cold War, contrasting the triumphant enthusiasm of Western media with the more sober, technical coverage in the Soviet bloc countries. It was created to celebrate NASA's 70th anniversary.",immagine:["moonprint_1.jpg","moonprint_2.jpg"],url:"https://sofiaribeiromarques.github.io/NASA/progetto/index.html",data:{giorno:21,mese:4,anno:2026},autore:"Sofia Ribeiro Marques",tags:["archive","moon","apollo","media","frontpage","comparison"]},
  {titolo:"Eyes on earth",descrizione:"By combining technical visualization with detailed descriptions of five NASA Earth-observing satellites, this project examines the ongoing impact of climate change. The initiative is designed to illustrate how these satellites operate and why they are essential for monitoring our planet's health.",immagine:["eyesonearth_1.jpg","eyesonearth_2.jpg"],url:"https://carladegennaro.github.io/interaction_design/progetto_1.2/",data:{giorno:21,mese:4,anno:2026},autore:"Carla De Gennaro",tags:["climate","satellites","earth","orbit","technical","observatory"]},
  {titolo:"Lunar Archive Explorer",descrizione:"The Lunar Archive Explorer is a digital platform that allows you to navigate and consult the scientific data and high-resolution images collected during missions to the Moon.",immagine:["..._1.jpg","..._2.jpg"],url:"https://dadiccs.github.io/nasa/",data:{giorno:21,mese:4,anno:2026},autore:"Daniele Falcone",tags:["3d","apollo","history","space","archive","moon","panoramic","missions","images"]},
  {titolo:"Nebula Vision",descrizione:"Nebula Vision offers a guided journey to discover the Eagle and Helix nebulae, key Milky Way pillars for understanding the origin and fate of our Solar System. Leveraging the Spitzer Space Telescope's infrared technology, the site peers through cosmic dust to analyze scientific data otherwise invisible to the naked eye.",immagine:["nebulavision_1.jpg","nebulavision_2.jpg"],url:"https://ali-0032.github.io/Nebula_Vision/05_prototipo_3/",data:{giorno:21,mese:4,anno:2026},autore:"Alissa Bionda",tags:["astronomy","space","nebula","spitzer","2d"]},
  {titolo:"SolarScale",descrizione:"This project explores the Solar System starting from a clear critical issue. Many widely used representations do not accurately convey the proportions between planetary sizes and the distances in space. The scale of the Solar System is indeed so immense that a faithful representation within a single image is impossible, often leading to misleading simplifications. To overcome this limitation, the project deconstructs the system into three primary elements, planetary sizes, positions and distances, creating an interactive visualization that translates scientific data into a clear and immediate visual experience, making the true scale of the Solar System tangible.",immagine:["solarscale_1.jpg","solarscale_2.jpg"],url:"https://lucamazzolaa.github.io/SolarScale/",data:{giorno:21,mese:4,anno:2026},autore:"Luca Mazzola",tags:["planet","3d","space","educational","earth","solar system","measurements","proportions","orbits","sun"]},
  {titolo:"Hubble Space Telescope",descrizione:"My project aims to pay tribute to the Hubble satellite. From 1985 to today, thanks to its contribution, we have obtained the first detailed images of space, which have been fundamental for the study and understanding of the universe.",immagine:["hubble_1.jpg","hubble_2.jpg"],url:"https://laura-pantani.github.io/NASA-P1/p1/",data:{giorno:21,mese:4,anno:2026},autore:"Laura Pantani",tags:["archive","history","space","astronomy"]},
  {titolo:"NEO Protocol",descrizione:"Neo-Sentinel is an interactive web ecosystem designed to monitor Near-Earth Objects (NEOs) in real time. Developed to celebrate NASA's 70th anniversary, the project transforms complex astrometric data streams from the Jet Propulsion Laboratory (JPL) into a space surveillance interface.",immagine:["neoprotocol_1.jpg","neoprotocol_2.jpg"],url:"https://melissabroggini.github.io/NEO_Protocol/",data:{giorno:21,mese:4,anno:2026},autore:"Melissa Broggini",tags:["data visualization","space","3d","earth","science","neo","near earth object","asteroids","real life data","radar"]},
  {titolo:"Beyond The Myth",descrizione:"Beyond The Myth is a relational digital ecosystem that maps the evolution of astronomical knowledge, documenting the fundamental transition from mythological narrative to measurable scientific proof.",immagine:["..._1.jpg","..._2.jpg"],url:"https://...",data:{giorno:21,mese:4,anno:2026},autore:"Michelle Chicherio",tags:["history","paradigms","myth-busting","network-navigation","real-time-data","epistemology"]},
  {titolo:"Spacesuit evolution",descrizione:"Spacesuit Evolution è un progetto che racconta l'evoluzione delle tute spaziali della NASA dagli anni '60 fino al 2011, attraversando i principali programmi dell'esplorazione umana: Mercury, Gemini, Apollo e Space Shuttle.",immagine:["..._1.jpg","..._2.jpg"],url:"https://davidebarattini.github.io/media/spacesuit-evolution/index.html",data:{giorno:21,mese:4,anno:2026},autore:"Davide Barattini",tags:["spacesuit"]},
];

const SECTORS = [
  { id: "bodies", label: "Bodies & Places", tags: ["moon","mars","earth","sun","planet","nebula","exoplanets","deep space","solar system","orbit","orbits","panoramic","asteroids","neo","near earth object","extreme words"] },
  { id: "programs", label: "Programs & Missions", tags: ["apollo","apollo program","hubble","perseverance","spitzer","mission","missions","huston","rover","satellites","spacesuit","robot","aerospace"] },
  { id: "practice", label: "Practice & Form", tags: ["game","3d","2d","data visualization","archive","historical archives","nasa archive","images","audio","sounds","frontpage","comparison","real life data","real time data","radar","panoramic","network navigation","media"] },
  { id: "themes", label: "Themes & Disciplines", tags: ["astronomy","climate","science","educational","history","exploration","discovery","technical","observatory","paradigms","myth busting","epistemology","measurements","proportions"] }
];

function sectorFor(tag) {
  const norm = t => t.trim().toLowerCase().replace(/-/g, " ");
  for (const s of SECTORS) if (s.tags.some(t => norm(t) === norm(tag))) return s.id;
  return "themes";
}

const state = {
  raw: [],
  tagIndex: [],
  view: "graph",
  search: "",
  selectedTags: new Set(),
  sort: { key: "titolo", dir: "asc" },
  gridSort: "title",
  fromCache: false,
};

boot();

function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function draw() {
    const W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    ctx.clearRect(0, 0, W, H);

    const rng = (seed) => {
      let s = seed;
      return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };
    };

    const r1 = rng(42);
    for (let i = 0; i < 320; i++) {
      const x = r1() * W, y = r1() * H;
      const sz = r1() * 0.6 + 0.2;
      const op = r1() * 0.18 + 0.06;
      ctx.beginPath();
      ctx.arc(x, y, sz, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,228,255,${op.toFixed(3)})`;
      ctx.fill();
    }
    const r2 = rng(137);
    for (let i = 0; i < 80; i++) {
      const x = r2() * W, y = r2() * H;
      const sz = r2() * 1.0 + 0.5;
      const op = r2() * 0.22 + 0.08;
      ctx.beginPath();
      ctx.arc(x, y, sz, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240,240,232,${op.toFixed(3)})`;
      ctx.fill();
    }
    const r3 = rng(999);
    for (let i = 0; i < 18; i++) {
      const x = r3() * W, y = r3() * H;
      const sz = r3() * 1.2 + 0.8;
      const op = r3() * 0.28 + 0.18;
      ctx.beginPath();
      ctx.arc(x, y, sz, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${op.toFixed(3)})`;
      ctx.fill();
    }
  }

  draw();
  window.addEventListener("resize", draw);
}

async function boot() {
  initStarfield();
  let data;
  try {
    const res = await fetch(API_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    data = await res.json();
    if (!Array.isArray(data) || !data.length) throw new Error("Empty");
  } catch (err) {
    console.warn("[N70] live API unavailable, using cached records.", err);
    data = FALLBACK;
    state.fromCache = true;
  }

  state.raw = data.map((p, i) => ({
    ...p,
    _id: i,
    _num: String(i + 1).padStart(2, "0"),
    _tags: (p.tags || []).map(t => t.trim().toLowerCase().replace(/-/g, ' ')),  }));

  buildTagIndex();
  renderSidebarTags();
  renderDropdownFilters();
  renderConstellationFrame();
  bindUI();
  render();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncViewHeaderHeight);
  }
}

function buildTagIndex() {
  const counts = new Map();
  for (const p of state.raw) {
    for (const t of p._tags) counts.set(t, (counts.get(t) || 0) + 1);
  }
  state.tagIndex = [...counts.entries()]
    .map(([tag, count]) => ({ tag, count, sector: sectorFor(tag) }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
  const grouped = SECTORS.map(s => ({
    ...s,
    items: state.tagIndex.filter(t => t.sector === s.id),
  }));
  state.sectorBuckets = grouped;
}

function renderSidebarTags() {
  const container = document.getElementById("sidebarTagList");
  if (!container) return;
  container.innerHTML = "";
  const sorted = [...state.tagIndex].sort((a, b) => a.tag.localeCompare(b.tag));
  for (const t of sorted) {
    const row = document.createElement("div");
    row.className = "sidebar-tag-row";
    row.dataset.tag = t.tag;
    row.tabIndex = 0;
    row.setAttribute("role", "checkbox");
    row.setAttribute("aria-checked", state.selectedTags.has(t.tag) ? "true" : "false");
    if (state.selectedTags.has(t.tag)) row.classList.add("is-on");
    row.innerHTML = `<span class="sidebar-tag-name mono">${esc(t.tag)}</span><span class="sidebar-tag-indicator"></span>`;
    row.addEventListener("click", () => toggleTag(t.tag));
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTag(t.tag);
      }
    });
    container.appendChild(row);
  }
}

// --- Custom dropdown helpers ---
function tagDropdownLabel() {
  const n = state.selectedTags.size;
  if (n === 0) return "All tags";
  if (n === 1) return [...state.selectedTags][0];
  const joined = [...state.selectedTags].join(", ");
  if (joined.length <= 28) return joined;
  return `${n} tags`;
}

function syncTagDropdown(dropdownEl) {
  if (!dropdownEl) return;
  const valueEl = dropdownEl.querySelector(".dropdown__value");
  if (valueEl) valueEl.textContent = tagDropdownLabel();

  dropdownEl.querySelectorAll(".dropdown__option[data-value]").forEach(opt => {
    const tag = opt.dataset.value;
    if (tag === "") return; // clear-filters option, handled separately
    const isSel = state.selectedTags.has(tag);
    opt.classList.toggle("is-selected", isSel);
    opt.setAttribute("aria-selected", isSel ? "true" : "false");
  });

  const clearOpt = dropdownEl.querySelector(".dropdown__option--clear");
  if (clearOpt) clearOpt.hidden = state.selectedTags.size === 0;
}

function closeAllDropdowns(except) {
  document.querySelectorAll(".dropdown.is-open").forEach(d => {
    if (d !== except) {
      d.classList.remove("is-open");
      const trigger = d.querySelector(".dropdown__trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function initDropdown(dropdownEl, onSelect, onClear) {
  if (!dropdownEl || dropdownEl.dataset.bound) return;
  dropdownEl.dataset.bound = "true";
  const trigger = dropdownEl.querySelector(".dropdown__trigger");
  const menu = dropdownEl.querySelector(".dropdown__menu");

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = !dropdownEl.classList.contains("is-open");
    closeAllDropdowns(willOpen ? dropdownEl : null);
    dropdownEl.classList.toggle("is-open", willOpen);
    trigger.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });

  menu.addEventListener("click", (e) => {
    const clearOpt = e.target.closest(".dropdown__option--clear");
    if (clearOpt) {
      dropdownEl.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      onClear();
      return;
    }
    const opt = e.target.closest(".dropdown__option");
    if (!opt) return;
    const value = opt.dataset.value;
    dropdownEl.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    onSelect(value);
  });
}

document.addEventListener("click", () => closeAllDropdowns());
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllDropdowns();
});

function setupTagFilterDropdown(dropdownEl, sorted) {
  if (!dropdownEl) return;
  const menu = dropdownEl.querySelector(".dropdown__menu");
  menu.innerHTML = '<li class="dropdown__option dropdown__option--clear" role="option" hidden>Clear filters</li>';
  for (const t of sorted) {
    const li = document.createElement("li");
    li.className = "dropdown__option";
    li.setAttribute("role", "option");
    li.dataset.value = t.tag;
    li.textContent = `${t.tag} (${t.count})`;
    menu.appendChild(li);
  }
  syncTagDropdown(dropdownEl);
  initDropdown(
    dropdownEl,
    (value) => {
      state.selectedTags.clear();
      if (value) state.selectedTags.add(value);
      syncFilterUI();
      render();
    },
    () => clearFilters()
  );
}

function renderDropdownFilters() {
  const sorted = [...state.tagIndex].sort((a, b) => a.tag.localeCompare(b.tag));

  setupTagFilterDropdown(document.getElementById("gridTagFilter"), sorted);
  setupTagFilterDropdown(document.getElementById("listTagFilter"), sorted);

  // gridSort: custom dropdown, static options
  const gridSort = document.getElementById("gridSort");
  if (gridSort) {
    initDropdown(gridSort, (value) => {
      state.gridSort = value;
      syncSortDropdown(gridSort);
      render();
    });
    syncSortDropdown(gridSort);
  }
}

function syncSortDropdown(dropdownEl) {
  if (!dropdownEl) return;
  const value = state.gridSort || "title";
  const valueEl = dropdownEl.querySelector(".dropdown__value");
  dropdownEl.querySelectorAll(".dropdown__option[data-value]").forEach(opt => {
    const isSel = opt.dataset.value === value;
    opt.classList.toggle("is-selected", isSel);
    opt.setAttribute("aria-selected", isSel ? "true" : "false");
    if (isSel && valueEl) valueEl.textContent = `Sort: ${opt.textContent}`;
  });
}

function syncFilterUI() {
  document.querySelectorAll(".sidebar-tag-row").forEach(r => {
    const isOn = state.selectedTags.has(r.dataset.tag);
    r.classList.toggle("is-on", isOn);
    r.setAttribute("aria-checked", isOn ? "true" : "false");
  });

  syncTagDropdown(document.getElementById("gridTagFilter"));
  syncTagDropdown(document.getElementById("listTagFilter"));
}

function toggleTag(tag) {
  if (state.selectedTags.has(tag)) state.selectedTags.delete(tag);
  else state.selectedTags.add(tag);
  syncFilterUI();
  render();
}
function clearFilters() {
  state.selectedTags.clear();
  state.search = "";

  syncFilterUI();
  render();
}

function filtered() {
  const q = state.search.trim().toLowerCase();
  return state.raw.filter(p => {
    if (state.selectedTags.size) {
      for (const t of state.selectedTags) {
        if (!p._tags.includes(t)) return false; 
      }
    }
    if (!q) return true;
    const hay = [
      p.titolo, p.autore, p.descrizione, ...p._tags
    ].join(" ").toLowerCase();
    return hay.includes(q);
  });
}

function bindUI() {
  document.querySelectorAll(".viewSwitch__btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".viewSwitch__btn").forEach(x => x.classList.toggle("is-active", x === b));
      state.view = b.dataset.view;
      document.querySelectorAll(".view").forEach(v => v.classList.toggle("is-active", v.dataset.view === state.view));
      render();
    });
  });

  const sidebarReset = document.getElementById("sidebarToggleAll");
  if (sidebarReset) sidebarReset.addEventListener("click", clearFilters);

  document.querySelectorAll(".ledger__th[data-sort]").forEach(th => {
    th.addEventListener("click", () => sortLedger(th.dataset.sort));
  });

  const lt = document.getElementById("legendToggle");
  lt.addEventListener("click", () => {
    const open = lt.getAttribute("aria-expanded") === "true";
    lt.setAttribute("aria-expanded", !open);
    document.getElementById("legend").classList.toggle("is-collapsed", open);
  });

  document.getElementById("drawerClose").addEventListener("click", closeDrawer);
  document.getElementById("drawerScrim").addEventListener("click", closeDrawer);
  window.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

  const hero = document.getElementById("hero");
  const viewSwitch = document.getElementById("viewSwitch");
  const headerMark = document.querySelector(".header-mark");
  const statusbar = document.querySelector(".statusbar");

  if (hero && viewSwitch && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      const isCatalogView = !entries[0].isIntersecting;
      viewSwitch.classList.toggle("is-visible", isCatalogView);
      if (headerMark) headerMark.classList.toggle("is-visible", isCatalogView);
      if (statusbar) statusbar.classList.toggle("is-visible", isCatalogView);
    }, { root: document.getElementById("snapContainer"), threshold: 0.05 });
    obs.observe(hero);
  }

  bindConstellationInteraction();
  window.addEventListener("resize", syncViewHeaderHeight);
  initLogoConstellation();
}

function bindConstellationInteraction() {
  const wrap = document.querySelector(".constellationWrap");
  if (!wrap) return;

  let vx = 0, vy = 0, vscale = 1;
  let dragging = false, startX = 0, startY = 0, startVx = 0, startVy = 0;
  const MIN_SCALE = 0.5, MAX_SCALE = 4;
  const LABEL_ZOOM = 1.6;

  function applyTransform() {
    const svg = document.getElementById("constellation");
    if (!svg) return;
    let g = svg.querySelector(".gx-viewport");
    if (!g) {
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.classList.add("gx-viewport");
      while (svg.firstChild) g.appendChild(svg.firstChild);
      svg.appendChild(g);
    }
    g.setAttribute("transform", `translate(${vx},${vy}) scale(${vscale})`);

    svg.querySelectorAll(".gx-tag-label, .gx-project-label, .gx-project-num, .gx-sector-label").forEach(el => {
      el.style.fontSize = (11 / vscale) + "px";
    });

    const PROJECT_DOT_R = 6;
    const LABEL_GAP = 6;
    const MIN_SCREEN_OFFSET = 20;
    svg.querySelectorAll(".gx-project-label").forEach(el => {
      const bx = parseFloat(el.getAttribute("data-bx"));
      const by = parseFloat(el.getAttribute("data-by"));
      if (!isNaN(bx) && !isNaN(by)) {
        const screenOffset = Math.max(MIN_SCREEN_OFFSET, PROJECT_DOT_R * vscale + LABEL_GAP);
        el.setAttribute("x", bx);
        el.setAttribute("y", by + screenOffset / vscale);
      }
    });

    const labelOpacity = vscale >= LABEL_ZOOM ? Math.min(1, (vscale - LABEL_ZOOM) / 0.4) : 0;
    svg.querySelectorAll(".gx-project-label").forEach(el => {
      const isActive = el.closest(".gx-project")?.classList.contains("is-active");
      el.style.opacity = isActive ? "1" : String(labelOpacity);
    });

    svg.querySelectorAll(".gx-tag-label").forEach(el => { el.style.opacity = ""; });

    const hud = document.getElementById("hudHint");
    if (hud && !svg.classList.contains("has-focus")) {
      if (vscale < 1.01) hud.textContent = "Scroll to zoom · Drag to pan · Hover to explore";
      else if (vscale < LABEL_ZOOM) hud.textContent = `${Math.round(vscale * 100)}% — zoom in more to read project names`;
      else hud.textContent = `${Math.round(vscale * 100)}% — hover any point to read it`;
    }
  }

  wrap.addEventListener("wheel", e => {
    e.preventDefault();
    const rect = wrap.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const rawDelta = Math.abs(e.deltaY) > 100 ? Math.sign(e.deltaY) * 100 : e.deltaY;
    const factor = 1 - rawDelta * 0.0008;
    const delta = Math.max(0.95, Math.min(1.05, factor));
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, vscale * delta));
    vx = mx - (mx - vx) * (newScale / vscale);
    vy = my - (my - vy) * (newScale / vscale);
    vscale = newScale;
    applyTransform();
  }, { passive: false });

  const DRAG_THRESHOLD = 6; 
  let dragMoved = false;

  wrap.addEventListener("mousedown", e => {
    if (e.button !== 0) return;
    dragging = true; dragMoved = false;
    startX = e.clientX; startY = e.clientY;
    startVx = vx; startVy = vy;
  });
  window.addEventListener("mousemove", e => {
    if (!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (!dragMoved && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
    dragMoved = true;
    wrap.style.cursor = "grabbing";
    vx = startVx + dx; vy = startVy + dy;
    applyTransform();
  });

  wrap.addEventListener("click", e => { if (dragMoved) { e.stopPropagation(); e.preventDefault(); } }, true);

  function stopDrag() {
    if (!dragging) return;
    dragging = false;
    if (dragMoved) wrap.style.cursor = "";
    dragMoved = false;
  }
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("blur", stopDrag);
  document.addEventListener("mouseleave", stopDrag);

  wrap.addEventListener("dblclick", () => {
    vx = 0; vy = 0; vscale = 1;
    applyTransform();
    document.getElementById("hudHint").textContent = "Hover any point to read it.";
  });

  state._applyConstellationTransform = applyTransform;
}

function render() {
  let list = filtered();

  const details = document.querySelectorAll(".result-detail");
  const detailText = `${String(list.length).padStart(2,"0")} / ${String(state.raw.length).padStart(2,"0")}`;
  details.forEach(el => el.textContent = detailText);

  if (state.gridSort) {
    list = [...list].sort((a, b) => {
      switch (state.gridSort) {
        case "title":  return a.titolo.localeCompare(b.titolo);
        case "author": return a.autore.localeCompare(b.autore);
        case "date":   return dateVal(b.data) - dateVal(a.data);
        case "tags":   return b._tags.length - a._tags.length;
        default: return 0;
      }
    });
  }

  if (state.view === "grid") renderWall(list);
  else if (state.view === "table") renderLedger(filtered());
  else renderConstellation(filtered());

  syncViewHeaderHeight();
}

function syncViewHeaderHeight() {
  const header = document.querySelector(".view.is-active .viewHeader");
  if (!header) return;
  const h = header.getBoundingClientRect().height;
  if (h > 0) document.documentElement.style.setProperty("--viewheader-h", `${h}px`);
}

function dateVal(d) {
  if (!d) return 0;
  return new Date(d.anno || 0, (d.mese || 1) - 1, d.giorno || 1).getTime();
}

function renderWall(list) {
  const wall = document.getElementById("wall");
  wall.innerHTML = "";
  if (!list.length) {
    wall.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">No projects match this filter.</div>`;
    return;
  }
  const tpl = document.getElementById("tpl-card");
  for (const p of list) {
    const node = tpl.content.firstElementChild.cloneNode(true);
    const thumb = node.querySelector(".card__thumb");
    const src0 = imgUrl(p, 0);
    
    if (src0) {
      const img = document.createElement("img");
      img.src = src0; 
      img.alt = p.titolo; 
      img.loading = "lazy";
      img.className = "card__thumb-img";
      thumb.appendChild(img);
    } else {
      thumb.innerHTML = `
        <div class="card__img-ph">
          <span class="card__ph-text">VISUAL DATA NOT AVAILABLE</span>
        </div>`;
    }
    
    node.querySelector(".card__title").textContent = p.titolo;
    node.querySelector(".card__subtitle").innerHTML = `${esc(p.autore)} <span class="sep">&bull;</span> ${fmtDate(p.data, "iso")}`;
    node.querySelector(".card__desc").textContent = p.descrizione || "";
    
    const tags = node.querySelector(".card__tags");
    const TAG_CAP = 12;
    const visibleTags = p._tags.slice(0, TAG_CAP);
    const overflow = p._tags.length - visibleTags.length;
    visibleTags.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      li.className = "chip";
      if (state.selectedTags.has(t)) li.classList.add("is-on");
      tags.appendChild(li);
    });
    if (overflow > 0) {
      const li = document.createElement("li");
      li.textContent = `+${overflow}`;
      li.className = "chip chip--more";
      tags.appendChild(li);
    }
    
    node.addEventListener("click", () => openDrawer(p));
    node.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDrawer(p); } });
    wall.appendChild(node);
  }
}

function sortLedger(key) {
  if (state.sort.key === key) {
    state.sort.dir = state.sort.dir === "asc" ? "desc" : "asc";
  } else {
    state.sort.key = key;
    state.sort.dir = "asc";
  }
  document.querySelectorAll(".ledger__th").forEach(th => {
    const isThis = th.dataset.sort === key;
    th.classList.toggle("is-sorted", isThis);
    th.classList.toggle("ledger__th--asc", isThis && state.sort.dir === "asc");
    th.classList.toggle("ledger__th--desc", isThis && state.sort.dir === "desc");
  });
  render();
}
function sortKeyFor(p, key) {
  if (key === "tagcount") return p._tags.length;
  if (key === "id") return p._id;
  if (key === "data") return p.data.anno * 10000 + p.data.mese * 100 + p.data.giorno;
  return (p[key] || "").toString().toLowerCase();
}
function renderLedger(list) {
  const body = document.getElementById("ledgerBody");
  document.querySelectorAll(".ledger__th").forEach(th => {
    const isThis = th.dataset.sort === state.sort.key;
    th.classList.toggle("is-sorted", isThis);
    th.classList.toggle("ledger__th--asc", isThis && state.sort.dir === "asc");
    th.classList.toggle("ledger__th--desc", isThis && state.sort.dir === "desc");
  });
  body.innerHTML = "";
  if (!list.length) {
    body.innerHTML = `<tr><td colspan="6" class="empty-state">No projects match this filter.</td></tr>`;
    return;
  }
  const sorted = [...list].sort((a, b) => {
    const va = sortKeyFor(a, state.sort.key);
    const vb = sortKeyFor(b, state.sort.key);
    let cmp = 0;
    if (typeof va === "number" && typeof vb === "number") cmp = va - vb;
    else cmp = String(va).localeCompare(String(vb));
    return state.sort.dir === "asc" ? cmp : -cmp;
  });
  for (const p of sorted) {
    const src = imgUrl(p, 0);
    const thumbCell = src
      ? `<td class="ledger__thumb"><div class="ledger__thumb-inner"><img class="ledger__thumb-img" src="${esc(src)}" alt="" loading="lazy"></div></td>`
      : `<td class="ledger__thumb"><div class="ledger__thumb-inner"><div class="ledger__thumb-ph"></div></div></td>`;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      ${thumbCell}
      <td><p class="ledger__title">${esc(p.titolo)}</p></td>
      <td class="ledger__author">${esc(p.autore)}</td>
      <td><div class="ledger__tags">${p._tags.map(t => `<span class="chip ${state.selectedTags.has(t)?'is-on':''}">${esc(t)}</span>`).join("")}</div></td>
      <td class="ledger__date mono">${fmtDate(p.data, "iso")}</td>
      <td>${p.url && p.url.startsWith("http") ? `<a class="ledger__visit" href="${esc(p.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Visit ↗</a>` : `<span class="ledger__visit is-disabled">—</span>`}</td>
    `;
    tr.addEventListener("click", () => openDrawer(p));
    body.appendChild(tr);
  }
}

const SVG_NS = "http://www.w3.org/2000/svg";

function renderConstellationFrame() {
  const svg = document.getElementById("constellation");
  const wrap = svg.closest(".constellationWrap") || svg.parentElement;
  const W = wrap ? wrap.clientWidth  || window.innerWidth  : window.innerWidth;
  const H = wrap ? wrap.clientHeight || window.innerHeight : window.innerHeight;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.innerHTML = "";

  const cx = W / 2;
  const cy = H / 2;
  const R  = Math.min(W, H) * 0.36;  
  const start = -Math.PI / 2;
  const tagPos = new Map();
  const n = state.tagIndex.length;
  state.tagIndex.forEach((t, i) => {
    const a = start + (i / n) * Math.PI * 2;
    tagPos.set(t.tag, { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R, a, sector: t.sector });
  });
  state.sectorBuckets.forEach(b => { b._a0 = start; b._a1 = start + Math.PI * 2; });

 const ringG = el("g", { class: "gx-ring-group" });

  for (const r of [R * 0.25, R * 0.5, R * 0.75, R]) {
    ringG.appendChild(el("circle", { cx, cy, r, class: "gx-ring" }));
  }
  svg.appendChild(ringG);

  state._tagPos = tagPos;
  state._cx = cx; state._cy = cy; state._R = R;
}

function renderConstellation(list) {
  const svg = document.getElementById("constellation");
  for (const cl of [...svg.querySelectorAll(".gx-layer")]) cl.remove();

  const container = svg.querySelector(".gx-viewport") || svg;
  const edgeLayer = el("g", { class: "gx-layer gx-edges" });
  const tagLayer  = el("g", { class: "gx-layer gx-tags" });
  const projLayer = el("g", { class: "gx-layer gx-projects" });

  const visibleSet = new Set(list.map(p => p._id));
  const cx = state._cx, cy = state._cy;

  const activeTags = new Set();
  for (const p of list) for (const t of p._tags) activeTags.add(t);

  for (const t of state.tagIndex) {
    const pos = state._tagPos.get(t.tag);
    const a = pos.a;
    const labelOff = 18;
    const lx = cx + Math.cos(a) * (state._R + labelOff);
    const ly = cy + Math.sin(a) * (state._R + labelOff);
    const anchor = Math.cos(a) > 0.15 ? "start" : Math.cos(a) < -0.15 ? "end" : "middle";

    const g = el("g", {
      class: "gx-tag" + (state.selectedTags.has(t.tag) ? " is-active" : "") + (activeTags.has(t.tag) ? "" : " gx-tag--dim"),
      "data-tag": t.tag,
    });
    g.appendChild(el("circle", { cx: pos.x, cy: pos.y, r: 3, class: "gx-tag-dot" }));
    const label = el("text", { x: lx, y: ly, "text-anchor": anchor, "alignment-baseline": "middle", class: "gx-tag-label" });
    label.textContent = t.tag;
    g.appendChild(label);
    g.addEventListener("click", () => toggleTag(t.tag));
    g.addEventListener("mouseenter", () => highlightTag(t.tag));
    g.addEventListener("mouseleave", clearHighlight);
    tagLayer.appendChild(g);
  }

  const projPos = new Map();
  for (const p of state.raw) {
    if (!p._tags.length) continue;
    let sx = 0, sy = 0, n = 0;
    for (const t of p._tags) {
      const pp = state._tagPos.get(t);
      if (!pp) continue;
      sx += pp.x; sy += pp.y; n++;
    }
    if (!n) continue;
    projPos.set(p._id, { x: sx / n, y: sy / n, cx: sx / n, cy: sy / n });
  }
  relaxProjects(projPos);
  state._projPos = projPos;

  for (const p of list) {
    const pPos = projPos.get(p._id);
    if (!pPos) continue;
    for (const t of p._tags) {
      const tp = state._tagPos.get(t);
      if (!tp) continue;
      const eg = el("g", { class: "gx-edge-group", "data-project": p._id, "data-tag": t });
      const edx = tp.x - pPos.x, edy = tp.y - pPos.y;
      const edLen = Math.hypot(edx, edy) || 1;
      const nodeR = 7;
      const ex1 = pPos.x + (edx / edLen) * nodeR;
      const ey1 = pPos.y + (edy / edLen) * nodeR;
      const line = el("line", { x1: ex1, y1: ey1, x2: tp.x, y2: tp.y, class: "gx-edge" });
      const hit = el("line", { x1: ex1, y1: ey1, x2: tp.x, y2: tp.y, class: "gx-edge-hit" });
      eg.appendChild(line); eg.appendChild(hit);
      hit.addEventListener("mouseenter", () => {
        line.classList.add("is-hover");
        const tagNode = document.querySelector(`.gx-tag[data-tag="${CSS.escape(t)}"]`);
        if (tagNode) tagNode.classList.add("is-edge-hover");
      });
      hit.addEventListener("mouseleave", () => {
        line.classList.remove("is-hover");
        const tagNode = document.querySelector(`.gx-tag[data-tag="${CSS.escape(t)}"]`);
        if (tagNode) tagNode.classList.remove("is-edge-hover");
      });
      edgeLayer.appendChild(eg);
    }
  }

  for (const p of list) {
    const pos = projPos.get(p._id);
    if (!pos) continue;

    const lx = pos.x;
    const ly = pos.y + 12;
    const anchor = "middle";

    const g = el("g", { class: "gx-project", "data-project": p._id });
    
    g.appendChild(el("circle", { cx: pos.x, cy: pos.y, r: 14, class: "gx-project-halo" }));
    g.appendChild(el("circle", { cx: pos.x, cy: pos.y, r: 4, class: "gx-project-dot" }));

    const lbl = el("text", { x: lx, y: ly, "text-anchor": anchor, class: "gx-project-label", "data-bx": pos.x, "data-by": pos.y });
    lbl.textContent = p.titolo;
    g.appendChild(lbl);

    g.addEventListener("mouseenter", () => highlightProject(p._id));
    g.addEventListener("mouseleave", clearHighlight);
    g.addEventListener("click", () => openDrawer(p));
    projLayer.appendChild(g);
  }

  container.appendChild(edgeLayer);
  container.appendChild(tagLayer);
  container.appendChild(projLayer);
  if (state._applyConstellationTransform) state._applyConstellationTransform();

  document.getElementById("hudHint").textContent =
    list.length ? "Hover any point to read it." : "No projects match this filter. Clear filters to see the full map.";
}

function highlightProject(pid) {
  const svg = document.getElementById("constellation");
  svg.classList.add("has-focus");
  const project = state.raw[pid];
  svg.querySelectorAll(".gx-project").forEach(g => {
    g.classList.toggle("is-active", +g.dataset.project === pid);
  });
  svg.querySelectorAll(".gx-tag").forEach(g => {
    const active = project._tags.includes(g.dataset.tag);
    g.classList.toggle("is-active", active);
    const lbl = g.querySelector(".gx-tag-label");
    if (lbl) lbl.style.opacity = active ? "1" : "";
  });
  const svg2 = document.getElementById("constellation");
  svg2.querySelectorAll(".gx-project").forEach(g => {
    const lbl = g.querySelector(".gx-project-label");
    if (!lbl) return;
    lbl.style.opacity = +g.dataset.project === pid ? "1" : "";
  });

const panel = document.getElementById("cnodePanel");
  if (panel) {
    document.getElementById("cnodePanelTitle").textContent = project.titolo;
    document.getElementById("cnodePanelAuthor").textContent = project.autore;
    const tagsEl = document.getElementById("cnodePanelTags");
    
    tagsEl.innerHTML = project._tags
      .map(t => `<span class="chip ${state.selectedTags.has(t) ? 'is-on' : ''}" data-tag="${t}" tabindex="0" role="checkbox" aria-checked="${state.selectedTags.has(t)}">${t}</span>`)
      .join("");
      
    tagsEl.querySelectorAll(".chip").forEach(c => {
      c.addEventListener("click", () => toggleTag(c.dataset.tag));
      c.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTag(c.dataset.tag);
        }
      });
    });
    
    panel.hidden = false;
  }
}

function highlightTag(tag) {
  const svg = document.getElementById("constellation");
  svg.classList.add("has-focus");
  svg.querySelectorAll(".gx-tag").forEach(g => g.classList.toggle("is-active", g.dataset.tag === tag));
  const projectsWithTag = new Set(state.raw.filter(p => p._tags.includes(tag)).map(p => p._id + ""));
  svg.querySelectorAll(".gx-project").forEach(g => {
    const active = projectsWithTag.has(g.dataset.project);
    g.classList.toggle("is-active", active);
    const lbl = g.querySelector(".gx-project-label");
    if (lbl) lbl.style.opacity = (active && projectsWithTag.size <= 4) ? "1" : "";
  });
  const ct = state.tagIndex.find(t => t.tag === tag);
  document.getElementById("hudHint").textContent =
    `○ ${tag} — used in ${ct ? ct.count : 0} project${ct && ct.count === 1 ? "" : "s"}`;
}

function clearHighlight() {
  const svg = document.getElementById("constellation");
  svg.classList.remove("has-focus");
  svg.querySelectorAll(".is-active").forEach(g => g.classList.remove("is-active"));
  svg.querySelectorAll(".is-shown").forEach(g => g.classList.remove("is-shown"));
  svg.querySelectorAll(".gx-project-label, .gx-tag-label").forEach(el => { el.style.opacity = ""; });
  const panel = document.getElementById("cnodePanel");
  if (panel) panel.hidden = true;
  svg.querySelectorAll(".gx-tag").forEach(g => {
    if (state.selectedTags.has(g.dataset.tag)) g.classList.add("is-active");
  });
  document.getElementById("hudHint").textContent = "Hover any point to read it.";
}

function openDrawer(p) {
  const inner = document.getElementById("drawerInner");
  inner.innerHTML = `
    <div class="drawer__plate">
      ${imgUrl(p,0)
        ? `<img class="drawer__img" src="${imgUrl(p,0)}" alt="${esc(p.titolo)}" loading="lazy">`
        : `<div class="drawer__img-ph">
             
              <span class="drawer__ph-text">VISUAL DATA NOT AVAILABLE</span>
           </div>`}
    </div>
    <div class="drawer__body">
      
      <div class="drawer__header">
        <h2 class="drawer__title">${esc(p.titolo)}</h2>
        <div class="drawer__subtitle mono">${esc(p.autore)} <span class="sep">&bull;</span> ${fmtDate(p.data, "iso")}</div>
      </div>
      
      <div class="drawer__abstract">
        ${esc(p.descrizione || "Description not available.")}
      </div>
      
      <div class="drawer__meta-group">
        <span class="drawer__meta-label mono">Tags</span>
        <ul class="drawer__tags">
          ${p._tags.map(t => `<li data-tag="${esc(t)}" class="chip ${state.selectedTags.has(t)?'is-on':''}" tabindex="0" role="checkbox" aria-checked="${state.selectedTags.has(t)}">${esc(t)}</li>`).join("")}
        </ul>
      </div>

      ${p.url && p.url.startsWith("http")
        ? `<a class="drawer__visit" href="${esc(p.url)}" target="_blank" rel="noopener">
             <span>Visit Project</span>
             <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11L11 5M11 5H5.5M11 5V10.5"/></svg>
           </a>`
        : `<div class="drawer__no-url">URL NOT AVAILABLE</div>`}
    </div>
  `;

  inner.querySelectorAll(".drawer__tags li").forEach(li => {
    li.addEventListener("click", () => {
      toggleTag(li.dataset.tag);
      li.classList.toggle("is-on", state.selectedTags.has(li.dataset.tag));
      li.setAttribute("aria-checked", state.selectedTags.has(li.dataset.tag) ? "true" : "false");
    });
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTag(li.dataset.tag);
        li.classList.toggle("is-on", state.selectedTags.has(li.dataset.tag));
        li.setAttribute("aria-checked", state.selectedTags.has(li.dataset.tag) ? "true" : "false");
      }
    });
  });

  document.getElementById("drawer").classList.add("is-open");
  document.getElementById("drawerScrim").classList.add("is-open");
  document.getElementById("drawer").setAttribute("aria-hidden", "false");
}
function closeDrawer() {
  document.getElementById("drawer").classList.remove("is-open");
  document.getElementById("drawerScrim").classList.remove("is-open");
  document.getElementById("drawer").setAttribute("aria-hidden", "true");
}

function el(tag, attrs) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const k in attrs) node.setAttribute(k, attrs[k]);
  return node;
}
function arcPath(cx, cy, r, a0, a1) {
  const x0 = cx + Math.cos(a0) * r; const y0 = cy + Math.sin(a0) * r;
  const x1 = cx + Math.cos(a1) * r; const y1 = cy + Math.sin(a1) * r;
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
}

function relaxProjects(projPos, { minDist = 64, maxDrift = 70, iterations = 120 } = {}) {
  const ids = [...projPos.keys()];
  const R = state._R || 320;
  const cx = state._cx || 600;
  const cy = state._cy || 400;

  for (let it = 0; it < iterations; it++) {
    let moved = false;
    for (let i = 0; i < ids.length; i++) {
      const a = projPos.get(ids[i]);

      const distFromCenter = Math.hypot(a.x - cx, a.y - cy);
      if (distFromCenter > R * 0.82) {
        const angle = Math.atan2(a.y - cy, a.x - cx);
        const target = R * 0.78;
        a.x = cx + Math.cos(angle) * target;
        a.y = cy + Math.sin(angle) * target;
      }

      for (let j = i + 1; j < ids.length; j++) {
        const b = projPos.get(ids[j]);
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 0.0001;
        if (d < minDist) {
          const push = (minDist - d) / 2 * 0.5;
          const ux = dx / d, uy = dy / d;
          a.x -= ux * push; a.y -= uy * push;
          b.x += ux * push; b.y += uy * push;
          moved = true;
        }
      }
      const ddx = a.x - a.cx, ddy = a.y - a.cy;
      const drift = Math.hypot(ddx, ddy);
      if (drift > maxDrift) {
        const k = maxDrift / drift;
        a.x = a.cx + ddx * k; a.y = a.cy + ddy * k;
      }
    }
    if (!moved) break;
  }
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
function fmtDate(d, mode) {
  if (!d) return "—";
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.mese - 1] || "—";
  if (mode === "iso") return `${d.anno}.${String(d.mese).padStart(2,"0")}.${String(d.giorno).padStart(2,"0")}`;
  if (mode === "short") return `${month.toUpperCase()} ${d.anno}`;
  return `${d.giorno} ${month} ${d.anno}`;
}


function initLogoConstellation() {
  function seededRand(seed) {
    let s = seed;
    return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }

  function setupMeatballConstellation(trigger, starsGroupId, svgEl, cx, cy, r, excludeLeftOf, seed) {
    const group = svgEl.querySelector("#" + starsGroupId);
    if (!trigger || !group) return;
    const EXISTING = 17;
    const NEW = 70 - EXISTING;
    const rand = seededRand(seed);
    const stars = [];
    let attempts = 0;
    while (stars.length < NEW && attempts < 300) {
      attempts++;
      const angle = rand() * Math.PI * 2;
      const clusterBias = 0.5 + rand() * 0.5;
      const dist = (0.25 + Math.pow(rand(), 1.4) * 0.75) * r * 1.65 * clusterBias;
      const x = cx + Math.cos(angle) * dist;
      const y = cy + Math.sin(angle) * dist;
      if (excludeLeftOf !== null && x < excludeLeftOf) continue;
      const startX = cx + Math.cos(angle) * dist * 0.35;
      const startY = cy + Math.sin(angle) * dist * 0.35;
      const delay = Math.floor(rand() * 450);
      const dur = 800 + Math.floor(rand() * 400);
      const radius = 1.2 + Math.pow(rand(), 2) * 1.6;
      stars.push({ x, y, startX, startY, delay, dur, r: radius });
    }

    const els = stars.map(s => {
      const el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      el.setAttribute("cx", s.startX);
      el.setAttribute("cy", s.startY);
      el.setAttribute("r", s.r.toFixed(2));
      el.setAttribute("fill", "#ffffff");
      el.setAttribute("opacity", "0");
      el.style.transition = `cx ${s.dur}ms cubic-bezier(0.16,1,0.3,1) ${s.delay}ms, cy ${s.dur}ms cubic-bezier(0.16,1,0.3,1) ${s.delay}ms, opacity 0.5s ease ${Math.floor(s.delay * 0.4)}ms`;
      group.appendChild(el);
      return { el, ...s };
    });

    trigger.addEventListener("mouseenter", () => {
      els.forEach(s => {
        s.el.setAttribute("opacity", "0.8");
        s.el.setAttribute("cx", s.x);
        s.el.setAttribute("cy", s.y);
      });
    });
    trigger.addEventListener("mouseleave", () => {
      els.forEach(s => {
        s.el.setAttribute("opacity", "0");
        s.el.setAttribute("cx", s.startX);
        s.el.setAttribute("cy", s.startY);
      });
    });
  }

  const headerMark = document.querySelector(".header-mark");
  const navSvg = document.querySelector(".header-mark__svg");
  if (headerMark && navSvg) {
    setupMeatballConstellation(headerMark, "logoStars", navSvg, 318.51, 132.25, 132.25, 200, 1958);
  }

  const heroSvg = document.querySelector(".hero__logo-svg");
  const heroTrigger = document.getElementById("heroMeatballHitArea");
  if (heroSvg && heroTrigger) {
    setupMeatballConstellation(heroTrigger, "heroLogoStars", heroSvg, 1276.86, 133.12, 132.25, 1100, 1958);
  }
}