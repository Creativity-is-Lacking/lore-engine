var move = document.getElementById("move");
var link = document.getElementById("link");
var justify = document.getElementById("justify");
var order = document.getElementById("order");

move.onclick = function() {
  mode='';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  move.className = 'active';
}
link.onclick = function() {
  mode='link';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  link.className = 'active';
}
justify.onclick = function() {
  mode='justify';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  justify.className = 'active';
}
order.onclick = function() {
  mode='order';
  let len = document.getElementsByClassName("active").length;
  for(var i = 0; i < len; i++)
    document.getElementsByClassName("active")[i].className = '';
  order.className = 'active'
} //will modify with modal to determine what direction to order
//to add: offset(?), edit ...
