pointsTeamOne = 0;
document.body.pointsforfirstTeam =
  "<h1>Points Team One: " + pointsTeamOne + "</h1>";
pointsTeamTwo = 0;
document.body.pointsforfirstTeam =
  "<h1>Points Team One: " + pointsTeamTwo + "</h1>";

oneTurn = true;
twoTurn = false;
onebutton = false;
twobutton = false;
threebutton = false;
fourbutton = false;
fivebutton = false;
answer = false;
correct = true;
wrong = false;
/* questionNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; */
correctAnswers = [0, 1];
wrongAnswers = [1, 2];

while (questionNumbers.length > 0) {
  if (onebutton == true) {
    question = Math.floor(Math.random() * questionNumbers.length); //open random question
    if (oneTurn == true) {
      if (answer == correct) {
        pointsTeamOne = pointsTeamOne + 100;
        //show checkmark
      }
    }
    if (twoTurn == true) {
      if (answer == correct) {
        pointsTeamTwo = pointsTeamTwo + 100;
        //show checkmark
      }
    }
    if (answer == wrong) {
      //show red x and correct answer
    } else {
      onebutton = false; //brings back to home screen
    }
    questionNumbers = questionNumbers.splice(question, 1);
    onebutton = false; //brings back to home screen
  }
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  if (twobutton == true) {
    question = Math.floor(Math.random() * questionNumbers.length); //open random question
    if (oneTurn == true) {
      if (answer == correct) {
        pointsTeamOne = pointsTeamOne + 200;
        //show checkmark
      }
    }
    if (twoTurn == true) {
      if (answer == correct) {
        pointsTeamTwo = pointsTeamTwo + 200;
        //show checkmark
      }
    }
    if (answer == wrong) {
      //show red x and correct answer
    } else {
      twobutton = false; //brings back to home screen
    }
    questionNumbers = questionNumbers.splice(question, 1);
    twobutton = false; //brings back to home screen
  }
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  if (threebutton == true) {
    question = Math.floor(Math.random() * questionNumbers.length); //open random question
    if (oneTurn == true) {
      if (answer == correct) {
        pointsTeamOne = pointsTeamOne + 300;
        //show checkmark
      }
    }
    if (twoTurn == true) {
      if (answer == correct) {
        pointsTeamTwo = pointsTeamTwo + 300;
        //show checkmark
      }
    }
    if (answer == wrong) {
      //show red x and correct answer
    } else {
      threebutton = false; //brings back to home screen
    }
    questionNumbers = questionNumbers.splice(question, 1);
    threebutton = false; //brings back to home screen
  }
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  if (fourbutton == true) {
    question = Math.floor(Math.random() * questionNumbers.length); //open random question
    if (oneTurn == true) {
      if (answer == correct) {
        pointsTeamOne = pointsTeamOne + 400;
        //show checkmark
      }
    }
    if (twoTurn == true) {
      if (answer == correct) {
        pointsTeamTwo = pointsTeamTwo + 400;
        //show checkmark
      }
    }
    if (answer == wrong) {
      //show red x and correct answer
    } else {
      fourbutton = false; //brings back to home screen
    }
    questionNumbers = questionNumbers.splice(question, 1);
    fourbutton = false; //brings back to home screen
  }
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  if (fivebutton == true) {
    question = Math.floor(Math.random() * questionNumbers.length); //open random question
    if (oneTurn == true) {
      if (answer == correct) {
        pointsTeamOne = pointsTeamOne + 500;
        //show checkmark
      }
    }
    if (twoTurn == true) {
      if (answer == correct) {
        pointsTeamTwo = pointsTeamTwo + 500;
        //show checkmark
      }
    }
    if (answer == wrong) {
      //show red x and correct answer
    } else {
      fivebutton = false; //brings back to home screen
    }
    questionNumbers = questionNumbers.splice(question, 1);
    fivebutton = false; //brings back to home screen
  }
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  //debugs
  if (onebutton == true) {
    onebutton = false;
    twobutton = false;
    threebutton = false;
    fourbutton = false;
    fivebutton = false;
  }
}
