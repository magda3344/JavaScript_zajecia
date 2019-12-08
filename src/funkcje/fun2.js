function sum(number1,number2) { //zmienne number 1 i number 2
  let result = number1+number2;
  return result; //coś z tej funkcji wychodzi, zwracanie z funkcji
}

function getSum(){ //wywołanie wyniku
    let resultGetSum = sum(3,4);
    console.log(resultGetSum);
}