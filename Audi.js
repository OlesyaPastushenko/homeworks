class Audi extends Car {
  constructor(car_name, color) {
    super(color);
    this.car_name = car_name;
    this.color = color;
  }
  colorChange() {
    let audi = this.node;
    audi.style.background = this.color;
    let step = -0.1;
    audi.style.opacity = 1;
    setInterval(() => {
      audi.style.opacity = +audi.style.opacity + step;
      if (audi.style.opacity === "0") {
        step = 0.1;
      } else if (audi.style.opacity === "1") {
        step = -0.1;
      }
    }, 100);
  }
  init() {
    this.render();
    this.colorChange();
  }
}
