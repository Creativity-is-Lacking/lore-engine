function uiBox(id,x,y,w,h,color,parent=null,locked=false,etype=null,text=null,textColor=null,innerImage=null,textDrawFlag=false){
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
  this.textElement.className = "squareText";
  this.textDrawFlag = textDrawFlag;
  this.color = color;
  this.id = id;
  this.type = "square"
  this.draw = function(){
    c.fillStyle = this.color;
    oc.fillStyle = 'rgb('+this.id+',0,255)';
    c.fillRect(this.x,this.y,this.w,this.h);
    oc.fillRect(this.x,this.y,this.w,this.h);
    if(this.text != null && !this.blankFlag){
        if(this.blankFlag){
          if(this.textElement != null)
            this.textElement.style.display = 'none';
          // add img blanking
        } else if(this.textElement != null)
            this.textElement.style.display = 'flex';
        if(this.textColor != null && this.textColor != this.textElement.style.color)
            this.textElement.style.color = this.textColor;
        const rect = c.canvas.getBoundingClientRect();
        this.textElement.innerText = this.text;
        this.textElement.style.width = this.w + "px";
        this.textElement.style.height = this.h + "px";
        this.textElement.style.left = this.x + "px";
        this.textElement.style.top = this.y + rect.top + "px";
        if(this.textDrawFlag == false){
          this.textElement = document.body.appendChild(this.textElement);
          this.textDrawFlag = true;
        }
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
  
function uiCircle(id,x,y,r,color,parent=null,locked=false,etype=null,text=null,textColor=null,innerImage=null,textDrawFlag=false){
  this.x = x;
  this.y = y;
  this.r = r;
  this.parent = parent;
  this.locked = locked;
  this.etype = etype;
  this.text = text;
  this.blankFlag = false;
  this.innerImage = innerImage;
  this.textColor = textColor
  this.textElement = document.createElement("p");
  this.textElement.className = "circleText";
  this.textDrawFlag = textDrawFlag0;
  this.color = color;
  this.id = id;
  this.type = "circle"
  this.draw = function(){
    c.fillStyle = this.color;
    oc.fillStyle = 'rgb('+this.id+',0,255)';
    c.beginPath();
    oc.beginPath();
    c.arc(this.x+this.r,this.y+this.r,this.r, 0, 2 * Math.PI, false);
    oc.arc(this.x+this.r,this.y+this.r,this.r, 0, 2 * Math.PI, false);
    c.closePath();
    oc.closePath();
    c.fill();
    oc.fill();
    if(this.blankFlag){
      if(this.textElement != null)
          this.textElement.style.display = 'none';
      // add img blanking
    } else if(this.text != null)
      this.textElement.style.display = 'flex';
    if(this.textColor != null && this.textColor != this.textElement.style.color)
      this.textElement.style.color = this.textColor;
    const rect = c.canvas.getBoundingClientRect();
    this.textElement.innerText = this.text;
    this.textElement.style.width = 2*this.r + "px";
    this.textElement.style.height = 2*this.r + "px";
    this.textElement.style.left = this.x + "px";
    this.textElement.style.top = this.y + rect.top + "px";
    if(this.textDrawFlag == false){
      this.textElement = document.body.appendChild(this.textElement);
      this.textDrawFlag = true;
    }
    if(canvas.width < (this.x + 2*this.r)){
      canvas.width = (this.x + 4*this.r);
      ocan.width = (this.x + 4*this.r);
    }
    if(canvas.height < (this.y + 2*this.r)){
      canvas.height = (this.y + 4*this.r);
      ocan.height = (this.y + 4*this.r);
    }
  }
}

function uiDiamond(id,x,y,h,w,color,parent=null,locked=false,etype=null,text=null,textColor=null,innerImage=null,textDrawFlag=false){
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;
  this.parent = parent;
  this.locked = locked;
  this.etype = etype;
  this.text = text;
  this.blankFlag = false;
  this.innerImage = innerImage;
  this.textColor = textColor
  this.textElement = document.createElement("div");
  this.textElement.appendChild(document.createElement("p"));
  this.textElement.className = "diamondText";
  this.textElement.children[0].className = "diamondTextCorrection";
  this.textDrawFlag = textDrawFlag;
  this.color = color;
  this.id = id;
  this.type = "diamond"
  this.draw = function(){
    c.beginPath();
    c.moveTo(this.x, this.y + this.h/2);
    c.lineTo(this.x + this.w / 2, this.y);
    c.lineTo(this.x + this.w, this.y + this.h/2);
    c.lineTo(this.x + this.w / 2, this.y + this.h);
    c.closePath();
    c.fillStyle = this.color;
    c.fill();
    oc.beginPath();
    oc.moveTo(this.x, this.y + this.h/2);
    oc.lineTo(this.x + this.w / 2, this.y);
    oc.lineTo(this.x + this.w, this.y + this.h/2);
    oc.lineTo(this.x + this.w / 2, this.y + this.h);
    oc.closePath();
    oc.fillStyle = 'rgb('+this.id+',0,255)';
    oc.fill();
    this.textElement.style.display = 'flex';
    if(this.blankFlag){
      if(this.textElement != null)
          // temp this.textElement.style.display = 'none';
          var a = 1;
      // add img blanking
    } else if(this.text != null)
      this.textElement.style.display = 'flex';
    if(this.textColor != null && this.textColor != this.textElement.style.color)
      this.textElement.style.color = this.textColor;
    this.textElement.children[0].innerText = this.text;
    var tempH = Math.sqrt((this.h/2)**2+(this.w/2)**2);
    var theta = Math.atan((this.h/2)/(this.w/2));
    var skewfac = (2*theta - (Math.PI/2))
    this.textElement.style.width = tempH + "px";
    this.textElement.style.height = this.w/2 + "px";
    this.textElement.style.left = this.x + this.w/2 + "px";
    this.textElement.style.top = this.y + c.canvas.getBoundingClientRect().top + "px";
    this.textElement.style.transform = 'rotate(' + theta + 'rad) skew(' + skewfac + 'rad)';
    this.textElement.children[0].style.transform = 'skew(-' + skewfac + 'rad) rotate(-' + theta + 'rad)';
    if(this.textDrawFlag == false){
      this.textElement = document.body.appendChild(this.textElement);
      this.textDrawFlag = true;
    }
    if(canvas.width < (this.x + 2*this.r)){
      canvas.width = (this.x + 4*this.r);
      ocan.width = (this.x + 4*this.r);
    }
    if(canvas.height < (this.y + 2*this.r)){
      canvas.height = (this.y + 4*this.r);
      ocan.height = (this.y + 4*this.r);
    }
  }
}

function uiEllipse(){}

function uiRoundedSquare(){}

function uiTriangle(){}
  
function linkLine(id, elem1, elem2, color){
  this.draw = function(){
    this.elem1 = elem1;
    this.elem2 = elem2;
    this.color = color;
    this.id = id;
    c.strokeStyle = '#ffffff';
    c.beginPath();
    oc.beginPath();
    let startPointX;
    let startPointY;
    let endPointX;
    let endPointY;
    if((elem1.type == "square" || elem1.type == "diamond") && (elem2.type == "square" || elem2.type == "diamond")){
      startPointX = elem1.x + elem1.w;
      startPointY = elem1.y + (elem1.h/2);
      endPointX = elem2.x;
      endPointY = elem2.y + (elem2.h/2);
    } else if((elem1.type == "square" || elem1.type == "diamond") && elem2.type == "circle"){
      startPointX = elem1.x + elem1.w;
      startPointY = elem1.y + (elem1.h/2);
      endPointX = elem2.x;
      endPointY = elem2.y + elem2.r;
    } else if(elem1.type == "circle" && (elem2.type == "square" || elem2.type == "diamond")){
      startPointX = elem1.x + 2*elem1.r;
      startPointY = elem1.y + elem1.r;
      endPointX = elem2.x;
      endPointY = elem2.y + (elem2.h/2);
    } else if(elem1.type == "circle" && elem2.type == "circle"){
      startPointX = elem1.x + 2*elem1.r;
      startPointY = elem1.y + elem1.r;
      endPointX = elem2.x;
      endPointY = elem2.y + elem2.r;
    } else {
      console.error("Unsupported link");
      return;
    }
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
    c.moveTo(startPointX,startPointY);
    oc.moveTo(startPointX,startPointY);
    c.bezierCurveTo(startPointX,startPointY,LquarterX,LquarterY,crossPointX,crossPointY);
    c.bezierCurveTo(crossPointX,crossPointY,RquarterX,RquarterY,endPointX,endPointY);
    oc.bezierCurveTo(startPointX,startPointY,LquarterX,LquarterY,crossPointX,crossPointY);
    oc.bezierCurveTo(crossPointX,crossPointY,RquarterX,RquarterY,endPointX,endPointY);
    c.stroke();
    oc.stroke();
  }
}
