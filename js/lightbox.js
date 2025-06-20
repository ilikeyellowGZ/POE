document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const closeButton = document.querySelector('.lightbox .close');

    // Open lightbox
    document.querySelectorAll('[data-lightbox]').forEach(image => {
        image.addEventListener('click', (event) => {
            event.preventDefault();
            lightbox.style.display = 'flex';
            lightboxContent.src = image.src;
            lightboxContent.alt = image.alt;
        });
    });

    // Close lightbox
    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox on outside click
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});