x = 0;
y = true;
z = false;
while (x < 7) {
  if (x == 0) {
    y = true;
  } else {
    y = false;
  }
  if (x == 1) {
    z = true;
  } else {
    z = false;
  }
  document.getElementById("yesBtn").addEventListener(
    "click",
    function () {
      document.getElementById("startQuiz").hidden = y;
      document.getElementById("questions").hidden = z;
    },
    (x = x + 1),
    false
  );
}
