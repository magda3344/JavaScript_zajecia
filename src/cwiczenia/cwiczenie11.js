/**
 *
 */
function testTypes() {
  var a=2;
  var b=3;
  var c=4;

  console.log("pole prostokata = " +(a*b));
  console.log("srednia trzech liczb wynosi: "+((a+b+c)/3));

  var dystans = 10;
  var spalanie1 = 2;
  var spalanie2 = 5;

  console.log ("spalone paliwo: "+(spalanie1/spalanie2)*dystans);

  let d="wtorek";
  let e=6;
  let f="czerwiec";
  let g="sierpien";

  console.log("czy dzisiaj jest poniedziałek? "+ (d=="poniedziałek"));
  console.log("Liczba jest parzysta? "+ (e%2==0));
  console.log(f.length>g.lenght);

  var age=20;
  if (age>18) {
    console.log("wiek ponad 18 lat");
  } else if (age===18) { //jeżeli tak nie jest
    console.log("wiek równy 18 lat");
  } else{ //jeżeli nie jest tak jak w 1 i 2
    console.log("wiek poniżej 18 lat");
  }

  var temperatura = 15;
  var progZimno = 15;

  if (temperatura>progZimno) {
    console.log("Za oknem jest ciepło");
  }else {
        console.log("Za oknem jest zimno");
      }

  var naszaTemperatura = 10;
  var progZimno1 = 20;
  var progZimno2 = 12;
  var progZimno3= 1;

  if (naszaTemperatura>progZimno1) {
    console.log("Za oknem jest bardzo ciepło");
  }else if (naszaTemperatura>progZimno2 && naszaTemperatura<progZimno1) {
    console.log("Za oknem jest ciepło");
  } else if (naszaTemperatura>progZimno3 && naszaTemperatura<progZimno2) {
    console.log("Za oknem jest zimno");
  } else {
    console.log("Za oknem jest  bardzo zimno");
  }

  var temp = 14;
  var zimno = 5;

  switch (true) { //jak wpiszemy true, to wszystko ponizej się robi
    case temp>15:
      console.log("jest super");
      break;
    case temp>zimno:
      console.log("jest ok");
      break;
    case temp==zimno:
      console.log("jest prawie ok");
      break;
    default:
      console.log("nie jest ok");
  }
var expr = "orange";
  switch (expr){
    case "orange":
      console.log("Orange are picked");
      console.log("coś");
      break;
    case "Mango":
    case "Papaya":
      console.log("to nie to");
      break;
    default:
      console.log("Sorry, to nie owoce")
  }
}