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

//begin variables
var contentEl = document.querySelector("#button-div");
var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var questionIndex = 0;
var correctCount = 0;

var time = 60;
var intervalId;
// var startBtn;

//end variables

// // create start button
// var button =
//     document.createElement("button");
// button.innerHTML = "Start Quiz";

// var body = document.getElementsByTagName("body")
// [0];
// body.appendChild(button);

// button.addEventListener("click", startGame);

// create start game function 

// function startGame() {
//     // call update time
//     button.remove();

//     timerEl.textContent = time;
//     // updateTime();
//     renderQuestion();

// };

function endQuiz() {
    contentEl.textContent = "";
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;

    //going to add local storage ish here

}

function updateTime() {
    // if (time == 0) {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
    return;
}

function renderQuestion() {
    button.remove();
    h2.remove();
    p.remove();

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
        endQuiz();
    }
    renderQuestion();
}

function startQuiz() {
    //h2
    h2 = document.createElement("h2");
    h2.textContent = "So You Wanna Be A Master?";
    h2.classList.add("title-content");
    contentEl.appendChild(h2);
    //p tag
    p = document.createElement("p");
    p.textContent = "Test your Pokemon knowledge with this 60 second, 4 question quiz! But be careful, each wrong answer deducts 2 seconds! Do you have what it takes to be a master?";
    p.classList.add("title-content");
    contentEl.appendChild(p);
    //button
    button = document.createElement("button");
    button.textContent = "Start Game";
    button.setAttribute("id", "start-button");
    contentEl.appendChild(button);

    button.addEventListener("click", renderQuestion);
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
    setTimeout(nextQuestion, 1000);
}

startQuiz();

optionListEl.addEventListener("click", checkAnswer);