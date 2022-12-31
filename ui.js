var move = document.getElementById("move");
var edit = document.getElementById("edit");
var link = document.getElementById("link");
var lock = document.getElementById("lock");
var justify = document.getElementById("Pjustify");
var Halign = document.getElementById("Halign");
var Valign = document.getElementById("Valign");
var order = document.getElementById("Porder");
var forward = document.getElementById("Forder");
var backward = document.getElementById("Border");
var nop = document.getElementById("nop");

move.onclick = function() {
  mode='';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  move.className = 'active';
}
edit.onclick = function() {
  mode='edit';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  edit.className = 'active';
  //show edit modal
}
link.onclick = function() {
  mode='link';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  link.className = 'active';
}
lock.onclick = function() {
  mode='lock';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  lock.className = 'active';
  //get confirmation before locking
}
justify.onclick = function() {
  mode='justify';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  justify.className = 'active';
  //show modal asking how to justify
}
Halign.onclick = function() {
  mode='Halign';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  Halign.className = 'active';
}
Valign.onclick = function() {
  mode='Valign';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  Valign.className = 'active';
}
order.onclick = function() {
  mode='order';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  order.className = 'active'
  //show modal asking how to order
} 
forward.onclick = function() {
  mode='Forder';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  forward.className = 'active';
}
backward.onclick = function() {
  mode='Border';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  backward.className = 'active';
}
nop.onclick = function() {
  mode='nop';
  highlights = [];
  renderObjs();
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  nop.className = 'active';
}
