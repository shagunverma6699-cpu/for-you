const c=document.getElementById("hearts"),x=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;

let h=[];
for(let i=0;i<80;i++){
 h.push({x:Math.random()*c.width,y:Math.random()*c.height,
 s:6+Math.random()*6,d:0.5+Math.random()*1});
}

function heart(xp,yp,s){
 x.fillStyle="rgba(255,105,180,0.7)";
 x.beginPath();
 x.moveTo(xp,yp);
 x.bezierCurveTo(xp-s,yp-s,xp-2*s,yp+s,xp,yp+2*s);
 x.bezierCurveTo(xp+2*s,yp+s,xp+s,yp-s,xp,yp);
 x.fill();
}

function draw(){
 x.clearRect(0,0,c.width,c.height);
 h.forEach(e=>{
  heart(e.x,e.y,e.s);
  e.y+=e.d;
  if(e.y>c.height){e.y=0;e.x=Math.random()*c.width;}
 });
}
setInterval(draw,30);
