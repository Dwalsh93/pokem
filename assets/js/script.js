var questions = [
    {
        question: "Which Pokemon is known as the 'kicking fiend'?",
        choices: ["Hitmonlee", "Hitmonchan", "Hitmontop", "Tyrogue"],
        answer: "Hitmonlee",
    },
    {
        question:
            "What Pokemon does Pikachu evolve into?",
        choices: ["Pichu", "Eeevee", "Electrike", "Raichu"],
        answer: "Raichu",
    },
    {
        question:
            "What type of pokemon does Gym Leader Erika specialize in?",
        choices: ["Psychic", "Grass", "Dragon", "Flying"],
        answer: "Grass",
    },
    {
        question:
            "Which of the following is NOT an Eeveelution",
        choices: ["Sylveon", "Umbreon", "Flygon", "Flareon"],
        answer: "Flygon",
    },
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

var time = 60;
var intervalId;

// begin functions

function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
}

function updateTime() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

function renderQuestion() {

    if (time == 0) {
        updateTime();
        return;
    }

    intervalId = setInterval(updateTime, 1000);

    questionEl.textContent = questions[questionIndex].question;

    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";

    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;

    for (var i = 0; i < choicesLenth; i++) {
        var questionListItem = document.createElement("li");
        questionListItem.textContent = choices[i];
        optionListEl.append(questionListItem);
    }
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
        time = 0;
    }
    renderQuestion();
}

function checkAnswer(event) {
    clearInterval(intervalId);
    if (event.target.matches("li")) {
        var answer = event.target.textContent;
        if (answer === questions[questionIndex].answer) {
            questionResultEl.textContent = "Correct";
            correctCount++;
        } else {
            questionResultEl.textContent = "Incorrect";
            time = time - 2;
            timerEl.textContent = time;
        }
    }
    setTimeout(nextQuestion, 2000);
}

renderQuestion();
optionListEl.addEventListener("click", checkAnswer);


    // start button begin
    var button = document.createElement("button");
    button.innerHTML = "Start Quiz";
    
    
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    
    
    button.addEventListener ("click", function() {
    time;
    
    });
    
    //end start button