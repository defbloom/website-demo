document.addEventListener('DOMContentLoaded', function () {
    const floatingButton = document.getElementById('floatingBackToTop');

    // Show button when user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            floatingButton.style.display = 'block';
        } else {
            floatingButton.style.display = 'none';
        }
    });

    // Smooth scroll to top when clicked
    floatingButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
