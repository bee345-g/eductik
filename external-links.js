
(() => {
  "use strict";

  if (document.querySelector(".external-links-panel")) return;

  const links = [
    {
      name: "ChatGPT",
      url: "https://chatgpt.com/",
      className: "chatgpt",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5a5.2 5.2 0 0 0-4.5 2.6 5.2 5.2 0 0 0-4.1 7.3 5.2 5.2 0 0 0 2.2 6.5 5.2 5.2 0 0 0 7.1 2.1 5.2 5.2 0 0 0 7.1-2.1 5.2 5.2 0 0 0 2.2-6.5 5.2 5.2 0 0 0-4.1-7.3A5.2 5.2 0 0 0 12 2.5Zm0 2a3.2 3.2 0 0 1 3 2l-3 1.8-3-1.8a3.2 3.2 0 0 1 3-2ZM5.2 8.2l3 1.8v3.5l-3 1.8a3.2 3.2 0 0 1 0-7.1Zm13.6 0a3.2 3.2 0 0 1 0 7.1l-3-1.8V10l3-1.8ZM10.2 11l1.8-1.1 1.8 1.1v2.1L12 14.2l-1.8-1.1V11Zm-2 4.2 2.8 1.7v2.2a3.2 3.2 0 0 1-2.8-3.9Zm7.6 0a3.2 3.2 0 0 1-2.8 3.9v-2.2l2.8-1.7Z"/>
      </svg>`
    },
    {
      name: "Ministère de l’Éducation",
      url: "https://www.education.gov.dz/",
      className: "ministry",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 2 7v2h20V7L12 2ZM4 11h2v7H4v-7Zm5 0h2v7H9v-7Zm4 0h2v7h-2v-7Zm5 0h2v7h-2v-7ZM2 20h20v2H2v-2Zm1-2h18v-1H3v1Z"/>
      </svg>`
    },
    {
      name: "TV5MONDE Enseigner",
      url: "https://enseigner.tv5monde.com/",
      className: "tv5",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5"/>
        <ellipse cx="12" cy="12" rx="4.2" ry="9.5"/>
        <path d="M2.8 9h18.4M2.8 15h18.4"/>
      </svg>`
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      className: "instagram",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle class="insta-dot" cx="17.5" cy="6.7" r="1.1"/>
      </svg>`
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      className: "facebook",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.4c-.9-.1-1.8-.2-2.7-.2-3.1 0-5.1 1.9-5.1 5.3v2H6v3.5h3.4v9h4.1Z"/>
      </svg>`
    },
    {
      name: "Centre des langues",
      url: "https://relex.univ-dbkm.dz/ar/%d9%85%d8%b1%d9%83%d8%b2-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a7%d9%84%d9%85%d9%83%d8%ab%d9%81-%d9%84%d9%84%d8%ba%d8%a7%d8%aa/",
      className: "university",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2 11 6-11 6L1 8l11-6Z"/>
        <path d="M5 11.5V16c4.5 3.4 9.5 3.4 14 0v-4.5l-7 3.8-7-3.8Z"/>
        <path d="M21 10v7"/>
        <circle cx="21" cy="18.5" r="1"/>
      </svg>`
    }
  ];

  const panel = document.createElement("section");
  panel.className = "external-links-panel";
  panel.setAttribute("aria-labelledby", "external-links-title");

  panel.innerHTML = `
    <div class="external-links-heading">
      <span class="heading-line"></span>
      <h2 id="external-links-title">
        <span class="heading-sparkle" aria-hidden="true">✦</span>
        Liens externes utiles
      </h2>
      <span class="heading-line"></span>
    </div>
    <div class="external-links-grid"></div>
  `;

  const grid = panel.querySelector(".external-links-grid");

  links.forEach((item, index) => {
    const link = document.createElement("a");
    link.className = `external-link-card ${item.className}`;
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.style.setProperty("--card-index", index);
    link.setAttribute("aria-label", `Ouvrir ${item.name}`);

    link.innerHTML = `
      <span class="external-link-icon">${item.svg}</span>
      <span class="external-link-name">${item.name}</span>
      <span class="external-link-arrow" aria-hidden="true">↗</span>
    `;

    grid.appendChild(link);
  });

  const nav = document.querySelector(".nav-links");

  if (nav) {
    nav.insertAdjacentElement("afterend", panel);
  } else {
    document.body.appendChild(panel);
  }
})();
