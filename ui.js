var button = document.getElementById("add");
button.onclick = function(){
  boxes.push(new uiBox(elems,650,450,210,160,"#329ea8"));
  elems++;
};
