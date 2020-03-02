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

        { question: getRandomQuestion(questions) }

      )
      // questions[0].question_text,
      // choices:[
      //   questions[0].choices[0],
      //   questions[0].choices[1],
      //   questions[0].choices[2],
      //   questions[0].choices[3]]
    });

  }
  //    class DataBase {
  // constructor (){

  // }




  //    }



  render() {
    if (this.state
      //  && this.state.question 
    ) {
      return <div>
        {this.state.question.question_text}
        <div>
          <div id="one"> <button> {this.state.question.choices[0]}</button>
            <button> {this.state.question.choices[1]}</button>
            <button>  {this.state.question.choices[2]}</button>
            <button>  {this.state.question.choices[3]}</button>
          </div>
        </div>


      </div>
      // return <div>aaaaa</div>
    }
    else {
      return <div>We got nothing!</div>;
    }
  }
}
export default Question;