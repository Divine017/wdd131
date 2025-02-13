document.addEventListener("DOMContentLoaded", function () {
    const productArray = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Smartphone" },
        { id: 3, name: "Tablet" },
        { id: 4, name: "Headphones" },
        { id: 5, name: "Smartwatch" }
    ];

    const productSelect = document.getElementById("product");

    // Populate product dropdown dynamically
    productArray.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;  // Use ID as value
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Track form submissions using localStorage
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
