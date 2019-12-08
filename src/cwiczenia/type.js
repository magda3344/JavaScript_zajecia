/**
 *
 */
function testTypes() {

    let age=40;
    let name="Jan";
    console.log( age);
    console.log(name);

    console.log( "age is type of: "+typeof age);
    console.log( "name is type of: "+typeof name);

    var NAME = "Magdalena";

    console.log(NAME + 33);
    console.log(NAME);

    var NAME = "Magdalena";
    console.log(NAME);

    var NAME = "Madzia";
    console.log(NAME);

    var isOlderThanFourty = true;

    console.log(isOlderThanFourty);

    var isOlderThanFourty = "true";
    console.log(isOlderThanFourty);

    let i=2;
    let j=2;
    //postinkrementacja
    console.log (i++);
    console.log (i);
    //preinkrementacja
    console.log (++j);
    console.log (j);

    var a ="wiersz";
    var b = 4
    var c= 35

    console.log(a+b);
    console.log(b-c);
    console.log(a/c);
    console.log(c%b);

    c-=b; //to to samo co c-b
    console.log(c);

    let val1="3";
    let val2=3;

    console.log(val1==val2);
    console.log(val1===val2);

    let val3=2;
    let val4=3;

    console.log(val3<val4);
    console.log(val3>=val4);
    console.log(val3<=val4);
    console.log(val3>=val4);

    var a1 = true;
    var a2 = false;
    var a3 = true;

    console.log(a1&&a2);
    console.log(a1||a2);
    console.log(!a1);
    console.log(a1+a3);
    console.log(a1+a2);
    console.log(val3>1 || val4>5);
    console.log(val3>1 && val4>5);

    let name3="Jan"; //typ prosty
   // let nameString = new String (value: "Jan"); typ obiektowy, powstaje na bazie klas

    console.log(typeof name3);

}