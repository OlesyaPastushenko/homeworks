
// const nums = [[],[]];
// const opt = {
//     count: 8,
//     min: 1,
//     max: 6,
//     turn: 0,
//     pl1: 0,
//     pl2: 0,
// };
// const {count,min,max} = opt

// for(let i = 0; i<count;i++) {
//     if (count/2 == i) opt.turn = 1
//     {
// nums[opt.turn].push(random(min,max))
// }
// }
// nums.forEach((elem, i) => {
//     opt[`pl${i+1}`]= elem.reduce((acc,el)=> acc + el,0)
    
// })
// const {pl1,pl2} = opt;
// console.log(pl1,pl2)
// if (pl1>pl2) {
//     console.log("win pl1")
// }
// else if (pl1==pl2) {
//     console.log("tie")
// }
// else {
//     console.log("win pl2")
// }

// console.log(opt)
const numbers = document.querySelector(".numbers");
const cube = document.querySelector(".cube");
const go = document.querySelector("button");
const chip = document.querySelector(".chip")
let count = [];
const createNumbers = function() {
    for(let i=0;i<20;i++){
    let num = document.createElement("div");
    num.innerHTML = i+1;
    num.className = "num"
    numbers.append(num);
    }
}
createNumbers()

    const dice = document.createElement("div")
    cube.append(dice)

go.addEventListener("click", ()=>{
    const random = Math.floor(1 + Math.random()*(6))
    dice.className = `dice${random}`
    count.push(random*24)
    let margin = count.reduce(function (acc, el) {    
        return acc + el    
    },2);
    if (margin < 500) {
    chip.style.cssText = `margin-left: ${margin}px;`
    console.log(margin)}
    else {
        alert("You win")
    }
})