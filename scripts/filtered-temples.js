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
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "images/"
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
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985-08-24",
        area: 19500,
        imageUrl: "images/johannesburg-south-africa-temple-exterior-1075606-wallpaper.jpg"
    },
    {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996-05-26",
        area: 21700,
        imageUrl: "images/hong-kong-china-temple-exterior-273999-wallpaper.jpg"
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
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
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
