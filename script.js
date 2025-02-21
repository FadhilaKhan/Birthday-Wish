let currentPage = 0;
const pages = document.querySelectorAll(".page");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Update the button states (enable/disable) based on current page
function updateButtons() {
    // Disable the next button if it's the last page
    nextButton.disabled = currentPage === pages.length - 1;

    // Disable the previous button if it's the first page
    prevButton.disabled = currentPage === 0;
}

// Show or hide the pages based on the page index
function showPage(pageIndex) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove("visible", "flipped");
    });

    // Show the current page
    pages[pageIndex].classList.add("visible");

    // Update the button states
    updateButtons();
}

// Next button click functionality
nextButton.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        // Flip the current page
        pages[currentPage].classList.add("flipped");

        // Move to the next page
        currentPage++;

        // Show the new current page
        showPage(currentPage);
    }
});

// Previous button click functionality
prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        // Unflip the current page
        pages[currentPage].classList.remove("flipped");

        // Move to the previous page
        currentPage--;

        // Show the new current page
        showPage(currentPage);
    }
});

// Initial page setup
showPage(currentPage);
