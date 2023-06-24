function getID(x,y){
   var p = oc.getImageData(x, y, 1, 1).data;
  //use blue channel as reference to
  //see if it's a fuzzy edge pixel
  if(p[2]==255) return p[0];
  else return -1;
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
