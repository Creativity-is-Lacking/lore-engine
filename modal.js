var Boxmodal = document.getElementById("Boxmodal");
var Boxbtn = document.getElementById("Boxbtn");
var Boxspan = document.getElementsByClassName("close")[0];
Boxbtn.onclick = function() {
  Boxmodal.style.display = block;
}
Boxspan.onclick = function() {
  Boxmodal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == Boxmodal) {
    Boxmodal.style.display = "none";
  }
}
