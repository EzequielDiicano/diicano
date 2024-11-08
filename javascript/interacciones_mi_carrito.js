document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const dropdown = document.querySelector(".dropdown");

    // Toggle dropdown menu visibility
    menuButton.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    // Close dropdown if clicked outside
    window.addEventListener("click", (event) => {
        if (!event.target.matches('.menu-button')) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        }
    });
});