(() => {
  "use strict";

  const nav = document.querySelector(".nav-links");

  if (!nav || nav.querySelector(".external-rotator")) return;

  const links = [
    {
      name: "ChatGPT",
      url: "https://chatgpt.com/",
      svg: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M22.281 9.821a5.985 5.985 0 0 0-.515-4.91 6.046 6.046 0 0 0-6.508-2.9A6.065 6.065 0 0 0 4.98 4.18a5.985 5.985 0 0 0-3.997 2.9 6.046 6.046 0 0 0 .742 7.097 5.98 5.98 0 0 0 .511 4.911 6.051 6.051 0 0 0 6.512 2.9 5.985 5.985 0 0 0 4.508 2.01 6.055 6.055 0 0 0 5.005-2.67 5.985 5.985 0 0 0 3.997-2.9 6.046 6.046 0 0 0-.742-7.097 5.98 5.98 0 0 0 .765-1.51ZM12.02 21.2a4.48 4.48 0 0 1-2.876-1.04l.142-.08 4.778-2.76a.77.77 0 0 0 .38-.66v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.47 4.47 0 0 1-4.484 4.47ZM2.36 16.78a4.48 4.48 0 0 1-.537-3.02l.14.08 4.78 2.76a.77.77 0 0 0 .76 0l5.84-3.37v2.34a.07.07 0 0 1-.03.06l-4.82 2.78a4.47 4.47 0 0 1-6.133-1.63ZM1.1 7.9a4.48 4.48 0 0 1 2.34-2.03v5.68a.77.77 0 0 0 .38.66l5.84 3.37-2.02 1.17a.07.07 0 0 1-.07 0l-4.82-2.78A4.47 4.47 0 0 1 1.1 7.9Zm16.55 3.85-5.84-3.37 2.02-1.17a.07.07 0 0 1 .07 0l4.82 2.78a.07.07 0 0 1 .03.06v5.58a4.47 4.47 0 0 1-.69 8.15v-5.68a.77.77 0 0 0-.38-.71ZM19.66 9l-.14-.08-4.78-2.76a.77.77 0 0 0-.76 0l-5.84 3.37V7.19a.07.07 0 0 1 .03-.06l4.82-2.78a4.47 4.47 0 0 1 6.67 4.65ZM7.01 12.1l-2.02-1.17a.07.07 0 0 1-.04-.06V5.29a4.47 4.47 0 0 1 7.34-3.43l-.14.08-4.78 2.76a.77.77 0 0 0-.38.66v6.74Z"
          />
        </svg>
      `
    },
    {
      name: "Ministère de l'Éducation nationale",
      url: "https://www.education.gov.dz/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" stroke="none" d="M12 2 2 7v2h20V7L12 2ZM4 11h2v7H4v-7Zm5 0h2v7H9v-7Zm4 0h2v7h-2v-7Zm5 0h2v7h-2v-7ZM2 20h20v2H2v-2Z"/>
      </svg>`
    },
    {
      name: "TV5MONDE — Enseigner le français",
      url: "https://enseigner.tv5monde.com/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5"/>
        <ellipse cx="12" cy="12" rx="4.2" ry="9.5"/>
        <path d="M2.8 9h18.4M2.8 15h18.4"/>
      </svg>`
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="edutk-insta" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="#ff9a35"/>
            <stop offset="50%" stop-color="#e1306c"/>
            <stop offset="100%" stop-color="#833ab4"/>
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#edutk-insta)" stroke-width="2"/>
        <circle cx="12" cy="12" r="4" stroke="url(#edutk-insta)" stroke-width="2"/>
        <circle cx="17.5" cy="6.7" r="1.2" fill="#e1306c" stroke="none"/>
      </svg>`
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" stroke="none" d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.4c-.9-.1-1.8-.2-2.7-.2-3.1 0-5.1 1.9-5.1 5.3v2H6v3.5h3.4v9h4.1Z"/>
      </svg>`
    },
    {
      name: "Centre d'enseignement intensif des langues",
      url: "https://relex.univ-dbkm.dz/ar/%d9%85%d8%b1%d9%83%d8%b2-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a7%d9%84%d9%85%d9%83%d8%ab%d9%81-%d9%84%d9%84%d8%ba%d8%a7%d8%aa/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 10 5.5-10 5.5L2 8.5 12 3Z" fill="currentColor" stroke="none"/>
        <path d="M5 11v5c4.5 3.5 9.5 3.5 14 0v-5l-7 4-7-4Z" fill="currentColor" stroke="none"/>
        <path d="M21 10v6" />
        <circle cx="21" cy="18" r="1" fill="currentColor" stroke="none"/>
      </svg>`
    }
  ];

  const rotator = document.createElement("div");
  rotator.className = "external-rotator";
  rotator.setAttribute("aria-label", "Liens externes utiles");

  links.forEach((item, index) => {
    const a = document.createElement("a");

    a.className = "external-icon" + (index === 0 ? " active" : "");
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", item.name);
    a.setAttribute("title", item.name);

    a.innerHTML = item.svg;
    rotator.appendChild(a);
  });

  const widget = document.createElement("div");
  widget.className = "external-links-widget";
  nav.appendChild(widget);
  widget.appendChild(rotator);

  const toggle = document.createElement("button");
  toggle.className = "external-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Afficher tous les liens externes");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "external-links-menu");
  toggle.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 10 5 5 5-5" />
    </svg>
  `;
  widget.appendChild(toggle);

  const menu = document.createElement("div");
  menu.className = "external-links-menu";
  menu.id = "external-links-menu";
  menu.setAttribute("aria-label", "Tous les liens externes");
  menu.hidden = true;

  const menuTitle = document.createElement("p");
  menuTitle.className = "external-menu-title";
  menuTitle.textContent = "Liens utiles";
  menu.appendChild(menuTitle);

  links.forEach(item => {
    const a = document.createElement("a");
    a.className = "external-menu-link";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const icon = document.createElement("span");
    icon.className = "external-menu-icon";
    icon.innerHTML = item.svg;

    const label = document.createElement("span");
    label.className = "external-menu-label";
    label.textContent = item.name;

    a.append(icon, label);
    menu.appendChild(a);
  });

  widget.appendChild(menu);

  const icons = Array.from(rotator.querySelectorAll(".external-icon"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let current = 0;
  let timer = null;
  let menuIsOpen = false;

  function showNext() {
    icons[current].classList.remove("active");
    current = (current + 1) % icons.length;
    icons[current].classList.add("active");
  }

  function start() {
    if (timer || reducedMotion.matches) return;
    timer = window.setInterval(showNext, 2500);
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  function setMenuOpen(open) {
    menuIsOpen = open;
    menu.hidden = !open;
    widget.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Masquer les liens externes" : "Afficher tous les liens externes"
    );
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(!menuIsOpen);
  });

  document.addEventListener("click", event => {
    if (menuIsOpen && !widget.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menuIsOpen) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  rotator.addEventListener("mouseenter", stop);
  rotator.addEventListener("mouseleave", start);
  rotator.addEventListener("focusin", stop);
  rotator.addEventListener("focusout", start);

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches) stop();
      else start();
    });
  }

  start();
})();
