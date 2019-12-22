
    function myFunction(){
        var txt;
        var person = prompt ("Wprowadż swoje imię:", "Jan Kowalski");

        if (person==null || person =="") {
            txt = "Anulowano przez Użytkownika";
        }else{
            txt = "Witaj "+person +"!";
        }
        document.getElementById("demo").innerHTML = txt;

}