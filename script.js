const question = [
    {
        question: "Who is Prime minister of india?",
        answer: [
            {text: "Narendra Modi", correct: true},
            {text: "Rahul gandhi", correct:false},
            {text: "Mahatma gandhi", correct:false},
            {text: "Nitesh kumar", correct:false}
        ]
    },

    {
        question: "Who is captain only captain to win all ICC trophies?",
        answer: [
            {text: "Rohit Sharma", correct: false},
            {text: "M.S Dhoni", correct:true},
            {text: "Virat kohli", correct:false},
            {text: "Hardik pandya", correct:false}
        ]
    },

    {
        question: "Which team never win IPL trophy?",
        answer: [
            {text: "RCB", correct: true},
            {text: "CSK", correct:false},
            {text: "MI", correct:false},
            {text: "SRH", correct:false}
        ]
    },

    {
        question: "Which captain does not win any trophy?",
        answer: [
            {text: "M.S Dhoni", correct:false},
            {text: "Rohit sharma", correct:false},
            {text: "Virat kohli", correct: true},
            {text: "Hardik pandya", correct:false}
        ]
    },

    {
        question: "Which player drop most catches in IPL?",
        answer: [
            {text: "M.S Dhoni", correct:false},
            {text: "Ravindra jadeja", correct:false},
            {text: "Suresh Raina", correct:false},
            {text: "Virat kohli", correct: true}
        ]
    }

]

const quetionElement = document.querySelector("#question")
const answerButton = document.querySelector('#options')
const nextButton = document.querySelector('#nextbtn')

let currentQuestionIndex =0;
let score = 0;

function start() {
    currentQuestionIndex =0;
    score = 0; 
    nextButton.innerHTML = "Next";
    showQuestion();   
}

function showQuestion() {
    resetState();
    let currentQuestion = question
    [currentQuestionIndex]
    let questionNo = currentQuestionIndex+1
    quetionElement.innerHTML = questionNo + "."+ currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add("btn")
        options.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
    })
   
}

function resetState(){
    nextButton.style.display = "none";
    // while(answerButton.firstChild){
    //     answerButton.removeChild(answerButton.firstChild);
    // }
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild); 
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct ==="true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display ="block"
}


function Score(){
    resetState();
    quetionElement.innerHTML = `Your score is ${score}`
    nextButton.innerHTML = "Start Again"
    nextButton.style.display = 'block'
}

function newQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length) {
        showQuestion()
    }
    else{
        Score()
    }
}

nextButton.addEventListener('click',() => {
    if (currentQuestionIndex < question.length) {
        newQuestion()
    }else{
        start()
    }
})



start()
