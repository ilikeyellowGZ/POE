const serviceCards = document.querySelectorAll(".petOption");

serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
        window.location.href = "enquire.html";
    });
});
