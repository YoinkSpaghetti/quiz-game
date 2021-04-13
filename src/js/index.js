var x = document.getElementById("startQuiz");
var y = document.getElementById("questions");
var z = document.getElementById("questionsTwo");
var oneCorrect = document.getElementById("correctOne");
var oneWrong = document.getElementById("wrongOne");
var btn = document.getElementById("yesBtn");
var btnTwo = document.getElementById("okayBtn");
var btnThreeOne = document.getElementById("firstAnswer");
var btnThreeTwo = document.getElementById("secondAnswer");
var btnThreeThree = document.getElementById("thirdAnswer");
var btnThreeFour = document.getElementById("fourthAnswer");
let score = 0;
/* var timerLength = document.getElementById("timerid");
var a = timerLength.style.width; */
var questionNumb = 0;

var rightAnswer = ["4", "Orange", "spaghetti", "no"];
var wrongAnswer = [
  "click me",
  "I dont know",
  "yellow",
  "Justin Bieber",
  "Adam Sandlers",
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

function makeAnswers() {
  var text = document.createTextNode();
  var element = document.getElementById("new");
  element.appendChild(text);
}
//switches page
function functionThreeRight() {
  z.style.display = "none";
  oneCorrect.style.display = "block";
  score = score + 1;
  console.log(score);
}
//switches page
function functionThreeWrong() {
  z.style.display = "none";
  oneWrong.style.display = "block";
  console.log(score);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//dunno how to shuffle arrays so I made it a butte-tonn lot more harder for myself
function questionMaker(n, nOne, nTwo, nThree, nFour, nFive) {
  //taking a random value from wrong Answer and the question number of right Answer and putting them in an array
  var n = randomNumber(0, 12);
  var nOne = randomNumber(0, 11);
  var nTwo = randomNumber(0, 10);
  var nThree = randomNumber(0, 4);
  var nFour = randomNumber(0, 3);
  var nFive = randomNumber(0, 2);
  allAnswers = [rightAnswer[questionNumb]];
  var randomNumbOne = n;
  allAnswers.push(wrongAnswer[randomNumbOne]);
  wrongAnswer.splice(randomNumbOne, 1);
  console.log(wrongAnswer);
  var randomNumbTwo = nOne;
  allAnswers.push(wrongAnswer[randomNumbTwo]);
  wrongAnswer.splice(randomNumbTwo, 1);
  var randomNumbThree = nTwo;
  allAnswers.push(wrongAnswer[randomNumbThree]);
  wrongAnswer.splice(randomNumbThree, 1);
  console.log(allAnswers);
  //then putting it a new shuffled array
  var allAnswersTwo = [];
  var randomNumbFour = nThree;
  allAnswersTwo.push(allAnswers[randomNumbFour]);
  allAnswers.splice(randomNumbFour, 1);
  console.log(allAnswers);
  var randomNumbFive = nFour;
  allAnswersTwo.push(allAnswers[randomNumbFive]);
  allAnswers.splice(randomNumbFive, 1);
  var randomNumbSix = nFive;
  allAnswersTwo.push(allAnswers[randomNumbSix]);
  allAnswers.splice(randomNumbSix, 1);
  allAnswersTwo.push(allAnswers[0]);
  document.getElementById("firstAnswer").innerHTML = allAnswersTwo[0];
  document.getElementById("secondAnswer").innerHTML = allAnswersTwo[1];
  document.getElementById("thirdAnswer").innerHTML = allAnswersTwo[2];
  document.getElementById("fourthAnswer").innerHTML = allAnswersTwo[3];
  console.log(allAnswersTwo);
}

function questionNumba(sheep) {
  if (sheep == 0) {
    document.getElementById("questionId").innerHTML = "what is 2 + 2?";
  }
  if (sheep == 1) {
    document.getElementById("questionId").innerHTML = "name a yellow fruit?";
  }
  if (sheep == 2) {
    document.getElementById("questionId").innerHTML =
      "I hope she made lotsa ___";
  }
  if (sheep == 3) {
    document.getElementById("questionId").innerHTML =
      "what color underwear am I wearing right now?";
  }
}
questionNumba(questionNumb);

btn.addEventListener("click", functionOne);
btnTwo.addEventListener("click", functionTwo);

/* btnTwo.addEventListener("click", timerFunction); */

//click makes one correct answer and three random wrong answers
/* btnThree.addEventListener("click", functionThree); */

btnTwo.addEventListener("click", questionMaker);

//insert an if questionNumb === 1 or something
//checks if answer chosen is correct or wrong and showing the right page
if (document.getElementById("firstAnswer").innerHTML === "4") {
  btnThreeOne.addEventListener("click", functionThreeRight);
} else {
  btnThreeOne.addEventListener("click", functionThreeWrong);
}
if (document.getElementById("secondAnswer").innerHTML === "4") {
  btnThreeTwo.addEventListener("click", functionThreeRight);
} else {
  btnThreeTwo.addEventListener("click", functionThreeWrong);
}
if (document.getElementById("thirdAnswer").innerHTML === "4") {
  btnThreeThree.addEventListener("click", functionThreeRight);
} else {
  btnThreeThree.addEventListener("click", functionThreeWrong);
}
if (document.getElementById("fourthAnswer").innerHTML === "4") {
  btnThreeFour.addEventListener("click", functionThreeRight);
} else {
  btnThreeFour.addEventListener("click", functionThreeWrong);
}
