function createDiv (tag, clName) {
    var div = document.createElement(tag);
    div.className =clName;
    var field = document.querySelector(".field")
    field.append(div)
    }
createDiv("div","car");
var car = document.querySelector('.car')
var marginY = 0
var marginX = 0
document.addEventListener("keydown",function(e){
    if(e.code === "KeyS"){
        if (marginY < 423) {
        marginY += 3
        car.style.top = marginY + "px"
        }
    }
    if(e.code === "KeyW"){
        if (marginY >= 0) {
        marginY -= 3
        car.style.top = marginY + "px"
        }
    }
    if(e.code === "KeyD"){
        if (marginX < 370) {
        marginX += 3
        car.style.left = marginX + "px"
    }
    }
    if(e.code === "KeyA"){
        if (marginY >= 0) {
        marginX -= 3
        car.style.left = marginX + "px"
        }
    }
    if(e.code === "Space"){
        createDiv("div", "fire")
        var fire = document.querySelector('.fire')
        console.log(fire);
        fire.style.left = marginX + 90 + "px"
        fire.style.top = marginY + "px"
        function remove() {
            console.log("test")
            console.log(fire)
            fire.remove()
        }
        setTimeout(remove, 500)
    }
})
