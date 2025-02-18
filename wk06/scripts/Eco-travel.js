// Select the hamburger icon and the nav menu (the <ul>)
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('#nav-menu ul');

// Listen for a click on the hamburger icon
hamburger.addEventListener('click', () => {
  const isActive = hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  document.getElementById('nav-menu').setAttribute('aria-expanded', isActive);
});
