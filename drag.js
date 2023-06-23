var canvas = document.getElementById('cvs');
var c = canvas.getContext('2d');
c.font = "48px serif";
var ocan = document.createElement("canvas");
var oc = ocan.getContext('2d', {willReadFrequently: true});
canvas.height = window.innerHeight - document.getElementsByClassName("nav-ul")[0].clientHeight;
canvas.width = window.innerWidth;
ocan.height = canvas.height;
ocan.width = canvas.width;
var offx = canvas.offsetLeft;
var offy = canvas.offsetTop;
var lastX = 0,lastY=0;
var active = -1;
var elems = 0;
var mode = '';
var etype = 0;
var eactive = -1;

var boxes = new Array();
var links = new Array();
var highlights = new Array();

Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "none"});
Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "none"});
Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "none"});

addEventListener("resize", (event) => {
  canvas.height = window.innerHeight - document.getElementsByClassName("nav-ul")[0].clientHeight;
  canvas.width = window.innerWidth;
  ocan.height = canvas.height;
  ocan.width = canvas.width;
  renderObjs();
});

document.getElementById("edittype").addEventListener("change", (event)=> {
  etype = document.getElementById("edittype").value;
  switch (etype) {
    case "1":
      Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "block"});
      Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "none"});
      Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "none"});
      break;
    case "2":
      Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "none"});
      Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "block"});
      Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "none"});
      break;
    case "3":
      Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "none"});
      Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "none"});
      Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "block"});
      break;
    default:
      console.log("default");
      break;
  }
});

document.getElementById("EditConfirm").addEventListener("click", (event) => {
  switch (etype) {
    case "1":
      break;
    case "2":
      boxes[eactive].text = document.getElementById("edittext").value;
      break;
    case "3":
      break;
    default:
      console.log("default");
      break;
  }
  document.getElementById('Editmodal').style.display = "none";
  document.getElementById("edittext").value = "";
  renderObjs();
});

