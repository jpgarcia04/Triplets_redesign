/* ================================================================
   Triplets Atelier — interacciones (vanilla JS, sin dependencias)
   - Navegación: menú móvil + dropdown Servicios (hover desktop / clic móvil)
   - Header sticky con sombra al hacer scroll
   - Reveal de secciones con IntersectionObserver (respeta reduced-motion)
   - Página de producto dinámica (Círculo Blossom) por query param
   ================================================================ */

// Marca que JS está activo: el CSS solo oculta los .reveal cuando hay JS,
// así el contenido nunca queda invisible si el script falla o está bloqueado.
document.documentElement.classList.add("js");

/* ---------- Navegación ---------- */

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
  if (!menuToggle || !navPanel) return;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navPanel.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  if (!isOpen) closeDropdowns();
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

// Cerrar el menú al elegir un destino (links del panel y del dropdown)
navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));

// Header con sombra al hacer scroll
window.addEventListener(
  "scroll",
  () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  },
  { passive: true }
);

// Escape cierra menú/dropdown
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
    closeDropdowns();
  }
});

// Clic fuera del navbar cierra el dropdown en desktop
document.addEventListener("click", (event) => {
  if (!event.target.closest(".has-dropdown")) closeDropdowns();
});

/* ---------- Reveal al hacer scroll ---------- */

const revealEls = Array.from(document.querySelectorAll(".reveal, .reveal-stagger"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (revealEls.length) {
  if (prefersReducedMotion) {
    // Sin animación: mostramos todo de inmediato.
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    // Reveal por scroll, sin depender de IntersectionObserver: un elemento
    // se revela cuando su borde superior entra en el 92% inferior del viewport.
    // Robusto en cualquier navegador y nunca deja contenido oculto.
    const reveal = () => {
      const trigger = window.innerHeight * 0.92;
      for (let i = revealEls.length - 1; i >= 0; i--) {
        if (revealEls[i].getBoundingClientRect().top < trigger) {
          revealEls[i].classList.add("is-visible");
          revealEls.splice(i, 1);
        }
      }
    };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal, { passive: true });
    window.addEventListener("load", reveal);
    document.addEventListener("visibilitychange", reveal);
  }
}

/* ---------- Página de producto (Círculo Blossom) ---------- */

const WA_NUMBER = "525532253448";

const PLANS = {
  "15-semanal": {
    stems: 15,
    title: "Plan de 15 Tallos Semanal",
    price: "$650",
    cadence: "cada semana",
    cadenceShort: "Semanal",
    other: "15-quincenal",
    image: "images/bouquet.png",
    alt: "Bouquet del plan de 15 tallos de Círculo Blossom",
    desc: "15 flores de alta calidad más follaje en cada entrega. Una dosis fresca de flores cada semana para mantener tu casa u oficina siempre con vida.",
  },
  "15-quincenal": {
    stems: 15,
    title: "Plan de 15 Tallos Quincenal",
    price: "$650",
    cadence: "cada 2 semanas",
    cadenceShort: "Quincenal",
    other: "15-semanal",
    image: "images/bouquet.png",
    alt: "Bouquet del plan de 15 tallos de Círculo Blossom",
    desc: "15 flores de alta calidad más follaje en cada entrega, cada dos semanas. El ritmo cómodo para disfrutar flores frescas sin pensar en ello.",
  },
  "30-semanal": {
    stems: 30,
    title: "Plan de 30 Tallos Semanal",
    price: "$1,300",
    cadence: "cada semana",
    cadenceShort: "Semanal",
    other: "30-quincenal",
    image: "images/arreglo2.png",
    alt: "Arreglo del plan de 30 tallos de Círculo Blossom",
    desc: "30 flores de alta calidad más follaje en cada entrega, cada semana. Nuestro plan más generoso para llenar de flores los espacios que más se viven.",
  },
  "30-quincenal": {
    stems: 30,
    title: "Plan de 30 Tallos Quincenal",
    price: "$1,300",
    cadence: "cada 2 semanas",
    cadenceShort: "Quincenal",
    other: "30-semanal",
    image: "images/arreglo2.png",
    alt: "Arreglo del plan de 30 tallos de Círculo Blossom",
    desc: "30 flores de alta calidad más follaje en cada entrega, cada dos semanas. Volumen y presencia floral con la comodidad de la entrega recurrente.",
  },
};

function renderProduct() {
  const root = document.querySelector("[data-product]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const key = PLANS[params.get("plan")] ? params.get("plan") : "30-quincenal";
  const plan = PLANS[key];

  const set = (sel, value) => {
    const el = root.querySelector(sel);
    if (el) el.textContent = value;
  };

  // Imagen
  const img = root.querySelector("[data-product-img]");
  if (img) {
    img.src = plan.image;
    img.alt = plan.alt;
  }

  // Texto
  set("[data-product-title]", plan.title);
  set("[data-product-price]", plan.price);
  set("[data-product-cadence]", plan.cadence);
  set("[data-product-desc]", plan.desc);
  set("[data-product-stems]", `${plan.stems} flores de alta calidad + follaje`);

  // El breadcrumb vive fuera del contenedor [data-product]: lo actualizamos por documento.
  const crumb = document.querySelector("[data-product-crumb]");
  if (crumb) crumb.textContent = plan.title;

  // Frecuencia activa + switch a la otra frecuencia
  root.querySelectorAll("[data-freq]").forEach((btn) => {
    const isActive = btn.dataset.freq === plan.cadenceShort;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Cantidad
  const qtyOutput = root.querySelector("[data-qty]");
  let qty = 1;
  const renderQty = () => {
    if (qtyOutput) qtyOutput.textContent = String(qty);
  };
  root.querySelector("[data-qty-dec]")?.addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    renderQty();
  });
  root.querySelector("[data-qty-inc]")?.addEventListener("click", () => {
    qty = Math.min(99, qty + 1);
    renderQty();
  });
  renderQty();

  // Botón contratar (WhatsApp con mensaje prellenado)
  const cta = root.querySelector("[data-product-cta]");
  const updateCta = () => {
    if (!cta) return;
    const msg = `Hola Triplets, quiero contratar el ${plan.title} (${plan.price} ${plan.cadence}). Cantidad: ${qty}.`;
    cta.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };
  root.querySelector("[data-qty-dec]")?.addEventListener("click", updateCta);
  root.querySelector("[data-qty-inc]")?.addEventListener("click", updateCta);
  updateCta();

  // Cambiar de frecuencia sin salir (actualiza URL + contenido)
  root.querySelectorAll("[data-freq]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.freq === plan.cadenceShort ? key : plan.other;
      const url = new URL(window.location.href);
      url.searchParams.set("plan", target);
      window.history.replaceState({}, "", url);
      renderProduct();
    });
  });

  // Título del documento
  document.title = `${plan.title} | Círculo Blossom · Triplets Atelier`;
}

