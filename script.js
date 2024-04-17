// Smooth scroll to section when clicking on navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll(".menu a");

    navigationLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetSectionId = link.getAttribute("href");
            const targetSection = document.querySelector(targetSectionId);

            scrollToSection(targetSection);
        });
    });

    // Change color of interactive boxes on hover
    const interactiveBoxes = document.querySelectorAll(".interactive-box");

    interactiveBoxes.forEach(function(box) {
        box.addEventListener("mouseenter", function() {
            box.style.backgroundColor = "#e74c3c";
        });

        box.addEventListener("mouseleave", function() {
            box.style.backgroundColor = "#3498db";
        });
    });
});

// Function to smoothly scroll to a section
function scrollToSection(section) {
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
    });
}

// Get a reference to the background image element
const backgroundElement = document.querySelector('.background-image');

// Set initial position values
let xOffset = 0;
let yOffset = 0;

// Function to update the background position
function updateBackgroundPosition() {
    // Update the background position based on xOffset and yOffset
    backgroundElement.style.backgroundPosition = `${xOffset}px ${yOffset}px`;

    // Increment the offsets for animation effect
    xOffset += 1;
    yOffset += 1;

    // Use requestAnimationFrame to create a smooth animation loop
    requestAnimationFrame(updateBackgroundPosition);
}

// Start the animation loop
updateBackgroundPosition();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".subscribe-form");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const commentInput = document.querySelector("#comment");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Display a simple success message (you can customize this)
        alert(`Thanks for subscribing!\nEmail: ${emailInput.value}\nPhone: ${phoneInput.value}\nComment: ${commentInput.value}`);

        // Reset the form
        form.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const backgroundElement = document.querySelector('.background-image');

    // Set initial position values
    let xOffset = 0;
    let yOffset = 0;

    // Function to update the background position
    function updateBackgroundPosition() {
        // Update the background position based on xOffset and yOffset
        backgroundElement.style.backgroundPosition = `${xOffset}px ${yOffset}px`;

        // Increment the offsets for animation effect
        xOffset += 1;
        yOffset += 1;
    }

    // Call the update function every 20 seconds
    setInterval(updateBackgroundPosition, 20000); // 20 seconds in milliseconds
}); // Add interactivity to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const dropdownLinks = document.querySelectorAll(".hasDropdown");

    dropdownLinks.forEach(link => {
        link.addEventListener("mouseenter", function() {
            const container = this.nextElementSibling;
            container.style.display = "block";
        });

        link.addEventListener("mouseleave", function() {
            const container = this.nextElementSibling;
            container.style.display = "none";
        });
    });
});
// Add this script to your HTML file
document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');

    const hideSearchBar = () => {
        searchContainer.style.display = 'none';
    };

    const showSearchBar = () => {
        searchContainer.style.display = 'block';
    };

    const navLinks = document.querySelectorAll('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', hideSearchBar);
    });
});