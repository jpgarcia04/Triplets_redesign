const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("#menuToggle");
const navPanel = document.querySelector("#navPanel");
const navLinks = document.querySelectorAll(".nav-links a");
const dropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");

function closeDropdowns() {
  dropdownToggles.forEach((toggle) => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.closest(".has-dropdown")?.classList.remove("is-dropdown-open");
  });
}

function setMenuState(isOpen) {
  if (!menuToggle || !navPanel) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navPanel.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);

  if (!isOpen) {
    closeDropdowns();
  }
}

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });
}

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const dropdown = toggle.closest(".has-dropdown");
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    closeDropdowns();
    toggle.setAttribute("aria-expanded", String(!isOpen));
    dropdown?.classList.toggle("is-dropdown-open", !isOpen);
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

window.addEventListener("scroll", () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
    closeDropdowns();
  }
});
