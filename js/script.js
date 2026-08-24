/**
 * 🇲🇲 MYANMAR GUIDE - Main Application Logic
 * Pure Vanilla JavaScript (ES6+)
 * Strict Language Isolation: When language is changed (e.g. Japanese), 100% of UI and content is in that language.
 */

// ==========================================================================
// 1. GLOBAL STATE & CONFIGURATION
// ==========================================================================

const AppState = {
  currentLang: localStorage.getItem('myanmar_guide_lang') || 'en',
  currentTheme: localStorage.getItem('myanmar_guide_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  selectedRegion: 'mandalay',
  openModal: null
};

// Exchange rates relative to 1 USD (Updated Reference Rates: 1 USD = 3,500 MMK, 1 JPY = 25 MMK)
const currencyRates = {
  USD: 1,
  MMK: 3500,
  JPY: 140,
  EUR: 0.92,
  THB: 35.0,
  SGD: 1.35
};

const langMeta = {
  en: { code: 'EN', flag: '🇬🇧', title: 'Myanmar Guide — Discover Places, Food, Culture & Adventure' },
  ja: { code: 'JA', flag: '🇯🇵', title: 'ミャンマー旅行・文化ガイド — 観光名所・グルメ・民族文化・アドベンチャー' },
  my: { code: 'MY', flag: '🇲🇲', title: 'မြန်မာလမ်းညွှန် — လည်ပတ်စရာ၊ အစားအစာ၊ ရိုးရာယဉ်ကျေးမှုနှင့် စွန့်စားခရီးစဉ်' }
};

// ==========================================================================
// 2. INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initExploreMap();
  initDestinations();
  initFoods();
  initAdventures();
  initCulture();
  initPhrases();
  initCurrencyConverter();
  initTravelTips();
  initFooterLinks();
  initModals();
});

// ==========================================================================
// 3. MULTI-LANGUAGE SYSTEM (STRICT ISOLATION)
// ==========================================================================

function initLanguage() {
  // Attach click listener to every element with data-lang attribute (navbar, floating bar, mobile menu, etc.)
  document.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('[data-lang]');
    if (targetBtn) {
      const selectedLang = targetBtn.getAttribute('data-lang');
      if (selectedLang && ['en', 'ja', 'my'].includes(selectedLang)) {
        setLanguage(selectedLang);
      }
    }
  });

  // Set initial language without re-saving
  setLanguage(AppState.currentLang, false);
}

function setLanguage(lang, save = true) {
  if (!['en', 'ja', 'my'].includes(lang)) lang = 'en';
  AppState.currentLang = lang;
  if (save) {
    localStorage.setItem('myanmar_guide_lang', lang);
  }

  // Update HTML lang attribute and page title
  document.documentElement.setAttribute('lang', lang);
  if (langMeta[lang]) {
    document.title = langMeta[lang].title;
    const flagEl = document.getElementById('lang-current-flag');
    const codeEl = document.getElementById('lang-current-code');
    if (flagEl) flagEl.textContent = langMeta[lang].flag;
    if (codeEl) codeEl.textContent = langMeta[lang].code;
  }

  // Update active state across ALL language buttons on the page
  document.querySelectorAll('[data-lang]').forEach((el) => {
    const elLang = el.getAttribute('data-lang');
    el.classList.toggle('active', elLang === lang);
  });

  // 1. Translate all static data-i18n UI elements
  applyUITranslations(lang);

  // 2. Update Map pins and region chips text
  updateMapPinsAndChips(lang);

  // 3. Update Currency select dropdown options
  updateCurrencySelectOptions(lang);

  // 4. Re-render all dynamic content sections strictly in current language
  renderDestinations();
  renderFoods();
  renderAdventures();
  renderCulture();
  renderPhrases();
  renderTravelTips();
  renderFooterLinks();
  updateMapInfo(AppState.selectedRegion);
  calculateCurrency();
}

function applyUITranslations(lang) {
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

function updateMapPinsAndChips(lang) {
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];
  if (!dict || !dict.regions) return;

  // Update map pin labels
  Object.keys(dict.regions).forEach((key) => {
    const pinLabelEl = document.getElementById(`map-pin-label-${key}`);
    if (pinLabelEl && dict.regions[key].pin) {
      pinLabelEl.textContent = dict.regions[key].pin;
    }
  });

  // Update region chips buttons
  document.querySelectorAll('.region-chip').forEach((chip) => {
    const reg = chip.getAttribute('data-region');
    if (reg && dict.regions[reg] && dict.regions[reg].chip) {
      chip.textContent = dict.regions[reg].chip;
    }
  });
}

