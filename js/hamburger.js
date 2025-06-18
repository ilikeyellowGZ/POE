document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");
    const closeNav = document.getElementById("close-nav");
    const body = document.body;

    // Toggle mobile navigation menu
    hamburger.addEventListener("click", () => {
        mobileNav.classList.add("active");
        body.style.overflow = "hidden"; // Disable scrolling
    });

    // Close mobile navigation menu
    closeNav.addEventListener("click", () => {
        mobileNav.classList.remove("active");
        body.style.overflow = "auto"; // Enable scrolling
    });

    // Remove active class and enable scrolling when screen size is above 600px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
            mobileNav.classList.remove("active");
            body.style.overflow = "auto";
        }
    });
});