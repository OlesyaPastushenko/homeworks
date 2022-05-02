// Задача 2. Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) 
// значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).

var arr_1 = [NaN, 0, 77, false, -17, '', undefined, 99, null];
console.log(arr_1);
var filterFalse = arr_1.filter(function(i) {
if (i && i>0)
return i;
});
console.log(filterFalse);