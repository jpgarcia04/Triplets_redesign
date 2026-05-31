const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("#menuToggle");
const navPanel = document.querySelector("#navPanel");
const navLinks = document.querySelectorAll(".nav-links a");
const whatsappButton = document.querySelector("#whatsappButton");

const whatsappNumber = "525532253448";

function setMenuState(isOpen) {
  if (!menuToggle || !navPanel) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navPanel.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
}

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

window.addEventListener("scroll", () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

if (whatsappButton) {
  whatsappButton.addEventListener("click", () => {
    const name = document.querySelector("#name")?.value.trim();
    const service = document.querySelector("#service")?.value;
    const message = document.querySelector("#message")?.value.trim();

    const text = [
      "Hola Triplets Atelier, quiero cotizar flores.",
      name ? `Nombre: ${name}` : "",
      service ? `Servicio: ${service}` : "",
      message ? `Mensaje: ${message}` : ""
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
}
