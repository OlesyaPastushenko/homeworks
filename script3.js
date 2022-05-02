
// Задача 3. Напишите функцию find(arr, value), которая вернет массив всех c 
// индексом значения. (Не использовать метод find)

var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];
console.log(arr)
arr.forEach(function(value,index){
    console.log("значение =>",value, "индекс =>",index)
})
/* Задача 3. Напишите функцию find(arr, value), которая вернет массив всех одинаковых значений c 
 индексом значения. (Не использовать метод find) */
arr = [NaN, 0, 77, false, -17, '', undefined, 99, null, 99, 99];
function find(arr, value){
    var arr_1 = []
    for(i=0;i<arr.length;i++) {
        if (arr[i]==value) {
            arr_1.push(i)
        }
    }
    return arr_1
}

console.log(find(arr, 99))