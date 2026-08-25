"use strict";

class RadioManager {
    // buttons is an array containing 7 buttons
    constructor(buttons) {
        this.buttons = buttons;
        this.selected = -1;
    }
}

class Scores {
    constructor(curiosity, sociability, efficacy, prosociality) {
        this.curiosity = curiosity;
        this.sociability = sociability;
        this.efficacy = efficacy;
        this.prosociality = prosociality;
    }
}

const questions = [
    {
        "text": "I have multiple interests I pursue in my free time",
        "aspect": "c",
        "reversed": false
    },
    {
        "text": "I make mental connections between different topics",
        "aspect": "c",
        "reversed": false
    },
    {
        "text": "Unorthodox ideas interest me",
        "aspect": "c",
        "reversed": false
    },
    {
        "text": "I have little interest in learning about new topics",
        "aspect": "c",
        "reversed": true
    },
    {
        "text": "It’s hard for me to be creative",
        "aspect": "c",
        "reversed": true
    },
    {
        "text": "I don’t have a hobby I’m particularly interested in",
        "aspect": "c",
        "reversed": true
    },
    {
        "text": "It’s easy for me to change my tone to fit different social environments",
        "aspect": "s",
        "reversed": false
    },
    {
        "text": "I’m an energetic person",
        "aspect": "s",
        "reversed": false
    },
    {
        "text": "I enjoy socializing with my coworkers / classmates",
        "aspect": "s",
        "reversed": false
    },
    {
        "text": "I prefer to do things alone than with others",
        "aspect": "s",
        "reversed": true
    },
    {
        "text": "I rarely speak up in class or at work",
        "aspect": "s",
        "reversed": true
    },
    {
        "text": "I’m less interested in pursuing romantic relationships than the people around me",
        "aspect": "s",
        "reversed": true
    },
    {
        "text": "I do my work before relaxing",
        "aspect": "e",
        "reversed": false
    },
    {
        "text": "I go above and beyond in school and work",
        "aspect": "e",
        "reversed": false
    },
    {
        "text": "It’s easy for me to independently accomplish tasks",
        "aspect": "e",
        "reversed": false
    },
    {
        "text": "It’s hard for me to motivate myself to do difficult tasks",
        "aspect": "e",
        "reversed": true
    },
    {
        "text": "I put off work until the last second",
        "aspect": "e",
        "reversed": true
    },
    {
        "text": "If I’m honest, I’m a bit lazier than the average person",
        "aspect": "e",
        "reversed": true
    },
    {
        "text": "I consider myself a moral person",
        "aspect": "p",
        "reversed": false
    },
    {
        "text": "I back down from arguments when I realize I’m in the wrong",
        "aspect": "p",
        "reversed": false
    },
    {
        "text": "I am sympathetic to other people’s issues",
        "aspect": "p",
        "reversed": false
    },
    {
        "text": "If a rule is unnecessary, I have no issues breaking it",
        "aspect": "p",
        "reversed": true
    },
    {
        "text": "I have issues with authority figures",
        "aspect": "p",
        "reversed": true
    },
    {
        "text": "I don’t have an issue with telling lies",
        "aspect": "p",
        "reversed": true
    }
]

// returns a created Scores object
// questions is an array of questions objects (see: global const questions)
// radioManagers is an array of radioManager objects
// the two arrays MUST correlate (radioManagers[12] is the RM for the question questions[12])
function calculateScore(questions, radioManagers) {
    // all are integers
    let curiosity = 0;
    let sociability = 0;
    let efficacy = 0;
    let prosociality = 0;
    for (let i = 0; i < questions.length; i++) {
        let value = radioManagers[i].selected;
        if (value === -1) {
            value = 3;
        }
        switch (questions[i].aspect) {
            case "c":
                if (questions[i].reversed) {
                    curiosity += (6 - value);
                }
                else {
                    curiosity += value;
                }
                break;
            case "s":
                if (questions[i].reversed) {
                    sociability += (6 - value);
                }
                else {
                    sociability += value;
                }
                break;
            case "e":
                if (questions[i].reversed) {
                    efficacy += (6 - value);
                }
                else {
                    efficacy += value;
                }
                break;
            case "p":
                if (questions[i].reversed) {
                    prosociality += (6 - value);
                }
                else {
                    prosociality += value;
                }
                break;
        }
    }
    const scores = new Scores(curiosity, sociability, efficacy, prosociality);
    return scores;
}

