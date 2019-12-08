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
        let final=x1(2,2,2);
        console.log(final)
    } catch (e) {
        console.log(e);
    }

}

