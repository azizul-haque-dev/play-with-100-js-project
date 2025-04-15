const quizContiner = document.querySelector(".quiz-container");
const subtitle = document.querySelector(".subtitle");
const quizTitle = document.querySelector(".quiz-title");
const answer = document.querySelector(".answer");

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
  let showQuiz = questions[quiz];
  quizTitle.innerHTML = showQuiz.question;
  showQuiz.answers.forEach((item, i) => {
    const btn = document.createElement("button");
    const attr = document.createAttribute("data-id");
    attr.value = i;
    btn.setAttributeNode(attr);
    btn.textContent = item;
    answer.appendChild(btn);
  });
}
loadQuiz();
getAnswer();

function getAnswer() {
  const allBtn = document.querySelectorAll("button");

  allBtn.forEach((btn, i) => {
    btn.addEventListener("click", function (e) {
      const data = e.target.dataset.id;
      //   answer.innerHTML = "";
      if (Number(data) === questions[quiz].correct) {
        console.log(allBtn[data]);
        allBtn[data].style.backgroundColor = "green";
        getAnswer();
      } else {
        allBtn[questions[quiz].correct].style.backgroundColor = "green";
        allBtn[data].style.backgroundColor = "red";
      }
    });
  });
}

console.log({ quiz, score });
