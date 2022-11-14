var Boxmodal = document.getElementById("Boxmodal");
var Boxbtn = document.getElementById("Boxbtn");
var Boxspan = document.getElementsByClassName("close")[0];
var useBoxDim = document.getElementById("useBoxDim");
var boxDimCont = document.getElementById("boxDimCont");
var useBoxCustColor = document.getElementById("useCustColor");
var boxColorCont = document.getElementById("boxColorCont");
var boxCustColor = document.getElementById("boxColor");
var boxHeight = document.getElementById("boxHeight");
var boxWidth = document.getElementById("boxWidth");

useBoxDim.defaultChecked = true;
useBoxCustColor.defaultChecked = true;
boxDimCont.style.display = "none"
boxCustColor.style.display = "none"

Boxbtn.onclick = function() {
  Boxmodal.style.display = "block";
}
Boxspan.onclick = function() {
  Boxmodal.style.display = "none";
}
useBoxDim.onclick = function() {
  if(useBoxDim.checked)
    boxDimCont.style.display = "none";
  else
    boxDimCont.style.display = "inherit";
}
useBoxCustColor.onclick = function() {
  if(useBoxCustColor.checked) {
    boxCustColor.style.display = "inherit";
    boxColorCont.style.display = "none";
  } else {
    boxCustColor.style.display = "none";
    boxColorCont.style.display = "inherit";
  }
}
window.onclick = function(event) {
  if (event.target == Boxmodal) {
    Boxmodal.style.display = "none";
  }
}
