document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");
    const closeNav = document.getElementById("close-nav");
    const body = document.body;

    if (!hamburger || !mobileNav || !closeNav) {
        return;
    }

    // Toggle mobile navigation menu
    hamburger.addEventListener("click", () => {
        mobileNav.classList.add("active");
        body.classList.add("nav-open");
        hamburger.setAttribute("aria-expanded", "true");
    });

    // Close mobile navigation menu
    const closeMenu = () => {
        mobileNav.classList.remove("active");
        body.classList.remove("nav-open");
        hamburger.setAttribute("aria-expanded", "false");
    };

    closeNav.addEventListener("click", closeMenu);

    mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Remove active class and enable scrolling when screen size is above 600px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) {
            closeMenu();
        }
    });
});
