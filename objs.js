function uiBox(id,x,y,w,h,color,parent=null,locked=false,etype=null,text=null,textColor=null,innerImage=null){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.parent = parent;
  this.locked = locked;
  this.etype = etype;
  this.text = text;
  this.blankFlag = false;
  this.innerImage = innerImage;
  this.textColor = textColor
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
    if(this.text != null && !this.blankFlag){
        if(this.textElement.style.display = 'none')
            this.textElement.style.display = '';
        if(this.textColor != null && this.textColor != this.textElement.style.color)
            this.textElement.style.color = this.textColor;
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
    if(this.blankFlag){
        if(this.textElement != null)
            this.textElement.style.display = 'none';
        // add img blanking
    }
    if(canvas.width < (this.x + this.w)){
      canvas.width = (this.x + 2*this.w);
      ocan.width = (this.x + 2*this.w);
    }
    if(canvas.height < (this.y + this.h)){
      canvas.height = (this.y + 2*this.h);
      ocan.height = (this.y + 2*this.h);
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
