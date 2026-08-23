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
const typeDisplay = document.getElementById("type-display");
const subtypeDisplay = document.getElementById("subtype-display");

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

function getNickname(type) {
    const first = type[0];
    const last = type[2];
    switch (true) {
        case first === "C" && last === "S":
            return "The Sage";
        case first === "C" && last === "P":
            return "The Explorer";
        case first === "C" && last === "E":
            return "The Artist";
        case first === "S" && last === "P":
            return "The Jester";
        case first === "S" && last === "E":
            return "The Lover";
        case first === "S" && last === "C":
            return "The Hero";
        case first === "P" && last === "E":
            return "The Innocent";
        case first === "P" && last === "C":
            return "The Caregiver";
        case first === "P" && last === "S":
            return "The Senex";
        case first === "E" && last === "C":
            return "The Ruler";
        case first === "E" && last === "S":
            return "The Everyman";
        case first === "E" && last === "P":
            return "The Rebel";
    }
}

function main() {
    const subtype = getStack(curiosity, sociability, efficacy, prosociality);
    const type = subtype[0] + "/" + subtype[3];
    const nickname = getNickname(type);

    curiosityDisplay.textContent = `Curiosity: ${curiosity}`;
    sociabilityDisplay.textContent = `Sociability: ${sociability}`;
    efficacyDisplay.textContent = `Efficacy: ${efficacy}`;
    prosocialityDisplay.textContent = `Prosociality: ${prosociality}`;
    typeDisplay.textContent = `Result: ${type} (${nickname})`;
    subtypeDisplay.textContent = `Subtype: ${subtype}`;
    
}

main();