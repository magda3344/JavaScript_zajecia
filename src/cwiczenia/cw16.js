//while- pętle, wielokrotne wykonanie bloku kodu w {}, może nie byc wykonana ani razu

function whileTest() {

    let a = 0;
    let b = 16;

    while (a < b) {
        if (a % 3 == 0) {
            console.log(a);
        }
        a++;
    }
//cwiczenie 17
    let c = 0;
    let d = 4; //sumuje 0+1+2+3+4 = 10
    let suma = 0;

    while (c <= d) {
          suma = suma + c; //suma += c   to to samo
          c++
        console.log(suma); //wyświetla sumę po każdej pętli
    }
   console.log(suma); //wyświetla sumę jedną tylko po skonczonym wszystkim

    //pętla do..while - zawsze przynajmniej raz zostanie wykonana




}