// Задача 1. Дана строка 'ahb acb aeb aeeb adcb axeb'
// Напишите регулярку, которая найдет строки ahb, acb, aeb 
// по шаблону: буква 'a', любой символ, буква 'b'.


var str = "ahb acb aeb aeeb adcb axeb"
var reg = /\ba.b\b/ig
console.log(str.match(reg));

// Задача 2. Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'.
//  Напишите регулярку, которая найдет строки
//  *q+, *qq+, *qqq+, не захватив остальные.

var str1 = "*+ *q+ *qq+ *qqq+ *qqq qqq+"
var reg1 = /\*q{1,3}\+/ig
console.log(str1.match(reg1));


// Задача 3. Выбрать существующие даты между 
// 1000 и 2012 годом. Секунды могут быть опущены.

// Облегчаем задачу: в каждом месяце 30 дней.

// 2012/09/18 12:10 — true
// 2013/09/09 09:09 — false (после 2012)

var reg2 = /[1000-2012]\/[1-12]\/[1-30]\s[0-24]:[0-59]/igm

// Задача 4. Убрать повторяющиеся пробелы и знаки табуляции, 
// оставить по одному пробелу между словами и по два между предложениями.

// Extra   spaces => Extra spaces
// Sentence.   Sentence. => Sentence.  Sentence.

var str3 = "Extra   spaces"
var str4 = str3.replace(/\s\s\s/," ")
console.log(str4)

var str5 = "Sentence.   Sentence."
var str6 = str5.replace(/\.\s\s\s/, ".  ")
console.log(str6)







