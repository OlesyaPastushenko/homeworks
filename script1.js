// Задача 1. Дан массив пользователей [{name: 'Vasya', age: 24}, {name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18},
// {name: 'Nastya', age: 40} ]. Отсортируйте его по возрасту.

var arr = [
  { name: "Vasya", age: 24 },
  { name: "Petya", age: 12 },
  { name: "Fedya", age: 6 },
  { name: "Ann", age: 18 },
  { name: "Nastya", age: 40 },
];
var sort_arr = arr.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
});
console.log(sort_arr);


