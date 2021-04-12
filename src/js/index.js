var x = document.getElementById("startQuiz");
var y = document.getElementById("questions");
var z = document.getElementById("questionsTwo");
var oneCorrect = document.getElementById("");
var oneWrong = document.getElementById("");
var btn = document.getElementById("yesBtn");
var btnTwo = document.getElementById("okayBtn");
var btnThreeOne = document.getElementById("firstAnswer");
var btnThreeTwo = document.getElementById("secondAnswer");
var btnThreeThree = document.getElementById("thirdAnswer");
var btnThreeFour = document.getElementById("fourthAnswer");
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
  "Jaywalking",
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

//not to be used I guess because I'm a terrible programmer so just ignore this
/* function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
//dunno how to shuffle arrays so I made it a butte-tonn lot more harder for myself
function questionMaker() {
  //taking a random value from wrong Answer and the question number of right Answer and putting them in an array
  allAnswers = [rightAnswer[questionNumb]];
  var randomNumbOne = randomNumber(-1, 13);
  allAnswers.push(wrongAnswer[randomNumbOne]);
  wrongAnswer = wrongAnswer.splice(randomNumbOne, 1);
  var randomNumbTwo = randomNumber(-1, 12); //I could've probably just reused randomNumbOne but who cares
  allAnswers.push(wrongAnswer[randomNumbTwo]);
  wrongAnswer = wrongAnswer.splice(randomNumbTwo, 1);
  var randomNumbThree = randomNumber(-1, 11);
  allAnswers.push(wrongAnswer[randomNumbThree]);
  wrongAnswer = wrongAnswer.splice(randomNumbThree, 1);
  //then putting it a new shuffled array
  var allAnswersTwo = [];
  var randomNumbFour = randomNumber(-1, 5);
  allAnswersTwo.push(allAnswers[randomNumbFour]);
  allAnswers = wrongAnswer.splice(randomNumbFour, 1);
  var randomNumbFive = randomNumber(-1, 4);
  allAnswersTwo.push(allAnswers[randomNumbFive]);
  allAnswers = wrongAnswer.splice(randomNumbFive, 1);
  var randomNumbSix = randomNumber(-1, 3);
  allAnswersTwo.push(allAnswers[randomNumbSix]);
  allAnswers = wrongAnswer.splice(randomNumbSix, 1);
  allAnswersTwo.push(allAnswers[0]);
  document.getElementById("firstQuestion").innerHTML = allAnswersTwo[0];
  document.getElementById("secondQuestion").innerHTML = allAnswersTwo[1];
  document.getElementById("thirdQuestion").innerHTML = allAnswersTwo[2];
  document.getElementById("fourthQuestion").innerHTML = allAnswersTwo[3];
  console.log(allAnswersTwo);
} */

//switches page
function functionThreeRight() {
  z.style.display = "none";
  oneCorrect.style.display = "block";
  score = score + 1;
}
//switches page
function functionThreeWrong() {
  z.style.display = "none";
  oneWrong.style.display = "block";
}

btn.addEventListener("click", functionOne);
btnTwo.addEventListener(
  "click",
  functionTwo
); /* btnThree.addEventListener("click", functionThree); */ //click makes one correct answer and three random wrong answers
/* btnTwo.addEventListener("click", timerFunction); */
/* btnTwo.addEventListener("click", questionMaker); */

btnThreeOne.addEventListener("click", functionThreeWrong);
btnThreeTwo.addEventListener("click", functionThreeWrong);
btnThreeThree.addEventListener("click", functionThreeWrong);
btnThreeFour.addEventListener("click", functionThreeRight);
