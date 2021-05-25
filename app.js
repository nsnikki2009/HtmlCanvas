var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
//water
context.beginPath();
context.rect(0,300,400,300);
var lGradient = context.createLinearGradient(0,0,400,0);
lGradient.addColorStop(0,"#0000FF");
lGradient.addColorStop(1,"#5F9AD1");
context.fillStyle=lGradient;
context.strokeStyle="blue";
context.fill();
context.stroke();
//sail
context.beginPath();
context.moveTo(155,150);
context.lineTo(220,270);
context.lineTo(90,270);
context.lineTo(155,150);
context.fillStyle="white";
context.strokeStyle="white";
context.fill();
context.stroke(); 
//flag
context.beginPath();
context.moveTo(145,110);
context.lineTo(145,140);
context.lineTo(110,125);
context.fillStyle="brown";
context.strokeStyle="brown";
context.fill();
context.stroke();
//boat bottom
context.rect(70,280,170,40);
context.fillStyle="rgba(165,42,42,1)";
context.strokeStyle="rgba(165,42,42,1)";
context.fill();
context.stroke();
//Mast
context.rect(150,100,10,180);
context.fillStyle="black";
context.strokeStyle="black";
context.fill();
context.stroke();
//circle
context.beginPath();
context.arc(330,70,45,0,2*Math.PI,true);
var rGradient = context.createRadialGradient(330,70,10,330,70,45);
rGradiant.addColorStop(0,"#FF8C00");
rGradiant.addColorStop(1,"#FFFF00");
context.fillStyle= rGradient;
context.strokeStyle="yellow";
context.fill();
context.stroke();