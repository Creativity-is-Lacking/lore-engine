circleBlue.style.value = false;
circleMag.style.value = false;
circleMar.style.value = false;
circleGrey.style.value = false;
useCircleDim.defaultChecked = true;
useCircleSetColor.defaultChecked = true;
circleDimCont.style.display = "none"
circleCustColor.style.display = "none"

circleBlue.onclick = function() {
  circleBlue.style.value = true;
   circleMag.style.value = false;
   circleMar.style.value = false;
  circleGrey.style.value = false;
}

circleMag.onclick = function() {
  circleBlue.style.value = false;
   circleMag.style.value = true;
   circleMar.style.value = false;
  circleGrey.style.value = false;
}

circleMar.onclick = function() {
  circleBlue.style.value = false;
   circleMag.style.value = false;
   circleMar.style.value = true;
  circleGrey.style.value = false;
}

circleGrey.onclick = function() {
  circleBlue.style.value = false;
   circleMag.style.value = false;
   circleMar.style.value = false;
  circleGrey.style.value = true;
}

Circlebtn.onclick = function() {
  Circlemodal.style.display = "block";
}

Circlespan.onclick = function() {
  Circlemodal.style.display = "none";
}

useCircleDim.onclick = function() {
  if(useCircleDim.checked)
    circleDimCont.style.display = "none";
  else
    circleDimCont.style.display = "inherit";
  }

useCircleSetColor.onclick = function() {
  if(useCircleSetColor.checked) {
    circleCustColor.style.display = "none";
    circleColorCont.style.display = "inherit";
  } else {
    circleCustColor.style.display = "inherit";
    circleColorCont.style.display = "none";
  }
}

circleAdd.onclick = function() {
  let color = "#A020F0";
  if(useCircleSetColor.checked){
    if(circleBlue.style.value)
      color = "midnightblue";
    if(circleMag.style.value)
      color = "darkmagenta";
    if(circleMar.style.value)
      color = "maroon";
    if(circleGrey.style.value)
      color = "dimgrey";
  } else {
    color = circleCustColor.value;
  }
  let radius = 50;
  if(!useCircleDim.checked) {
    radius = Number(circleRad.value);
  }
  uiElements.push(new uiCircle(uiElements.length,650,450,radius,color));
  elems++;
  for(var i=0;i<elems;i++){
    uiElements[i].draw();
  }
  Circlemodal.style.display = "none";
  circleBlue.style.value = false;
  circleMag.style.value = false;
  circleMar.style.value = false;
  circleGrey.style.value = false;
}
