const queryString = window.location.search;
const params = new URLSearchParams(queryString);

const curiosity = parseInt(params.get("c"));
const sociability = parseInt(params.get("s"));
const efficacy = parseInt(params.get("e"));
const prosociality = parseInt(params.get("p"));

const curiosityDisplay = document.getElementById("curiosity-display");
const sociabilityDisplay = document.getElementById("sociability-display");
const efficacyDisplay = document.getElementById("efficacy-display");
const prosocialityDisplay = document.getElementById("prosociality-display");

function main() {
    curiosityDisplay.textContent = `Curiosity: ${curiosity}`
    sociabilityDisplay.textContent = `Sociability: ${sociability}`
    efficacyDisplay.textContent = `Efficacy: ${efficacy}`
    prosocialityDisplay.textContent = `Prosociality: ${prosociality}`
}

main();