class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log(this.model + " заведена");
    }
}
class F1 extends Cars {
    constructor(model, color, wheels, speed) {
        super(model, color, wheels);
        this.speed = speed;
    }
    start() {
        console.log(this.model+ " самая большая скорость: "+ this.speed + " km/h");
    }
}
class SportCars extends F1 {
    constructor(model, color, wheels, speed, seat) {
        super(model, color, wheels, speed);
        this.seat = seat;
    }
    start(){
        console.log(this.model + " — спорткар на " + this.seat + " места, скорость: " + this.speed + " km/h");
    }
}
class Vintage extends SportCars {
    constructor(model, color, wheels, speed, seat, years) {
        super(model, color, wheels, speed, seat);
        this.years = years;
    }
    start(){
        console.log(this.model + " — винтажная машина " + this.years + " года");
    }
}
const f1Cars = new F1("Ferrari", "red", 4, 375);
const sportCars = new SportCars("Chevrolet Corvette", "yellow", 4, 194, 2);
const vintageCars = new Vintage("1959 Cadillac", "pink", 4, 130, 4, 1959);

f1Cars.start();
sportCars.start();
vintageCars.start();