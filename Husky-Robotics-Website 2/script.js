const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const interestSelect = document.querySelector("[data-interest-select]");
const sponsorshipField = document.querySelector("[data-sponsorship-field]");
const sponsorshipLevel = sponsorshipField?.querySelector("select");
const inquiryTagline = document.querySelector("[data-inquiry-tagline]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
}

if (interestSelect && sponsorshipField && sponsorshipLevel && inquiryTagline) {
  const updateInterestFields = () => {
    const isSponsorship = interestSelect.value === "Sponsorship";
    sponsorshipField.classList.toggle("is-hidden", !isSponsorship);
    sponsorshipLevel.disabled = !isSponsorship;
    inquiryTagline.value = isSponsorship
      ? "Sponsorship inquiry"
      : `General inquiry: ${interestSelect.value}`;
  };

  interestSelect.addEventListener("change", updateInterestFields);
  updateInterestFields();
}
