function razem(number1) {
    let kwadrat = number1 * number1; //number1 **2
    let szescian = number1 * number1 * number1; //number1**3

    console.log(kwadrat);
    console.log(szescian);
}

console.log('');

function kwa(number) {
  return number **2;
}
function szes(number) {
    return number **3;
}
function wszystko() {
console.log(kwa(4));
console.log(szes(2))
}

console.log('');

function all(value,potega) {
    return value **potega;
}
function ok() {
    console.log(all(3,2));
    console.log(all(3,3));
    console.log(all(3,10));
}