function updateCurrencySelectOptions(lang) {
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];
  if (!dict || !dict.currencies) return;

  ['convert-from', 'convert-to'].forEach((selectId) => {
    const selectEl = document.getElementById(selectId);
    if (!selectEl) return;
    Array.from(selectEl.options).forEach((opt) => {
      const code = opt.value;
      if (dict.currencies[code]) {
        opt.textContent = dict.currencies[code];
      }
    });
  });
}

// ==========================================================================
// 4. THEME SYSTEM (Dark / Light)
// ==========================================================================

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  applyTheme(AppState.currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const newTheme = AppState.currentTheme === 'dark' ? 'light' : 'dark';
      AppState.currentTheme = newTheme;
      localStorage.setItem('myanmar_guide_theme', newTheme);
      applyTheme(newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }
}

// ==========================================================================
// 5. NAVIGATION & SCROLLSPY
// ==========================================================================

function initNavigation() {
  const header = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    updateScrollSpy();
  }, { passive: true });

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileBtn.classList.toggle('open', isOpen);
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileBtn.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function updateScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 120;

  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link?.classList.add('active');
    }
  });
}

// ==========================================================================
// 6. INTERACTIVE MAP SECTION
// ==========================================================================

function initExploreMap() {
  const regionPaths = document.querySelectorAll('.map-region');
  const mapPins = document.querySelectorAll('.map-pin');
  const regionChips = document.querySelectorAll('.region-chip');

  function selectRegion(regionKey) {
    if (!regionKey || (typeof regionsData !== 'undefined' && !regionsData[regionKey])) return;
    AppState.selectedRegion = regionKey;

    regionPaths.forEach(p => p.classList.toggle('active', p.getAttribute('data-region') === regionKey));
    mapPins.forEach(pin => pin.classList.toggle('active', pin.getAttribute('data-region') === regionKey));
    regionChips.forEach(chip => chip.classList.toggle('active', chip.getAttribute('data-region') === regionKey));

    updateMapInfo(regionKey);
  }

  regionPaths.forEach((path) => {
    path.addEventListener('click', () => {
      const reg = path.getAttribute('data-region');
      selectRegion(reg);
    });
  });

  mapPins.forEach((pin) => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const reg = pin.getAttribute('data-region');
      selectRegion(reg);
    });
  });

  regionChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const reg = chip.getAttribute('data-region');
      selectRegion(reg);
    });
  });

  updateMapInfo(AppState.selectedRegion);
}

