// Задание 1. Создайте замыкание: функция makePassword получает 
// пароль в аргументе и возвращает внутреннюю функцию, которая 
// принимает введенную строку и возвращает булевое значение true, 
// если введенная строка совпадает с паролем и false – если не совпадает.


var mainPassword = "olesya"
function userPassword(userPassword) {
userPassword = prompt("введите пароль");
   return function (){
    var value = (userPassword == mainPassword);
    console.log(value);
   } 
}
var test = userPassword();
test();


