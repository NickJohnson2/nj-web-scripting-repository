const searchBtn = document.getElementById("searchBtn");

const searchInput = document.getElementById("searchInput");
const status = document.getElementById("status");
const results = document.getElementById("results");

searchBtn.addEventListener("click", runSearch);

function runSearch() {

const term = searchInput.value.trim();

if (!term) {
    status.textContent = "Enter a search term.";
    results.innerHTML = "";
    return;
}
}

const url = `https://geocoding-api.open-meteo.com/v1/search?s=${encodeURIComponent(term)}`;

async function runSearch() {

    const term = searchInput.value.trim();

    if (!term) {
        status.textContent = "Please enter a search term.";
        results.innerHTML = "";
        return;
    }

    status.textContent = "Loading...";
    results.innerHTML = "";

    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?s=${encodeURIComponent(term)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        status.textContent = "Something went wrong. Please try again.";
        console.error(error);
    }
}

if (!data.city) {

status.textContent = "No results found.";
return;
}

status.textContent = `Found ${data.city.length} result(s).`;

results.innerHTML = data.city.map(city => `  <div class="card">
    <h3>${city.strName}</h3>
    <p><strong>Latitude:</strong> ${city.strLatitude}</p>
    <p><strong>Longitude:</strong> ${city.strLongitude}</p>
    <p><strong>Elevation:</strong> ${city.strElevation}</p>
  </div>`).join("");