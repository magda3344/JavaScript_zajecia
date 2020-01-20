function arrayPD1() {

var a=['jeden','dwa','trzy','cztery','pięć'];
//var a=new Array('jeden','dwa','trzy','cztery','pięć'); //a- to jest cała tablica
for(var b in a ){ //zmienna b w tablicy a, czyli każda z wartości w tablicy
    //document.write(a[b]); //wyświetl każdą wartość b w tablicy a
}
    document.getElementById("demo").innerHTML = a;

var wpisz = prompt("Wpisz coś:", "coś wpisałam");
    var k=[wpisz,'dwa','trzy','cztery','pięć'];
for(var c in k){
}
    document.getElementById("demo1").innerHTML = k;
}


//a[0]= to pierwszy element tablicy
//console.log(a[0]); - wyświetli sie tylko pierszwy element tablicy

