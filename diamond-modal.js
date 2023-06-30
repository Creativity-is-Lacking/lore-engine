diamondBlue.style.value = false;
diamondMag.style.value = false;
diamondMar.style.value = false;
diamondGrey.style.value = false;
useDiamondDim.defaultChecked = true;
useDiamondSetColor.defaultChecked = true;
diamondDimCont.style.display = "none"
diamondCustColor.style.display = "none"

diamondBlue.onclick = function() {
  diamondBlue.style.value = true;
   diamondMag.style.value = false;
   diamondMar.style.value = false;
  diamondGrey.style.value = false;
}

diamondMag.onclick = function() {
  diamondBlue.style.value = false;
   diamondMag.style.value = true;
   diamondMar.style.value = false;
  diamondGrey.style.value = false;
}

diamondMar.onclick = function() {
  diamondBlue.style.value = false;
   diamondMag.style.value = false;
   diamondMar.style.value = true;
  diamondGrey.style.value = false;
}

diamondGrey.onclick = function() {
  diamondBlue.style.value = false;
   diamondMag.style.value = false;
   diamondMar.style.value = false;
  diamondGrey.style.value = true;
}

Diamondbtn.onclick = function() {
  Diamondmodal.style.display = "block";
}

Diamondspan.onclick = function() {
  Diamondmodal.style.display = "none";
}

useDiamondDim.onclick = function() {
  if(useDiamondDim.checked)
    diamondDimCont.style.display = "none";
  else
    diamondDimCont.style.display = "inherit";
}
useDiamondSetColor.onclick = function() {
  if(useDiamondSetColor.checked) {
    diamondCustColor.style.display = "none";
    diamondColorCont.style.display = "inherit";
  } else {
    diamondCustColor.style.display = "inherit";
    diamondColorCont.style.display = "none";
  }
}
diamondAdd.onclick = function() {
  let color = "#A020F0";
  if(useDiamondSetColor.checked){
    if(diamondBlue.style.value)
      color = "midnightblue";
    if(diamondMag.style.value)
      color = "darkmagenta";
    if(diamondMar.style.value)
      color = "maroon";
    if(diamondGrey.style.value)
      color = "dimgrey";
  } else {
    color = diamondCustColor.value;
  }
  let width = 210;
  let height = 160;
  if(!useDiamondDim.checked) {
    width = Number(diamondWidth.value);
    height = Number(diamondHeight.value);
  }
  uiElements.push(new uiDiamond(uiElements.length,650,450,width,height,color));
  renderObjs();
  Diamondmodal.style.display = "none";
  diamondBlue.style.value = false;
  diamondMag.style.value = false;
  diamondMar.style.value = false;
  diamondGrey.style.value = false;
}
