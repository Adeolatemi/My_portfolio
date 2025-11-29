// Update footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Add simple form submission success alert
document.querySelector(".contact-form")?.addEventListener("submit", function () {
  alert("Thank you for your message! I’ll get back to you soon.");
});
