class ControlBall {
    constructor (speed) {
        this.size = 100;
        this.speed = 5*speed;
        this.interval = 50;
    }
    init() {
        this.generateBall();
        this.move();
        return this.ball
    }
    generateBall() {
        this.ball = new Ball(this.size, this.generateX())
        this.ball.addEventListener('click',()=>{
            this.destroy();
        })
    
    }
    generateX() {
        return  Math.ceil(Math.random()*window.innerWidth - this.size)
    }
    destroy() {
        this.ball.remove();
        delete this;
    }

    move() {
        let y = 0;
        this.moveInerval = setInterval(()=>{
            y += this.speed;
            this.ball.style.top = `${y}px`;
             if (y>window.innerHeight - this.size) {
                clearInterval(this.moveInerval)
                this.destroy()

             }
        },this.interval)
    }
}