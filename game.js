var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

    

    document.addEventListener('keyup',function(event){
        if(event.keyCode==37){
            Rectangle.isMovingleft = false;
        } else if(event.keyCode==39){
            Rectangle.isMovingRight = false;
        }
    });
    document.addEventListener('keydown',function(event){
        if(event.keyCode==37){
            Rectangle.isMovingleft = true;
        } else if(event.keyCode==39){
            Rectangle.isMovingRight = true;
        }
    }
    );

    var Rectangle ={
        width1: 120,  
        height1: 20,
        x: 270,
        y: canvas.height - 20,    
        speed : 15,
        isMovingleft : false,
        isMovingRight : false,
    }
    var ballRadius = 15;
    var x = canvas.width/2;
    var y = canvas.height- 350;
    var dx = 1.5;
    var dy = -1.5;
    var Score = 0;
    var MaxScore =12;
    var isGamesOver = false;
    var isGamesWin = false;

    var soundgetpoint = new Audio('soundgetpoints.wav');
    var soundgamesover = new Audio('soundgamesover.mp3');
    var soundgameswin = new Audio('soundgameswin.mp3');
    var soundbackgrond = new Audio('soundbackgrond.mp3');
    soundbackgrond.volume=0.5;
    soundgetpoint.volume=1;
    soundgamesover.volume=1;
    soundgameswin.volume=1;
    soundbackgrond.loop = true;

    function drawScreen(){
        ctx.beginPath();
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", " white");
        gradient.addColorStop("0.3", "lightgreen");
        gradient.addColorStop("0.4", "white");
        gradient.addColorStop("0.5", "lightgreen");
        gradient.addColorStop("0.6", "white");
        gradient.addColorStop("0.7", "lightgreen");
        gradient.addColorStop("1.0", "white");
        ctx.fillStyle = gradient;
        ctx.closePath();
    }
    function drawBall() {
    ctx.beginPath();
    var grd = ctx.createLinearGradient(x - ballRadius, y - ballRadius, x + ballRadius , y + ballRadius);
    grd.addColorStop(0,"green");
    grd.addColorStop(0.5,"yellow");
    grd.addColorStop(0.7,"lightgreen");
    grd.addColorStop(1,"orange")
    ctx.fillStyle = grd;
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}
    function drawRectangle(){
    ctx.beginPath();
    ctx.rect(Rectangle.x, Rectangle.y , Rectangle.width1, Rectangle.height1);
    ctx.fillstyle='blue';
    ctx.fill();
    ctx.closePath();
    }
    function movebar(){
        if(Rectangle.isMovingleft){
            Rectangle.x -= Rectangle.speed;
        } else if(Rectangle.isMovingRight){
            Rectangle.x += Rectangle.speed;
        }
    
        if( Rectangle.x < 0){
           Rectangle.x = 0; 
        } 
        else if(Rectangle.x > canvas.width - Rectangle.width1){
            Rectangle.x = canvas.width - Rectangle.width1;
        } 
    }
