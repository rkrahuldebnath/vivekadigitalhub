// EmailJS configuration
(function () {
    emailjs.init("vOV9Vm0x_"); // Your EmailJS Public Key
})();

// Function to handle form submission
document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Display review on the page
    const reviewList = document.getElementById("review-list");
    const newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `<h3>${name}</h3><p>${comment}</p>`;
    reviewList.appendChild(newReview);

    // Send email using EmailJS
    emailjs.send("service_gggv0zm", "YOUR_TEMPLATE_ID", {
        name: name,
        comment: comment,
        email: "wheelchairrk@gmail.com", // Your email
    })
    .then(function (response) {
        alert("Your review has been sent successfully!");
        document.getElementById("reviewForm").reset(); // Clear the form
    })
    .catch(function (error) {
        console.error("Error:", error);
        alert("Failed to send your review. Please try again.");
    });
});

