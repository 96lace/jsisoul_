const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// Add click event to each link
links.forEach(link => {
    link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-target");

        // Hide all sections and remove "active" class
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    });
});