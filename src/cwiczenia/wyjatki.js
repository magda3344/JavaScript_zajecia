function testException() {
// wtedy gdy to nie my wrzucamy wyjątek
    try {
        console.log("Początek try");
        console.log(a); //wrzucamy wyjątek, nie mamy zdefiniowanej zmiennej a
        //linie po wyjątku w bloku try nie są wykonywane
        console.log("Dalsza czesc try");
    } catch (e) {  //zmienna w której przechowujemy informacje o zmiennej
        //blok kodu wykonywany w przypadku rzucenia wyjątku
        console.log(e);
        console.log("Koniec catch");
    } finally {
        //blok kodu wykonywany niezależnie od tego czy pojawi się wyjątek czy tez nie
        console.log("Sekcja finally");
    }
}
    console.log('');
    //sami wrzucamy wyjątek, chcemy to zrobic
//dodaje w gicie
    function testException1() {
    try {
        console.log("Początek try");
       throw new Error ("Wyjątek w linii 20"); //własny wyjątek
        console.log("Dalsza czesc try");
    } catch (e) {
        console.log(e);
        console.log("Koniec catch");
    } finally {
        console.log("Sekcja finally");
    }
}
