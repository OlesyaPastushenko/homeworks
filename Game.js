class Game {
  constructor() {
    this.level = new Level()
    this.interval = 1000;
    this.count = 0;
  }
  start() {
    var tab = document.createElement('div');
    tab.className = "tab";
    tab.innerHTML = "Опыт:" + this.count + " Уровень:" + this.level.level
    document.body.append(tab)
    this.balls = [];
    this.intervalStart = setInterval(() => {
     this.balls.push(new ControlBall(this.level.level).init())
     this.balls[this.balls.length-1].addEventListener("click", ()=>{
        this.count++
        if(this.count === 10){
            this.count = 0;
            this.level.level++
        }
        tab.innerHTML = "Опыт:" + (this.count + (this.level.level - 1) * 10) + " Уровень:" + this.level.level
     })
    }, this.interval)}
  
  gameOver() {
    this.balls.forEach((el) => el.destroy());
    clearInterval(this.intervalStart);
  }
}
