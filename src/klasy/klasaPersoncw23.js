
class car { //w klasie może byc wiele funkcji
    constructor(brand, model, yearOfProduction) { //w construktorze tworzymy konkreten pole this
        this.brand = brand; //pole-wlasciwosc klasy z parametrami
        this.model = model;
        this.yearOfProduction = yearOfProduction;
    }
//metody w obrębie klasy, to jakby funkcje w obrebie klasy


    displayBrandAndModel() {
        console.log("Brand: " + this.brand + "model: " + this.model);
    }

    drive() {
        console.log("Driving");
    }
}
function createCar(){ //funkcja poza klasą
    let fiat500=new car("Fiat","500",2010); //obiekt fiat500
    fiat500.displayBrandAndModel();
    console.log("Rok produkcji: "+fiat500.yearOfProduction);
}