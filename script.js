function createBtn(tag, clName, text) {
  var btn = document.createElement(tag);
  btn.className = clName;
  btn.setAttribute("data-id", text);
  var wrap = document.querySelector(".wrap");
  wrap.append(btn);
}
var pl1 = [];
var pl2 = [];

var win = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];
var turn = 0;
var z = 0;
function checkWinner() {
  win.forEach(function (item) {
    if (
      pl1.includes(item[0]) &&
      pl1.includes(item[1]) &&
      pl1.includes(item[2])
    ) {
      alert("win X");
      location.reload();
      return;
    } else if (
      pl2.includes(item[0]) &&
      pl2.includes(item[1]) &&
      pl2.includes(item[2])
    ) {
      alert("win O");
      location.reload();
      return;
    }
  });
  if (turn == 9) {
    alert("end");
    location.reload();
  }
}

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) createBtn("button", "btn", "" + (z += 1));
}

var btns = document.querySelectorAll(".btn");
function Listener(e) {
  var elem = e.target;
  if (turn % 2 == 0) {
      elem.classList.add("red");
      turn += 1;
      pl1.push(elem.dataset.id);
    } else {
        elem.classList.add("green");
        turn += 1;
        pl2.push(elem.dataset.id);
    }
    checkWinner();
    elem.removeEventListener("click", Listener);
}
btns.forEach(function (item) {
  item.addEventListener("click", Listener);
});
