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

move.onclick = function() {
  mode='';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  move.className = 'active';
}
edit.onclick = function() {
  mode='edit';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  edit.className = 'active';
  //show edit modal
}
link.onclick = function() {
  mode='link';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  link.className = 'active';
}
lock.onclick = function() {
  mode='lock';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  lock.className = 'active';
  //get confirmation before locking
}
justify.onclick = function() {
  mode='justify';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  justify.className = 'active';
  //show modal asking how to justify
}
Halign.onclick = function() {
  mode='Halign';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  Halign.className = 'active';
}
Valign.onclick = function() {
  mode='Valign';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  Valign.className = 'active';
}
order.onclick = function() {
  mode='order';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  order.className = 'active'
  //show modal asking how to order
} 
forward.onclick = function() {
  mode='Forder';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  forward.className = 'active';
}
backward.onclick = function() {
  mode='Border';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  backward.className = 'active';
}
