window.onmousedown = function(event) {
  if (event.target == Boxmodal) {
    Boxmodal.style.display = "none";
  }
  if (event.target == Circlemodal) {
    Circlemodal.style.display = "none";
  }
  if (event.target == Diamondmodal) {
    Diamondmodal.style.display = "none";
  }
  if (event.target == Editmodal) {
    Editmodal.style.display = "none";
  }
  if (event.target == Datamodal) {
    Datamodal.style.display = "none";
  }
}

dataLoad.onclick = function(){
  loadFromServer(pId.value);
  Datamodal.style.display = "none";
  pId.value = "";
};

dataSave.onclick = function(){
  saveToServer(pId.value, uiElements);
  Datamodal.style.display = "none";
  pId.value = "";
};

cvscont.addEventListener("scroll", (event) => {
  offx = canvas.offsetLeft - cvscont.scrollLeft;
  offy = canvas.offsetTop - cvscont.scrollTop;
});

addEventListener("resize", (event) => {
  let calcHeight = (window.innerHeight - document.getElementsByClassName("nav-ul")[0].clientHeight - (cvscont.offsetHeight - cvscont.clientHeight));
  let calcWidth = window.innerWidth;
  if(calcHeight > canvas.height){
    canvas.height = calcHeight;
    ocan.height = calcHeight
  }
  if(calcWidth > canvas.width){
    canvas.width = calcWidth;
    ocan.width = calcWidth
  }
  cvscont.style.height = calcHeight + "px";
  cvscont.style.width = calcWidth+ "px";
  renderObjs();
});
