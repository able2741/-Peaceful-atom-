const questions = [
  { text: "Nuclear technology is only used to build weapons.", answer: false },
  { text: "Radiation therapy can help treat cancer.", answer: true },
  { text: "Nuclear power plants produce zero carbon emissions while running.", answer: true },
  { text: "Food irradiation makes food radioactive and unsafe to eat.", answer: false },
  { text: "Nuclear medicine is used to diagnose heart and bone problems.", answer: true },
  { text: "Tc-99m is one of the most commonly used isotopes in medical imaging.", answer: true },
  { text: "Anyone near a nuclear power plant gets dangerous radiation exposure daily.", answer: false },
  { text: "ALARA stands for 'As Low As Reasonably Achievable.'", answer: true },
  { text: "Nuclear gauges are used in industry to measure thickness or density.", answer: true },
  { text: "All countries with nuclear reactors are building nuclear weapons.", answer: false },
  { text: "Radiation is always harmful no matter the amount of how it is used", answer: false },
  { text: "Nuclear technology can help farmers to grow better crops", answer: true },
  { text: "Nuclear technology is useful only during wars", answer: false },
  { text: "Every use of nuclear technology harms the environment", answer: false }
];
const correctMessages = [
  "🎉 Boom! Correct!",
  "😎 You're smart!",
  "🚀 Amazing!",
  "🌟 Excellent!",
  "👏 Keep going!",
  "⚛️ Peaceful Atom approves!"
];

const wrongMessages = [
  "😂 Oops!",
  "🤔 Nice try!",
  "😊 Don't give up!",
  "💡 Learn and continue!",
  "📚 Almost!"
];

function getRandomMessage(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let current = 0;
let score = 0;
let answered = 0;

function loadQuestion() {
  document.getElementById("quiz-question").textContent = questions[current].text;
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
  updateScore();
}

function answerQuiz(userAnswer) {
  const correct = questions[current].answer;
  const feedback = document.getElementById("quiz-feedback");

  answered++;
  if (userAnswer === correct) {
    feedback.textContent = getRandomMessage(correctMessages);
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = getRandomMessage(wrongMessages) + " That's a " + (correct ? "Fact" : "Myth") + ".";
    feedback.style.color = "red";
  }

  document.getElementById("next-btn").style.display = "inline-block";
  updateScore();
}

function updateScore() {
  document.getElementById("quiz-score").textContent =
    answered > 0 ? `Score: ${score}/${answered}` : "";
}

function nextQuestion() {
  current = (current + 1) % questions.length;
  loadQuestion();
}

// Dark mode toggle
function setupThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      btn.textContent = "☀️ Light Mode";
    } else {
      btn.textContent = "🌙 Dark Mode";
    }
  });
}

window.onload = () => {
  loadQuestion();
  setupThemeToggle();
  LoadFunQuestion();
};
// ===========================
// 😂 FUN ZONE QUESTIONS
// ===========================

const funQuestions = [
  {
    question: "If I stand near a nuclear power plant for one minute, I will glow like a light bulb.",
    answer: false,
    fact: "😂 Nope! Nuclear power plants are designed with strong safety systems."
  },
  {
    question: "A banana contains a tiny amount of natural radiation.",
    answer: true,
    fact: "🍌 Correct! Bananas naturally contain a tiny amount of potassium-40."
  },
  {
    question: "Nuclear technology can turn people into superheroes.",
    answer: false,
    fact: "🦸 Sorry! That's only in movies."
  },
  {
    question: "Food treated with radiation becomes radioactive.",
    answer: false,
    fact: "🍕 Wrong myth! Food irradiation makes food safer without making it radioactive."
  },
  {
    question: "Some doctors use nuclear technology every day to help patients.",
    answer: true,
    fact: "🏥 Yes! It helps diagnose and treat diseases."
  },
  {
    question: "Aliens invented nuclear technology.",
    answer: false,
    fact: "👽 Nope! Scientists developed it."
  },
  {
    question: "Nuclear power can produce electricity even at night.",
    answer: true,
    fact: "⚡ Correct! It works day and night."
  },
  {
    question: "Nuclear technology can help protect wildlife.",
    answer: true,
    fact: "🐘 Yes! Scientists use it to study and protect animals."
  },
  {
    question: "If you hear the word 'nuclear', you should immediately run away.",
    answer: false,
    fact: "😊 Not always! Nuclear technology has many peaceful uses."
  },
  {
    question: "Learning about nuclear technology helps you avoid believing myths.",
    answer: true,
    fact: "🧠 Exactly! Knowledge beats fear."
  }
];

let funCurrent = 0;
let funScore = 0;
let funAnswered = 0;

function loadFunQuestion() {
  document.getElementById("fun-question").textContent = funQuestions[funCurrent].question;
  document.getElementById("fun-feedback").textContent = "";
  document.getElementById("fun-next-btn").style.display = "none";
  updateFunScore();
}

function answerFun(userAnswer) {
  const q = funQuestions[funCurrent];
  const feedback = document.getElementById("fun-feedback");

  funAnswered++;
  if (userAnswer === q.answer) {
    feedback.textContent = getRandomMessage(correctMessages) + " " + q.fact;
    feedback.style.color = "green";
    funScore++;
  } else {
    feedback.textContent = getRandomMessage(wrongMessages) + " " + q.fact;
    feedback.style.color = "red";
  }

  document.getElementById("fun-next-btn").style.display = "inline-block";
  updateFunScore();
}

function updateFunScore() {
  document.getElementById("fun-score").textContent =
    funAnswered > 0 ? `Score: ${funScore}/${funAnswered}` : "";
}

function nextFunQuestion() {
  funCurrent = (funCurrent + 1) % funQuestions.length;
  loadFunQuestion();
}