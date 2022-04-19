var action;
var operand_num;
var prompt_operand;
var operand1;
var operand2;
for (;;) {
  action = prompt("Введите действие + - / *");
  if (action === "+" || action === "-" || action === "/" || action === "*") {
    operand_num = +prompt("Введите количество операндов");
    while (isNaN(operand_num) || operand_num <= 1) {
      operand_num = +prompt("Не прaвильно, введите кол-во операндов");
    }
    for (i = 0; i < operand_num; i++) {
      prompt_operand = +prompt("введите операнд");
      while (isNaN(prompt_operand)) {
        prompt_operand = +prompt("не правильно, введите операнд");
      }
      if (i === 0) {
        operand1 = prompt_operand;
      } else {
        operand2 = prompt_operand;

        switch (action) {
          case "/":
            operand1 = operand1 / operand2;
            break;
          case "+":
            operand1 = operand1 + operand2;
            break;
          case "*":
            operand1 = operand1 * operand2;
            break;
          case "+":
            operand1 = operand1 - operand2;
            break;
        }
      }
    }
    alert(operand1);
  }
}
