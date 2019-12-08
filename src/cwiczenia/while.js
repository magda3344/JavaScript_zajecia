function testTetriaryTest() {
    //operator trójargumentowy - ?
    var expr=31;
    var wynik = expr>20 ? "wartość jest większa od 20": "wartość jest mniejsza od 20";

    let wynik2 = expr>20 ? (expr<30 ? "Większa od 20 i mniejsza od 30":
        "większa od 30" ): "mniejsza lub równa 20";

    console.log(wynik);
    console.log(wynik2);

    //while- pętle, wielokrotne wykonanie bloku kodu w {}


    function whileTest (){

        let value = 5;

        while (value>0) {
            console.log("Wartość: ");
            console.log(value--); //value=value-2;
        }
    }



}