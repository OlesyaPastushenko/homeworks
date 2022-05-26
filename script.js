// var ships = [1-a, 3-a, 4-a, 6-b, 2-c, 6-c, 2-d, 2-e, 6-f, 7-f, 8-f, 1-h, 2-h, 3-h, 4-h];
// var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


var ships = ['1a', '3a', '4a', '6b', '2c', '6c', '2d', '2e', '6f', '7f', '8f', '1h', '2h', '3h', '4h'];
var fields = ['a','b','c','d','e','f','g','h'];
function createBtn (tag, clName, text) {
var btn = document.createElement(tag);
btn.className =clName;
btn.innerHTML =text;
var wrap = document.querySelector(".wrap");
wrap.append(btn);
}
for (var i=0;i<fields.length;i++) {
    for (var j=0;j<fields.length;j++)
    createBtn("button","btn",j+1 + fields[i]);
}
var wrap = document.querySelector('.wrap');
wrap.addEventListener('click', function(e){
    var elem = e.target;
    var check = elem.matches('.btn');
    if(check) {
        var number = elem.textContent;
            if (ships.includes(number)) {
                elem.classList.add('red');
                alert('Попадание!');
            }
            else {
                elem.classList.add('deep_blue');
                alert('Мимо!');
            }
    }
})

