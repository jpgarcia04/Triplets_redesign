/* ================================
   Triplets Atelier Redesign
   Base CSS
   ================================ */

:root {
  --color-bg: #f8f2ea;
  --color-surface: #fffaf4;
  --color-text: #302821;
  --color-muted: #7a6a5e;
  --color-accent: #b8755b;
  --color-accent-dark: #8f5742;
  --color-green: #6f7d5f;
  --color-border: rgba(48, 40, 33, 0.12);

  --font-title: Georgia, "Times New Roman", serif;
  --font-body: Arial, Helvetica, sans-serif;

  --radius-lg: 28px;
  --radius-md: 18px;
  --shadow-soft: 0 24px 70px rgba(48, 40, 33, 0.08);

  --container: 1120px;
  --section-padding: 96px 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(100% - 32px, var(--container));
  margin: 0 auto;
}

.section {
  padding: var(--section-padding);
}

.eyebrow {
  color: var(--color-accent-dark);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  margin-bottom: 14px;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  font-family: var(--font-title);
  line-height: 1.05;
}

h1 {
  font-size: clamp(3rem, 8vw, 6.8rem);
  letter-spacing: -0.06em;
  max-width: 850px;
}

h2 {
  font-size: clamp(2rem, 4vw, 4.1rem);
  letter-spacing: -0.04em;
}

h3 {
  font-size: 1.45rem;
}

/* Header */

.site-header {
  background: rgba(248, 242, 234, 0.82);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 20;
}

.navbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 78px;
  gap: 24px;
}

.logo {
  font-family: var(--font-title);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.nav-links {
  align-items: center;
  display: flex;
  gap: 28px;
  list-style: none;
}

.nav-links a {
  color: var(--color-muted);
  font-size: 0.95rem;
  transition: color 180ms ease;
}

.nav-links a:hover {
  color: var(--color-text);
}

.nav-cta {
  background: var(--color-text);
  border-radius: 999px;
  color: var(--color-surface);
  font-size: 0.92rem;
  padding: 11px 20px;
}

.menu-toggle {
  background: transparent;
  border: 0;
  cursor: pointer;
  display: none;
  font-size: 1.8rem;
}

/* Buttons */

.btn {
  align-items: center;
  border-radius: 999px;
  display: inline-flex;
  font-weight: 700;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  transition: transform 180ms ease, background 180ms ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--color-accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-accent-dark);
}

.btn-secondary {
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

/* Hero */

.hero {
  min-height: calc(100vh - 78px);
  display: flex;
  align-items: center;
}

.hero-grid {
  align-items: center;
  display: grid;
  gap: 48px;
  grid-template-columns: 1.25fr 0.75fr;
}

.hero-text {
  color: var(--color-muted);
  font-size: 1.15rem;
  margin-top: 28px;
  max-width: 630px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.hero-card {
  background:
    linear-gradient(145deg, rgba(255, 250, 244, 0.9), rgba(255, 255, 255, 0.45)),
    radial-gradient(circle at top right, rgba(184, 117, 91, 0.18), transparent 42%);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  min-height: 440px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero-card-tag {
  color: var(--color-green);
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-card p {
  color: var(--color-muted);
  margin-top: 16px;
}

/* Sections */

.section-heading {
  margin-bottom: 42px;
  max-width: 760px;
}

.cards-grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, 1fr);
}

.service-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  min-height: 310px;
  padding: 32px;
  transition: transform 180ms ease, border-color 180ms ease;
}

.service-card:hover {
  border-color: rgba(184, 117, 91, 0.38);
  transform: translateY(-5px);
}

.card-number {
  color: var(--color-accent);
  display: block;
  font-weight: 700;
  margin-bottom: 60px;
}

.service-card p {
  color: var(--color-muted);
  margin: 16px 0 24px;
}

.service-card a {
  color: var(--color-accent-dark);
  font-weight: 700;
}

/* Process */

.process {
  background: var(--color-surface);
}

.process-grid {
  display: grid;
  gap: 60px;
  grid-template-columns: 0.9fr 1.1fr;
}

.steps {
  display: grid;
  gap: 18px;
}

.step {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 22px;
}

.step p {
  color: var(--color-muted);
  margin-top: 8px;
}

/* Atelier */

.atelier-box {
  background: var(--color-green);
  border-radius: var(--radius-lg);
  color: #fff;
  display: grid;
  gap: 42px;
  grid-template-columns: 1.1fr 0.9fr;
  padding: 56px;
}

.atelier-box .eyebrow {
  color: rgba(255, 255, 255, 0.75);
}

.atelier-box p {
  color: rgba(255, 255, 255, 0.78);
  margin-top: 18px;
}

.location-card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-md);
  padding: 28px;
}

.muted {
  opacity: 0.72;
}

/* Contact */

.contact-grid {
  display: grid;
  gap: 56px;
  grid-template-columns: 0.9fr 1.1fr;
}

.contact-grid p {
  color: var(--color-muted);
  margin-top: 18px;
}

.contact-form {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 12px;
  padding: 32px;
}

.contact-form label {
  font-weight: 700;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  color: var(--color-text);
  font: inherit;
  padding: 14px 16px;
  width: 100%;
}

.contact-form textarea {
  resize: vertical;
}

/* Footer */

.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 28px 0;
}

.footer-content {
  color: var(--color-muted);
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  font-size: 0.92rem;
}
