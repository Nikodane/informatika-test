/* ===== UTILS ===== */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* ===== ELEMENTS ===== */
const quiz = document.getElementById("quiz");
const scoreEl = document.getElementById("score");
const errorsEl = document.getElementById("errors");
const restartBtn = document.getElementById("restartBtn");
const progressCorrect = document.getElementById("progressCorrect");
const progressWrong = document.getElementById("progressWrong");

const TOTAL = questions.length;

/* ===== STATE ===== */
let gameQuestions = JSON.parse(localStorage.getItem("gameQuestions"));
let state = JSON.parse(localStorage.getItem("state"));

function initGame() {
  gameQuestions = JSON.parse(JSON.stringify(questions));
  shuffle(gameQuestions);
  gameQuestions.forEach(q => shuffle(q.answers));

  state = {
    answered: {},
    correct: 0,
    errors: 0
  };

  localStorage.setItem("gameQuestions", JSON.stringify(gameQuestions));
  localStorage.setItem("state", JSON.stringify(state));
}

/* если первый запуск */
if (!gameQuestions || !state) {
  initGame();
}

/* ===== RENDER ===== */
function render() {
  quiz.innerHTML = "";

  gameQuestions.forEach((q, index) => {
    const block = document.createElement("div");
    block.className = "question";

    const title = document.createElement("h2");
    title.textContent = `Вопрос ${q.id} из ${TOTAL}`;

    const text = document.createElement("p");
    text.textContent = q.text;

    const answersDiv = document.createElement("div");
    answersDiv.className = "answers";

    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer.text;

      /* если уже отвечали */
      if (state.answered[index]) {
        btn.disabled = true;

        if (answer.correct) {
          btn.classList.add("correct");
        }

        if (
          !answer.correct &&
          state.answered[index] === answer.text
        ) {
          btn.classList.add("wrong");
        }
      }

      btn.onclick = () => {
        if (state.answered[index]) return;

        state.answered[index] = answer.text;

        if (answer.correct) {
          state.correct++;
        } else {
          state.errors++;
        }

        localStorage.setItem("state", JSON.stringify(state));
        render();

        /* плавно прокрутить к текущему вопросу */
        setTimeout(() => {
          block.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 200);
      };

      answersDiv.appendChild(btn);
    });

    block.append(title, text, answersDiv);
    quiz.appendChild(block);
  });

  /* ===== UI ===== */
  scoreEl.textContent = `${state.correct} / ${TOTAL}`;
  errorsEl.textContent = `Ошибки: ${state.errors}`;

  progressCorrect.style.width =
    (state.correct / TOTAL) * 100 + "%";

  progressWrong.style.width =
    (state.errors / TOTAL) * 100 + "%";
}

/* ===== RESET ===== */
restartBtn.onclick = () => {
  if (!confirm("Начать тест заново?")) return;

  localStorage.clear();
  initGame();
  render();

  // 100% прокрутка вверх (ПК + телефон)
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  document.body.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


/* ===== START ===== */
render();

