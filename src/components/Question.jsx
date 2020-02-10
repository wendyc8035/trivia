import React, { Component } from 'react';
// import components

import firebase from 'clients/firebase.js';

class Question extends Component {
  constructor(props){
    super(props);

    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(function(data) {
      const questions = data.val();
      // Do something with the questions

      this.state={

        question: questions[0].question_text,
        choices:[
          questions[0].choices[0],
          questions[0].choices[1],
          questions[0].choices[2],
          questions[0].choices[3]]
      };
    });

  }
//    class DataBase {
// constructor (){
  
// }




//    }



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