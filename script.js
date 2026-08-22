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
    holder = document.createElement("div");

    radio = createRadio();

    paragraph = document.createElement("p");
    paragraph.textContent = questionText;

    holder.appendChild(paragraph);
    holder.appendChild(radio);
    parent.appendChild(holder);
    return holder;
}

function createRadio() {
    radio = document.createElement("div");
    radio.class = "radio";
    
    button1 = document.createElement("button");
    button1.classList.add("button");

    radio.appendChild(button1);

    return radio;
}

function main() {
    const questionsSection = document.getElementById("questions-section");
    const holders = [];
    shuffle(questions);
    for (let i = 0; i < questions.length; i++) {
        const currentHolder = createQuestion(questionsSection, questions[i].text);
        holders.push(currentHolder);
    }
}

main()
