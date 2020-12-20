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
function clearHero() {
    $('.hero').html('');
};

// This formats the HTML for insertion
function formatHero() {
    var currentQuestionNumber = `<h1>3D Printing Facts</h1>
    <div class="indexInfo">
        <h3 class="currQuestNum"></h3>
        <h3>of 5</h3>
    </div>
    <div class="scoreInfo">
    <h3 class="numberCorrect"></h3>
    <h3>Correct</h3>
    </div>`

    $('.info').append().html(currentQuestionNumber);

    $('.hero').html(`
        <p class="currentQuestion"></p>
        <form id="question">
            <ul>
                <li>
                    <input type="radio" id="ans1" name="ans" value="" required>
                    <label for="ans1" class="ans1"></label>
                </li>
                <li>
                    <input type="radio" id="ans2" name="ans" value="" required>
                    <label for="ans2" class="ans2"></label>
                </li>
                <li>
                    <input type="radio" id="ans3" name="ans" value="" required>
                    <label for="ans3" class="ans3"></label>
                </li>
                <li>
                    <input type="radio" id="ans4" name="ans" value="" required>
                    <label for="ans4" class="ans4"></label>
                </li>
            </ul>
        </form>
        <button type="submit" id ="submitAnswer" form="question">Submit</button>    
    `);
}

// This inserts the current question string into the div p
function generateQuestion() {
    var qHero = store.questions[store.questionNumber].question;

    $('.currentQuestion').append(qHero);
};

// This parses the current question answers and inserts them into the div form
function generateAnswers() {
    var ansOne = store.questions[store.questionNumber].answers[0];
    var ansTwo = store.questions[store.questionNumber].answers[1];
    var ansThree = store.questions[store.questionNumber].answers[2];
    var ansFour = store.questions[store.questionNumber].answers[3];

    $('input[id="ans1"]').val(ansOne);
    $('label[for="ans1"]').append(ansOne);

    $('input[id="ans2"]').val(ansTwo);
    $('label[for="ans2"]').append(ansTwo);

    $('input[id="ans3"]').val(ansThree);
    $('label[for="ans3"]').append(ansThree);

    $('input[id="ans4"]').val(ansFour);
    $('label[for="ans4"]').append(ansFour);

};

// This inserts the question number into the header
function generateQuestionNumber() {
    var currQuest = store.questionNumber + 1;
    $('.currQuestNum').replaceWith(currQuest);
};

// This inserts the current score into the header
function generateScore() {
    var currScore = store.score;
    $('.numberCorrect').replaceWith(currScore);
};

function clearScoreAndQuestionNumber() {
    var currentQuestionNumber = `<h1>3D Printing Facts</h1>
    <div class="indexInfo">
        <h3 class="currQuestNum"></h3>
        <h3>of 5</h3>
    </div>
    <div class="scoreInfo">
    <h3 class="numberCorrect"></h3>
    <h3>Correct</h3>
    </div>`

    $('.info').append().html(currentQuestionNumber);
}

// This starts the quiz
function startQuiz() {
    store.quizStarted = true;
}

// This renders the page 
function renderQuest() {
    clearHero();
    formatHero();
    generateQuestionNumber();
    generateScore();
    generateQuestion();
    generateAnswers();
};

// This starts the quiz with the first button is pressed
function letsBegin() {
    $('.beginQuiz').on('click', event => {
        console.log('The Quiz is starting');
        startQuiz();
        renderQuest();
    });
};
// after a choice is made and the submit button is pushed, there should be feedback if it was the correct answer or not

// if the answer is correct, the number correct should increase

// This dieplays a correct result
function renderCorrect() {
    clearScoreAndQuestionNumber();
    generateQuestionNumber();
    generateScore();
    $('.hero').html(`
        <p class="right">You are correct</p>
        <button class="nextQuestion">
                <span>Continue</span>
            </button>
    `);
};

// This formats for the incorrect result
function formatIncorect() {
    $('.hero').html(`
        <p class="wrong">You are not correct</p>
        <p>The Correct answer is</p>
        <p class="rightAns"></p>
        <button class="nextQuestion">
                <span>Continue</span>
            </button>
    `);
};

// This renders the incorrect result, and informs of the correct result
function renderIncorrect() {
    formatIncorect();
    clearScoreAndQuestionNumber();
    generateQuestionNumber();
    generateScore();
    $('.rightAns').append(store.questions[store.questionNumber].correctAnswer);
}

function indexQuestion() {
    store.questionNumber = store.questionNumber + 1;
};

function renderEnd() {
    $('.hero').html(`
        <p>Congratulations! You have completed the quiz!</p>
        <p>I hope you have learned something new about 3D Printing.</p>
        <p>Would you like to take the quiz again?</p>
        <button class="startOver">
                <span>Start Over?</span>
            </button>
    `);
};

function nextQuestion() {
    $('.hero').on('click', '.nextQuestion', event => {
        var endOfQuiz = store.questions.length - 1;
        var currNum = store.questionNumber;
        if (currNum < endOfQuiz) {
            console.log('Moving on');
            indexQuestion();
            renderQuest();
        };
        if (endOfQuiz === currNum) {
            clearHero();
            clearScoreAndQuestionNumber();
            generateQuestionNumber();
            generateScore();
            renderEnd();
        };
    });
};

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
            clearScoreAndQuestionNumber();
            generateScore();
            generateQuestionNumber();
            renderCorrect();
        }
        if (eAns != cAns) {
            renderIncorrect();
        }
    });
};

function renderNewQuiz() {
    $('.info').html(`
    <h1>3D Printing Facts</h1>
    `);
    $('.hero').html(`
    <h3>Welcome to the Quiz!</h3>
    <p>This is a short quiz to test your knowledge of 3D printing. When you are ready to begin, press the button below!</p>
    <button class="beginQuizAgain">
        <span>START</span>
    </button>
    `);
};

function resetQuizValues() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
}

function startOver() {
    $('.hero').on('click', '.startOver', event => {
        location.reload();
    });
};


$(function() {
    letsBegin();
    nextQuestion();
    renderResult();
    startOver();
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