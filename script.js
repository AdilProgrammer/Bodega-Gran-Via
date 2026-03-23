// script.js

// 1) INIT AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  once: true,
  offset: 80,
});

// 2) STICKY NAVBAR (background change on scroll)
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// 3) SMOOTH SCROLLING for anchor links
document.querySelectorAll('a.smooth-scroll, .navbar-nav a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // only if it's an internal hash link
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile menu if open
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    }
  });
});

// 4) small demo: reservation form prevent default & alert
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
  reservationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✨ Thank you! This is a demo — your reservation would be confirmed.');
  });
}

/* ===================================================
   EASY CUSTOMIZATION ZONE
   change any of the values below to match your restaurant
   (they update the text content on the page)
   =================================================== */

// restaurant name (updates navbar, hero, footer)
const restaurantName = "Bodega Gran Via";          // <---- CHANGE HERE
document.querySelectorAll('#restaurantNameNav, #restaurantNameHero, #footerRestaurantName').forEach(el => {
  if (el) el.innerText = restaurantName;
});

// contact details
document.getElementById('restaurantAddress').innerText = 'C. Gran Vía de Colón, 41, b, Centro, 18001 Granada, Spain';   // <---- CHANGE
document.getElementById('restaurantPhone').innerText  = '+33 1 23 45 67 89';           // <---- CHANGE
document.getElementById('restaurantEmail').innerText  = 'hello@bodegagranvia.com';       // <---- CHANGE

// about section (you can also change directly in HTML, but here for convenience)
document.getElementById('aboutHeading').innerText = 'Our Story';
document.getElementById('aboutText1').innerText   = 'Founded in the heart of FiDi, Bodega Gran Via brings the vibrant spirit of Spanish tapas culture to historic Stone Street in New York City. We celebrate bold flavors, shared plates, and a lively atmosphere.';
document.getElementById('aboutText2').innerText   = ' From authentic pinchos to traditional tapas, each dish is paired with a curated selection of Spanish wines. Join us for a true taste of Spain in one of NYC’s most historic settings.';

// menu items: you can also edit the HTML directly; these are placeholders.
// for full menu replacement, edit the tab-panes in HTML.

// Hero tagline
document.getElementById('heroTagline').innerText = 'Experience culinary artistry in every bite'; // <---- CHANGE

/* 
  IMAGES: replace any Unsplash ID in the src attributes inside HTML.
  look for: 
    - navbar logo (unsplash logo, change if you want)
    - about section image (id: 1414235077428)
    - featured dishes (4 images)
    - gallery images (4 images)
    - map placeholder (1569336415962) – you may replace with actual Google Maps- map placeholder (1569336415962) – you may replace with actual Google Maps iframe
*/