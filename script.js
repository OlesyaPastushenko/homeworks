const CreateBtn = (tag, text) => {
  const div = document.createElement(tag);
  div.innerHTML = text;
  const choice = document.querySelector(".choice");
  choice.append(div);
};

CreateBtn("button", "Камень");
CreateBtn("button", "Ножницы");
CreateBtn("button", "Бумага");
let gamerCount = 0;
let compCount = 0;

const btns = document.querySelectorAll("button");

btns.forEach((el) => {
  el.addEventListener("click", () => {
    const gamer1 = document.querySelector(".gamer1");
    const choice = el.textContent;
    gamer1.innerHTML = `Ваш ход: ${choice}`;
    let gamer2 = document.querySelector(".gamer2");
    const choice2 = CompTurn();
    gamer2.innerHTML = "Мой ход: " + choice2;
    const result = document.querySelector(".result");
    result.innerHTML = equals(choice, choice2);
    document.querySelector(".counter1").innerHTML =
      "Ваши победы: " + gamerCount;
    document.querySelector(".counter2").innerHTML = 
      "Мои победы: " + compCount;
  });
});

function CompTurn() {
  const random = Math.floor(1 + Math.random() * 3);
  if (random === 1) {
    return "Камень";
  } else if (random === 2) {
    return "Ножницы";
  } else if (random === 3) {
    return "Бумага";
  }
}
function equals(frst, scnd) {
  if (
    (frst === "Бумага" && scnd === "Камень") ||
    (frst === "Ножницы" && scnd === "Бумага") ||
    (frst === "Камень" && scnd === "Ножницы")
  ) {
    gamerCount++;
    return "Вы выиграли";
  } else if (frst === scnd) {
    return "Ничья";
  } else {
    compCount++;
    return "Вы проиграли";
  }
}
