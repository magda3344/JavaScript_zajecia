function x(dlugosc,szerokosc,wysokosc) {
let objetosc1 = dlugosc * szerokosc * wysokosc;
return objetosc1
}
function y(polePodstawy,wysokosc) {
let objetosc2 = polePodstawy* wysokosc;
return objetosc2
}
function ok(){
console.log(x(2,3,4));
console.log(y(6,4));
}
// kolejny krok, + tez wyjątek minusowy
function x1(a,b,h) {
if (a<=0|| b<=0||h<=0){
throw "Podano nieprawidłowy parametr";
}
let area =a*b;
let result = y1(area,h);
return result
}
function y1(area,h) {
let result = area*h;
return result
}
function ok1(){
try{
let final=x1(2,-2,2);
console.log(final)
} catch (e) {
console.log(e);
}
}

/*chciałam zrobić ćwiczenie 21
function cos(number2){
var result={
for (let number1=0; number1<number2;number1++){
if (number1%3==0)
}
return result}
console.log(cos(100));

}

function k(){
b=16
    for (let a = 0; a < b; a++) {
        if (a % 3 == 0) {
            console.log(a);
        }
    }
    }
    */