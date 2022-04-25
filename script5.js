// Задача 5
// Функция getSequence(start, step) при вызове возвращает функцию-генератор. 
// Каждый вызов генератора возвращает новое число в числовой последовательности. 
// start – стартовое число (по умолчанию 0). start – шаг приращения (по умолчанию 1).


function getSequence(start, step) {
  if (!start) {
    var number = 0;
  } else {
    var number = start;
  }
  return function () {
    if (!step) {
      number = number + 1;
    } else {
      number = number + step;
    }
    return number;
  };
}
var a = getSequence(0, 5);
console.log(a());
console.log(a());
var b = getSequence()
console.log(b())
console.log(b())
