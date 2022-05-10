// Задание 2. Сделайте функцию, каждый вызов который будет
//  генерировать случайные числа от 1 до 100, но так, чтобы 
//  они не повторялись, пока не будут перебраны все числа из 
//  этого промежутка. Решите задачу через замыкания - в замыкании
//   должен хранится массив чисел, которые уже были сгенерированы функцией

function random() {
    var item = Math.ceil(Math.random() * 100);
    return item;
}

function toArr (){
    arr = [];
    return function(){
      while(arr.length < 100) {
      var elem = random(); 
      if (!arr.includes(elem)) {  
      arr.push(elem);
      }
      }
      return console.log(arr);
    }
}

test = (toArr());
test()

