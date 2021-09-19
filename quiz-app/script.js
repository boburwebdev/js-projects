const questionsData = [
    {
        question: 'What is the capital of UK?',
        a: 'London',
        b: 'Paris', 
        c: 'New York',
        d: 'Madrid',
        correctAnswer: 'a'
    },
    {
        question: 'What is the capital of Spain?',
        a: 'Moscow',
        b: 'Paris', 
        c: 'Lisbon',
        d: 'Madrid',
        correctAnswer: 'd'
    },
    {
        question: 'What is the capital of Japan?',
        a: 'Tokyo',
        b: 'Beijing', 
        c: 'Seoul',
        d: 'Kyoto',
        correctAnswer: 'a'
    },
    {
        question: 'What is the capital of Russia?',
        a: 'Minsk',
        b: 'Kyiv', 
        c: 'Moscow',
        d: 'Saint Petersburg',
        correctAnswer: 'c'
    },
    {
        question: 'What is the capital of Italy?',
        a: 'Genoa',
        b: 'Rome', 
        c: 'Venice',
        d: 'Lisbon',
        correctAnswer: 'b'
    },
];

const quizStart = document.getElementById('quiz-start');
const quizContent = document.getElementById('quiz-content');
const quizResults = document.getElementById('quiz-results');
const quizResultsTitle = document.getElementById('quiz-results--title');

const questionTitle = document.getElementById('quiz-title');
const answerInputs = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const btnStartQuiz = document.getElementById('btn-start-quiz');
const btnSubmit = document.getElementById('btn-submit');
const btnRestart = document.getElementById('btn-restart');

let currentQuizIndex = 0;
let quizScore = 0;

function loadQuiz() {
    deleteSelection();

    const currentQuizData = questionsData[currentQuizIndex];
    questionTitle.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getUserAnswer() {
    let userAnswer;

    answerInputs.forEach(answer => {
        if (answer.checked) {
            userAnswer = answer.id;
        }
    });

    return userAnswer;
}

function deleteSelection() {
    answerInputs.forEach(answer => {
        answer.checked = false;
    })
}

function submitResult() {
    const answer = getUserAnswer();

    if (answer) {
        if (answer === questionsData[currentQuizIndex].correctAnswer) {
            quizScore++;
        }
        
        currentQuizIndex++;
    } else {
        alert('please choose an answer');
    }

    if (currentQuizIndex < questionsData.length) {
        loadQuiz();
    } else {
        quizResults.classList.remove('hide');
        quizContent.classList.add('hide');

        quizResultsTitle.innerText = `You answered correctly at ${quizScore} questions out of ${questionsData.length}.`;
    }
}

function startQuiz() {
    quizStart.classList.add('hide');
    quizContent.classList.remove('hide');
}

function restartQuiz() {
    location.reload();
}

btnSubmit.addEventListener('click', submitResult);
btnStartQuiz.addEventListener('click', startQuiz);
btnRestart.addEventListener('click', restartQuiz);

loadQuiz();