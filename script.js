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
        learnPlayText: "Got it, let's play!",
        // Page content
        contentIntro: 'Practice converting between <strong>binary</strong> and <strong>decimal</strong> numbers. Type your answer and beat the timer to level up!',
        contentWhatTitle: 'What Is Binary?',
        contentWhatText: 'Binary is the fundamental language of computers. While we use the decimal system (base 10) with digits 0 through 9 in everyday life, computers operate using the binary system (base 2), which uses only two digits: <strong>0</strong> and <strong>1</strong>. Every piece of data on your computer \u2014 text, images, videos, and software \u2014 is ultimately represented as sequences of these two digits, called <strong>bits</strong>. The word "bit" is short for "binary digit," and it is the smallest unit of data in computing.',
        contentB2DTitle: 'How to Convert Binary to Decimal',
        contentB2DText: 'To convert a binary number to decimal, assign each digit a positional value based on powers of 2, starting from the rightmost digit at position 0. Multiply each binary digit by its corresponding power of 2, then add all the results together.',
        contentB2DExampleTitle: 'Example: Convert 1101 to Decimal',
        contentB2DResult: 'Adding them up: 8 + 4 + 0 + 1 = <strong>13</strong>. So binary 1101 equals decimal 13.',
        contentD2BTitle: 'How to Convert Decimal to Binary',
        contentD2BText: 'To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainder at each step. Continue dividing the quotient by 2 until you reach 0. Then read the remainders from bottom to top \u2014 that sequence is the binary representation.',
        contentD2BExampleTitle: 'Example: Convert 25 to Binary',
        contentD2BResult: 'Reading remainders from bottom to top: <strong>11001</strong>. So decimal 25 equals binary 11001.',
        contentRemLabel: 'remainder',
        contentTableTitle: 'Binary-Decimal Reference Table',
        contentTableText: 'Here is a quick reference table for the most common binary-to-decimal conversions. Memorizing these values will help you convert numbers faster during the game.',
        tableHeaderDec: 'Decimal',
        tableHeaderBin: 'Binary',
        contentWhyTitle: 'Why Learn Binary?',
        contentWhyText: 'Understanding binary is essential for anyone interested in computer science, programming, or information technology. Binary is the foundation of how processors execute instructions, how memory stores data, and how networks transmit information. Learning to convert between binary and decimal builds your number sense, strengthens logical thinking, and gives you a deeper understanding of how the digital world works beneath the surface. Whether you are a student, a developer, or simply curious, practicing binary conversions is a valuable and rewarding skill.',
        contentHowTitle: 'How 2Bit Works',
        contentHowText: '2Bit is a free, interactive binary conversion game designed to make learning fun and effective. You are presented with a number and must convert it between binary and decimal before the timer runs out. Each correct answer earns points and advances you to the next level, where the numbers get larger and more challenging. Build a streak of consecutive correct answers to prove your mastery. Choose from three game modes: <strong>Mixed</strong> (random direction), <strong>BIN \u2192 DEC</strong> (binary to decimal only), or <strong>DEC \u2192 BIN</strong> (decimal to binary only). The game is available in English and Italian.',
        footerText: '\u00a9 2026 2Bit \u2014 A free binary conversion learning tool. Built with passion for education and open source.'
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
        learnPlayText: "Capito, giochiamo!",
        // Page content
        contentIntro: 'Esercitati a convertire tra numeri <strong>binari</strong> e <strong>decimali</strong>. Scrivi la tua risposta e batti il timer per salire di livello!',
        contentWhatTitle: 'Cos\u2019\u00e8 il Binario?',
        contentWhatText: 'Il binario \u00e8 il linguaggio fondamentale dei computer. Mentre nella vita quotidiana usiamo il sistema decimale (base 10) con le cifre da 0 a 9, i computer operano usando il sistema binario (base 2), che utilizza solo due cifre: <strong>0</strong> e <strong>1</strong>. Ogni dato sul tuo computer \u2014 testo, immagini, video e software \u2014 \u00e8 in definitiva rappresentato come sequenze di queste due cifre, chiamate <strong>bit</strong>. La parola "bit" \u00e8 l\u2019abbreviazione di "binary digit" (cifra binaria), ed \u00e8 la pi\u00f9 piccola unit\u00e0 di dati in informatica.',
        contentB2DTitle: 'Come Convertire da Binario a Decimale',
        contentB2DText: 'Per convertire un numero binario in decimale, assegna a ogni cifra un valore posizionale basato sulle potenze di 2, partendo dalla cifra pi\u00f9 a destra alla posizione 0. Moltiplica ogni cifra binaria per la sua potenza di 2 corrispondente, poi somma tutti i risultati.',
        contentB2DExampleTitle: 'Esempio: Convertire 1101 in Decimale',
        contentB2DResult: 'Sommando: 8 + 4 + 0 + 1 = <strong>13</strong>. Quindi il binario 1101 equivale al decimale 13.',
        contentD2BTitle: 'Come Convertire da Decimale a Binario',
        contentD2BText: 'Per convertire un numero decimale in binario, dividi ripetutamente il numero per 2 e annota il resto ad ogni passaggio. Continua a dividere il quoziente per 2 fino a raggiungere 0. Poi leggi i resti dal basso verso l\u2019alto \u2014 quella sequenza \u00e8 la rappresentazione binaria.',
        contentD2BExampleTitle: 'Esempio: Convertire 25 in Binario',
        contentD2BResult: 'Leggendo i resti dal basso verso l\u2019alto: <strong>11001</strong>. Quindi il decimale 25 equivale al binario 11001.',
        contentRemLabel: 'resto',
        contentTableTitle: 'Tabella di Riferimento Binario-Decimale',
        contentTableText: 'Ecco una tabella di riferimento rapido per le conversioni binario-decimale pi\u00f9 comuni. Memorizzare questi valori ti aiuter\u00e0 a convertire i numeri pi\u00f9 velocemente durante il gioco.',
        tableHeaderDec: 'Decimale',
        tableHeaderBin: 'Binario',
        contentWhyTitle: 'Perch\u00e9 Imparare il Binario?',
        contentWhyText: 'Comprendere il binario \u00e8 essenziale per chiunque sia interessato all\u2019informatica, alla programmazione o alla tecnologia dell\u2019informazione. Il binario \u00e8 alla base di come i processori eseguono le istruzioni, come la memoria archivia i dati e come le reti trasmettono le informazioni. Imparare a convertire tra binario e decimale sviluppa il tuo senso numerico, rafforza il pensiero logico e ti d\u00e0 una comprensione pi\u00f9 profonda di come funziona il mondo digitale sotto la superficie. Che tu sia uno studente, uno sviluppatore o semplicemente curioso, esercitarsi con le conversioni binarie \u00e8 un\u2019abilit\u00e0 preziosa e gratificante.',
        contentHowTitle: 'Come Funziona 2Bit',
        contentHowText: '2Bit \u00e8 un gioco gratuito e interattivo di conversione binaria progettato per rendere l\u2019apprendimento divertente ed efficace. Ti viene presentato un numero e devi convertirlo tra binario e decimale prima che il timer scada. Ogni risposta corretta ti fa guadagnare punti e ti fa avanzare al livello successivo, dove i numeri diventano pi\u00f9 grandi e impegnativi. Costruisci una serie di risposte consecutive corrette per dimostrare la tua padronanza. Scegli tra tre modalit\u00e0 di gioco: <strong>Misto</strong> (direzione casuale), <strong>BIN \u2192 DEC</strong> (solo da binario a decimale), o <strong>DEC \u2192 BIN</strong> (solo da decimale a binario). Il gioco \u00e8 disponibile in inglese e italiano.',
        footerText: '\u00a9 2026 2Bit \u2014 Uno strumento gratuito per imparare la conversione binaria. Creato con passione per l\u2019educazione e l\u2019open source.'
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

    // Page content
    document.getElementById("content-intro").innerHTML = '<p>' + t.contentIntro + '</p>';
    document.getElementById("content-what-title").textContent = t.contentWhatTitle;
    document.getElementById("content-what-text").innerHTML = t.contentWhatText;
    document.getElementById("content-b2d-title").textContent = t.contentB2DTitle;
    document.getElementById("content-b2d-text").innerHTML = t.contentB2DText;
    document.getElementById("content-b2d-example-title").textContent = t.contentB2DExampleTitle;
    document.getElementById("content-b2d-result").innerHTML = t.contentB2DResult;
    document.getElementById("content-d2b-title").textContent = t.contentD2BTitle;
    document.getElementById("content-d2b-text").innerHTML = t.contentD2BText;
    document.getElementById("content-d2b-example-title").textContent = t.contentD2BExampleTitle;
    document.getElementById("content-d2b-result").innerHTML = t.contentD2BResult;
    document.getElementById("content-table-title").textContent = t.contentTableTitle;
    document.getElementById("content-table-text").innerHTML = t.contentTableText;
    document.getElementById("content-why-title").textContent = t.contentWhyTitle;
    document.getElementById("content-why-text").innerHTML = t.contentWhyText;
    document.getElementById("content-how-title").textContent = t.contentHowTitle;
    document.getElementById("content-how-text").innerHTML = t.contentHowText;
    document.getElementById("footer-text").innerHTML = t.footerText;
    document.getElementById("table-header-dec").textContent = t.tableHeaderDec;
    document.getElementById("table-header-bin").textContent = t.tableHeaderBin;
    document.getElementById("table-header-dec2").textContent = t.tableHeaderDec;
    document.getElementById("table-header-bin2").textContent = t.tableHeaderBin;
    document.querySelectorAll("[id^='content-rem-label']").forEach(el => {
        el.textContent = t.contentRemLabel;
    });
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