function  BallCollitheWall(){
    if(x  > canvas.width-ballRadius || x< ballRadius ){
        dx = -dx;
    }
    if( y  < ballRadius){
        dy = -dy;
    }    
}
function RectangleColliBall(){
    if(x  + ballRadius  >= Rectangle.x 
       && x + ballRadius  <=  Rectangle.width1 + Rectangle.x 
       && y + ballRadius  >= canvas.height - Rectangle.height1 ){
       dy = -dy;
       Score += 1;
       Fasterspeed();
       soundgetpoint.play();
       if(Score == MaxScore){
           isGamesWin = true; 
           isGamesOver = true;
       }
    }
   }
    function Fasterspeed(){
        if(Score > 2){
            dx = dx + 0.5;
            dy = dy - 0.5;
    document.getElementById("lv1").classList.add("d-none");
    document.getElementById("lv2").classList.remove("d-none");
    
} 
        if(Score > 4){
            dx = dx + 1;
            dy = dy - 1;
    document.getElementById("lv1").classList.add("d-none");
    document.getElementById("lv2").classList.add("d-none");
    document.getElementById("lv3").classList.remove("d-none");
        }
        if(Score > 6){
            dx = dx + 1.5;
            dy = dy - 1.5;
    document.getElementById("lv1").classList.add("d-none");
    document.getElementById("lv2").classList.add("d-none");
    document.getElementById("lv3").classList.add("d-none");
    document.getElementById("lv4").classList.remove("d-none");
        }
        if(Score > 8){
            dx = dx + 2;
            dy = dy - 2;
    document.getElementById("lv1").classList.add("d-none");
    document.getElementById("lv2").classList.add("d-none");
    document.getElementById("lv3").classList.add("d-none");
    document.getElementById("lv4").classList.add("d-none");
    document.getElementById("lv5").classList.remove("d-none");
        }
        if(Score > 10){
            dx = dx + 2.5;
            dy = dy - 2.5;
    document.getElementById("lv1").classList.add("d-none");
    document.getElementById("lv2").classList.add("d-none");
    document.getElementById("lv3").classList.add("d-none");
    document.getElementById("lv4").classList.add("d-none");
    document.getElementById("lv5").classList.add("d-none");
    document.getElementById("lv6").classList.remove("d-none");
        }
    else if(Score > 12){
            dx = dx + 3;
            dy = dy - 3;
    document.getElementById("lv1").classList.add("d-none");
    document.getElementById("lv2").classList.add("d-none");
    document.getElementById("lv3").classList.add("d-none");
    document.getElementById("lv4").classList.add("d-none");
    document.getElementById("lv5").classList.add("d-none");
    document.getElementById("lv6").classList.remove("d-none");
        }
    clearInterval(draw);
}
    function netxLever1(){
    interval = setInterval(draw,15); 
}
function updateBallPosition(){
    x += dx;
    y += dy;
}
function drawSocre(){
    ctx.fillstyle = "white";
    ctx.font =" 20px Verdana";
    ctx.fillText("Score:" + Score, canvas.width - 100, 20);
}
function CheckGamesOver(){
    if(y -dy > canvas.height - ballRadius){
        isGamesOver = true;
        document.getElementById("stargames").classList.add("d-none");
        document.getElementById("pause").classList.add("d-none");
        document.getElementById("reset").classList.remove("d-none");
        document.getElementById("quit").classList.add("d-none");
        document.getElementById("resume").classList.add("d-none");
        StarGames();
    }   
}
 function GamesOver(){
    if(isGamesWin){
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", " Blue");
        gradient.addColorStop("0.3", "Green");
        gradient.addColorStop("0.4", "yellow");
        gradient.addColorStop("0.5", "red");
        gradient.addColorStop("0.6", "Orange");
        gradient.addColorStop("0.7", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle = gradient;
        ctx.font="45 px cursive";
        ctx.fillText(" Congratulations!", canvas.width /2.7 , canvas.height/2 - 60);
        ctx.font="50px cursive";
        ctx.fillText(" You Win!", canvas.width /3 , canvas.height/2);
        ctx.fillStyle ="white";
        ctx.font="20px cursive";
        ctx.fillText(" Press The Reset or F5 to Play Again!", canvas.width / 3.5 , canvas.height/2 + 100);
        soundbackgrond.pause();
        soundgameswin.play();
        clearInterval(interval);
        
    }else{
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", " Orange");
        gradient.addColorStop("0.3", "Blue");
        gradient.addColorStop("0.4", "yellow");
        gradient.addColorStop("0.5", "red");
        gradient.addColorStop("0.6", "Orange");
        gradient.addColorStop("0.7", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle = gradient;
        ctx.font="50px Oxygen"
        ctx.fillText(" Games Over!", canvas.width / 3.75 , canvas.height/2);
        ctx.fillStyle ="white";
        ctx.font="20px cursive";
        ctx.fillText(" Press The Reset or F5 to Play Again!", canvas.width / 4 , canvas.height/2 + 100);
        soundbackgrond.pause();
        soundgamesover.play();
        document.getElementById("lv1").classList.add("d-none");
        clearInterval(interval);
    }
 }
 var grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
 grd.addColorStop("0", " Blue");
 grd.addColorStop("0.3", "Green");
 grd.addColorStop("0.4", "yellow");
 grd.addColorStop("0.5", "red");
 grd.addColorStop("0.6", "Orange");
 grd.addColorStop("0.7", "blue");
 grd.addColorStop("1.0", "red");
 ctx.fillStyle = grd;
 ctx.font="30px cursive"
 ctx.fillText("Press The Star Games to Star!!", canvas.width /6 , canvas.height/2);   

 function StarGames(){
 interval = setInterval(draw,15); 
 document.getElementById("stargames").classList.add("d-none");
 document.getElementById("pause").classList.remove("d-none");
 document.getElementById("reset").classList.remove("d-none");
 document.getElementById("lv1").classList.remove("d-none");
 soundbackgrond.play();

}

var interval;
function Pause(){
var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
 gradient.addColorStop("0", " white");
 gradient.addColorStop("0.3", "blue");
 gradient.addColorStop("0.4", "yellow");
 gradient.addColorStop("0.5", "green");
 gradient.addColorStop("0.6", "yellow");
 gradient.addColorStop("0.7", "blue");
 gradient.addColorStop("1.0", "white");
 ctx.fillStyle = gradient;
 ctx.font="30px Oxygen"
 ctx.fillText(" Press The Resume to Continue!", canvas.width / 5 , canvas.height/2);
 ctx.font="30px Oxygen"
 ctx.fillText(" Press The Quit to Reset Games!", canvas.width / 5 , canvas.height/2 + 100);
 clearInterval(interval);
document.getElementById("quit").classList.remove('d-none');
document.getElementById("pause").classList.add('d-none');
document.getElementById("reset").classList.add('d-none'); 
document.getElementById("resume").classList.remove('d-none'); 
soundbackgrond.pause();
clearInterval(interval);
}

function Resume(){
document.getElementById("resume").classList.add("d-none");
document.getElementById("quit").classList.add('d-none');
document.getElementById("pause").classList.remove("d-none");
document.getElementById("reset").classList.remove("d-none");
 interval = setInterval(draw,15);  
 soundbackgrond.play();
}
function Volumeon(){
    soundbackgrond.volume=0;
    soundgetpoint.volume=0; 
    soundgamesover.volume=0;
    soundgameswin.volume=0;
    document.getElementById("volumeon").classList.add("d-none");
    document.getElementById("volumeoff").classList.remove("d-none");
}
function Volumeoff(){
    soundbackgrond.volume=0.5;
    soundgetpoint.volume=1;
    soundgamesover.volume=1;
    soundgameswin.volume=1;
    document.getElementById("volumeoff").classList.add("d-none");
    document.getElementById("volumeon").classList.remove("d-none");
}
function draw() {
    if(!isGamesOver){ 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScreen();
    drawRectangle();
    drawBall();
    movebar();
    BallCollitheWall();
    RectangleColliBall();
    updateBallPosition();
    CheckGamesOver();
    drawSocre();
    }
   else{
    GamesOver();
    }
}   
   draw();
    