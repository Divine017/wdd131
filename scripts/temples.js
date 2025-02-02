document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});
