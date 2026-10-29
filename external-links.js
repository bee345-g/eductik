
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
        fill="currentColor"
        d="M12.017 0C8.396 0 5.053 2.136 3.37 5.344a6.84 6.84 0 0 0-2.22 9.25 6.84 6.84 0 0 0 5.9 9.406 6.84 6.84 0 0 0 8.12-1.84 6.84 6.84 0 0 0 7.13-8.29 6.84 6.84 0 0 0-3.06-10.07A8.38 8.38 0 0 0 12.017 0Zm-.01 2.02a6.36 6.36 0 0 1 5.57 3.29l-1.13.65a5.07 5.07 0 0 0-6.92-1.86L6.25 5.8a6.34 6.34 0 0 1 5.76-3.78ZM5.12 6.91l3.02 1.75v3.5l-3.02 1.75a5.06 5.06 0 0 1 0-7Zm13.76 0a5.06 5.06 0 0 1 0 7l-3.02-1.75v-3.5l3.02-1.75ZM10.1 6.19a3.05 3.05 0 0 1 3.84 0l-3.02 1.75-3.02-1.75a3.05 3.05 0 0 1 2.2 0Zm-4.2 7.72 3.02-1.75 3.02 1.75v3.5l-3.02 1.75a5.06 5.06 0 0 1-3.02-5.25Zm8.2 5.25v-3.5l3.02-1.75a5.06 5.06 0 0 1-3.02 5.25Z"
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
