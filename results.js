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

function getStack(c, s, e, p) {
    let stack = "";
    let aspectsArr = ["C", "S", "E", "P"];
    let valuesArr = [c, s, e, p];
    for (let i = 0; i < 4; i++) {
        maxIndex = 0;
        for (let j = 0; j < (4 - i); j++) {
            if (valuesArr[j] > valuesArr[maxIndex]) {
                maxIndex = j;
            }
        }
        stack += aspectsArr[maxIndex];
        aspectsArr.splice(maxIndex, 1);
        valuesArr.splice(maxIndex, 1);
    }
    return stack;
}

function main() {
    curiosityDisplay.textContent = `Curiosity: ${curiosity}`;
    sociabilityDisplay.textContent = `Sociability: ${sociability}`;
    efficacyDisplay.textContent = `Efficacy: ${efficacy}`;
    prosocialityDisplay.textContent = `Prosociality: ${prosociality}`;
    const subtype = getStack(curiosity, sociability, efficacy, prosociality);
    const type = subtype[0] + "/" + subtype[3];
}

main();