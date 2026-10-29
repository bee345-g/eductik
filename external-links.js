
(() => {
  "use strict";

  const nav = document.querySelector(".nav-links");

  if (!nav || nav.querySelector(".external-rotator")) return;

  const links = [

{
  name: "ChatGPT",
  url: "https://chatgpt.com/",
  svg: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.2a4.4 4.4 0 0 0-4.2 3.1 4.4 4.4 0 0 0-3.3 6.6 4.4 4.4 0 0 0 3.8 6.3 4.4 4.4 0 0 0 7.1 0 4.4 4.4 0 0 0 3.8-6.3 4.4 4.4 0 0 0-3.3-6.6A4.4 4.4 0 0 0 12 3.2Z"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linejoin="round"
      />
      <path
        d="m8 6.5 8 4.6v5.2M4.8 9.2l8 4.6v6M7.8 17.8l8-4.6 3.2 1.8M5 15.5l8-4.6V5.2"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
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

  nav.appendChild(rotator);

  const icons = Array.from(rotator.querySelectorAll(".external-icon"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let current = 0;
  let timer = null;

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
