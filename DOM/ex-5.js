// Form Events
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const department = document.getElementById("department");
const message = document.getElementById("message");
// Submit Event
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
    message.textContent = "Form submitted successfully!";
});
// Input Event
nameInput.addEventListener("input", function() {
    console.log("Name:", nameInput.value);
});
// Change Event
department.addEventListener("change", function() {
    console.log("Department changed:", department.value);
});
// Focus Event
emailInput.addEventListener("focus", function() {
    console.log("Email input got focus");
});
// Blur Event
emailInput.addEventListener("blur", function() {
    console.log("Email input lost focus");
});
// Window & Document Events
// DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");
});
// Load Event
window.addEventListener("load", function() {
    console.log("Page loaded");
});
// Resize Event
window.addEventListener("resize", function() {
    console.log("Window resized");
});
// Scroll Event
window.addEventListener("scroll", function() {
    console.log("Page scrolled");
});