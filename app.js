function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const TOTAL = questions.length;
const quiz = document.getElementById("quiz");
const scoreEl = document.getElementById("score");
const errorsEl = document.getElementById("errors");
const restartBtn = document.getElementById("restartBtn");
const progressCorrect = document.getElementById("progressCorrect");
const progressWrong = document.getElementById("progressWrong");

/* ===== STATE ===== */
let gameQuestions = JSON.parse(localStorage.getItem("gameQuestions"));
let state = JSON.parse(localStorage.getItem("state"));

if (!gameQuestions) {
  gameQuestions = JSON.parse(JSON.stringify(questions));
  shuffle(gameQuestions);
  gameQuestions.forEach(q => shuffle(q.answers));
  localStorage.setItem("gameQuestions", JSON.stringify(gameQuestions));
}

if (!state) {
  state = {
    answered: {},
    correct: 0,
    errors: 0
  };
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

    const answers = document.createElement("div");
    answers.className = "answers";

    q.answers.forEach(a => {
      const btn = document.createElement("button");
      btn.textContent = a.text;

      if (state.answered[index]) {
        btn.disabled = true;
        if (a.correct) btn.classList.add("correct");
        if (!a.correct && state.answered[index] === a.text) {
          btn.classList.add("wrong");
        }
      }

      btn.onclick = () => {
        if (state.answered[index]) return;

        state.answered[index] = a.text;

        if (a.correct) {
          state.correct++;
        } else {
          state.errors++;
        }

        localStorage.setItem("state", JSON.stringify(state));
        render();

        setTimeout(() => {
          block.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      };

      answers.appendChild(btn);
    });

    block.append(title, text, answers);
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
  if (confirm("Начать тест заново?")) {
    localStorage.clear();
    location.reload();
  }
};

render();
