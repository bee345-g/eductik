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
      viewBox="0 0 256 260"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"
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
