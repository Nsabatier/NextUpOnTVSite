const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const languageLinks = document.querySelectorAll("[data-language]");

languageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    try {
      localStorage.setItem("site-language", link.dataset.language);
    } catch {
      // Language selection still works when storage is unavailable.
    }
  });
});

const automaticLanguageTarget = document.querySelector("[data-auto-language-target]");

if (automaticLanguageTarget) {
  let savedLanguage = null;

  try {
    savedLanguage = localStorage.getItem("site-language");
  } catch {
    // Fall back to the browser language when storage is unavailable.
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const supportedBrowserLanguage = browserLanguages.find((language) => /^(fr|en)(-|$)/i.test(language));
  const prefersEnglish = savedLanguage === "en"
    || (!savedLanguage && !supportedBrowserLanguage?.toLowerCase().startsWith("fr"));

  if (prefersEnglish) {
    window.location.replace(automaticLanguageTarget.href);
  }
}

const header = document.querySelector("[data-header]");
if (header) {
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}
