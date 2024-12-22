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
    
    // Load external content dynamically
document.getElementById('formsBtn').addEventListener('click', function (e) {
    e.preventDefault();
    loadExternalContent('download-button.html');
});

function loadExternalContent(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('dynamic-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading external file:', error));
}
    
    function payNow() {
            const upiId = "9362719399@okbizaxis";
            const amount = 100; // Specify the amount here

            const upiLink = `upi://pay?pa=${upiId}&pn=Your%20Name&am=${amount}&cu=INR`;
            window.location.href = upiLink;
        }
    
    // Show home section by default
    hideAllSections();
    homeSection.style.display = "block";
});


