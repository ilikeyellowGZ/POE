const homeCardRoutes = {
    adoptionProcess: "./pages/enquire.html",
    largeAnimalGuidance: "./pages/contact.html",
    exoticsGuidance: "./pages/services.html",
    findRightPet: "./pages/enquire.html",
    careForAnimals: "./pages/services.html",
    visitShelter: "./pages/contact.html",
    beAWalker: "./pages/enquire.html"
};

Object.entries(homeCardRoutes).forEach(([id, href]) => {
    const card = document.getElementById(id);

    if (!card) {
        return;
    }

    card.addEventListener("click", () => {
        window.location.href = href;
    });
});