function shuffle(list) {
    for (let i = 0; i < list.length; i++) {
        const swappedIndex = i + Math.floor(Math.random() * (list.length - i));
        const temp = list[i];
        list[i] = list[swappedIndex];
        list[swappedIndex] = temp;
    }
}

// returns div holding question text and radio
function createQuestion(parent, questionText) {
    const holder = document.createElement("div");
    holder.classList.add("question-holder");

    const paragraph = document.createElement("p");
    paragraph.textContent = questionText;

    holder.appendChild(paragraph);
    const radioManager = createRadio(holder);
    parent.appendChild(holder);
    return radioManager;
}

function createRadio(parent) {
    const radio = document.createElement("div");
    radio.role = "radiogroup";
    radio.classList.add("radio");

    // disagree
    const disagree = document.createElement("div");
    disagree.textContent = "Disagree";
    radio.appendChild(disagree);
    
    const buttons = [];
    // create buttons
    for (let i = 0; i < 7; i++) {
        const button = document.createElement("button");
        button.classList.add("button");
        button.classList.add(`border-color-${i}`);
        button.role = "radio";
        button.ariaChecked = "false";
        buttons.push(button);
        radio.appendChild(button);
    }
    const radioManager = new RadioManager(buttons);
    // add aria labels to buttons
    buttons[0].ariaLabel = "Strongly disagree";
    buttons[1].ariaLabel = "Disagree";
    buttons[2].ariaLabel = "Slightly disagree";
    buttons[3].ariaLabel = "Neither agree nor disagree";
    buttons[4].ariaLabel = "Slightly agree";
    buttons[5].ariaLabel = "Agree";
    buttons[6].ariaLabel = "Strongly agree";
    // add eventListeners to buttons
    for (let i = 0; i < 7; i++) {
        buttons[i].addEventListener('click', (event) => {
            if (radioManager.selected !== -1) {
                buttons[radioManager.selected].classList.remove(`background-color-${radioManager.selected}`);
                buttons[radioManager.selected].ariaChecked = "false";
            }
            buttons[i].classList.add(`background-color-${i}`);
            buttons[i].ariaChecked = "true";
            radioManager.selected = i;
        });
        // hover mouse over
        buttons[i].addEventListener('mouseenter', () => {
            if (i === radioManager.selected) {
                return;
            }
            buttons[i].classList.add(`background-color-${i}`);
        });
        buttons[i].addEventListener('mouseleave', () => {
            if (i === radioManager.selected) {
                return;
            }
            buttons[i].classList.remove(`background-color-${i}`);
        });
    }

    // agree
    const agree = document.createElement("div");
    agree.textContent = "Agree";
    radio.appendChild(agree);

    parent.appendChild(radio);

    return radioManager;
}

function main() {
    const questionsSection = document.getElementById("questions-section");
    const radioManagers = [];
    const submitButton = document.getElementById("submit-button");
    shuffle(questions);
    for (let i = 0; i < questions.length; i++) {
        const currentRM = createQuestion(questionsSection, questions[i].text);
        radioManagers.push(currentRM);
    }
    submitButton.addEventListener('click', (event) => {
        // Scores object
        const scores = calculateScore(questions, radioManagers);
        window.location.href = `results.html?c=${scores.curiosity}&s=${scores.sociability}&e=${scores.efficacy}&p=${scores.prosociality}`
    });
}

main();
