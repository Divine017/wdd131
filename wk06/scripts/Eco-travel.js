// // Select the hamburger icon and the nav menu (the <ul>)
// const hamburger = document.getElementById('hamburger');
// const navList = document.querySelector('#nav-menu ul');

// // Listen for a click on the hamburger icon
// hamburger.addEventListener('click', () => {
//   const isActive = hamburger.classList.toggle('active');
//   navList.classList.toggle('active');
//   document.getElementById('nav-menu').setAttribute('aria-expanded', isActive);
// });

// Select the hamburger icon and the full navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Listen for a click on the hamburger icon
hamburger.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  navMenu.setAttribute('aria-expanded', isActive);
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    navMenu.setAttribute('aria-expanded', false);
  }
});


function calculateFootprint() {
  let distance = document.getElementById("distance").value;
  let emissions = distance * 0.115; // Avg CO₂ per km for flights
  document.getElementById("result").innerText = `Your trip emits approx ${emissions.toFixed(2)} kg of CO₂. Consider offsetting!`;
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  let index = 0;

  function moveSlide(step, type = 'trip') {
    if (type === 'trip') {
      index += step;
      if (index < 0) {
        index = images.length - 1;
      } else if (index >= images.length) {
        index = 0;
      }
      carousel.style.transform = `translateX(${-index * 100}%)`;
    } else if (type === 'testimonial') {
      testimonialIndex += step;
      if (testimonialIndex < 0) {
        testimonialIndex = testimonials.length - 1;
      } else if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
      }
      testimonialCarousel.style.transform = `translateX(${-testimonialIndex * 100}%)`;
    }
  }

  const testimonialCarousel = document.querySelector(".testimonials .carousel-inner");
  const testimonials = document.querySelectorAll(".testimonials .testimonial");
  let testimonialIndex = 0;

  document.querySelector(".testimonials .prev").addEventListener("click", () => moveSlide(-1, 'testimonial'));
  document.querySelector(".testimonials .next").addEventListener("click", () => moveSlide(1, 'testimonial'));

  document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
  document.querySelector(".next").addEventListener("click", () => moveSlide(1));

  // Auto-slide every 5 seconds for testimonials
  setInterval(() => moveSlide(1, 'testimonial'), 5000);

  // Auto-slide every 5 seconds for trips
  setInterval(() => moveSlide(1), 5000);
});

// Basic functionality for the Live Chat button
document.querySelector('.live-chat-link').addEventListener('click', function(e) {
  e.preventDefault();
  alert("Live Chat is currently unavailable. Please call our hotline at 1-800-555-1234 for immediate assistance.");
});

