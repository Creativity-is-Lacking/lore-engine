var canvas = document.getElementById('cvs');
var c = canvas.getContext('2d');
var ocan = document.createElement("canvas");
var oc = ocan.getContext('2d');
ocan.width=canvas.width;
ocan.height=canvas.height;
var offx = canvas.offsetLeft;
var offy = canvas.offsetTop;
var lastX = 0,lastY=0;
var active = -1;
var elems = 0;

var boxes = new Array();

$(document).ready(function(){
$('#cvs').mousedown(function(e){
  var x = e.pageX-offx;
  var y = e.pageY-offy;
  active = getID(x,y);
  lastX = x;
  lastY = y;
  if(active>=0){
  if (boxes[active].isCorner(x,y)==1){
    $(window).bind("mousemove",function(e){
        var x = e.pageX-offx;
        var y = e.pageY-offy;
      if(active>=0){
        lastX = x;
        lastY = y;
        oc.clearRect(0,0,1200,800);
        c.clearRect(0,0,1200,800);
        for(var i=0;i<elems;i++){
          boxes[i].draw();
        }
      }
    });
  }
  else {
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
        for(var i=0;i<elems;i++){
          boxes[i].draw();
        }
    });
  }
  }
  $(window).bind('mouseup',function() {
      $(this).unbind('mousemove');
      active = -1;
      oc.clearRect(0,0,1200,800);
      c.clearRect(0,0,1200,800);
      for(var i=0;i<elems;i++){
          boxes[i].draw();
      }
  });
});
});

function getID(x,y){
   var p = oc.getImageData(x, y, 1, 1).data;
  //use blue channel as reference to
  //see if it's a fuzzy edge pixel
  if(p[2]==255) return p[0];
  else return 0;
}

function randomColor(){
    var cc = new Array();
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
    return "#"+((r << 16) | (g << 8) | b).toString(16);
}

function uiBox(id,x,y,w,h,color){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;
  this.id = id;
  this.draw = function(){
    c.fillStyle = this.color;
    oc.fillStyle = 'rgb('+this.id+',0,255)';
    c.fillRect(this.x,this.y,this.w,this.h);
    oc.fillRect(this.x,this.y,this.w,this.h);
  }
  this.isCorner = function(l,t){
    var checkx = l > (this.x+this.w-10);
    var checky = t > (this.y+this.h-10);
    return (checkx&&checky);
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
  this.isCorner = function(l,t){
    var checkx = l > (this.x+this.r-10);
    return (checkx);
  }
}
