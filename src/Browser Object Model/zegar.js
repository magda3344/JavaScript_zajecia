
var tmr = setInterval(myFunc,1000);
function myFunc(){
    var d =new Date();
        document.getElementById("demo").innerHTML = d.toLocaleTimeString();

}