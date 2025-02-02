// Wait for the DOM to load for event filtering
document.addEventListener('DOMContentLoaded', () => {
    // Slider Functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.querySelectorAll('.slide');

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slideIndex++;

        // Loop back to the first slide
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = 'block';

        // Change slide every 5 seconds
        setTimeout(showSlides, 5000);
    }

    // Manual Navigation
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    if (prev && next) { // Ensure buttons exist on the page
        prev.addEventListener('click', function() {
            slideIndex -= 2; // Adjust because showSlides increments slideIndex
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
            showSlides();
        });

        next.addEventListener('click', function() {
            showSlides();
        });
    }

    // Event Filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    const events = document.querySelectorAll('.event');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            events.forEach(event => {
                if (category === 'all' || event.getAttribute('data-category') === category) {
                    event.style.display = 'block';
                } else {
                    event.style.display = 'none';
                }
            });
        });
    });
});

// Interactive Map with Leaflet
// Check if the map element exists on the page
if (document.getElementById('map')) {
    // Initialize the map
    const map = L.map('map').setView([9.0765, 7.3986], 12);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Garden Locations Data
    const gardens = [
        {
            name: 'Central Park Garden',
            coords: [9.0765, 7.3986],
            description: 'Our flagship community garden located in Central Park.'
        },
        {
            name: 'Wuse Community Plot',
            coords: [9.0650, 7.4826],
            description: 'A vibrant space maintained by local volunteers in Wuse.'
        },
        {
            name: 'Garki Urban Farm',
            coords: [9.0318, 7.4898],
            description: 'An urban farm promoting sustainable practices in Garki.'
        }
        // Add more garden locations as needed
    ];

    // Add markers for each garden
    gardens.forEach(garden => {
        L.marker(garden.coords)
            .addTo(map)
            .bindPopup(`<strong>${garden.name}</strong><br>${garden.description}`);
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
