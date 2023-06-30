var canvas = document.getElementById('cvs');
var c = canvas.getContext('2d');
c.font = "48px serif";
var ocan = document.getElementById("ocan");
var oc = ocan.getContext('2d', {willReadFrequently: true});
var cvscont = document.getElementById("cvscont");
canvas.height = window.innerHeight - document.getElementsByClassName("nav-ul")[0].clientHeight;
canvas.width = window.innerWidth;
ocan.height = canvas.height;
ocan.width = canvas.width;
cvscont.height = canvas.height;
cvscont.width = canvas.width;
var offx = canvas.offsetLeft;
var offy = canvas.offsetTop;
var lastX = 0,lastY=0;
var active = -1;
var elems = 0;
var mode = '';
var etype = 0;
var eactive = -1;

var uiElements = new Array();
var links = new Array();
var highlights = new Array();

$(document).ready(function(){
$('#cvs').mousedown(function(e){
  var x = e.pageX-offx;
  var y = e.pageY-offy;
  active = getID(x,y);
  if(active >= 0 && uiElements[active].locked) {
    //create notif of locked status
    return;
  }
  if(mode == ''){
    lastX = x;
    lastY = y;
  }
  if(mode == 'link' && active>=0) {
    highlightObj(active);
    if(highlights.length>=2){
      let l = new linkLine(links.length, highlights[0].parent, highlights[1].parent, '#ffffff')
      l.draw();
      links.push(l);
      for(var i=0;i<=highlights.length;i++){
        highlights.pop();
      }
    }
  }
  if(mode == 'edit' && active >= 0){
    highlightObj(active);
    if(highlights.length>=1){
      eactive = active;
      document.getElementById("edittext").value = uiElements[active].text;
      var editee = uiElements[active];
      if(editee.etype == "1")
        Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "block"});
      if(editee.etype == "2")
        Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "block"});
      if(editee.etype == "3")
        Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "block"});
      Editmodal.style.display = "block";
    }
    for(var i=0;i<=highlights.length;i++){
      highlights.pop();
    }
  }
  if(mode == 'Halign' && active>=0){
    highlightObj(active);
    if(highlights.length>=2){
      highlights[0].parent.x = highlights[1].parent.x;
      for(var i=0;i<=highlights.length;i++){
        highlights.pop();
      }
    }
  }
  if(mode == 'Valign' && active>=0){
    highlightObj(active);
    if(highlights.length>=2){
      highlights[0].parent.y = highlights[1].parent.y;
      for(var i=0;i<=highlights.length;i++){
        highlights.pop();
      }
    }
  }
  if(mode == 'Border' && active>=0){
    highlightObj(active);
    if(highlights.length>=1){
      let tempObj = uiElements[highlights[0].parent.id-1];
      if(tempObj != null) {
        uiElements[highlights[0].parent.id-1] = uiElements[highlights[0].parent.id];
        uiElements[highlights[0].parent.id] = tempObj;
        uiElements[highlights[0].parent.id].id = highlights[0].parent.id;
        uiElements[highlights[0].parent.id-1].id = tempObj.id-1;
      }
      for(var i=0;i<=highlights.length;i++){
        highlights.pop();
      }
    }
  }
  //FIXME: text zIndex needs to be updated to clip properly
  if(mode == 'Forder' && active>=0){
    highlightObj(active);
    if(highlights.length>=1){
      let tempObj = uiElements[highlights[0].parent.id+1];
      if(tempObj != null) {
        uiElements[highlights[0].parent.id+1] = uiElements[highlights[0].parent.id];
        uiElements[highlights[0].parent.id] = tempObj;
        uiElements[highlights[0].parent.id].id = highlights[0].parent.id;
        uiElements[highlights[0].parent.id+1].id = tempObj.id+1;
      }
      for(var i=0;i<=highlights.length;i++){
        highlights.pop();
      }
    }
  }
  if(mode == 'lock' && active >= 0) {
    highlightObj(active);
    if(highlights.length>=1){
      uiElements[active].locked = true;
    }
    for(var i=0;i<=highlights.length;i++){
      highlights.pop();
    }
  }
  if(active>=0){
    $(window).bind("mousemove",function(e){
      if(mode == ''){
        var x = e.pageX-offx;
        var y = e.pageY-offy;
        if(active>=0){
          uiElements[active].x+=x-lastX;
          uiElements[active].y+=y-lastY;
        }
        lastX = x;
        lastY = y;
        renderObjs();
      }
    });
  }
  $(window).bind('mouseup',function() {
      $(this).unbind('mousemove');
      active = -1;
      renderObjs();
  });
});
});