renderProduct();

/* ---------- Formulario de contacto detallado ---------- */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  const formSummary = contactForm.querySelector("#contactFormError");
  const requiredFields = {
    nombre: "Escribe tu nombre completo.",
    telefono: "Escribe un WhatsApp o teléfono de contacto.",
    servicio: "Selecciona un servicio de interés.",
    mensaje: "Cuéntanos un poco más para poder ayudarte.",
  };

  const getValue = (formData, fieldName) => String(formData.get(fieldName) || "").trim();

  const setFieldError = (fieldName, message = "") => {
    const field = contactForm.elements[fieldName];
    const error = contactForm.querySelector(`[data-error-for="${fieldName}"]`);
    const fieldWrapper = field?.closest(".form-field");

    if (!field || !error) return;

    field.setAttribute("aria-invalid", message ? "true" : "false");
    fieldWrapper?.classList.toggle("is-invalid", Boolean(message));
    error.textContent = message;
    error.hidden = !message;
  };

  const clearSummary = () => {
    if (!formSummary) return;
    formSummary.textContent = "";
    formSummary.hidden = true;
  };

  Object.keys(requiredFields).forEach((fieldName) => {
    const field = contactForm.elements[fieldName];
    if (!field) return;

    const eventName = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, () => {
      if (String(field.value || "").trim()) setFieldError(fieldName);
      clearSummary();
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
      nombre: getValue(formData, "nombre"),
      telefono: getValue(formData, "telefono"),
      correo: getValue(formData, "correo"),
      servicio: getValue(formData, "servicio"),
      fecha: getValue(formData, "fecha"),
      zona: getValue(formData, "zona"),
      presupuesto: getValue(formData, "presupuesto"),
      mensaje: getValue(formData, "mensaje"),
    };

    let firstInvalidField = null;

    Object.entries(requiredFields).forEach(([fieldName, message]) => {
      const hasValue = Boolean(data[fieldName]);
      setFieldError(fieldName, hasValue ? "" : message);

      if (!hasValue && !firstInvalidField) {
        firstInvalidField = contactForm.elements[fieldName];
      }
    });

    if (firstInvalidField) {
      if (formSummary) {
        formSummary.textContent = "Revisa los campos marcados antes de generar tu mensaje de WhatsApp.";
        formSummary.hidden = false;
      }
      firstInvalidField.focus();
      return;
    }

    const optional = (value) => value || "No especificado";
    const whatsappMessage = [
      "Hola Triplets, vengo desde la página web.",
      "",
      `Nombre: ${data.nombre}`,
      `WhatsApp: ${data.telefono}`,
      `Correo: ${optional(data.correo)}`,
      `Servicio de interés: ${data.servicio}`,
      `Fecha tentativa: ${optional(data.fecha)}`,
      `Zona / ubicación: ${optional(data.zona)}`,
      `Presupuesto aproximado: ${optional(data.presupuesto)}`,
      "",
      "Mensaje:",
      data.mensaje,
    ].join("\n");

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    const fallback = document.querySelector("#contactFallback");
    const fallbackLink = document.querySelector("#contactFallbackLink");
    if (fallbackLink) fallbackLink.href = waUrl;

    // Abrimos WhatsApp en una pestaña nueva. Si el navegador bloquea el popup
    // (window.open devuelve null), mostramos un enlace visible como respaldo.
    const waWindow = window.open(waUrl, "_blank");
    if (waWindow) {
      try { waWindow.opener = null; } catch (err) {}
      if (fallback) fallback.hidden = true;
    } else if (fallback) {
      fallback.hidden = false;
      fallback.scrollIntoView({ block: "nearest" });
    }
  });
}

/* ---------- Año dinámico en el footer ---------- */

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
