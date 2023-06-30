boxBlue.style.value = false;
boxMag.style.value = false;
boxMar.style.value = false;
boxGrey.style.value = false;
useBoxDim.defaultChecked = true;
useBoxSetColor.defaultChecked = true;
boxDimCont.style.display = "none"
boxCustColor.style.display = "none"

boxBlue.onclick = function() {
    boxBlue.style.value = true;
     boxMag.style.value = false;
     boxMar.style.value = false;
    boxGrey.style.value = false;
}

boxMag.onclick = function() {
    boxBlue.style.value = false;
     boxMag.style.value = true;
     boxMar.style.value = false;
    boxGrey.style.value = false;
}

boxMar.onclick = function() {
    boxBlue.style.value = false;
     boxMag.style.value = false;
     boxMar.style.value = true;
    boxGrey.style.value = false;
}

boxGrey.onclick = function() {
    boxBlue.style.value = false;
     boxMag.style.value = false;
     boxMar.style.value = false;
    boxGrey.style.value = true;
}

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
  useBoxSetColor.onclick = function() {
    if(useBoxSetColor.checked) {
      boxCustColor.style.display = "none";
      boxColorCont.style.display = "inherit";
    } else {
      boxCustColor.style.display = "inherit";
      boxColorCont.style.display = "none";
    }
  }
  boxAdd.onclick = function() {
    let color = "#A020F0";
    if(useBoxSetColor.checked){
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
      width = Number(boxWidth.value);
      height = Number(boxHeight.value);
    }
    uiElements.push(new uiBox(elems,650,450,width,height,color));
    elems++;
    for(var i=0;i<elems;i++){
      uiElements[i].draw();
    }
    Boxmodal.style.display = "none";
    boxBlue.style.value = false;
    boxMag.style.value = false;
    boxMar.style.value = false;
    boxGrey.style.value = false;
}