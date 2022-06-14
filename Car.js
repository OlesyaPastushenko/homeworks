class Car {
    constructor (car_name) {
        this.car_name = car_name;
    }

    render () {
        const body = document.body
        this.node = document.createElement("div");
        this.node.className = this.car_name;
        body.append(this.node);
    }
}




