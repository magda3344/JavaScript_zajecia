function arrayPD1() {

var a=['jeden','dwa','trzy','cztery','pięć'];
//var a=new Array('jeden','dwa','trzy','cztery','pięć'); //a- to jest cała tablica
for(var b in a ){ //zmienna b w tablicy a, czyli każda z wartości w tablicy

  //console.log(a[b]); //wyświetl każdą wartość b w tablicy a
}
var wpisz = prompt ("Wpisz coś:", "coś wpisałam");
document.getElementById("demo").innerHTML = a;
}

//a[0]= to pierwszy element tablicy
//console.log(a[0]); - wyświetli sie tylko pierszwy element tablicy