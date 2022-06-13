// Создаем объект Танк/Машина/(или что вам угодно)
//  и от него 3 потомка, которые буду делать прототипирование.

// От каждого потом еще 2 по ребенка, которые так же будут 
// иметь уникальные свойства и методы.



const car= {
    color: "Red",
    size: 30,
    price: 200,
    test: function (){
        console.log("testing",this)

    },
}

const porsche = {
    manufacturer: "germany",
    __proto__: car,
}


const porsche_caerra = {
    height: 100,
    color: "blue",
    __proto__: porsche
}

const porsche_cayenne = {
    height: 100,
    color: "black",
    __proto__: porsche
}

const mercedes = {
    manufacturer: "germany",
    __proto__:car,
}

const mercedes_sClass = {
    length: 300,
    speed: 0,
    acceleration: function (){
        setInterval (function(){
            mercedes_sClass.speed += 1
            console.log(mercedes_sClass.speed)
        },2000)
    },
    __proto__: mercedes
}

const mercedes_cClass = {
    length: 200,
    speed: 0,
    acceleration: function (){
        setInterval (function(){
            mercedes_cClass.speed += 1
            console.log(mercedes_cClass.speed)
        },1000)
    },
    __proto__: mercedes
}


const toyota = {
 manufacturer: "japan",
 __proto__: car
}

const toyota_corolla = {
    height: 100,
    color : "blue",
    opacity: 0,
    colorChange: function (){
    setInterval (function(){
    toyota_corolla.opacity += 0.1
    console.log(toyota_corolla.opacity)
    },5000)
    },
    __proto__: toyota
}


const toyota_yaris = {
    height: 100,
    color : "blue",
    opacity: 0,
    colorChange: function (){
    setInterval (function(){
    toyota_yaris.opacity += 0.1
    console.log(toyota_yaris.opacity)
    },2000)
    },
    __proto__: toyota
}



mercedes.test()
porsche.test()
mercedes_sClass.acceleration()
toyota_corolla.colorChange()
console.log(porsche_caerra.color)
