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
        correctWas: "Answer:",
        // Learn modal
        learnTitle: "How Binary Works",
        learnSubtitle: "It's simpler than you think",
        stepB2D1: 'Each binary digit has a <strong>position</strong>, starting from the right at 0.',
        stepB2D2: 'Each position is worth a <strong>power of 2</strong>. Think of it like slots that double each time.',
        stepB2D3: 'Multiply each digit by its position value, then <strong>add them up</strong>.',
        tipB2D: '<strong>Pro tip:</strong> Memorize the powers of 2 (1, 2, 4, 8, 16, 32, 64, 128...) — they\'re your best friends here.',
        stepD2B1: 'Divide the number by 2. Write down the <strong>remainder</strong> (0 or 1).',
        stepD2B2: 'Keep dividing the result by 2, writing down each remainder.',
        stepD2B3: 'When you reach 0, <strong>read the remainders bottom-to-top</strong>. That\'s your binary number!',
        tipD2B: '<strong>Pro tip:</strong> There\'s a shortcut! Ask yourself: does 8 fit in 13? Yes (1). Remainder 5. Does 4 fit? Yes (1). Remainder 1. Does 2 fit? No (0). Does 1 fit? Yes (1). Result: 1101.',
        exampleLabel1: 'Example: 1011',
        exampleLabel2: 'Example: 13 → binary',
        calcTotalLabel: 'Total',
        remainderLabel: 'rem',
        readLabel: 'Read upward',
        learnPlayText: "Got it, let's play!"
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
        correctWas: "Risposta:",
        // Learn modal
        learnTitle: "Come funziona il binario",
        learnSubtitle: "È più semplice di quanto pensi",
        stepB2D1: 'Ogni cifra binaria ha una <strong>posizione</strong>, partendo da destra con 0.',
        stepB2D2: 'Ogni posizione vale una <strong>potenza di 2</strong>. Immaginalo come slot che raddoppiano ogni volta.',
        stepB2D3: 'Moltiplica ogni cifra per il valore della sua posizione, poi <strong>somma tutto</strong>.',
        tipB2D: '<strong>Pro tip:</strong> Memorizza le potenze di 2 (1, 2, 4, 8, 16, 32, 64, 128...) — sono le tue migliori amiche qui.',
        stepD2B1: 'Dividi il numero per 2. Scrivi il <strong>resto</strong> (0 o 1).',
        stepD2B2: 'Continua a dividere il risultato per 2, scrivendo ogni resto.',
        stepD2B3: 'Quando arrivi a 0, <strong>leggi i resti dal basso verso l\'alto</strong>. Quello è il tuo numero binario!',
        tipD2B: '<strong>Pro tip:</strong> C\'è una scorciatoia! Chiediti: 8 sta nel 13? Sì (1). Resto 5. 4 sta? Sì (1). Resto 1. 2 sta? No (0). 1 sta? Sì (1). Risultato: 1101.',
        exampleLabel1: 'Esempio: 1011',
        exampleLabel2: 'Esempio: 13 → binario',
        calcTotalLabel: 'Totale',
        remainderLabel: 'resto',
        readLabel: 'Leggi verso l\'alto',
        learnPlayText: "Capito, giochiamo!"
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

// Learn modal
const learnModal = document.getElementById("learn-modal");
const learnTitleEl = document.getElementById("learn-title");
const learnSubtitleEl = document.getElementById("learn-subtitle");
const learnBin2Dec = document.getElementById("learn-bin2dec");
const learnDec2Bin = document.getElementById("learn-dec2bin");
const tabBin2Dec = document.getElementById("tab-bin2dec");
const tabDec2Bin = document.getElementById("tab-dec2bin");

function openLearnModal() {
    clearInterval(timerInterval);
    learnModal.classList.add("active");
    updateLearnLanguage();
    document.body.style.overflow = "hidden";
}

function closeLearnModal(e) {
    if (e && e.target !== learnModal) return;
    learnModal.classList.remove("active");
    document.body.style.overflow = "";
    startGame();
}

function switchLearnTab(tab) {
    if (tab === "bin2dec") {
        learnBin2Dec.classList.remove("hidden");
        learnDec2Bin.classList.add("hidden");
        tabBin2Dec.classList.add("active");
        tabDec2Bin.classList.remove("active");
    } else {
        learnDec2Bin.classList.remove("hidden");
        learnBin2Dec.classList.add("hidden");
        tabDec2Bin.classList.add("active");
        tabBin2Dec.classList.remove("active");
    }
}

function updateLearnLanguage() {
    const t = texts[language];
    learnTitleEl.textContent = t.learnTitle;
    learnSubtitleEl.textContent = t.learnSubtitle;

    document.getElementById("step-b2d-1").innerHTML = t.stepB2D1;
    document.getElementById("step-b2d-2").innerHTML = t.stepB2D2;
    document.getElementById("step-b2d-3").innerHTML = t.stepB2D3;
    document.getElementById("tip-b2d").innerHTML = t.tipB2D;

    document.getElementById("step-d2b-1").innerHTML = t.stepD2B1;
    document.getElementById("step-d2b-2").innerHTML = t.stepD2B2;
    document.getElementById("step-d2b-3").innerHTML = t.stepD2B3;
    document.getElementById("tip-d2b").innerHTML = t.tipD2B;

    document.getElementById("example-label-1").textContent = t.exampleLabel1;
    document.getElementById("example-label-2").textContent = t.exampleLabel2;
    document.getElementById("calc-total-label-1").textContent = t.calcTotalLabel;
    document.getElementById("read-label").textContent = t.readLabel;
    document.getElementById("learn-play-text").textContent = t.learnPlayText;

    document.querySelectorAll(".div-remainder-label").forEach(el => {
        el.textContent = t.remainderLabel;
    });
}

// Close modal on Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && learnModal.classList.contains("active")) {
        learnModal.classList.remove("active");
        document.body.style.overflow = "";
        startGame();
    }
});

// Init
setLanguage();
startGame();
