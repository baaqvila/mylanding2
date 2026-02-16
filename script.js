// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close menu after clicking a link (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

/*
  CONTACT FORM NOTES
  - As-is, the form is configured for Netlify Forms (data-netlify="true").
    If you deploy to Netlify, submissions will appear in your Netlify dashboard.
  - If you prefer Formspree:
      1) Remove: data-netlify="true" and the hidden input form-name
      2) Set form action="https://formspree.io/f/YOUR_ID" method="POST"
*/
