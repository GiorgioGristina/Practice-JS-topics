'use strict';
// select button
const pollButton = document.querySelector('.poll');


const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  
  registerNewAnswer(){  
    console.log(this);  
    const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`
    ));
    // register answer
    answer < this.options.length && typeof answer === "number" && this.answers[answer]++ ;
    // console.log(this.answers);

    this.displayResults();
    this.displayResults('string');

  },

  displayResults(type = "array"){
    if (type === "array") {
      console.log(this.answers);      
    } else if (type === 'string') {
      console.log(`Pool result are ${this.answers.join(', ')}`);      
      
    }
  },

};



pollButton.addEventListener('click', poll.registerNewAnswer.bind(poll) )
// poll.registerNewAnswer.bind(poll)



