document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");
    const serviceSection = document.getElementById("service");
    const gallerySection = document.getElementById("gallery");
    const reviewSection = document.getElementById("review");
    const galleryContainer = document.getElementById("gallery-container");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });

    // Navigation buttons
    document.getElementById("homeBtn").addEventListener("click", () => {
        hideAllSections();
        homeSection.style.display = "block";
    });

    document.getElementById("serviceBtn").addEventListener("click", () => {
        hideAllSections();
        serviceSection.style.display = "block";
    });

    document.getElementById("galleryBtn").addEventListener("click", () => {
        hideAllSections();
        gallerySection.style.display = "block";

        // Fetch Google Drive images
        const driveLink = "https://drive.google.com/drive/folders/14OWJPHRQLi48L8B_cpqdRCZ3_4N-1H-b";
        galleryContainer.innerHTML = `<iframe src="${driveLink}" frameborder="0" width="100%" height="600px"></iframe>`;
    });

    document.getElementById("reviewBtn").addEventListener("click", () => {
        hideAllSections();
        reviewSection.style.display = "block";
    });

    function hideAllSections() {
        homeSection.style.display = "none";
        serviceSection.style.display = "none";
        gallerySection.style.display = "none";
        reviewSection.style.display = "none";
    }

    // Show home section by default
    hideAllSections();
    homeSection.style.display = "block";
});
