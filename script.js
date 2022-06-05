// Элементы:

// 1. Кошка;

// 2. Мышь;

// 3. Курсор;

// 4. Блок;

// 5. Таймер.

// Задание:

// 1. Создать мышку;

// 2. Создать кошку;

// 3. Получить координаты курсора;

// 4. Передать п.3 мышке;

// 5. Передать п.3 кошке с задержкой 2с;

// 6. Рандомно создать точку:

// - рандомно создать ширину в пределах от 50 до 150;

// - рандомно создать высоту в пределах от 50 до 150;

// 7. Получить координаты п.6;

// 8. п.6 с интервалом 5с и оставлять на месте;

// 9. Суммировать координаты в одно условие;

// 10. Создать условие:

// Если попали на п.9 координаты, то п.4 не работает;

// 11. Создать условие:

// Сравнить координаты п.1 и п.2

// Если они равны, то Игра окончена;

// 12. Создать таймер:

// Секундомер через объект Date();

// 13. Создать блок для конца игры

// В конце игры вывести блок с объявлением об окончании игры

// Вывести результат времени игрока взятый с п.12

var mouse = createDiv("div", "mouse");
var cat = createDiv("div", "cat");
var box = createDiv("div", "box");

var seconds = 0;
setInterval(function () {
  seconds += 1;
}, 1000);
function listener(e) {
  mouse.style.position = "fixed";
  mouse.style.left = e.clientX - 25 + "px";
  mouse.style.top = e.clientY - 25 + "px";
  if 
    (mouse.style.left === cat.style.left &&
      mouse.style.top === cat.style.top)
 {
    document.body.removeEventListener("mousemove", listener);
    var end = createDiv("div", "end");
    end.style.display = "block";
  }
  setTimeout(function () {
    cat.style.position = "fixed";
    cat.style.left = e.clientX - 25 + "px";
    cat.style.top = e.clientY - 25 + "px";
  }, 2000);
}
document.body.addEventListener("mousemove", listener);

function createDiv(tag, clName) {
  var div = document.createElement(tag);
  div.className = clName;
  document.body.append(div);
  return div;
}
setInterval(function () {
  var coorX = Math.ceil(Math.random() * 500 + 50);
  var coorY = Math.ceil(Math.random() * 500 + 50);
  box.style.display = "block";
  box.style.position = "fixed";
  box.style.left = coorX + "px";
  box.style.top = coorY + "px";
}, 5000);