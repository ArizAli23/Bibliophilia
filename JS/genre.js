function initializeSlider(container) {
    const slider = container.querySelector('.book-slider');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');

    const scrollAmount = slider.clientWidth * 0.8;

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Add touch scroll support
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false; // Track whether the user is dragging

    slider.addEventListener('mousedown', (e) => {
        // Ensure the drag starts only on the slider and not the buttons
        if (e.target === prevBtn || e.target === nextBtn) return;
        isDown = true;
        isDragging = false; // Reset dragging flag
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
        isDragging = true; // User is dragging
    });

    // Prevent click event if the user is dragging
    slider.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    });
}

// Initialize all sliders when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider-container').forEach(container => {
        initializeSlider(container);
    });
});

const bookcard = document.querySelector(".book-card")
bookcard.addEventListener("click", () => {
    const newpage = 'shopping.html';
    window.location.href=newpage;
})
