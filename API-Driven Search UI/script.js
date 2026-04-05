const button = document.getElementById("loadBtn");
const output = document.getElementById("output");
button.addEventListener("click", async () => {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
        const result = await response.json();
        output.innerHTML = `
        <h2>${result.title}</h2>
        <p>${result.body}</p>
        `;
    } catch (error) {
        output.textContent = "Failed to load data.";
        console.error(error);
    }
});

const loadBtn = document.getElementById("loadBtn");

const status = document.getElementById("status");
const loadBox = document.getElementById("loadBox");

async function loadBtn() {
    status.textContent = "Loading...";
    loadBox.textContent = "";
    loadBtn.disabled = true;

    try {
        const response = await fetch("[https://api.adviceslip.com/advice](https://api.adviceslip.com/advice)");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        status.textContent = "Results:";
        loadBox.textContent = data.slip.load;

    } catch (error) {
        status.textContent = "Loading failed. Please try again.";
        loadBox.textContent = "";
        console.error(error);
    } finally {
        loadBtn.disabled = false;
    }
}

loadBtn.addEventListener("click", loading);