
class Person {
    constructor(name, surname, age) { //w construktorze tworzymy konkreten pole this
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    displayNameAndSurname() {
        console.log("Imię: " + this.name + "nazwisko: " + this.surname);
    }

    getNameAndSurname() {
        return "Imię: " + this.name + "nazwisko: " + this.surname;
    }
}
function createPerson(){
    let person1=new Person("Jan","Kowalski",40);
    person1.displayNameAndSurname();
    console.log("wiek: "+person1.age);
}