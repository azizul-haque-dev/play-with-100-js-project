const quizContiner = document.querySelector(".quiz-container");
const subtitle = document.querySelector(".subtitle");
const quizTitle = document.querySelector(".quiz-title");
const answer = document.querySelector(".answer");
const startBtn = document.querySelector(".start");
const nextBtn = document.querySelector(".next");
const container = document.querySelector(".container");

let quiz = 0;
let score = 0;

const questions = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna"],
    correct: 0
  },
  {
    question: "What is the correct syntax for a function in JS?",
    answers: ["func myFunc()", "function myFunc()", "myFunc function()"],
    correct: 1
  },
  {
    question: "Which is a JavaScript data type?",
    answers: ["Element", "Boolean", "Style"],
    correct: 1
  }
];

function loadQuiz() {
  const showQuiz = questions[quiz];
  quizTitle.innerHTML = showQuiz.question;
  subtitle.innerHTML = `Your score is ${score}`;
  answer.innerHTML = ""; // Clear previous answers
  nextBtn.disabled = true;

  showQuiz.answers.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.setAttribute("data-id", i);
    btn.textContent = item;
    answer.appendChild(btn);
  });

  getAnswer();
}

function getAnswer() {
  const allBtn = document.querySelectorAll(".btn");
  let answered = false;

  allBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (answered) return;

      const data = e.target.dataset.id;

      if (Number(data) === questions[quiz].correct) {
        btn.classList.add("success");
        score++;
      } else {
        btn.classList.add("danger");
        allBtn[questions[quiz].correct].classList.add("success");
      }

      nextBtn.disabled = false;
      answered = true;
    });
  });
}

startBtn.addEventListener("click", function () {
  startBtn.classList.add("none");
  nextBtn.classList.remove("none");
  container.style.backgroundColor = "#fff";
  loadQuiz();
});

nextBtn.addEventListener("click", function () {
  quiz++;
  if (quiz < questions.length) {
    loadQuiz();
  } else {
    quizTitle.innerHTML = "Quiz Completed!";
    subtitle.innerHTML = `Your final score is ${score} / ${questions.length}`;
    answer.innerHTML = "";
    nextBtn.classList.add("none");
  }
});
