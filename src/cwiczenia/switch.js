/**
 *
 */
function testTypes() {

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