(() => {
  "use strict";

  const nav = document.querySelector(".nav-links");
  if (!nav || nav.querySelector(".external-rotator")) return;

  const links = [
    {
      name: "ChatGPT",
      url: "https://chatgpt.com/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5a5.2 5.2 0 0 0-4.5 2.6 5.2 5.2 0 0 0-4.1 7.3 5.2 5.2 0 0 0 2.2 6.5 5.2 5.2 0 0 0 7.1 2.1 5.2 5.2 0 0 0 7.1-2.1 5.2 5.2 0 0 0 2.2-6.5 5.2 5.2 0 0 0-4.1-7.3A5.2 5.2 0 0 0 12 2.5Zm0 2a3.2 3.2 0 0 1 3 2l-3 1.8-3-1.8a3.2 3.2 0 0 1 3-2ZM5.2 8.2l3 1.8v3.5l-3 1.8a3.2 3.2 0 0 1 0-7.1Zm13.6 0a3.2 3.2 0 0 1 0 7.1l-3-1.8V10l3-1.8ZM10.2 11l1.8-1.1 1.8 1.1v2.1L12 14.2l-1.8-1.1V11Zm-2 4.2 2.8 1.7v2.2a3.2 3.2 0 0 1-2.8-3.9Zm7.6 0a3.2 3.2 0 0 1-2.8 3.9v-2.2l2.8-1.7Z"/>
      </svg>`
    },
    {
      name: "Ministère de l'Éducation nationale",
      url: "https://www.education.gov.dz/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 2 7v2h20V7L12 2ZM4 11h2v7H4v-7Zm5 0h2v7H9v-7Zm4 0h2v7h-2v-7Zm5 0h2v7h-2v-7ZM2 20h20v2H2v-2Zm1-1h18v-1H3v1Z"/>
      </svg>`
    },
    {
      name: "TV5MONDE — Enseigner le français",
      url: "https://enseigner.tv5monde.com/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <circle class="icon-stroke" cx="12" cy="12" r="9.5"/>
        <ellipse class="icon-stroke" cx="12" cy="12" rx="4" ry="9.5"/>
        <path class="icon-stroke" d="M3 9h18M3 15h18"/>
      </svg>`
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <rect class="icon-stroke" x="3" y="3" width="18" height="18" rx="5"/>
        <circle class="icon-stroke" cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.7" r="1.2"/>
      </svg>`
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.4c-.9-.1-1.8-.2-2.7-.2-3.1 0-5.1 1.9-5.1 5.3v2H6v3.5h3.4v9h4.1Z"/>
      </svg>`
    },
    {
      name: "École des langues — Khemis Miliana",
      url: "https://www.google.com/search?q=Ecole+des+langues+Khemis+Miliana",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 11 6-11 6L1 9l11-6Zm-7 9.2 7 3.8 7-3.8v4.2c-4.4 4-9.6 4-14 0v-4.2ZM21 11h2v7h-2z"/>
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

  const icons = [...rotator.querySelectorAll("a")];
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

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
