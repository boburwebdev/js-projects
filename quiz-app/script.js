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
]

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('quiz-title');
const answerInputs = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById('btn-submit');

let currentQuizIndex = 0;
let quizScore = 0;

loadQuiz();

function loadQuiz() {
    deleteSelection();

    const currentQuizData = questionsData[currentQuizIndex];
    questionEl.innerText = currentQuizData.question;
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

btnSubmit.addEventListener('click', () => {
    const answer = getUserAnswer();

    if (answer) {
        if (answer === questionsData[currentQuizIndex].correctAnswer) {
            quizScore++;
        }
        
        currentQuizIndex++;
    }

    if (currentQuizIndex < questionsData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2 class="quiz-results">You answered correctly at ${quizScore} out of ${questionsData.length} questions.</h2>
        `;
    }

    console.log(quizScore);
})