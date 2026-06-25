(function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
})(function () {
  var pan = document.getElementById("pan");
  var ball = document.getElementById("ball");
  var body = document.body;
  var levelText = document.getElementById("levelText");
  var message = document.getElementById("message");
  var messageKicker = document.getElementById("messageKicker");
  var messageTitle = document.getElementById("messageTitle");
  var messageButton = document.getElementById("messageButton");

  var level = 1;
  var balls;
  var ballIndex;
  var angleArr;
  var resultState = "replay";
  var locked = false;

  function init(currentLevel) {
    pan.innerHTML = "<li></li><li></li><li></li><li></li>";
    ball.innerHTML = "";

    for (var i = 1; i < currentLevel + 6; i++) {
      var li = document.createElement("li");
      li.textContent = i;
      ball.appendChild(li);
    }

    balls = document.querySelectorAll("#ball li");
    ballIndex = 0;
    angleArr = [0, 90, 180, 270];
    locked = false;
    body.classList.remove("fail");
    body.classList.remove("success");
    pan.classList.remove("stop");
    message.classList.remove("show");
    levelText.textContent = "Level " + currentLevel;
  }

  function getRotationOf(el) {
    var style = window.getComputedStyle(el);

    if (!style) {
      return 0;
    }

    var prop =
      style.getPropertyValue("-webkit-transform") ||
      style.getPropertyValue("transform");

    if (!prop || prop === "none") {
      return 0;
    }

    var matrix = /matrix\((.*)\)/g.exec(prop);

    if (!matrix) {
      return 0;
    }

    var values = matrix[1].split(",");
    return Math.atan2(values[1], values[0]) * (180 / Math.PI);
  }

  function normalizeAngle(angle) {
    var tmp = angle % 360;
    return tmp < 0 ? tmp + 360 : tmp;
  }

  function angleDistance(a, b) {
    var diff = Math.abs(normalizeAngle(a) - normalizeAngle(b));
    return Math.min(diff, 360 - diff);
  }

  function judge(angle) {
    for (var i = 0; i < angleArr.length; i++) {
      if (angleDistance(angle, angleArr[i]) < 13) {
        return true;
      }
    }

    return false;
  }

  function showMessage(isSuccess) {
    locked = true;
    pan.classList.add("stop");
    resultState = isSuccess ? "next" : "replay";

    if (isSuccess) {
      body.classList.add("success");
      messageKicker.textContent = "Level " + level + " Complete";
      messageTitle.textContent = "Success";
      messageButton.textContent = "Next Level";
    } else {
      body.classList.add("fail");
      messageKicker.textContent = "Level " + level + " Failed";
      messageTitle.textContent = "Game Over";
      messageButton.textContent = "Replay";
    }

    message.classList.add("show");
  }

  function action(item) {
    if (locked || !item) {
      return;
    }

    var toInsertBall = item.cloneNode(true);
    item.parentElement.removeChild(item);

    var fixedAngle = normalizeAngle(90 - getRotationOf(pan));
    toInsertBall.style.webkitTransform = "rotate(" + fixedAngle + "deg)";
    toInsertBall.style.transform = "rotate(" + fixedAngle + "deg)";
    pan.appendChild(toInsertBall);

    if (judge(fixedAngle)) {
      showMessage(false);
      return;
    }

    if (document.querySelectorAll("#ball li").length <= 0) {
      showMessage(true);
      return;
    }

    angleArr.push(fixedAngle);
    ballIndex++;
  }

  function handler(event) {
    if (event.target.closest("#message")) {
      return;
    }

    action(balls[ballIndex]);
  }

  messageButton.addEventListener("click", function (event) {
    event.stopPropagation();

    if (resultState === "next") {
      level++;
    }

    init(level);
  });

  body.addEventListener("click", handler);
  init(level);
});
