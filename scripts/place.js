document.addEventListener("DOMContentLoaded", function() {
    // Initialize the footer information
    setFooterInformation();

    // Static values for temperature (in Celsius) and wind speed (in km/h)
    const temperature = 5; // e.g., 5°C
    const windSpeed = 10; // e.g., 10 km/h

    // Update weather information
    updateWeatherInformation(temperature, windSpeed);
});

function setFooterInformation() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;
}

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

function updateWeatherInformation(temp, wind) {
    let windChillFactor = "N/A";
    if (temp <= 10 && wind > 4.8) {
        windChillFactor = calculateWindChill(temp, wind).toFixed(2) + " °C";
    }

    document.querySelector(".weather").innerHTML += `<p>Windchill: ${windChillFactor}</p>`;
}

document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;
