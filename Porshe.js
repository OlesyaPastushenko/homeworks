class Porsche extends Car {
    constructor(car_name,price){
        super(price);
        this.car_name = car_name;
        this.price = price;
    }
    addPrice() {
        let porsche = this.node;
        let div = document.createElement("div");
        div.innerHTML = `price:  ${this.price}$`;
        porsche.append(div);
    }
    init() {
        this.render();
        this.addPrice();
    }
}
