var button = document.getElementById("add");
button.onclick = function(){
  boxes.push(new uiBox(elems,650,450,210,160,"#329ea8"));
  elems++;
  for(var i=0;i<elems;i++){
    boxes[i].draw();
  }
  new uiBox(-1,0,0,oc.width,oc.height/10,"red").draw();
};
