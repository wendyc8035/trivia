import React, { Component } from 'react';
// import components


class Question extends Component {
  constructor(props){
    super(props);
    this.state={

      question: "Which movie is Tadashi Hamada from?",
      choices:[
        "Big Heroe 6",
        "UP!",
        "Star Wars",
        "Frozen 2"]
    };

  }
  
  render() {
    return (
      <div>
        Add your QuestionText, Reset Button and AnswerButtons here. 
       {this.state.question}
      </div>
    );
  }
}

export default Question;