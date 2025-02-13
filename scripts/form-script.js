document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: "fc-1888", name: "Latops", averagerating: 4.5 },
        { id: "fc-2050", name: "Smartphones", averagerating: 4.7 },
        { id: "fs-1987", name: "Tablets", averagerating: 3.5 },
        { id: "ac-2000", name: "Headphones", averagerating: 3.9 },
        { id: "jj-1969", name: "Iphones", averagerating: 5.0 },
        { id: "jj-1999", name: "Smartwatches", averagerating: 4.0 },
    ];

    const productSelect = document.getElementById("product");

    // Populate product dropdown dynamically
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;  // Use ID as value
        option.textContent = `${product.name} (Avg Rating: ${product.averagerating})`;
        productSelect.appendChild(option);
    });

    // Initialize review counter if not set
    if (!localStorage.getItem("reviewCount")) {
        localStorage.setItem("reviewCount", "0");
    }
});


// getdates.js

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});

// Retrieve and increment review count from localStorage
let count = localStorage.getItem("reviewCount");
count = count ? parseInt(count) + 1 : 1;
localStorage.setItem("reviewCount", count);

// Display updated count
document.getElementById("review-count").textContent = count;
