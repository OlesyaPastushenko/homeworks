// Задача 1. Дан HTML код. Поменяйте содержимое элементов с классом zzz на их 
// порядковый номер в коде.

// Задача 2. Дан HTML код. Поменяйте цвет текста на синий у элементов с текстом www.

// Задача 3. Дан HTML код. Сгенерируйте новый список (ul > li) используя содержимое элементов с классом zzz.

// РЕШЕНИЕ1

// var elems = document.querySelectorAll(".zzz");
// elems.forEach(function(elem, i) {
//     elem.innerHTML = i;
// });

// РЕШЕНИЕ2

// var elems = document.querySelectorAll(".zzz");
// elems.forEach(function(elem) {
//     if (elem.innerHTML.match("www")) {
//         elem.classList.add ("www")
//     }
// });

// РЕШЕНИЕ3

var zzz = document.querySelectorAll(".zzz");
var ul = document.createElement("ul");
zzz.forEach(function(elem){
    var li = document.createElement("li")
    li.append(elem.innerHTML)
    ul.append(li)
})
document.body.append(ul)