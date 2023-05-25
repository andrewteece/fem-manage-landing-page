const primaryHeader = document.querySelector(".primary__header");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary__navigation");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

