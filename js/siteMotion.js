document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof window.gsap === "undefined" || reduceMotion) {
        document.querySelectorAll(".heroText, .heroImg, .reveal, .AO, .paOption, .volunteerOption, .petOption, .step, .formContainer, .contactInfo, .aboutus-wrapper, .selectPetInfo").forEach((element) => {
            element.style.opacity = "1";
            element.style.transform = "none";
        });
        return;
    }

    const gsap = window.gsap;

    gsap.defaults({
        ease: "power3.out",
        duration: 0.7
    });

    gsap.from(".heroText > *", {
        y: 28,
        autoAlpha: 0,
        stagger: 0.09,
        clearProps: "transform,opacity,visibility"
    });

    gsap.from(".heroImg", {
        x: 34,
        y: 14,
        scale: 0.96,
        autoAlpha: 0,
        duration: 0.9,
        clearProps: "transform,opacity,visibility"
    });

    gsap.to(".heroImg", {
        y: -10,
        duration: 7,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    const revealTargets = document.querySelectorAll(".reveal, .AO, .paOption, .volunteerOption, .petOption, .step, .formContainer, .contactInfo, .aboutus-wrapper, .selectPetInfo");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            gsap.fromTo(entry.target, {
                y: 30,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                duration: 0.65,
                clearProps: "transform,opacity,visibility"
            });

            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
    });

    revealTargets.forEach((target) => observer.observe(target));
});
