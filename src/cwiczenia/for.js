//pętla for


function whileTest() {

    //wypisać liczby parzyste od 0 do 10
    for (let value = 0; value < 10; value++) {
        if (value % 2 == 0) {
            console.log(value);
        }
    }
    //to samo inaczej zapisane
    for (let value = 0; value < 10; value += 2) {
        console.log(value);
    }

    console.log(''); //pusty wiersz
    //cwiczenie 18 -liczby podzielne przez 3 od 0 do okreslonej zmiennej

    b=16
    for (let a = 0; a < b; a++) {
        if (a % 3 == 0) {
            console.log(a);
        }
    }

}