function updateMapInfo(regionKey) {
  if (typeof regionsData === 'undefined' || !regionsData[regionKey]) return;
  const lang = AppState.currentLang;
  const data = regionsData[regionKey];

  const titleEl = document.getElementById('map-info-title');
  const capitalEl = document.getElementById('map-info-capital');
  const imgEl = document.getElementById('map-info-img');
  const descEl = document.getElementById('map-info-desc');
  const highlightsEl = document.getElementById('map-info-highlights');

  const name = data.name[lang] || data.name.en;
  const capital = data.capital[lang] || data.capital.en;
  const desc = data.description[lang] || data.description.en;
  const highlights = data.highlights[lang] || data.highlights.en || [];

  if (titleEl) titleEl.textContent = name;
  if (capitalEl) capitalEl.textContent = capital;
  if (imgEl) {
    imgEl.src = data.image;
    imgEl.alt = name;
  }
  if (descEl) descEl.textContent = desc;

  if (highlightsEl) {
    highlightsEl.innerHTML = highlights.map(item => `
      <div class="map-highlight-item">
        <span class="map-highlight-dot"></span>
        <span>${item}</span>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 7. FAMOUS PLACES (12 DESTINATIONS)
// ==========================================================================

function initDestinations() {
  renderDestinations();
}

function renderDestinations() {
  const container = document.getElementById('destinations-grid');
  if (!container || typeof destinationsData === 'undefined') return;

  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];

  container.innerHTML = destinationsData.map((item) => {
    const title = lang === 'ja' && item.nameJa ? item.nameJa : (lang === 'my' ? item.myanmarName : item.name);
    const category = dict.categories && dict.categories[item.category] ? dict.categories[item.category] : item.category;
    const regionName = item.region[lang] || item.region.en;
    const desc = item.description[lang] || item.description.en;
    const bestTime = item.bestTime[lang] || item.bestTime.en;

    return `
      <article class="place-card" id="place-card-${item.id}" data-id="${item.id}" style="cursor: pointer;">
        <div class="place-card-img-wrap">
          <img src="${item.image}" alt="${title}" class="place-card-img" loading="lazy" />
          <span class="place-card-category">${category}</span>
        </div>
        <div class="place-card-body">
          <div class="place-card-header">
            <h3 class="place-card-title">${title}</h3>
            <div class="place-card-region">📍 ${regionName}</div>
          </div>
          <p class="place-card-desc">${desc}</p>
          <div class="place-card-footer">
            <span class="place-card-season">🗓️ ${dict.dest_best_time}: ${bestTime}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Add click listeners to open detail modal
  container.querySelectorAll('.place-card').forEach((card) => {
    card.addEventListener('click', () => {
      const destId = card.getAttribute('data-id');
      openDestinationModal(destId);
    });
  });
}

function openDestinationModal(destId) {
  if (typeof destinationsData === 'undefined') return;
  const item = destinationsData.find(d => d.id === destId);
  if (!item) return;

  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];

  const title = lang === 'ja' && item.nameJa ? item.nameJa : (lang === 'my' ? item.myanmarName : item.name);
  const category = dict.categories && dict.categories[item.category] ? dict.categories[item.category] : item.category;
  const regionName = item.region[lang] || item.region.en;
  const desc = item.detailedDescription[lang] || item.detailedDescription.en;
  const bestTime = item.bestTime[lang] || item.bestTime.en;
  const thingsToDo = item.thingsToDo[lang] || item.thingsToDo.en || [];

  const imgWrap = document.getElementById('modal-dynamic-img-wrap');
  const bodyWrap = document.getElementById('modal-dynamic-body');
  if (imgWrap) {
    imgWrap.innerHTML = `
      <img src="${item.image}" alt="${title}" class="modal-img" />
      <span class="place-card-category" style="position: absolute; bottom: 1rem; left: 1.5rem;">${category}</span>
    `;
  }

  if (bodyWrap) {
    bodyWrap.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${title}</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
        <div>📍 <strong>${dict.modal_region_label}:</strong> ${regionName}</div>
        <div>🗓️ <strong>${dict.modal_best_season_label}:</strong> ${bestTime}</div>
      </div>
      <p style="font-size: 0.98rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem;">${desc}</p>
      
      <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
        ✨ ${dict.modal_things_to_do_label}
      </h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
        ${thingsToDo.map(act => `
          <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.92rem; color: var(--text-secondary);">
            <span style="color: var(--primary); font-weight: bold;">✔</span>
            <span>${act}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  openModal();
}

// ==========================================================================
// 8. MYANMAR FOOD (12 TRADITIONAL DISHES)
// ==========================================================================

function initFoods() {
  renderFoods();
}

function renderFoods() {
  const container = document.getElementById('foods-grid');
  if (!container || typeof foodsData === 'undefined') return;

  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];

  container.innerHTML = foodsData.map((item) => {
    const title = lang === 'ja' && item.nameJa ? item.nameJa : (lang === 'my' ? item.myanmarName : item.name);
    const category = dict.categories && dict.categories[item.category] ? dict.categories[item.category] : item.category;
    const origin = item.origin[lang] || item.origin.en;
    const spice = dict.spice_levels && dict.spice_levels[item.spicyLevel] ? dict.spice_levels[item.spicyLevel] : item.spicyLevel;
    const desc = item.description[lang] || item.description.en;

    return `
      <article class="food-card" id="food-card-${item.id}" data-id="${item.id}" style="cursor: pointer;">
        <div class="food-card-img-wrap">
          <img src="${item.image}" alt="${title}" class="food-card-img" loading="lazy" />
          <span class="food-card-badge">${category}</span>
        </div>
        <div class="food-card-body">
          <div class="food-card-header">
            <h3 class="food-card-title">${title}</h3>
            <div class="food-card-origin">📍 ${origin}</div>
          </div>
          <p class="food-card-desc">${desc}</p>
          <div class="food-card-footer">
            <span class="food-card-spice">🌶️ ${dict.food_spice_level}: ${spice}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Add click listeners to open food detail modal
  container.querySelectorAll('.food-card').forEach((card) => {
    card.addEventListener('click', () => {
      const foodId = card.getAttribute('data-id');
      openFoodModal(foodId);
    });
  });
}

function openFoodModal(foodId) {
  if (typeof foodsData === 'undefined') return;
  const item = foodsData.find(f => f.id === foodId);
  if (!item) return;

  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];

  const title = lang === 'ja' && item.nameJa ? item.nameJa : (lang === 'my' ? item.myanmarName : item.name);
  const category = dict.categories && dict.categories[item.category] ? dict.categories[item.category] : item.category;
  const origin = item.origin[lang] || item.origin.en;
  const spice = dict.spice_levels && dict.spice_levels[item.spicyLevel] ? dict.spice_levels[item.spicyLevel] : item.spicyLevel;
  const ingredients = item.ingredients[lang] || item.ingredients.en;
  const culturalInfo = item.culturalInfo[lang] || item.culturalInfo.en;
  const flavor = item.flavor[lang] || item.flavor.en;

  const imgWrap = document.getElementById('modal-dynamic-img-wrap');
  const bodyWrap = document.getElementById('modal-dynamic-body');
  if (imgWrap) {
    imgWrap.innerHTML = `
      <img src="${item.image}" alt="${title}" class="modal-img" />
      <span class="food-card-badge" style="position: absolute; bottom: 1rem; left: 1.5rem;">${category}</span>
    `;
  }

  if (bodyWrap) {
    bodyWrap.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${title}</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
        <div>📍 <strong>${dict.modal_origin_label}:</strong> ${origin}</div>
        <div>🌶️ <strong>${dict.food_spice_level}:</strong> ${spice}</div>
      </div>
      
      <div style="background-color: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.25rem;">
          🍲 ${dict.modal_flavor_label}
        </div>
        <div style="font-size: 0.95rem; color: var(--text-primary);">${flavor}</div>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
          🥗 ${dict.modal_ingredients_label}
        </h4>
        <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${ingredients}</p>
      </div>

      <div>
        <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
          📖 ${dict.modal_cultural_context_label}
        </h4>
        <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${culturalInfo}</p>
      </div>
    `;
  }

  openModal();
}

// ==========================================================================
// 9. ADVENTURE IN MYANMAR
// ==========================================================================

function initAdventures() {
  const featuredBtn = document.getElementById('featured-adv-btn');
  if (featuredBtn) {
    featuredBtn.addEventListener('click', () => {
      openAdventureModal('hkakabo-razi');
    });
  }
  renderAdventures();
}

function renderAdventures() {
  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];

  // Update Featured Expedition Banner (Hkakabo Razi)
  if (typeof adventuresData !== 'undefined') {
    const featured = adventuresData.find(a => a.id === 'hkakabo-razi');
    if (featured) {
      const featTitleEl = document.getElementById('featured-adv-title');
      const featDescEl = document.getElementById('featured-adv-desc');
      const featLocText = document.getElementById('featured-adv-loc-text');
      const featTypeText = document.getElementById('featured-adv-type-text');
      const featDiffText = document.getElementById('featured-adv-diff-text');
      const featSafetyTitle = document.getElementById('featured-adv-safety-title');
      const featSafetyText = document.getElementById('featured-adv-safety-text');
      const featBtn = document.getElementById('featured-adv-btn');

      const title = lang === 'ja' ? featured.titleJa : (lang === 'my' ? featured.titleMy : featured.title);
      const loc = featured.location[lang] || featured.location.en;
      const diff = featured.difficulty[lang] || featured.difficulty.en;
      const desc = featured.description[lang] || featured.description.en;
      const safety = featured.safetyAdvisory[lang] || featured.safetyAdvisory.en;

      if (featTitleEl) featTitleEl.textContent = title;
      if (featDescEl) featDescEl.textContent = desc;
      if (featLocText) featLocText.textContent = `${dict.adv_location}: ${loc}`;
      if (featTypeText) featTypeText.textContent = `${dict.adv_type}: ${dict.adv_type_val}`;
      if (featDiffText) featDiffText.textContent = `${dict.adv_difficulty}: ${diff}`;
      if (featSafetyTitle) featSafetyTitle.textContent = `⚠️ ${dict.adv_safety_title}`;
      if (featSafetyText) featSafetyText.textContent = safety;
      if (featBtn) featBtn.textContent = dict.adv_view_btn;
    }
  }

  // Render Sub-Grid Adventures
  const container = document.getElementById('adventure-sub-grid');
  if (!container || typeof adventuresData === 'undefined') return;

  const list = adventuresData.filter(a => a.id !== 'hkakabo-razi');
  container.innerHTML = list.map((item) => {
    const title = lang === 'ja' ? item.titleJa : (lang === 'my' ? item.titleMy : item.title);
    const category = dict.categories && dict.categories[item.category] ? dict.categories[item.category] : item.category;
    const loc = item.location[lang] || item.location.en;
    const diff = item.difficulty[lang] || item.difficulty.en;
    const desc = item.description[lang] || item.description.en;

    return `
      <article class="adventure-card" id="adv-card-${item.id}">
        <div class="adventure-card-img-wrap">
          <img src="${item.image}" alt="${title}" class="adventure-card-img" loading="lazy" />
          <span class="adventure-card-badge">${category}</span>
        </div>
        <div class="adventure-card-body">
          <div class="adventure-card-header">
            <h3 class="adventure-card-title">${title}</h3>
            <div class="adventure-card-loc">📍 ${loc}</div>
            <div class="adventure-card-diff">⚡ ${dict.adv_difficulty}: ${diff}</div>
          </div>
          <p class="adventure-card-desc">${desc}</p>
          <button type="button" class="btn btn-outline-primary adv-details-btn" data-adv-id="${item.id}" aria-label="View details for ${title}">
            ${dict.adv_view_btn} →
          </button>
        </div>
      </article>
    `;
  }).join('');

  container.querySelectorAll('.adv-details-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const advId = btn.getAttribute('data-adv-id');
      openAdventureModal(advId);
    });
  });
}

function openAdventureModal(advId) {
  if (typeof adventuresData === 'undefined') return;
  const item = adventuresData.find(a => a.id === advId);
  if (!item) return;

  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];

  const title = lang === 'ja' ? item.titleJa : (lang === 'my' ? item.titleMy : item.title);
  const category = dict.categories && dict.categories[item.category] ? dict.categories[item.category] : item.category;
  const loc = item.location[lang] || item.location.en;
  const diff = item.difficulty[lang] || item.difficulty.en;
  const desc = item.detailedDescription[lang] || item.detailedDescription.en;
  const safety = item.safetyAdvisory[lang] || item.safetyAdvisory.en;
  const highlights = item.highlights[lang] || item.highlights.en || [];

  const imgWrap = document.getElementById('modal-dynamic-img-wrap');
  const bodyWrap = document.getElementById('modal-dynamic-body');
  if (imgWrap) {
    imgWrap.innerHTML = `
      <img src="${item.image}" alt="${title}" class="modal-img" />
      <span class="adventure-card-badge" style="position: absolute; bottom: 1rem; left: 1.5rem;">${category}</span>
    `;
  }

  if (bodyWrap) {
    bodyWrap.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${title}</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
        <div>📍 <strong>${dict.adv_location}:</strong> ${loc}</div>
        <div>⚡ <strong>${dict.modal_difficulty_label}:</strong> ${diff}</div>
      </div>
      <p style="font-size: 0.98rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem;">${desc}</p>
      
      <div style="background-color: var(--primary-light); border: 1px solid var(--primary); padding: 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--primary); margin-bottom: 0.35rem;">
          ⚠️ ${dict.modal_safety_label}
        </h4>
        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-primary);">${safety}</p>
      </div>

      <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
        ✨ ${dict.modal_highlights_label}
      </h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
        ${highlights.map(h => `
          <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.92rem; color: var(--text-secondary);">
            <span style="color: var(--secondary); font-weight: bold;">⭐</span>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  openModal();
}

// ==========================================================================
// 10. CULTURE & PEOPLE
// ==========================================================================

function initCulture() {
  renderCulture();
}

function renderCulture() {
  const lang = AppState.currentLang;

  // Render 4 Feature Articles
  const featContainer = document.getElementById('culture-features-container');
  if (featContainer && typeof cultureHeroFeatures !== 'undefined') {
    featContainer.innerHTML = cultureHeroFeatures.map((feat, index) => {
      const isReverse = index % 2 === 1 ? 'reverse' : '';
      const title = lang === 'ja' ? feat.titleJa : (lang === 'my' ? feat.titleMy : feat.title);
      const subtitle = lang === 'ja' ? feat.subtitleJa : (lang === 'my' ? feat.subtitleMy : feat.subtitle);
      const paragraphs = feat.paragraphs[lang] || feat.paragraphs.en || [];
      const bullets = feat.bulletPoints[lang] || feat.bulletPoints.en || [];

      return `
        <article class="culture-feature-card ${isReverse}" id="culture-${feat.id}">
          <div class="culture-feature-img-wrap">
            <img src="${feat.image}" alt="${title}" class="culture-feature-img" loading="lazy" />
          </div>
          <div class="culture-feature-body">
            <h3 class="culture-feature-title">${title}</h3>
            <div class="culture-feature-subtitle">${subtitle}</div>
            <div class="culture-feature-text">
              ${paragraphs.map(p => `<p style="margin-bottom: 0.75rem;">${p}</p>`).join('')}
              <ul style="margin-top: 0.75rem; padding-left: 1.2rem;">
                ${bullets.map(b => `<li style="margin-bottom: 0.4rem;">${b}</li>`).join('')}
              </ul>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Render 6 Mini Cards
  const cardsContainer = document.getElementById('culture-cards-grid');
  if (cardsContainer && typeof cultureCardsData !== 'undefined') {
    cardsContainer.innerHTML = cultureCardsData.map((card) => {
      const title = card.title[lang] || card.title.en;
      const desc = card.desc[lang] || card.desc.en;

      return `
        <div class="culture-card-mini" id="culture-mini-${card.id}">
          <div class="culture-mini-icon">${card.icon}</div>
          <h4 class="culture-mini-title">${title}</h4>
          <p class="culture-mini-desc">${desc}</p>
        </div>
      `;
    }).join('');
  }
}

// ==========================================================================
// 11. USEFUL MYANMAR LANGUAGE PHRASEBOOK
// ==========================================================================

function initPhrases() {
  renderPhrases();
}

function renderPhrases() {
  const container = document.getElementById('language-grid');
  if (!container || typeof languagePhrasesData === 'undefined') return;

  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];

  container.innerHTML = languagePhrasesData.map((item) => {
    const category = dict.categories && dict.categories[item.category] ? dict.categories[item.category] : item.category;
    const meaning = lang === 'ja' ? item.japanese : item.english;
    const usage = item.usageNote[lang] || item.usageNote.en;

    return `
      <div class="phrase-card" id="phrase-card-${item.id}">
        <div class="phrase-card-header">
          <span class="phrase-category-badge">${category}</span>
          <button type="button" class="phrase-speak-btn" data-audio="${item.audioText}" aria-label="Listen to pronunciation">
            🔊
          </button>
        </div>
        <div class="phrase-burmese">${item.myanmarBurmese}</div>
        <div class="phrase-pronunciation">🗣️ [ ${item.pronunciation} ]</div>
        <div class="phrase-meaning">💡 ${meaning}</div>
        <p class="phrase-usage">${usage}</p>
        <button type="button" class="btn btn-outline-primary copy-script-btn" data-text="${item.myanmarBurmese}">
          📋 ${dict.lang_copy_btn}
        </button>
      </div>
    `;
  }).join('');

  // Attach clipboard copy
  container.querySelectorAll('.copy-script-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-text');
      if (textToCopy && navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = `✅ ${dict.lang_copied_btn}`;
          btn.style.borderColor = '#10b981';
          btn.style.color = '#10b981';
          setTimeout(() => {
            btn.innerHTML = original;
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        });
      }
    });
  });

  // Attach speech synthesis
  container.querySelectorAll('.phrase-speak-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-audio');
      if (text && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'my-MM';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
      }
    });
  });
}

// ==========================================================================
// 12. CURRENCY CONVERTER
// ==========================================================================

function initCurrencyConverter() {
  const amountInput = document.getElementById('convert-amount');
  const fromSelect = document.getElementById('convert-from');
  const toSelect = document.getElementById('convert-to');
  const swapBtn = document.getElementById('swap-currency-btn');

  if (amountInput) amountInput.addEventListener('input', calculateCurrency);
  if (fromSelect) fromSelect.addEventListener('change', calculateCurrency);
  if (toSelect) toSelect.addEventListener('change', calculateCurrency);

  if (swapBtn && fromSelect && toSelect) {
    swapBtn.addEventListener('click', () => {
      const temp = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = temp;
      calculateCurrency();
    });
  }

  calculateCurrency();
}

function calculateCurrency() {
  const amountInput = document.getElementById('convert-amount');
  const fromSelect = document.getElementById('convert-from');
  const toSelect = document.getElementById('convert-to');
  const resultValEl = document.getElementById('convert-result-val');
  const resultSubEl = document.getElementById('convert-result-sub');

  if (!amountInput || !fromSelect || !toSelect || !resultValEl || !resultSubEl) return;

  const amount = parseFloat(amountInput.value) || 0;
  const from = fromSelect.value;
  const to = toSelect.value;
  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];

  if (amount <= 0) {
    resultValEl.textContent = `0 ${to}`;
    resultSubEl.textContent = `—`;
    return;
  }

  const amountInUSD = amount / (currencyRates[from] || 1);
  const convertedAmount = amountInUSD * (currencyRates[to] || 1);

  const formattedResult = convertedAmount.toLocaleString(undefined, {
    minimumFractionDigits: to === 'MMK' || to === 'JPY' ? 0 : 2,
    maximumFractionDigits: to === 'MMK' || to === 'JPY' ? 0 : 2
  });

  const rateOneUnit = (1 / (currencyRates[from] || 1)) * (currencyRates[to] || 1);
  const formattedRate = rateOneUnit.toLocaleString(undefined, {
    minimumFractionDigits: to === 'MMK' || to === 'JPY' ? 0 : 2,
    maximumFractionDigits: 4
  });

  resultValEl.textContent = `${formattedResult} ${to}`;
  resultSubEl.textContent = `1 ${from} ≈ ${formattedRate} ${to} (${dict.money_ref_rate})`;
}

// ==========================================================================
// 13. TRAVEL TIPS SECTION (6 ESSENTIAL GUIDES)
// ==========================================================================

function initTravelTips() {
  renderTravelTips();
}

function renderTravelTips() {
  const container = document.getElementById('tips-grid');
  if (!container || typeof travelTipsData === 'undefined') return;

  const lang = AppState.currentLang;

  container.innerHTML = travelTipsData.map((tip) => {
    const title = tip.title[lang] || tip.title.en;
    const intro = tip.intro[lang] || tip.intro.en;
    const points = tip.points[lang] || tip.points.en || [];

    return `
      <article class="tip-card" id="tip-${tip.id}">
        <div class="tip-icon-wrap">${tip.icon}</div>
        <h3 class="tip-title">${title}</h3>
        <div class="tip-content">
          ${intro}
          <ul>
            ${points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// 14. FOOTER LINKS
// ==========================================================================

function initFooterLinks() {
  renderFooterLinks();
}

function renderFooterLinks() {
  const lang = AppState.currentLang;
  const dict = (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) ? uiTranslations[lang] : uiTranslations['en'];
  if (!dict) return;

  const placesLinksContainer = document.getElementById('footer-places-links');
  if (placesLinksContainer && dict.footer_places_links) {
    placesLinksContainer.innerHTML = dict.footer_places_links.map(l => `
      <a href="${l.href}">${l.name}</a>
    `).join('');
  }

  const expLinksContainer = document.getElementById('footer-exp-links');
  if (expLinksContainer && dict.footer_exp_links) {
    expLinksContainer.innerHTML = dict.footer_exp_links.map(l => `
      <a href="${l.href}">${l.name}</a>
    `).join('');
  }
}

// ==========================================================================
// 15. MODAL MANAGEMENT
// ==========================================================================

function initModals() {
  const modal = document.getElementById('universal-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && AppState.openModal) {
      closeModal();
    }
  });
}

function openModal() {
  const modal = document.getElementById('universal-modal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  AppState.openModal = modal;
  const closeBtn = document.getElementById('modal-close-btn');
  closeBtn?.focus();
}

function closeModal() {
  const modal = document.getElementById('universal-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  AppState.openModal = null;
}
