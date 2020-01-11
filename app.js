'use strict';

const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which of these is not an alignment type?',
      answers: [
        'Chaotic good',
        'Neutral',
        'Lawful evil',
        'Radical'
      ],
      correctAnswer: 'Radical',
    },
    {
      question: 'Which class gets the most out of Skills?',
      answers: [
        'Wizard',
        'Druid',
        'Rogue',
        'Cleric'
      ],
      correctAnswer: 'Rogue'
    },
    {
      question: 'Which of these is not a playable Race in the Player\'s Handbook (5th Edition)?',
      answers: [
        'Dragonborn',
        'Orc',
        'Dwarf',
        'Gnome'
      ],
      correctAnswer: 'Orc'
    },
    {
      question: 'Which of these dice are used for an Initiative Roll?',
      answers: [
        'D4',
        'D8',
        'D10',
        'D20'
      ],
      correctAnswer: 'D20'
    },
    {
      question: 'How much Wisdom is needed for a +2 Modifier?',
      answers: [
        '2',
        '5',
        '10',
        '14'
      ],
      correctAnswer: '14'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  images: [
    {
      imageSrc: '/images/alignment.jpg',
      imageAlt: 'TEMP DESCRIPTION',
    },
    {
      imageSrc: '/images/dice.jpg',
      imageAlt: 'numerous dice',
    },
    {
      imageSrc: '/images/dice.jpg',
      imageAlt: 'numerous dice',
    },
    {
      imageSrc: '/images/dice.jpg',
      imageAlt: 'numerous dice',
    },
    {
      imageSrc: '/images/dice.jpg',
      imageAlt: 'numerous dice',
    },
    {
      imageSrc: '/images/dice.jpg',
      imageAlt: 'numerous dice',
    },

  ]
};
  
/**
   *
   * Your app should include a render() function, that regenerates
   * the view each time the store is updated. See your course
   * material, consult your instructor, and reference the slides
   * for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   */

// We might want to use a factory function (or classes) and closure to create
// instances of the "The Question Page" since it will be very simliar, but with 
// different data inside

// USER STORIES
// The starter page should have a button to start the quiz => renderQuiz() and introView()
// Users will get prompted through 5 multiple choice questions they can answer => questionView()
//      -Users should be asked one question at a time
//      -Users should be asked one question after another (Question View -> Results View -> new Question View) => handleBUTTON
// Users should be able to see what question they are on (update store.questionNumber)
// Upon submitting answers, users should:
//      -receive text feedback about their answer, if incorrect then tell them the right answer
//      -press a button to move onto the next question
// Users should be able to see their overall score at the end of the quiz (store.score) -> resultsView()
// Users should be able to start a new quiz at the end -> restartQuiz()

//  EVERY TIME YOU CHANGE THE STORE, RUN THE RENDER FUNCTION!


/*********** Render  **************/
function renderQuiz() {
  // this function is responsible for rendering the Quiz in the DOM
  // Tries to render multiple different templates to the page depending
  // on which View should be shown
  // The logic for which page should load goes into renderQuiz
  // whenever store data is changed, run renderQuiz() to continue with logic
    
  // General FLOW 
  // ie introView -> "Start Quiz" -> QuestionView1 -> "Submit Answer" -> 
  // feedbackRightView OR feedbackWrongView -> "Next Question" -> QuestionView2 ->
  // {...} -> resultsView -> "New Game" -> introView
  // it should run evaluateAnswer() to determine whether to load feedbackRightView() or
  // feedbackWrongView()

  console.log('`renderQuiz` ran');
  // if the quiz hasnt started, 
  if(STORE.quizStarted === false) {
    $('main').html(introView());
    return;
  }
  else if(STORE.questionNumber < STORE.questions.length && STORE.questionNumber >= 0) {
    console.log('render part 2 works');
    $('main').html(questionView());
  }
}


/**************** View HTML Templates  ***************/

function introView() {
  // this function handles the loading of introView page
  console.log('introView working');
  return `
        <div class="container">
        <form>
            <button type="submit" id="start-quiz-button">Start Quiz</button>
        </form>
        </div>
    `;
}

function questionView(){
  // We may need a factory function or class to change data as question changes
  console.log('question view works');
  let answersArray = STORE.questions[STORE.questionNumber];
  console.log(answersArray);
  return `<div class="container">
    <form>
    <fieldset>
        <legend>${answersArray.question}</legend>
        <div>
            <!-- tabindex="1" lets you use tab to move through Radio buttons
                 and "required" makes it so an answer is required-->
            <input type="radio" id="answer-1" value="${answersArray.answers[0]}" name="monster" tabindex="1" required>
            <label for="answer-1">${answersArray.answers[0]}</label>
        </div>
        <div>
            <input type="radio" id="answer-2" value=""name="monster" tabindex="1" required>
            <label for="answer-2">${answersArray.answers[1]}</label>
        </div>
        <div>
            <input type="radio" id="answer-3" value=""name="monster" tabindex="1" required>
            <label for="answer-3">${answersArray.answers[2]}</label>
        </div>
        <div>
            <input type="radio" id="answer-4" value=""name="monster" tabindex="1" required>
            <label for="answer-4">${answersArray.answers[3]}</label>
        </div>
    
        <button type="submit">Submit</button>
    </fieldset>
    <img src="${STORE.images[0].imageSrc}" alt="${STORE.images[0].imageAlt}">
    </form>
    <!-- This is keeping track of the current question (i.e. Question 2 of 5-->
    <h2>Question ${STORE.questionNumber+1} of ${STORE.questions.length}</h2>
    </div>`;
}

