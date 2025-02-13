// Select the hamburger icon and the nav menu (the <ul>)
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('#nav-menu ul');

// Listen for a click on the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the "active" class on both the hamburger and the nav list
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});
