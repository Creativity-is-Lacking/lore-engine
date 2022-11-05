var button = document.getElementById("add");
button.onclick = function(){
  boxes.push(new uiBox(1,0,0,3,3,1));
  elems++;
};
