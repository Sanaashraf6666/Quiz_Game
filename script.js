const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
         
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Great White Shark", correct: false }
    ]
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      
      { text: "Monaco", correct: false },
      
        { text: "Vatican City", correct: true },
      { text: "Nauru", correct: false },
      { text: "San Marino", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
     
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
       { text: "Paris", correct: true }
    ]   
  },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
        { text: "Earth", correct: false },
        { text: "Mars", correct: false }
        ]
    },
  
    {
        question:"Which is smallest continent in the world?",
        answers: [
        { text: "Australia", correct: true },
        { text: "Europe", correct: false },
        { text: "Asia", correct: false },
        { text: "Antarctica", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
       
        { text: "Gold", correct: false },
         { text: "Diamond", correct: true },
        { text: "Iron", correct: false },
        { text: "Quartz", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
        
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Mars", correct: true },
        { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
        
        { text: "Tomato", correct: false },
        { text: "Onion", correct: false },
        { text: "Pepper", correct: false },
        { text: "Avocado", correct: true }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
       
        { text: "Oxygen", correct: false },
         { text: "Carbon Dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
        { text: "Skin", correct: true },
        { text: "Liver", correct: false },
        { text: "Heart", correct: false },
        { text: "Lungs", correct: false }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
        
        { text: "Amazon", correct: false },
        { text: "Yangtze", correct: false },
        { text: "Nile", correct: true },
        { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
       
        { text: "CO2", correct: false },
        { text: "O2", correct: false },
        { text: "NaCl", correct: false },
         { text: "H2O", correct: true }
        ]
    },
    {
        question: "Which planet is known for its rings?",
        answers: [
        
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: true },
        { text: "Uranus", correct: false },
        { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
        { text: "Tokyo", correct: true },
        { text: "Seoul", correct: false },
        { text: "Beijing", correct: false },
        { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which vitamin is primarily obtained from sunlight?",
        answers: [
        { text: "Vitamin D", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin A", correct: false },
        { text: "Vitamin B12", correct: false }
        ]
    }
];
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
   nextButton.innerHTML = "Next";
   showQuestion();

}

function showQuestion() {
    resetState();
  
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
       
    });}
function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.innerText === questions[currentQuestionIndex].answers.find(answer => answer.correct).text;

    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.innerText === questions[currentQuestionIndex].answers.find(answer => answer.correct).text) {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', startQuiz);
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();