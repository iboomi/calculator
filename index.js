numplus.onclick = function (){
  document.getElementById('area').value+='+';
}
numminus.onclick = function (){
  document.getElementById('area').value+='-';
}
nummultiply.onclick = function (){
  document.getElementById('area').value+='*';
}
numdivide.onclick = function (){
  document.getElementById('area').value+='/';
}
numsum.onclick = function (){
document.getElementById('area').value = eval(document.getElementById('area').value)
}
ac.onclick = function(){
  document.getElementById('area').value = '';
}
dot.onclick = function(){
  document.getElementById('area').value+='.';
}
zero.onclick = function(){
   document.getElementById('area').value+='0';
};
one.onclick = function(){
   document.getElementById('area').value+='1';
}
two.onclick = function(){
   document.getElementById('area').value+='2';
}
three.onclick = function(){
   document.getElementById('area').value+='3';
}
four.onclick = function(){
   document.getElementById('area').value+='4';
}
five.onclick = function(){
   document.getElementById('area').value+='5';
}
six.onclick = function(){
   document.getElementById('area').value+='6';
}
seven.onclick = function(){
   document.getElementById('area').value+='7';
}
eight.onclick = function(){
   document.getElementById('area').value+='8';
}
nine.onclick = function(){
   document.getElementById('area').value+='9';
}
rightbracket.onclick = function(){
   document.getElementById('area').value+=')';
}
leftbracket.onclick = function(){
   document.getElementById('area').value+='(';
}
