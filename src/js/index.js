var x = document.getElementById("startQuiz");
var y = document.getElementById("questions");
var z = document.getElementById("questionsTwo");
var oneCorrect = document.getElementById("");
var oneWrong = document.getElementById("");
var btn = document.getElementById("yesBtn");
var btnTwo = document.getElementById("okayBtn");
var btnThree = document.getElementById("");
var timerLength = document.getElementById("timerid");
var a = timerLength.style.width;
/* var answers = [right, wrongOne, wrongTwo, wrongThree]; */
function functionOne() {
  x.style.display = "none";
  y.style.display = "block";
}
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
function functionThree() {
  for (timer = 0; timer < 10; ) {
    console.log(timer);
    sleep(1000);
    a = a + 10;
    timer = timer + 1;
  }
} */
function functionFour() {
  z.style.display = "none";
  oneCorrect.style.display = "block";
}
function functionFive() {
  z.style.display = "none";
  oneWrong.style.display = "block";
}
btn.addEventListener("click", functionOne);
btnTwo.addEventListener("click", functionTwo);
/* btnTwo.addEventListener("click", functionThree); */
btnThree.addEventListener("click", functionFour);
