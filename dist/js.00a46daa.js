// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
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
var score = 0;
/* var timerLength = document.getElementById("timerid");
var a = timerLength.style.width; */

questionNumb = 0;
var rightAnswer = ["4", "Orange", "a stick", "I don't know"];
var wrongAnswer = ["click me", "no", "yellow", "Justin Bieber", "Chuck Norris", "Pringles", "9999", "yes", "Bruce wayne", "doughnuts", "hello", "Durito Bandito"]; //switches page

function functionOne() {
  x.style.display = "none";
  y.style.display = "block";
} //switches page


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
} //switches page


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
  if (sheep == 0) {
    document.getElementById("questionId").innerHTML = "what is 2 + 2?";
  }

  if (sheep == 1) {
    document.getElementById("questionId").innerHTML = "name a yellow fruit?";
  }

  if (sheep == 2) {
    document.getElementById("questionId").innerHTML = "What is brown and sticky";
  }

  if (sheep == 3) {
    document.getElementById("questionId").innerHTML = "what color underwear am I wearing right now?!?1";
  }

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
} //dunno how to shuffle arrays so I made it a butte-tonn lot more harder for myself


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
  insideQuestionMaker(nTwo); //then putting it a new shuffled array

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
  console.log(allAnswersTwo);
}

btn.addEventListener("click", functionOne);
btnTwo.addEventListener("click", functionTwo);
/* btnTwo.addEventListener("click", timerFunction); */
//click makes one correct answer and three random wrong answers

/* btnThree.addEventListener("click", functionThree); */

btnTwo.addEventListener("click", questionMaker); //insert an if questionNumb === 0 or something
//checks if answer chosen is correct or wrong and showing the right page which doesn't work

if (document.getElementById("firstAnswer").innerHTML === "4" || document.getElementById("firstAnswer").innerHTML === "Orange" || document.getElementById("firstAnswer").innerHTML === "a stick" || document.getElementById("firstAnswer").innerHTML === "I don't know") {
  btnThreeOne.addEventListener("click", functionThreeRight);
  console.log("success");
} else {
  btnThreeOne.addEventListener("click", functionThreeWrong);
}

if (document.getElementById("secondAnswer").innerHTML === "4" || document.getElementById("secondAnswer").innerHTML === "Orange" || document.getElementById("secondAnswer").innerHTML === "a stick" || document.getElementById("secondAnswer").innerHTML === "I don't know") {
  btnThreeTwo.addEventListener("click", functionThreeRight);
  console.log("success");
} else {
  btnThreeTwo.addEventListener("click", functionThreeWrong);
}

if (document.getElementById("thirdAnswer").innerHTML === "4" || document.getElementById("thirdAnswer").innerHTML === "Orange" || document.getElementById("thirdAnswer").innerHTML === "a stick" || document.getElementById("thirdAnswer").innerHTML === "I don't know") {
  btnThreeThree.addEventListener("click", functionThreeRight);
  console.log("success");
} else {
  btnThreeThree.addEventListener("click", functionThreeWrong);
}

if (document.getElementById("fourthAnswer").innerHTML === "4" || document.getElementById("fourthAnswer").innerHTML === "Orange" || document.getElementById("fourthAnswer").innerHTML === "a stick" || document.getElementById("fourthAnswer").innerHTML === "I don't know") {
  btnThreeFour.addEventListener("click", functionThreeRight);
  console.log("success");
} else {
  btnThreeFour.addEventListener("click", functionThreeWrong);
}

btnFourOne.addEventListener("click", functionFourRight);
btnFourTwo.addEventListener("click", functionFourWrong);
btnFourOne.addEventListener("click", questionMaker);
btnFourTwo.addEventListener("click", questionMaker);
console.log(questionNumb);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59480" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map