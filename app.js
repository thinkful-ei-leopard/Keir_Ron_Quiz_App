'use strict';

const store = {
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
      correctAnswer: 'Radical'
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
  questionNumber: 0,
  score: 0
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


// Wireframe for "Intro" View
// =========================================================================
// <div class="container">
//    <form>
//        <button type="submit">Start Quiz</button>
//    </form>
// </div>
//

// The wireframe for the "Question" View
// =========================================================================
// <div class="container">
// <form>
// <fieldset>
//     <legend>Which of these dice are used for an Initiative roll?</legend>
//     <div>
//         <input type="radio" id="kraken" name="monster">
//         <label for="kraken">D4</label>
//     </div>
//     <div>
//         <input type="radio" id="sasquatch" name="monster">
//         <label for="sasquatch">D8</label>
//     </div>
//     <div>
//         <input type="radio" id="mothman" name="monster">
//         <label for="mothman">D10</label>
//     </div>
//     <div>
//         <input type="radio" id="dragon" name="monster">
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
{/* <div class="container">
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
</div> */}

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