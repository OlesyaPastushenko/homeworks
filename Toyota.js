class Toyota extends Car {
  constructor(car_name, speed) {
    super(speed);
    this.car_name = car_name;
    this.speed = speed;
  }
  init() {
    this.render();
    this.showProbeg();
  }
  showProbeg() {
    let toyota = this.node;
    let car_name = this.car_name;
    let speed = this.speed;
    let probeg = 0;
    let div = document.createElement("div");
    setInterval(function () {
      probeg += 1;
      toyota.innerHTML = car_name;
      div.innerHTML = probeg;
      toyota.append(div);
    }, speed * 100);
  }
}

const toyota_probeg = new Toyota("toyota", 3);
toyota_probeg.init();
