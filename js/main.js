/* ===== Masar Al-Saham Company — Site Logic ===== */
(function () {
  var STORAGE_KEY = "masar_lang";

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
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  function initFooterYear() {
    var el = document.getElementById("footer-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      if (success) success.classList.add("show");
      form.reset();
      if (success) success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTranslations(getLang());
    initLangToggle();
    initMobileNav();
    initFooterYear();
    initContactForm();
  });
})();
