function sum(number1,number2) {
    console.log(number1+number2);
}

function getSum (){
    sum(3,4);
}

function sum(number1,number2) {
    let sum = number1+number2;
    return sum;
}
function getSum(){
    let finalSum;
    //Do finalSum jest zapisywana wartość zwracana
    //z funkcji sum
    finalSum = sum(3,4);
    console.log(finalSum);
}