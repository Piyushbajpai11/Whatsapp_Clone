document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const itemsToShow = 2; // Number of visible items in the wrapper
    const itemWidth = 548; // Each item: 100px width + 10px margin-right
    const itemsContainer = document.getElementById('items');
    const totalItems = document.querySelectorAll('.item').length;

    // Attach click event listeners
    document.getElementById('leftBtn').addEventListener('click', scrollLeft);
    document.getElementById('rightBtn').addEventListener('click', scrollRight);

    function scrollLeft() {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        }
    }

    function scrollRight() {
        if (currentIndex < totalItems - itemsToShow) {
            currentIndex++;
            updateScroll();
        }
    }

    function updateScroll() {
        itemsContainer.style.transform = 'translateX(' + (-currentIndex * itemWidth) + 'px)';
    }
});