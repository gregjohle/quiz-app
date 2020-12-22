/**
 * Example store structure
 */
const store = {
    // 5 or more questions are required
    questions: [{
            question: 'When did 3D printing begin?',
            answers: [
                'In the 1980s',
                'In the 1830s',
                'In the 2000s',
                'In 2013'
            ],
            correctAnswer: 'In the 1980s'
        },
        {
            question: 'The most common type of consumer 3D printer is FDM. What does FDM stand for?',
            answers: [
                'Free Dee Modeling',
                'Fused Deposition Modeling',
                'Fused Depositation Making',
                'Fused Depreciation Maneuvering'
            ],
            correctAnswer: 'Fused Deposition Modeling'
        },
        {
            question: 'The technical term for 3D printing is what?',
            answers: [
                '3D Printing',
                'Additive CNC',
                'Stereolithography',
                'Stereolycanthropy'
            ],
            correctAnswer: 'Stereolithography'
        },
        {
            question: 'How many axis does a 3D printer utilize?',
            answers: [
                '1',
                '2',
                '3',
                '4'
            ],
            correctAnswer: '4'
        },
        {
            question: 'What type of file extension is typically used by 3D printers when printing?',
            answers: [
                '.stl',
                '.gcode',
                '.txt',
                '.obj'
            ],
            correctAnswer: '.gcode'
        },
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
};

// This clears the Div for formatting
function clearTemplate() {
    $('.hero').html('');
    $('.info').html('');
};

// This is the template for the quiz info
function quizInfoTemplate(questionNumber, numberCorrect) {
    return `<h1>3D Printing Facts</h1>
        <h3> ${questionNumber} OF 5</h3>
        <h3> ${numberCorrect} CORRECT</h3>`
};

// This calls the info template to display the current question number and score
function quizInfo() {
    var quesNo = store.questionNumber + 1;
    var numCorr = store.score;

    $('.info').append(quizInfoTemplate(quesNo, numCorr));
};

// This is the template for the questions
function questionTemplate(quest, a1, a2, a3, a4) {
    return `<p>${quest}</p>
    <form id="question">
    <ul>
        <li>
            <input type="radio" id="ans1" name="ans" value="${a1}" required>
            <label for="ans1" class="ans1">${a1}</label>
        </li>
        <li>
            <input type="radio" id="ans1" name="ans" value="${a2}" required>
            <label for="ans1" class="ans1">${a2}</label>
        </li>
        <li>
            <input type="radio" id="ans1" name="ans" value="${a3}" required>
            <label for="ans1" class="ans1">${a3}</label>
        </li>
        <li>
            <input type="radio" id="ans1" name="ans" value="${a4}" required>
            <label for="ans1" class="ans1">${a4}</label>
        </li>
    </ul>
    </form>
    <button type="submit" id ="submitAnswer" form="question">Submit</button>
    `
};

// This calls the question template with the current question info from the store
function question() {
    var qHero = store.questions[store.questionNumber].question;
    var ansOne = store.questions[store.questionNumber].answers[0];
    var ansTwo = store.questions[store.questionNumber].answers[1];
    var ansThree = store.questions[store.questionNumber].answers[2];
    var ansFour = store.questions[store.questionNumber].answers[3];

    $('.hero').append(questionTemplate(qHero, ansOne, ansTwo, ansThree, ansFour));
};

// This starts the quiz
function startQuiz() {
    store.quizStarted = true;
}

// This renders the page 
function render() {
    clearTemplate();
    quizInfo();
    question();
};

// This starts the quiz with the first button is pressed
function letsBegin() {
    $('.beginQuiz').on('click', event => {
        console.log('The Quiz is starting');
        startQuiz();
        render();
    });
};

// This is the template for a correct result
function correctTemplate() {
    return `<p class="right">You are correct</p>
    <button class="nextQuestion">
            <span>Continue</span>
        </button>`
};

// Moves 'correct' template to page
function renderCorrect() {
    $('.hero').append(correctTemplate());
};

// Template for incorrect result
function incorrectTemplate(corrAns) {
    return `<p class="wrong">You are not correct</p>
    <p>The Correct answer is:</p>
    <p>${corrAns}</p>
    <button class="nextQuestion">
            <span>Continue</span>
        </button>`
};

// moves 'incorrect' template into page, with correct answer
function renderIncorrect() {
    var correctAns = store.questions[store.questionNumber].correctAnswer;
    $('.hero').append(incorrectTemplate(correctAns));
};



// move on to the next question
function indexQuestion() {
    store.questionNumber = store.questionNumber + 1;
};

// Template for the end of the quiz
function endTemplate() {
    return `
        <p>Congratulations! You have completed the quiz!</p>
        <p>I hope you have learned something new about 3D Printing.</p>
        <p>Would you like to take the quiz again?</p>
        <button class="startOver">
                <span>Start Over?</span>
            </button>
    `;
};

// formats for end, and moves end template into page
function renderEnd() {
    clearTemplate();
    quizInfo();
    $('.hero').append(endTemplate());
};

// increase the score
function scoreIncrease() {
    store.score += 1;
};

function renderResult() {
    // listen for the submit
    $('.hero').submit(function(event) {
        // If correct, score and render result
        event.preventDefault();
        var eAns = $('input[name="ans"]:checked').val();
        var cAns = store.questions[store.questionNumber].correctAnswer;
        if (eAns === cAns) {
            scoreIncrease();
            clearTemplate();
            quizInfo();
            renderCorrect();
        }
        if (eAns != cAns) {
            clearTemplate();
            quizInfo();
            renderIncorrect();
        }
    });
};

// after feedback is given, this moves on to the next question, or to the end page
function nextQuestion() {
    $('.hero').on('click', '.nextQuestion', event => {
        var endOfQuiz = store.questions.length - 1;
        var currNum = store.questionNumber;
        if (currNum < endOfQuiz) {
            console.log('Moving on');
            indexQuestion();
            render();
        };
        if (endOfQuiz === currNum) {
            clearTemplate();
            renderEnd();
        };
    });
};

// Template for new quiz info section
function newQuizInfoTemplate() {
    return `<h1>3D Printing Facts</h1>`;
};

// Template for new quiz hero section
function newQuizHeroTemplate() {
    return `<h3>Welcome to the Quiz!</h3>
    <p>This is a short quiz to test your knowledge of 3D printing. When you are ready to begin, press the button below!</p>
    <button class="oneMoreTime">
        <span>START</span>
    </button>`
};

// moves new quiz templates into the page
function renderNewQuiz() {
    clearTemplate();
    $('.info').append(newQuizInfoTemplate());
    $('.hero').append(newQuizHeroTemplate());
};

// resets the quiz store values
function resetQuizValues() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
}

// Restarts the quiz from the beginning
function startOver() {
    $('.hero').on('click', '.startOver', event => {
        resetQuizValues();
        renderNewQuiz();
    });
};

function oneMoreTime() {
    $('.hero').on('click', '.oneMoreTime', event => {
        startQuiz();
        render();
        console.log(store.quizStarted);
    });
};


$(function() {
    letsBegin();
    nextQuestion();
    renderResult();
    startOver();
    oneMoreTime();
});

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

/** These functions handle events (submit, click, etc) **/