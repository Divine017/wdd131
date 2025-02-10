// scripts/temples.js
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.jpg"
    },
    {
        templeName: "Australia",
        location: "Sydney, Australia",
        dedicated: "1984-09-20",
        area: 10700,
        imageUrl: "images/australia-temple.jpg"
    },
    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "1995-01-08",
        area: 104000,
        imageUrl: "images/bountiful-temple.jpg"
    },
    {
        templeName: "Cardston Canada",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923-08-26",
        area: 88000,
        imageUrl: "images/cardston-canada-temple.jpg"
    },
    {
        templeName: "Ciudad Juárez México",
        location: "Ciudad Juárez, Chihuahua, México",
        dedicated: "2002-02-26",
        area: 116642,
        imageUrl: "images/ciudad-juarez-mexico-temple.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893-04-06",
        area: 253000,
        imageUrl: "images/salt-lake-temple.webp"
    },
    {
        templeName: "Albuquerque New Mexico",
        location: "Albuquerque, New Mexico, United States",
        dedicated: "2000-03-05",
        area: 34200,
        imageUrl: "images/albuquerque-temple.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004-01-11",
        area: 17200,
        imageUrl: "images/accra-ghana-temple.jpg"
    },
    {
        templeName: "Free Town Sierra Leone",
        location: "Freetown, Sierra Leone",
        dedicated: "1989-04-22",
        area: 18800,
        imageUrl: "images/freetown-sierra-leone-temple.webp"
    },
    {
        templeName: "Chicago Illinois",
        location: "Glenview, Illinois, United States",
        dedicated: "1985-08-09",
        area: 47000,
        imageUrl: "images/chicago-illinois-temple.webp"
    }
];

const templeCardsContainer = document.getElementById("temple-cards");

function displayTemples(templesToDisplay) {
    templeCardsContainer.innerHTML = '';
    templesToDisplay.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><span class="label">Location:</span> <span class="value">${temple.location}</span></p>
            <p><span class="label">Dedicated:</span> <span class="value">${temple.dedicated}</span></p>
            <p><span class="label">Area:</span> <span class="value">${temple.area} sq ft</span></p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        templeCardsContainer.appendChild(templeCard);
    });
}

function filterTemples(criteria) {
    let filteredTemples;
    switch (criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
}

document.getElementById("nav-menu").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        event.preventDefault();
        const filterCriteria = event.target.getAttribute("data-filter");
        filterTemples(filterCriteria);
    }
});

// Initial display of all temples
displayTemples(temples);

// Hamburger menu functionality
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
});

// Set current year and last modified date in the footer
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});
