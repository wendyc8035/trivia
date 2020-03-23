import React, { Component } from 'react';
// import components

import { buildFirebase, getRandomQuestion } from '../clients/firebase.js';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = null;

    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then((data) => {
      const questions = data.val();
      // Do something with the questions
      console.log(questions);
      this.setState(

        {
          questions: questions,
          question: getRandomQuestion(questions),
          numCorrect: 0,
          numQuestions: 0
        }

      )
    });

  }

  handleClick(isCorrect) {
    let question = getRandomQuestion(this.state.questions)
    if (isCorrect) {
      alert('You are correct!')
      this.setState({
        question: question,
        numCorrect: this.state.numCorrect + 1,
        numQuestions: this.state.numQuestions + 1
      })
    } else {
      alert('You chose the wrong answer!')
      this.setState({
        question: question,
        numQuestions: this.state.numQuestions + 1
      })
    }
  }

  render() {
    if (this.state) {
      let correct = this.state.question.correct_choice_index
      return <div>
        {this.state.question.question_text}
        <div>
          <div id="one">
            <button onClick={() => this.handleClick(0 === correct)}> {this.state.question.choices[0]}</button>
            <button onClick={() => this.handleClick(1 === correct)}> {this.state.question.choices[1]}</button>
            <button onClick={() => this.handleClick(2 === correct)}> {this.state.question.choices[2]}</button>
            <button onClick={() => this.handleClick(3 === correct)}> {this.state.question.choices[3]}</button>
          </div>
        </div>

        <div>You have answered { this.state.numCorrect } questions correctly out of { this.state.numQuestions } questions.</div>

      </div>
    }
    else {
      return <div>We got nothing!</div>;
    }
  }
}
export default Question;