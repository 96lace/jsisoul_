document.addEventListener("DOMContentLoaded", () => {
    // Get all nav links
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target section ID from the data-target attribute
            const targetId = link.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Hide all other sections
            const allSections = document.querySelectorAll(".content");
            allSections.forEach(section => section.classList.add("hidden"));

            // Show the target section
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
        });
    });
});