function feedbackRightView(){
  // this function handles the loading of feedbackRightView() page
}

function feedbackWrongView(){
  // this function handles the loading of feedbackWrongView() page
}

function resultsView(){
  // this function handles the loading of resultsView() page
}



/***************** Changing Data *******************/

function restartQuiz() {
  // when the "New Game" button is pressed, start the quiz over at the beginning
  // ie load introView() and reset any data about the score and question number
}

function evaluateAnswer() {
  // checks if the selected answer (from radio button) is correct Answer
  // and updates store.score
}

function updateQuestionNumber() {
  // this function will change the value of store.questionNumber after
  // "Submit Answer" is pressed
}

/******************* Handle Button Press (Event Listeners) ********************/
// Reactful Pattern: Event Listeners will always
// 1. (optional) Get info from DOM related user action
// 2. Change the store
// 3. Render

function handleStartQuizClick() {
  // Handles click of the "Start Quiz" button on Intro View
  // It should load the FIRST QuestionView()
  $('body').on('click', '#start-quiz-button', event => {
    event.preventDefault();
    console.log('start button works');
    STORE.quizStarted = true;
    renderQuiz();
  });
}
function handleSubmitClick(){
  // Handles click of the "Submit" button on the Question View
  // it should run evaluateAnswer() to determine whether to load feedbackRightView() or
  // feedbackWrongView()
}
function handleNextQuestionClick() {
  // Handles click of "Next Question" button on feedbackRightView or feedbackWrongView
  // it should run updateQuestionNumber() load the next QuestionView()
}
function handleNewGameClick() {
  // Handles click of "New Game" on the Results View
}


// this function will be our callback when the page loads. it's responsible for
// initially rendering the quiz, and activating our individual functions
function handleQuiz() {
  renderQuiz();
  handleStartQuizClick();
  handleSubmitClick();
  handleNextQuestionClick();
  handleNewGameClick();
}
  
// when the page loads, call `handleQuiz`
$(handleQuiz);

// Wireframe for "Intro" View
// =========================================================================
// <div class="container">
// <form>
//     <button type="submit">Start Quiz</button>
// </form>
// </div>


// The wireframe for the "Question" View
// =========================================================================
// <div class="container">
// <form>
// <fieldset>
//     <legend>Which of these dice are used for an Initiative roll?</legend>
//     <div>
//         <!-- tabindex="1" lets you use tab to move through Radio buttons
//             and "required" makes it so an answer is required-->
//         <input type="radio" id="kraken" name="monster" tabindex="1" required>
//         <label for="kraken">D4</label>
//     </div>
//     <div>
//         <input type="radio" id="sasquatch" name="monster" tabindex="1" required>
//         <label for="sasquatch">D8</label>
//     </div>
//     <div>
//         <input type="radio" id="mothman" name="monster" tabindex="1" required>
//         <label for="mothman">D10</label>
//     </div>
//     <div>
//         <input type="radio" id="dragon" name="monster" tabindex="1" required>
//         <label for="dragon">D20</label>
//     </div>

//     <button type="submit">Submit</button>
// </fieldset>
// <img src="/images/dice.jpg" alt="numerous dice">
// </form>

// <h2>Question 2 of 5</h2>
// </div>

// The wireframe for "Correct" feedback View
// =========================================================================
// <div class="container">
// <h2>Correct!</h2>

// <img src="/images/correct.svg" alt="">

// <section>
//     <p>Current Score</p>
//     <p>Right: 2</p>
//     <p>Wrong: 1</p>
// </section>

// <form>
//     <!--We might want to change the text to "finish quiz" on the last question-->
//     <button type="submit">Next Question<button>
// </form>
// </div>


// The wireframe for the "Incorrect" feeback View
// =========================================================================
/* <div class="container">
<h2>Incorrect!</h2>

<h3>The right answer was: </h3>

<section>
    <p>Current Score</p>
    <p>Right: 2</p>
    <p>Wrong: 1</p>
</section>

<form>
    <!--We might want to change the text to "finish quiz" on the last question-->
    <button type="submit">Next Question<button>
</form>
</div> */

// The wireframe for the Results View
// =========================================================================
// <div class="container">
// <h2>End of Game</h2>
// <section>
//     <p>Final Score</p>
//     <p>Right: 2</p>
//     <p>Wrong: 1</p>
// </section>
// <form>
//     <!--We might want to change the text to "finish quiz" on the last question-->
//     <button type="submit">New Game<button>
// </form>
// </div>