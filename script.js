/* =========================================================
   EDIT EVERYTHING ABOUT YOUR SITE RIGHT HERE.
   This is the only file you need to touch for content changes.
   ========================================================= */

const SITE = {
  name: "Alex Rivera",
  role: "Software Engineer",
  eyebrow: "Portfolio — 2026",
  thesis: "I build small, sharp tools that remove a step people didn't realize was optional.",
  now: "Currently: building a CLI for personal knowledge bases",

  about: [
    "I'm a software engineer who likes projects with a clear before-and-after: a slow process that gets fast, a manual task that gets automatic.",
    "Most of what's below started as a personal itch — a script I needed, a page I wished existed — and grew into something worth sharing."
  ],

  skills: ["TypeScript", "Python", "React", "PostgreSQL", "Figma", "Go"],

  projects: [
    {
      year: "2026",
      title: "Ledger",
      description: "A plain-text expense tracker that turns a single markdown file into monthly reports and charts.",
      tags: ["Python", "CLI"],
      url: "#"
    },
    {
      year: "2025",
      title: "Standup Bot",
      description: "A Slack bot that collects async standups and posts a digest, so meetings become optional.",
      tags: ["Node.js", "Slack API"],
      url: "#"
    },
    {
      year: "2025",
      title: "Field Notes",
      description: "A minimalist journaling app with offline-first sync and zero tracking, built as a PWA.",
      tags: ["React", "IndexedDB"],
      url: "#"
    },
    {
      year: "2024",
      title: "Routecheck",
      description: "A lightweight uptime monitor for side projects, with a status page you can host for free.",
      tags: ["Go", "SQLite"],
      url: "#"
    }
  ],

  contact: {
    headline: "Say hello, or just say hi.",
    links: [
      { label: "Email", url: "mailto:hello@example.com" },
      { label: "GitHub", url: "https://github.com/" },
      { label: "LinkedIn", url: "https://linkedin.com/" },
      { label: "X / Twitter", url: "https://x.com/" }
    ]
  }
};

/* =========================================================
   Rendering — you shouldn't need to edit below this line.
   ========================================================= */

function renderHero() {
  document.querySelector(".hero__eyebrow").textContent = SITE.eyebrow;
  document.getElementById("heroName").textContent = SITE.name;
  document.getElementById("heroThesis").textContent = SITE.thesis;
  document.getElementById("heroNow").textContent = SITE.now;
  document.title = `${SITE.name} — ${SITE.role}`;
}

function renderWork() {
  const grid = document.getElementById("workGrid");
  document.getElementById("workCount").textContent =
    `${String(SITE.projects.length).padStart(2, "0")} projects`;

  grid.innerHTML = SITE.projects
    .map(
      (p) => `
      <a class="work__card" href="${p.url}" data-fade>
        <span class="work__year">${p.year}</span>
        <span class="work__body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <ul class="work__tags">
            ${p.tags.map((t) => `<li>${t}</li>`).join("")}
          </ul>
        </span>
        <span class="work__arrow">↗</span>
      </a>`
    )
    .join("");
}

function renderAbout() {
  document.getElementById("aboutText").innerHTML = SITE.about
    .map((para) => `<p>${para}</p>`)
    .join("");

  document.getElementById("skillsList").innerHTML = SITE.skills
    .map((s) => `<li>${s}</li>`)
    .join("");
}

function renderContact() {
  document.getElementById("contactHeadline").textContent = SITE.contact.headline;
  document.getElementById("contactLinks").innerHTML = SITE.contact.links
    .map(
      (l) => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label}</a></li>`
    )
    .join("");
}

function renderFooter() {
  document.getElementById("footerName").textContent = SITE.name;
  document.getElementById("footerYear").textContent = new Date().getFullYear();
}

function setUpScrollReveal() {
  const targets = document.querySelectorAll("[data-fade]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => observer.observe(t));
}

function init() {
  renderHero();
  renderWork();
  renderAbout();
  renderContact();
  renderFooter();
  setUpScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
