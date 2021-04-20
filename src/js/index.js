var x = document.getElementById("startQuiz");
var y = document.getElementById("questions");
var z = document.getElementById("questionsTwo");
var oneCorrect = document.getElementById("correctOne");
var oneWrong = document.getElementById("wrongOne");
var theEnd = document.getElementById("end");
var btn = document.getElementById("yesBtn");
var btnTwo = document.getElementById("okayBtn");
var btnThreeOne = document.getElementById("firstAnswer");
var btnThreeTwo = document.getElementById("secondAnswer");
var btnThreeThree = document.getElementById("thirdAnswer");
var btnThreeFour = document.getElementById("fourthAnswer");
var btnFourOne = document.getElementById("continueButtonOne");
var btnFourTwo = document.getElementById("continueButtonTwo");
let score = 0;
/* var timerLength = document.getElementById("timerid");
var a = timerLength.style.width; */
questionNumb = 0;

const theQuestions = [
  "what is 2 + 2?",
  "name a yellow fruit?",
  "what is brown and sticky?",
  "what colour underwear am I wearing now?!?1",
];
var rightAnswer = ["4", "Orange", "a stick", "I don't know"];
var wrongAnswer = [
  "click me",
  "no",
  "yellow",
  "Justin Bieber",
  "Chuck Norris",
  "Pringles",
  "9999",
  "yes",
  "Bruce wayne",
  "doughnuts",
  "hello",
  "Durito Bandito",
];

//switches page
function functionOne() {
  x.style.display = "none";
  y.style.display = "block";
}
//switches page
function functionTwo() {
  y.style.display = "none";
  z.style.display = "block";
}
/* function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function timerFunction() {
  for (timer = 0; timer < 10; ) {
    console.log(timer);
    sleep(1000);
    a = a + 10;
    timer = timer + 1;
  }
} */

//switches page
function functionThreeRight() {
  z.style.display = "none";
  oneCorrect.style.display = "block";
  score = score + 100;
}
//switches page
function functionThreeWrong() {
  z.style.display = "none";
  oneWrong.style.display = "block";
  score = score - 100;
}

function functionFourRight() {
  oneCorrect.style.display = "none";
  z.style.display = "block";
  questionNumb = questionNumb + 1;
  console.log(questionNumb);
}

function functionFourWrong() {
  oneWrong.style.display = "none";
  z.style.display = "block";
  questionNumb = questionNumb + 1;
  console.log(questionNumb);
}

function questionNumbar(sheep) {
  document.getElementById("questionId").innerHTML = theQuestions[sheep];
  if (sheep > 3) {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    oneCorrect.style.display = "none";
    oneWrong.style.display = "none";
    theEnd.style.display = "block";
    document.getElementById("points").innerHTML = score;
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//dunno how to shuffle arrays so I made it a butte-tonn lot more harder for myself
function questionMaker() {
  //taking a random value from wrong Answer and the question number of right Answer and putting them in an array
  questionNumbar(questionNumb); //this changes the question depending on the number or the other way around i dunno
  document.getElementById("points").innerHTML = "Points: " + score;
  var n = randomNumber(0, wrongAnswer.length);
  var nOne = randomNumber(0, wrongAnswer.length - 1);
  var nTwo = randomNumber(0, wrongAnswer.length - 2);
  var nThree = randomNumber(0, 4);
  var nFour = randomNumber(0, 3);
  var nFive = randomNumber(0, 2);
  var nSix = randomNumber(0, 1);
  allAnswers = [rightAnswer[questionNumb]];
  function insideQuestionMaker(banana) {
    allAnswers.push(wrongAnswer[banana]);
    wrongAnswer.splice(banana, 1);
  }
  insideQuestionMaker(n); //three wrong answers
  insideQuestionMaker(nOne);
  insideQuestionMaker(nTwo);
  //then putting it a new shuffled array
  var allAnswersTwo = [];
  function insideQuestionMakerAgain(apple) {
    allAnswersTwo.push(allAnswers[apple]);
    allAnswers.splice(apple, 1);
  }
  insideQuestionMakerAgain(nThree); //four shuffled answers
  insideQuestionMakerAgain(nFour);
  insideQuestionMakerAgain(nFive);
  insideQuestionMakerAgain(nSix);
  document.getElementById("firstAnswer").innerHTML = allAnswersTwo[0];
  document.getElementById("secondAnswer").innerHTML = allAnswersTwo[1];
  document.getElementById("thirdAnswer").innerHTML = allAnswersTwo[2];
  document.getElementById("fourthAnswer").innerHTML = allAnswersTwo[3];
}

function checkCorrectAnswer() {
  content1 = document.getElementById("firstAnswer").textContent;
  content2 = document.getElementById("secondAnswer").textContent;
  content3 = document.getElementById("thirdAnswer").textContent;
  content4 = document.getElementById("fourthAnswer").textContent;

  document.getElementById("firstAnswer").onclick = function () {
    if (content1 === rightAnswer[questionNumb]) {
      functionThreeRight();
      console.log("success");
    } else {
      functionThreeWrong();
      console.log("wrong wrong wrong");
    }
  };
  document.getElementById("secondAnswer").onclick = function () {
    if (content2 === rightAnswer[questionNumb]) {
      functionThreeRight();
      console.log("success");
    } else {
      functionThreeWrong();
      console.log("wrong wrong wrong");
    }
  };
  document.getElementById("thirdAnswer").onclick = function () {
    if (content3 === rightAnswer[questionNumb]) {
      functionThreeRight();
      console.log("success");
    } else {
      functionThreeWrong();
      console.log("wrong wrong wrong");
    }
  };
  document.getElementById("fourthAnswer").onclick = function () {
    if (content4 === rightAnswer[questionNumb]) {
      functionThreeRight();
      console.log("success");
    } else {
      functionThreeWrong();
      console.log("wrong wrong wrong");
    }
  };
}

btn.addEventListener("click", functionOne);
btnTwo.addEventListener("click", functionTwo);

/* btnTwo.addEventListener("click", timerFunction); */
/* btnThree.addEventListener("click", functionThree); */

btnThreeOne.addEventListener("click", checkCorrectAnswer);
btnThreeTwo.addEventListener("click", checkCorrectAnswer);
btnThreeThree.addEventListener("click", checkCorrectAnswer);
btnThreeFour.addEventListener("click", checkCorrectAnswer);

btnTwo.addEventListener("click", questionMaker);
btnFourOne.addEventListener("click", functionFourRight);
btnFourTwo.addEventListener("click", functionFourWrong);
btnFourOne.addEventListener("click", questionMaker);
btnFourTwo.addEventListener("click", questionMaker);

console.log(questionNumb);
