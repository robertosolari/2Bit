let language = "en";
const texts = {
    en: {
        title: "2Bit",
        instruction: "Convert this number:",
        correct: "Correct!",
        wrong: "Wrong! Try again.",
        timeUp: "Time's up!",
        placeholder: "Your answer...",
        level: "Level",
        score: "Score",
        time: "Time",
        mixed: "Mixed",
        bin2dec: "BIN → DEC",
        dec2bin: "DEC → BIN",
        correctWas: "Answer:"
    },
    it: {
        title: "2Bit",
        instruction: "Converti questo numero:",
        correct: "Corretto!",
        wrong: "Sbagliato! Riprova.",
        timeUp: "Tempo scaduto!",
        placeholder: "La tua risposta...",
        level: "Livello",
        score: "Punteggio",
        time: "Tempo",
        mixed: "Misto",
        bin2dec: "BIN → DEC",
        dec2bin: "DEC → BIN",
        correctWas: "Risposta:"
    }
};

let level = 1;
let score = 0;
let streak = 0;
let mode = "mixed"; // "mixed", "binToDec", "decToBin"
let direction = "binToDec";
let currentQuestion = "";
let correctAnswer = "";
let maxTime = 10;
let time = maxTime;
let timerInterval;

// DOM elements
const titleEl = document.getElementById("title");
const instructionEl = document.getElementById("instruction");
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const timerEl = document.getElementById("timer");
const timerBar = document.getElementById("timer-bar");
const langSelect = document.getElementById("language");
const modeSelect = document.getElementById("mode");
const levelDisplay = document.getElementById("level-display");
const scoreDisplay = document.getElementById("score-display");
const typeBadge = document.getElementById("type-badge");
const correctReveal = document.getElementById("correct-reveal");
const streakDots = document.querySelectorAll(".streak-dot");

// Label elements
const labelLevel = document.getElementById("label-level");
const labelScore = document.getElementById("label-score");
const labelTime = document.getElementById("label-time");
const optMixed = document.getElementById("opt-mixed");
const optBin2Dec = document.getElementById("opt-bin2dec");
const optDec2Bin = document.getElementById("opt-dec2bin");

// Events
langSelect.addEventListener("change", () => {
    language = langSelect.value;
    setLanguage();
});

modeSelect.addEventListener("change", () => {
    mode = modeSelect.value;
    startGame();
});

answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitAnswer();
    }
});

function setLanguage() {
    const t = texts[language];
    titleEl.textContent = t.title;
    instructionEl.textContent = t.instruction;
    answerInput.placeholder = t.placeholder;
    labelLevel.textContent = t.level;
    labelScore.textContent = t.score;
    labelTime.textContent = t.time;
    optMixed.textContent = t.mixed;
    optBin2Dec.textContent = t.bin2dec;
    optDec2Bin.textContent = t.dec2bin;
}

function updateStats() {
    levelDisplay.textContent = level;
    scoreDisplay.textContent = score;
}

function updateStreak() {
    streakDots.forEach((dot, i) => {
        dot.classList.toggle("filled", i < streak);
    });
}

function updateTimerBar() {
    const pct = (time / maxTime) * 100;
    timerBar.style.width = pct + "%";

    if (time <= 3) {
        timerBar.classList.add("warning");
        timerEl.classList.add("warning");
    } else {
        timerBar.classList.remove("warning");
        timerEl.classList.remove("warning");
    }
}

function startGame() {
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback-msg";
    correctReveal.innerHTML = "";

    // Determine direction
    if (mode === "mixed") {
        direction = Math.random() < 0.5 ? "binToDec" : "decToBin";
    } else {
        direction = mode;
    }

    // Generate question based on level
    let max = Math.pow(2, level + 2);
    let num = Math.floor(Math.random() * max);

    if (direction === "binToDec") {
        currentQuestion = num.toString(2);
        correctAnswer = num.toString(10);
        typeBadge.textContent = "BINARY";
        typeBadge.className = "question-type-badge badge-binary";
    } else {
        currentQuestion = num.toString(10);
        correctAnswer = num.toString(2);
        typeBadge.textContent = "DECIMAL";
        typeBadge.className = "question-type-badge badge-decimal";
    }

    questionEl.textContent = currentQuestion;
    answerInput.value = "";
    answerInput.disabled = false;
    answerInput.focus();

    // Timer
    time = maxTime;
    timerEl.textContent = time;
    updateTimerBar();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);

    updateStats();
}

function updateTimer() {
    time--;
    timerEl.textContent = time;
    updateTimerBar();

    if (time <= 0) {
        clearInterval(timerInterval);
        answerInput.disabled = true;
        showFeedback("timeUp");
    }
}

function showFeedback(type) {
    const t = texts[language];

    if (type === "correct") {
        feedbackEl.textContent = t.correct;
        feedbackEl.className = "feedback-msg feedback-correct";
        score += level * 10;
        streak = Math.min(streak + 1, 5);
        level++;
        updateStats();
        updateStreak();
        setTimeout(startGame, 1200);
    } else if (type === "wrong") {
        feedbackEl.textContent = t.wrong;
        feedbackEl.className = "feedback-msg feedback-wrong";
        streak = 0;
        updateStreak();
        // Show correct answer
        correctReveal.innerHTML = `<div class="correct-answer-reveal">${t.correctWas} <span>${correctAnswer}</span></div>`;
        answerInput.disabled = true;
        clearInterval(timerInterval);
        setTimeout(startGame, 2500);
    } else if (type === "timeUp") {
        feedbackEl.textContent = t.timeUp;
        feedbackEl.className = "feedback-msg feedback-timeup";
        streak = 0;
        level = Math.max(1, level - 1);
        updateStats();
        updateStreak();
        // Show correct answer
        correctReveal.innerHTML = `<div class="correct-answer-reveal">${t.correctWas} <span>${correctAnswer}</span></div>`;
        setTimeout(startGame, 2500);
    }
}

function submitAnswer() {
    if (answerInput.disabled) return;

    const userAnswer = answerInput.value.trim();
    if (!userAnswer) return;

    if (userAnswer === correctAnswer) {
        clearInterval(timerInterval);
        showFeedback("correct");
    } else {
        showFeedback("wrong");
    }
}

// Init
setLanguage();
startGame();
