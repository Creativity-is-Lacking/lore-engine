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
var boxAdd = document.getElementById("boxAdd");
var boxBlue = document.getElementById("boxBlue");
var boxMag = document.getElementById("boxMag");
var boxMar = document.getElementById("boxMar");
var boxGrey = document.getElementById("boxGrey");

useBoxDim.defaultChecked = true;
useBoxCustColor.defaultChecked = true;
boxDimCont.style.display = "none"
boxCustColor.style.display = "none"
boxBlue.style.value = false;
boxMag.style.value = false;
boxMar.style.value = false;
boxGrey.style.value = false;

boxBlue.onclick = function() {boxBlue.style.value = !boxBlue.style.value}
boxMag.onclick = function() {boxMag.style.value = !boxMag.style.value}
boxMar.onclick = function() {boxMar.style.value = !boxMar.style.value}
boxGrey.onclick = function() {boxGrey.style.value = !boxGrey.style.value}

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
    boxCustColor.style.display = "none";
    boxColorCont.style.display = "inherit";
  } else {
    boxCustColor.style.display = "inherit";
    boxColorCont.style.display = "none";
  }
}
boxAdd.onclick = function() {
  let color = "#A020F0";
  if(!boxCustColor.clicked){
    if(boxBlue.style.value)
      color = "midnightblue";
    if(boxMag.style.value)
      color = "darkmagenta";
    if(boxMar.style.value)
      color = "maroon";
    if(boxGrey.style.value)
      color = "dimgrey";
  } else {
    color = boxCustColor.value;
  }
  let width = 210;
  let height = 160;
  if(!useBoxDim.checked) {
    width = boxWidth.value;
    height = boxHeight.value;
  }
  boxes.push(new uiBox(elems,650,450,width,height,color));
  elems++;
  for(var i=0;i<elems;i++){
    boxes[i].draw();
  }
  Boxmodal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == Boxmodal) {
    Boxmodal.style.display = "none";
  }
}
