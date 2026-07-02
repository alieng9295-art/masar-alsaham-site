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
    applyTranslations(getLang());
    initLangToggle();
    initMobileNav();
    initFooterYear();
    initContactForm();
    initAboutCarousel();
    initExpandableCards();
  });
})();
