// Задача 4. Создать функцию createMatrix(row, col),
// принимающую количество строк и количество столбцов матрицы
// и возвращающее матрицу (массив массивов), заполненную случайными
// числами в диапазоне от 0 до 100 (random).

// var random = Math.cail(Math.random()*100)

function createMatrix(row, col) {
  var arr = [];
  for (i = 0; i < row; i++) {
    var arr_1 = [];
    for (j = 0; j < col; j++) {
      var random = Math.ceil(Math.random() * 100);
      arr_1.push(random);
    }
    arr.push(arr_1);
  }
  return arr
}
console.log(createMatrix(5, 4));
