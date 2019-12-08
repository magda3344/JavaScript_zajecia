//while- pętle, wielokrotne wykonanie bloku kodu w {}

function whileTest() {

    let value = 5; //zaczynam od tego

    while (value > 0) { //aż do >0 czyli do 1
        console.log("Wartość: ");
        console.log(value--); //value=value-2;
    }

//wypisuje liczby parzyste od 0 do mniejsze niz 10

    let value1 =0;
    while (value1<10) {
        if (value1%2==0){
            console.log(value1);
        }
        value1++;
    }
    //inny sposób

    let val2 =0;
    while (val2<10) {
        console.log(val2);
        val2 +=2; //co drugi począwszy od zera
    }

}