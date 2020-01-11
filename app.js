'use strict';

const STORE = {

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
  questionAnswered: false,
  answeredCorrectly: false,
  images: [
    {
      imageSrc: '/images/alignment.jpg',
      imageAlt: 'Good and evil fantasy characters fighting',
    },
    {
      imageSrc: '/images/skills.jpg',
      imageAlt: 'A locked treasure chest',
    },
    {
      imageSrc: '/images/races.jpg',
      imageAlt: 'A group of fantasy characters stand in a circle',
    },
    {
      imageSrc: '/images/dice.jpg',
      imageAlt: 'Numerous magical dice sit on a table',
    },
    {
      imageSrc: '/images/wisdom.jpg',
      imageAlt: 'A gnome wizard casts a spell',
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
    
// General FLOW 
// ie introView -> "Start Quiz" -> QuestionView1 -> "Submit Answer" -> 
// feedbackRightView OR feedbackWrongView -> "Next Question" -> QuestionView2 ->
// {...} -> resultsView -> "New Game" -> introView
// it should run evaluateAnswer() to determine whether to load feedbackRightView() or
// feedbackWrongView()


/*********** Render  **************/
function renderQuiz() {
  // this function is responsible for rendering the Quiz in the DOM
  // Tries to render multiple different templates to the page depending
  // on which View should be shown
  // The logic for which page should load goes into renderQuiz
  // whenever store data is changed, run renderQuiz() to continue with logic

  console.log('`renderQuiz` ran');
  // if the quiz hasnt started, load the introView
  if(STORE.quizStarted === false) {
    $('main').html(introView());
  }
  else if(STORE.questionNumber < STORE.questions.length && STORE.questionNumber >= 0) {
    if(STORE.questionAnswered === false) {
      console.log('render part 2 works');
      $('main').html(questionView());
    }
    else if(STORE.questionAnswered === true && STORE.answeredCorrectly === false) {
      console.log('wrong view is about to load');
      $('main').html(feedbackWrongView());
    }
    else if(STORE.questionAnswered === true && STORE.answeredCorrectly === true) {
      console.log('right view is about to load');
      $('main').html(feedbackRightView());
    }
  }
  else {
    $('main').html(resultsView());
  }
}


/**************** View HTML Templates  ***************/

function introView() {
  // this function handles the loading of introView page
  console.log('introView working');
  return `
        <div class="container">
        <form>
            <button class="buttonStyle" type="submit" id="start-quiz-button">Start Quiz</button>
        </form>
        </div>
    `;
}

function questionView(){
  // this function handles the loading of the questionView page
  console.log('question view works');
  let answersArray = STORE.questions[STORE.questionNumber];
  console.log(answersArray);
  return `<div class="container">
    <form id="main-form">
    <fieldset>
        <legend>${answersArray.question}</legend>
        <div>
            <!-- Inputs with "required" makes it so an answer is required to submit-->
            <input type="radio" id="answer-1" value="${answersArray.answers[0]}" name="dnd" tabindex="0" required />
            <label for="answer-1">${answersArray.answers[0]}</label>
        </div>
        <div>
            <input type="radio" id="answer-2" value="${answersArray.answers[1]}" name="dnd" tabindex="0" required />
            <label for="answer-2">${answersArray.answers[1]}</label>
        </div>
        <div>
            <input type="radio" id="answer-3" value="${answersArray.answers[2]}"name="dnd" tabindex="0" required />
            <label for="answer-3">${answersArray.answers[2]}</label>
        </div>
        <div>
            <input type="radio" id="answer-4" value="${answersArray.answers[3]}"name="dnd" tabindex="0" required />
            <label for="answer-4">${answersArray.answers[3]}</label>
        </div>
    
        <button class="buttonStyle" type="submit" id="submit-quiz-button">Submit</button>
    </fieldset>
    <img src="${STORE.images[STORE.questionNumber].imageSrc}" alt="${STORE.images[STORE.questionNumber].imageAlt}">
    </form>
    <!-- This is keeping track of the current question (i.e. Question 2 of 5-->
    <h2>Question ${STORE.questionNumber+1} of ${STORE.questions.length}</h2>
    </div>`;
}

function feedbackRightView(){
  // this function handles the loading of feedbackRightView() page
  return `<div class="container">
  <h2 class="correct">Correct!</h2>
  
  <img src="/images/correct.svg" alt="celebration confetti">
  
  <section>
      <p>Current Score</p>
      <p>Right: ${STORE.score}</p>
      <p>Wrong: ${STORE.questionNumber - STORE.score}</p>
  </section>
  
  <form>
      <button class="buttonStyle" type="submit" id="next-question-button">Next Question</button>
  </form>
  </div>`;
}

function feedbackWrongView(){
  // this function handles the loading of feedbackWrongView() page
  return `<div class="container">
  <h2 class="incorrect">Incorrect!</h2>
  
  <h3>The right answer was: ${STORE.questions[STORE.questionNumber].correctAnswer}</h3>
  
  <section>
      <p>Current Score</p>
      <p>Right: ${STORE.score}</p>
      <p>Wrong: ${STORE.questionNumber - STORE.score}</p>
  </section>
  
  <form>
      <button class="buttonStyle" type="submit" id="next-question-button">Next Question</button>
  </form>
  </div> `;
}

function resultsView(){
  // this function handles the loading of resultsView() page
  return `    
  <div class="container">
    <h2>End of Game</h2>
    <section>
      <p>Final Score ${STORE.score / STORE.questions.length * 100} %</p>
      <p>Right: ${STORE.score}</p>
      <p>Wrong: ${STORE.questionNumber - STORE.score}</p>
    </section>
    <form>
      <button class="buttonStyle" type="submit" id="new-game-button">Retake Quiz</button>
    </form>
    </div>`;
}


/***************** Changing Data *******************/

function restartQuiz() {
  // when the "New Game" button is pressed, start the quiz over at the beginning
  // it resets all data in STORE back to the default value which causes the 
  // renderQuiz() logic to start over
  STORE.quizStarted = false;
  STORE.questionNumber = 0; 
  STORE.score = 0;
  STORE.questionAnswered = false;
  STORE.answeredCorrectly = false;
}

function evaluateAnswer() {
  // checks if the selected answer (from radio button) is correct Answer
  // and updates STORE.score and will toggle the value of 
  // STORE.evaluate answer from true to false
  console.log('evaluate answer is working');
  let answer = $('input[name=dnd]:checked').val();
  if (answer === STORE.questions[STORE.questionNumber].correctAnswer) {
    STORE.score++;
    STORE.answeredCorrectly = true; // makes feedbackRightView() load after renderQuiz()
  } else {
    STORE.answeredCorrectly = false; // makes feedbackWrongView() load after renderQuiz()
  }
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
  // it should run evaluateAnswer() to determine whether to load 
  // feedbackRightView() or feedbackWrongView()
  $('body').on('submit', '#main-form', event => {
    event.preventDefault();
    console.log('handleSubmitClick works');
    evaluateAnswer();
    STORE.questionNumber++;
    STORE.questionAnswered = true; // When false questionView() loads after render, when false a feedbackView() loads after render
    renderQuiz();
  });
}

function handleNextQuestionClick() {
  // Handles click of "Next Question" button on feedbackRightView or feedbackWrongView
  // should set STORE.questionAnswered back to false so render returns back to QuestionView
  $('body').on('click', '#next-question-button', event => {
    event.preventDefault();
    STORE.questionAnswered = false;
    renderQuiz();
  });

}

function handleNewGameClick() {
  // Handles click of "New Game" on the Results View
  $('body').on('click', '#new-game-button', event => {
    event.preventDefault();
    restartQuiz();
    renderQuiz();
  });
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the quiz and setting up our event listeners
function handleQuiz() {
  renderQuiz();
  handleStartQuizClick();
  handleSubmitClick();
  handleNextQuestionClick();
  handleNewGameClick();
}
  
// when the page loads, call `handleQuiz`
$(handleQuiz);