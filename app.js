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

// When start is clicked, the first question should load, along with the number correct and question number

function clear

function generateQuestion(question) {
    return `
    
  `
};

function render() {

};

// each question should be multiple choice

// after a choice is made and the submit button is pushed, there should be feedback if it was the correct answer or not

// if the answer is correct, the number correct should increase

function scoreQeustion() {

};

// there should be a next button

// the next button should load the next question

// when done, the final score should be shown, and a button to retake the quiz



$(function() {

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

// These functions handle events (submit, click, etc)