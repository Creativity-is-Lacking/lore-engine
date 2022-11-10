var Boxmodal = document.getElementById("Boxmodal");
var btn = document.getElementById("myBtn");
var Boxspan = document.getElementsByClassName("close")[0];
Boxspan.onclick = function() {
  Boxmodal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    Boxmodal.style.display = "none";
  }
}
