/**
 * Example store structure
 */
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
        question: 'Which of these dice are used for an Attack Roll?',
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