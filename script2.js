// Задача 2
// Многоквартирный дом характеризуется следующими тремя показателями: этажность (1-25), число подъездов (1-10),
// количество квартир на лестничной площадке (1-20). Скрипт запрашивает эти показатели и номер квартиры. 
// Выводится номер подъезда, в котором находится указанная квартира. При вводе некорректных данных предусмотреть 
// генерацию исключительных ситуаций.

var floor_num
var entrance_num
var flat_num
var flat_num

function calc_entrance (floor_num, entrance_num, flat_num, flat_num) {
         var user_entrance = user_flat/(floor_num * flat_num)
         if (user_entrance > entrance_num) {
            alert("There is not such a flat in the house")
         }
         else {
           return Math.ceil(user_entrance);
         }
}

for (;;) {
    var floor_num = +prompt("Enter the number of floors in a house");
    if (!floor_num || floor_num > 25) {
      alert("This is not a number or the number of the floors is bigger than 25");
      break;
    } 
    var entrance_num = +prompt("Enter the number of entrances in a house");
    if (!entrance_num || entrance_num > 10) {
      alert("This is not a number or the number of the entrance is bigger than 10");
      break;
    }  
    var flat_num = +prompt("Enter the number of the flats on the floor");
    if (!flat_num || flat_num > 20) {
      alert("This is not a number or the number of the flats on the floor is bigger than 20");
      break;
    }
    var user_flat = +prompt("Enter the number of your flat");
    if (!flat_num || flat_num > 5000) {
    alert("This is not a number or it's bigger than 5000");
    break;
    } else {
      alert (calc_entrance(floor_num, entrance_num, flat_num, flat_num))
    }
  }

