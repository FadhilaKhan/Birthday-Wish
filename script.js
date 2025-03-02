let currentPage = 0;
const pages = document.querySelectorAll(".page");


function showPage(pageIndex) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove("visible", "flipped");
    });

    // Show the current page
    pages[pageIndex].classList.add("visible");
}

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        // Flip the current page
        pages[currentPage].classList.add("flipped");

        // Move to the next page
        currentPage++;

        // Show the new current page
        showPage(currentPage);
    }
});

document.getElementById("prev").addEventListener("click", () => {
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


document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    const playButton = document.getElementById("play-music");

    // Try to autoplay
    audio.play().catch(() => {
        console.log("Autoplay blocked. Click to play music.");
        playButton.style.display = "block"; // Show play button
    });

    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none"; // Hide play button after playing
    });
});
