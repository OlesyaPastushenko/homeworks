// Задача 1

// В бесконечном цикле делается запрос на ввод двух чисел (два отдельных вызова функции prompt()).
// Числа сравниваются между собой, и выводится одна из трёх фраз: «числа равны», «первое число меньше»,
//  «второе число меньше». Если пользователь ввёл не число, выводится фраза «первый ввод – не число»
//  (или «второй ввод – не число»), и выполнение скрипта прекращается.

function comparation(number1, number2) {
  if (number1 > number2) {
    alert("the first number is bigger");
  } else if (number1 < number2) {
    alert("the first number is smaller");
  } else {
    alert("the numbers are equal");
  }
}

for (;;) {
  var number1 = +prompt("Enter first number");
  if (isNaN(number1)) {
    alert("First enter is not a number");
    break;
  } 
  var number2 = +prompt("Enter second number");
  if (isNaN(number2)) {
    alert("Second enter is not a number");
    break;
  } else {
    comparation(number1, number2);
  }
}
