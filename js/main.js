/* ===== Masar Al-Saham Company — Site Logic (Premium Redesign) ===== */
(function () {
  var STORAGE_KEY = "masar_lang";

  var ICONS = {
    mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20"/><circle cx="9.5" cy="8" r="3"/><path d="M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.36"/><path d="M15 4.5a3 3 0 0 1 0 5.9"/></svg>',
    shieldCheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12.5l2 2 4-4.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/><path d="M10 21v-4h4v4"/></svg>',
    road: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3L4 21"/><path d="M16 3l4 18"/><path d="M12 3v3M12 10v3M12 17v3"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5V20h3.5l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2 2.6-2.6z"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="1.5"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M9 11h6M9 15h6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5L12 4l8 7.5"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/></svg>',
    office: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2.5" width="10" height="18.5"/><rect x="14" y="9" width="6" height="12"/><path d="M7 6h1M10 6h1M7 9.5h1M10 9.5h1M7 13h1M10 13h1M7 16.5h1M10 16.5h1M16.5 12.5h1M16.5 15.5h1"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    hardHat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15a8 8 0 0 1 16 0"/><path d="M2 15h20"/><path d="M2 15v2a1.5 1.5 0 0 0 1.5 1.5h17A1.5 1.5 0 0 0 22 17v-2"/><path d="M12 7V4"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.5" r="5.5"/><path d="M9 13.5L7.5 21l4.5-2.5 4.5 2.5-1.5-7.5"/></svg>',
    scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0l-3-6z"/><path d="M19 7l-3 6a3 3 0 0 0 6 0l-3-6z"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V19a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 6.5l8 6 8-6"/></svg>'
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || document.documentElement.getAttribute("lang") || "ar";
  }

  function applyTranslations(lang) {
    var dict = window.MASAR_I18N[lang] || {};
    document.documentElement.setAttribute("lang", lang === "ar" ? "ar" : "en");
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (dict[key] !== undefined) document.title = dict[key];
    });

    var toggleBtn = document.getElementById("lang-toggle-btn");
    if (toggleBtn) toggleBtn.textContent = dict["lang.toggle"] || (lang === "ar" ? "English" : "العربية");
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  function initLangToggle() {
    var toggleBtn = document.getElementById("lang-toggle-btn");
    if (!toggleBtn) return;
    toggleBtn.addEventListener("click", function () {
      var current = getLang();
      setLang(current === "ar" ? "en" : "ar");
    });
  }

  function initMobileNav() {
    var navToggle = document.getElementById("nav-toggle-btn");
    var nav = document.getElementById("main-nav");
    if (!navToggle || !nav) return;
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      navToggle.classList.toggle("is-open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.classList.remove("is-open");
      });
    });
  }

  function initFooterYear() {
    var el = document.getElementById("footer-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function initIcons() {
    document.querySelectorAll("[data-icon]").forEach(function (el) {
      var name = el.getAttribute("data-icon");
      if (ICONS[name]) el.innerHTML = ICONS[name];
    });
  }

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 12) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initScrollReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  function initAboutCarousel() {
    var wrap = document.querySelector(".about-carousel");
    if (!wrap) return;
    var slides = wrap.querySelectorAll(".about-carousel-img");
    if (slides.length < 2) return;
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove("is-active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("is-active");
    }, 2000);
  }

  function initExpandableCards() {
    document.querySelectorAll(".expandable").forEach(function (el) {
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "button");
      function toggle() {
        el.classList.toggle("open");
      }
      el.addEventListener("click", toggle);
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var success = document.getElementById("form-success");
    var note = document.getElementById("form-note");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      if (btn) btn.disabled = true;
      if (note) note.style.display = "none";

      fetch(form.action, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          if (success) success.classList.add("show");
          form.reset();
          if (success) success.scrollIntoView({ behavior: "smooth", block: "center" });
        })
        .catch(function () {
          if (note) {
            note.style.display = "block";
            note.textContent = (getLang() === "ar")
              ? "تعذر إرسال الرسالة. يرجى المحاولة مجددًا أو التواصل عبر الهاتف/البريد الإلكتروني."
              : "Couldn't send the message. Please try again or contact us by phone/email.";
          }
        })
        .then(function () {
          if (btn) btn.disabled = false;
        });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initIcons();
    applyTranslations(getLang());
    initLangToggle();
    initMobileNav();
    initFooterYear();
    initHeaderScroll();
    initContactForm();
    initAboutCarousel();
    initExpandableCards();
    initScrollReveal();
  });
})();
