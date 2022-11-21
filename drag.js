var canvas = document.getElementById('cvs');
var c = canvas.getContext('2d');
var ocan = document.createElement("canvas");
var oc = ocan.getContext('2d', {willReadFrequently: true});
ocan.width=canvas.width;
ocan.height=canvas.height;
var offx = canvas.offsetLeft;
var offy = canvas.offsetTop;
var lastX = 0,lastY=0;
var active = -1;
var elems = 0;
var mode = '';

var boxes = new Array();
var links = new Array();
var highlights = new Array();

$(document).ready(function(){
$('#cvs').mousedown(function(e){
  var x = e.pageX-offx;
  var y = e.pageY-offy;
  active = getID(x,y);
  lastX = x;
  lastY = y;
  if(mode == 'link') {
    if(active>=0){
      let newColor = hexToRgb(standardize_color(boxes[active].color));
      newColor.r = newColor.r*1.5;
      newColor.g = newColor.g*1.5;
      newColor.b = newColor.b*1.5;
      let h = new uiBox(boxes[active].id,boxes[active].x-5,boxes[active].y-5,boxes[active].w+5,boxes[active].h+5,rgbToHex(newColor.r,newColor.g,newColor.b),boxes[active]);
      h.draw();
      for(var i=0;i<elems;i++){
          boxes[i].draw();
        }
      highlights.push(h);
      if(highlights.length>=2){
        let l = new linkLine(links.length, highlights[0].parent, highlights[1].parent, '#ffffff')
        l.draw();
        links.push(l);
        for(var i=0;i<=highlights.length;i++){
          highlights.pop();
        }
      }
    }
  } else if(active>=0){
        $(window).bind("mousemove",function(e){
        var x = e.pageX-offx;
        var y = e.pageY-offy;
        if(active>=0){
          boxes[active].x+=x-lastX;
          boxes[active].y+=y-lastY;
        }
        lastX = x;
        lastY = y;
        oc.clearRect(0,0,1200,800);
        c.clearRect(0,0,1200,800);
        for(var i=0;i<highlights.length;i++){
          highlights[i].draw();
        }
        for(var i=0;i<elems;i++){
          boxes[i].draw();
        }
        for(var i=0;i<links.length;i++){
          links[i].draw();
        }
    });
  }
  $(window).bind('mouseup',function() {
      $(this).unbind('mousemove');
      active = -1;
      oc.clearRect(0,0,1200,800);
      c.clearRect(0,0,1200,800);
      for(var i=0;i<highlights.length;i++){
        highlights[i].draw();
      }
      for(var i=0;i<elems;i++){
        boxes[i].draw();
      }
      for(var i=0;i<links.length;i++){
        links[i].draw();
      }
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

function uiBox(id,x,y,w,h,color,parent=null){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.parent = parent;
  this.color = color;
  this.id = id;
  this.draw = function(){
    c.fillStyle = this.color;
    oc.fillStyle = 'rgb('+this.id+',0,255)';
    c.fillRect(this.x,this.y,this.w,this.h);
    oc.fillRect(this.x,this.y,this.w,this.h);
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
    var startPointX = box1.x + box1.w;
    var startPointY = box1.y + (box1.h/2);
    var endPointX = box2.x;
    var endPointY = box2.y + (box2.h/2);
    var midX = (startPointX + endPointX)/2;
    var midY = (startPointY + endPointY)/2;
    c.bezierCurveTo(startPointX,startPointY,(startPointX+midX)/2,((0.5*startPointY)+midY)/2,midX,midY);
    c.bezierCurveTo(midX,midY,(midX+endPointX)/2,(midY+(1.5*endPointY))/2,endPointX,endPointY);
    //double bezier idea: curve to (dx/2,dy/2) with cp @ (startx - dx/4,starty - dy/4),  curve from (dx/2,dy/2) to (finalx,finaly) with cp @ (startx + dx/4,starty + dy/4)
    oc.bezierCurveTo(startPointX,startPointY,(startPointX+midX)/2,((0.5*startPointY)+midY)/2,midX,midY);
    oc.bezierCurveTo(midX,midY,(midX+endPointX)/2,(midY+(1.5*endPointY))/2,endPointX,endPointY);
    c.stroke();
    oc.stroke();
    c.fillRect((startPointX+midX)/2-5,((0.5*startPointY)+midY)/2-5,10,10);
    c.fillRect((midX+endPointX)/2-5,(midY+(1.5*endPointY))/2-5,10,10);
    oc.fillRect((startPointX+midX)/2-5,((0.5*startPointY)+midY)/2-5,10,10);
    oc.fillRect((midX+endPointX)/2-5,(midY+(1.5*endPointY))/2-5,10,10);
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