$(document).ready(function(){
$('#cvs').mousedown(function(e){
  var x = e.pageX-offx;
  var y = e.pageY-offy;
  active = getID(x,y);
  if(active >= 0 && boxes[active].locked) {
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
      document.getElementById("edittext").value = boxes[active].text;
      var editee = boxes[active];
      if(editee.etype == "1")
        Array.from(document.getElementsByClassName("editimg")).forEach(element => {element.style.display = "block"});
      if(editee.etype == "2")
        Array.from(document.getElementsByClassName("edittxt")).forEach(element => {element.style.display = "block"});
      if(editee.etype == "3")
        Array.from(document.getElementsByClassName("editblank")).forEach(element => {element.style.display = "block"});
      document.getElementById('Editmodal').style.display = "block";
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
      let tempObj = boxes[highlights[0].parent.id-1];
      if(tempObj != null) {
        boxes[highlights[0].parent.id-1] = boxes[highlights[0].parent.id];
        boxes[highlights[0].parent.id] = tempObj;
        boxes[highlights[0].parent.id].id = highlights[0].parent.id;
        boxes[highlights[0].parent.id-1].id = tempObj.id-1;
      }
      for(var i=0;i<=highlights.length;i++){
        highlights.pop();
      }
    }
  }
  if(mode == 'Forder' && active>=0){
    highlightObj(active);
    if(highlights.length>=1){
      let tempObj = boxes[highlights[0].parent.id+1];
      if(tempObj != null) {
        boxes[highlights[0].parent.id+1] = boxes[highlights[0].parent.id];
        boxes[highlights[0].parent.id] = tempObj;
        boxes[highlights[0].parent.id].id = highlights[0].parent.id;
        boxes[highlights[0].parent.id+1].id = tempObj.id+1;
      }
      for(var i=0;i<=highlights.length;i++){
        highlights.pop();
      }
    }
  }
  if(mode == 'lock' && active >= 0) {
    highlightObj(active);
    if(highlights.length>=1){
      boxes[active].locked = true;
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
          boxes[active].x+=x-lastX;
          boxes[active].y+=y-lastY;
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

function getID(x,y){
   var p = oc.getImageData(x, y, 1, 1).data;
  //use blue channel as reference to
  //see if it's a fuzzy edge pixel
  if(p[2]==255) return p[0];
  else return -1;
}

function uiBox(id,x,y,w,h,color,parent=null,locked=false,etype=null,text=null,innerImage=null){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.parent = parent;
  this.locked = locked;
  this.etype = etype;
  this.text = text;
  this.innerImage = innerImage;
  this.textElement = document.createElement("p");
  this.textElement.style.color = "white";
  this.textElement.style.zIndex = "1";
  this.textElement.style.position = "absolute";
  this.textElement.style.pointerEvents = "none";
  this.textElement.style.margin = "0px";
  this.textElement.style.overflow = "hidden";
  this.textDrawFlag = false;
  this.color = color;
  this.id = id;
  this.draw = function(){
    c.fillStyle = this.color;
    oc.fillStyle = 'rgb('+this.id+',0,255)';
    c.fillRect(this.x,this.y,this.w,this.h);
    oc.fillRect(this.x,this.y,this.w,this.h);
    if(this.text != null){
      const rect = c.canvas.getBoundingClientRect();
      this.textElement.innerText = this.text;
      this.textElement.style.maxWidth = this.w + "px";
      this.textElement.style.maxHeight = this.h + "px";
      this.textElement.style.left = this.x + "px";
      this.textElement.style.top = this.y + rect.top + "px";
      if(this.textDrawFlag == false){
        this.textElement = document.body.appendChild(this.textElement);
        this.textDrawFlag = true;
      }
    }
  }
}

function uiCircle(id,x,y,r,color){
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.id = id;
  this.draw = function(){
    c.fillStyle = this.color;
    oc.fillStyle = 'rgb('+this.id+',0,255)';
    c.beginPath();
    oc.beginPath();
    c.arc(this.x,this.y,this.r, 0, 2 * Math.PI, false);
    oc.arc(this.x,this.y,this.r, 0, 2 * Math.PI, false);
    c.closePath();
    oc.closePath();
    c.fill();
    oc.fill();
  }
}

function linkLine(id, box1, box2, color){
  this.draw = function(){
    this.box1 = box1;
    this.box2 = box2;
    this.color = color;
    this.id = id;
    c.strokeStyle = '#ffffff';
    c.beginPath();
    oc.beginPath();
    c.moveTo(box1.x + box1.w,box1.y + (box1.h/2));
    oc.moveTo(box1.x + box1.w,box1.y + (box1.h/2));
    let startPointX = box1.x + box1.w;
    let startPointY = box1.y + (box1.h/2);
    let endPointX = box2.x;
    let endPointY = box2.y + (box2.h/2);
    let midX = (startPointX + endPointX)/2;
    let midY = (startPointY + endPointY)/2;
    let RquarterX = (midX + endPointX)/2;
    let RquarterY = (midY + endPointY)/2;
    let LquarterX = (startPointX + midX)/2;
    let LquarterY = (startPointY + midY)/2;
    let deltaY = (endPointY - startPointY);
    if(startPointY >= endPointY) {
      LquarterY += (30 - 0.2*deltaY);
      RquarterY -= (30 - 0.2*deltaY);
    }
    if(startPointY < endPointY) {
      LquarterY -= (30 + 0.2*deltaY);
      RquarterY += (30 + 0.2*deltaY);
    }
    let crossPointX = intersect(startPointX, startPointY, endPointX, endPointY,LquarterX,LquarterY,RquarterX,RquarterY).x;
    let crossPointY = intersect(startPointX, startPointY, endPointX, endPointY,LquarterX,LquarterY,RquarterX,RquarterY).y;
    c.bezierCurveTo(startPointX,startPointY,LquarterX,LquarterY,crossPointX,crossPointY);
    c.bezierCurveTo(crossPointX,crossPointY,RquarterX,RquarterY,endPointX,endPointY);
    oc.bezierCurveTo(startPointX,startPointY,LquarterX,LquarterY,crossPointX,crossPointY);
    oc.bezierCurveTo(crossPointX,crossPointY,RquarterX,RquarterY,endPointX,endPointY);
    c.stroke();
    oc.stroke();
  }
}

function highlightObj(index) {
  let newColor = hexToRgb(standardize_color(boxes[index].color));
  newColor.r = newColor.r*1.5;
  newColor.g = newColor.g*1.5;
  newColor.b = newColor.b*1.5;
  let h = new uiBox(boxes[index].id,boxes[index].x-5,boxes[index].y-5,boxes[index].w+10,boxes[index].h+10,rgbToHex(newColor.r,newColor.g,newColor.b),boxes[index]);
  h.draw();
  for(var i=0;i<elems;i++){
    boxes[i].draw();
  }
  highlights.push(h);
}

function renderObjs() {
  oc.clearRect(0,0,ocan.width,ocan.height);
  c.clearRect(0,0,canvas.width,canvas.height);
  for(var i=0;i<highlights.length;i++){
    highlights[i].draw();
  }
  for(var i=0;i<elems;i++){
    boxes[i].draw();
  }
  for(var i=0;i<links.length;i++){
    links[i].draw();
  }
}

function componentToHex(c) {
  var hex = Math.round(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function standardize_color(str){
    let tempCan = document.createElement('canvas').getContext('2d');
    tempCan.fillStyle = str;
    return tempCan.fillStyle;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
	if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
		return false
	}
	denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
	if (denominator === 0) {
		return false
	}
	let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
	let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
		return false
	}
	let x = x1 + ua * (x2 - x1)
	let y = y1 + ua * (y2 - y1)
	return {x, y}
}
