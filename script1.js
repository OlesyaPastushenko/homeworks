// Задача 1. Напишите функцию toSum для вычисления суммы массива целых чисел.
sum = 0
function toSum(arr,i) {
    if(Number.isInteger(arr[i])){
        if(i === arr.length){
            return sum
        } else {
            sum = sum + arr[i] + toSum(arr,i+1)
        }
    }
    return sum
}
console.log(toSum([2, 3, 4, 5, 6, 7],0));




