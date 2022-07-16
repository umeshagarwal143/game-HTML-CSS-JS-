y=document.documentElement.clientHeight;
x=document.documentElement.clientWidth;

function height(){ 

document.getElementById("h1").style.height =.08 * y + "px";
document.getElementById("h1").style.width = x-10 + "px";
document.getElementById('h1').style.fontSize = .07 * y + "px";

document.getElementById("d1").style.height = .795 * y -20 +"px";
document.getElementById("d1").style.width = .99*x-20 + "px";
} 
stop=0;

function game(){
i=Math.floor(Math.random() * 4);
z=Math.floor(Math.random() * (.88*x));
w=Math.floor(Math.random() * (.6*y));

var c=document.getElementById("d4").innerHTML;
d=parseInt(c)-1;
document.getElementById("d4").innerHTML=d;

h=document.getElementById("i1");
if(1){
h.style.top=w+"px";
h.style.left=z+"px";
}
h.src="star"+ i +".png";
if(d>=1){
setTimeout(game,1100);
}
else{
clearTimeout(game);
}
}

function score(){
var b=document.getElementById("d3").innerHTML;
var a=parseInt(b)+i+1;
document.getElementById("d3").innerHTML=a;
}