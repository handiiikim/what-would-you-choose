
function showIt() {
  document.getElementById("first").style.visibility = "visible";
}
setTimeout("showIt()", 1000); // after 1 sec

function showIt2() {
  document.getElementById("picket2").style.visibility = "visible";
}
setTimeout("showIt2()", 4000); // after 5 secs

function showIt3() {
  document.getElementById("question1").style.visibility = "visible";
}
setTimeout("showIt3()", 6000); // after 5 secs
