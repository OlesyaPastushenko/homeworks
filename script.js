var alertTime = prompt("Задайте время будильника в формате hh:mm")

setInterval(function (){
    var date = new Date();
    var time = date.toLocaleTimeString()
    document.getElementById('block').innerHTML = time
    if(alertTime === date.getHours()+":"+date.getMinutes() && date.getSeconds() === 0){
        alert("zvonok")
    }
}, 1000)
