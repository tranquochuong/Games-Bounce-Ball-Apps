var canvas = document.getElementById("myCanvas");
var canvasStart = document.getElementById("myCanvasStart");
var canvasStart = document.getElementById("myCanvasWin");
var canvasNextLvUp = document.getElementById("myCanvasLvUp");
var ctx = canvas.getContext("2d");



document.addEventListener('keyup', function (event) {
    if (event.keyCode == 37) {
        Rectangle.isMovingleft = false;
    } else if (event.keyCode == 39) {
        Rectangle.isMovingRight = false;
    }
});
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        Rectangle.isMovingleft = true;
    } else if (event.keyCode == 39) {
        Rectangle.isMovingRight = true;
    }
}
);

var Rectangle = {
    width1: 120,
    height1: 20,
    x: 270,
    y: canvas.height - 20,
    speed: 15,
    isMovingleft: false,
    isMovingRight: false,
}
var ballRadius = 15;
var x = canvas.width / 2;
var y = canvas.height - 350;
var dx = 1.5;
var dy = -1.5;
var Score = 0;
var MaxScore = 12;
var isGamesOver = false;
var isGamesWin = false;

var soundgetpoint = new Audio('soundgetpoints.wav');
var soundgamesover = new Audio('soundgamesover.mp3');
var soundgameswin = new Audio('soundgameswin.mp3');
var soundbackground = new Audio('soundbackground.mp3');
soundbackground.volume = 0.5;
soundgetpoint.volume = 1;
soundgamesover.volume = 1;
soundgameswin.volume = 1;
soundbackground.loop = true;

function drawScreen() {
    ctx.beginPath();
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", " lightblue");
    gradient.addColorStop("0.3", "lightyellow");
    gradient.addColorStop("0.4", "lightblue");
    gradient.addColorStop("0.5", "lightyellow");
    gradient.addColorStop("0.6", "lightblue");
    gradient.addColorStop("0.7", "lightyellow");
    gradient.addColorStop("1.0", "lightblue");
    ctx.fillStyle = gradient;
    ctx.closePath();
}
function drawBall() {
    ctx.beginPath();
    var grd = ctx.createLinearGradient(x - ballRadius, y - ballRadius, x + ballRadius, y + ballRadius);
    grd.addColorStop(0, "green");
    grd.addColorStop(0.5, "yellow");
    grd.addColorStop(0.7, "lightgreen");
    grd.addColorStop(1, "orange")
    ctx.fillStyle = grd;
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
function drawRectangle() {
    ctx.beginPath();
    ctx.rect(Rectangle.x, Rectangle.y, Rectangle.width1, Rectangle.height1);
    ctx.fillstyle = 'blue';
    ctx.fill();
    ctx.closePath();
}
function movebar() {
    if (Rectangle.isMovingleft) {
        Rectangle.x -= Rectangle.speed;
    } else if (Rectangle.isMovingRight) {
        Rectangle.x += Rectangle.speed;
    }

    if (Rectangle.x < 0) {
        Rectangle.x = 0;
    }
    else if (Rectangle.x > canvas.width - Rectangle.width1) {
        Rectangle.x = canvas.width - Rectangle.width1;
    }
}
function BallCollitheWall() {
    if (x > canvas.width - ballRadius || x < ballRadius) {
        dx = -dx;
    }
    if (y < ballRadius) {
        dy = -dy;
    }
}
function RectangleColliBall() {
    if (x + ballRadius >= Rectangle.x
        && x + ballRadius <= Rectangle.width1 + Rectangle.x
        && y + ballRadius >= canvas.height - Rectangle.height1) {
        dy = -dy;
        Score += 1;
        Fasterspeed();
        soundgetpoint.play();
        if (Score == MaxScore) {
            isGamesWin = true;
            isGamesOver = true;
        }
    }
}
function Fasterspeed() {
    if (Score > 2) {
        if (Score == 3) {
            dx = dx + 0.5;
            dy = dy - 0.5;
            document.getElementById("lv1").classList.add("d-none");
            document.getElementById("nextlv2").classList.remove("d-none");
            document.getElementById("myCanvasLvUp").classList.remove("d-none");
            document.getElementById("myCanvas").classList.add("d-none");
            clearInterval(interval);
        }


        if (Score == 5) {
            dx = dx + 1;
            dy = dy - 1;
            document.getElementById("lv2").classList.add("d-none");
            document.getElementById("nextlv3").classList.remove("d-none");
            document.getElementById("myCanvasLvUp").classList.remove("d-none");
            document.getElementById("myCanvas").classList.add("d-none");
            clearInterval(interval);
        }

        if (Score == 7) {
            dx = dx + 1.5;
            dy = dy - 1.5;
            document.getElementById("lv3").classList.add("d-none");
            document.getElementById("nextlv4").classList.remove("d-none");
            document.getElementById("myCanvasLvUp").classList.remove("d-none");
            document.getElementById("myCanvas").classList.add("d-none");
            clearInterval(interval);
        }
        if (Score == 9) {
            dx = dx + 2;
            dy = dy - 2;
            document.getElementById("lv4").classList.add("d-none");
            document.getElementById("nextlv5").classList.remove("d-none");
            document.getElementById("myCanvasLvUp").classList.remove("d-none");
            document.getElementById("myCanvas").classList.add("d-none");
            clearInterval(interval);
        }
        if (Score == 11) {
            dx = dx + 2.5;
            dy = dy - 2.5;
            document.getElementById("lv5").classList.add("d-none");
            document.getElementById("nextlv6").classList.remove("d-none");
            document.getElementById("myCanvasLvUp").classList.remove("d-none");
            document.getElementById("myCanvas").classList.add("d-none");
            clearInterval(interval);
        }
    }
    clearInterval(draw);
}


function nextLevel2() {
    document.getElementById("myCanvasLvUp").classList.add("d-none");
    document.getElementById("myCanvas").classList.remove("d-none");
    document.getElementById("lv2").classList.remove("d-none");
    document.getElementById("nextlv2").classList.add("d-none");
    interval = setInterval(draw, 15);

}
function nextLevel3() {
    document.getElementById("myCanvasLvUp").classList.add("d-none");
    document.getElementById("myCanvas").classList.remove("d-none");
    document.getElementById("lv3").classList.remove("d-none");
    document.getElementById("nextlv3").classList.add("d-none");
    interval = setInterval(draw, 15);
}
function nextLevel4() {
    document.getElementById("myCanvasLvUp").classList.add("d-none");
    document.getElementById("myCanvas").classList.remove("d-none");
    document.getElementById("lv4").classList.remove("d-none");
    document.getElementById("nextlv4").classList.add("d-none");
    interval = setInterval(draw, 15);
}
function nextLevel5() {
    document.getElementById("myCanvasLvUp").classList.add("d-none");
    document.getElementById("myCanvas").classList.remove("d-none");
    document.getElementById("lv5").classList.remove("d-none");
    document.getElementById("nextlv5").classList.add("d-none");
    interval = setInterval(draw, 15);
}
function nextLevel6() {
    document.getElementById("myCanvasLvUp").classList.add("d-none");
    document.getElementById("myCanvas").classList.remove("d-none");
    document.getElementById("lv6").classList.remove("d-none");
    document.getElementById("nextlv6").classList.add("d-none");
    interval = setInterval(draw, 15);
}



function updateBallPosition() {
    x += dx;
    y += dy;
}
function drawSocre() {
    ctx.fillstyle = "white";
    ctx.font = " 20px Verdana";
    ctx.fillText("Score:" + Score, canvas.width - 100, 20);
}
function CheckGamesOver() {
    if (y - dy > canvas.height - ballRadius) {
        isGamesOver = true;
        document.getElementById("startgames").classList.add("d-none");
        document.getElementById("pause").classList.add("d-none");
        document.getElementById("reset").classList.remove("d-none");
        document.getElementById("quit").classList.add("d-none");
        document.getElementById("resume").classList.add("d-none");
        StartGames();
    }
}
function GamesOver() {
    if (isGamesWin) {
        soundbackground.pause();
        soundgameswin.play();
        document.getElementById("myCanvasWin").classList.remove("d-none");
        document.getElementById("myCanvas").classList.add("d-none");
        clearInterval(interval);
    }
    else {
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", " Orange");
        gradient.addColorStop("0.3", "Blue");
        gradient.addColorStop("0.4", "yellow");
        gradient.addColorStop("0.5", "red");
        gradient.addColorStop("0.6", "Orange");
        gradient.addColorStop("0.7", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle = gradient;
        ctx.font = "50px Oxygen"
        ctx.fillText(" Games Over!", canvas.width / 3.75, canvas.height / 2);
        ctx.fillStyle = "white";
        ctx.font = "20px cursive";
        ctx.fillText(" Press The Reset or F5 to Play Again!", canvas.width / 4, canvas.height / 2 + 100);
        soundbackground.pause();
        soundgamesover.play();
        document.getElementById("lv1").classList.add("d-none");
        clearInterval(interval);
    }
}

function StartGames() {
    interval = setInterval(draw, 15);
    document.getElementById("startgames").classList.add("d-none");
    document.getElementById("pause").classList.remove("d-none");
    document.getElementById("reset").classList.remove("d-none");
    document.getElementById("lv1").classList.remove("d-none");
    document.getElementById("myCanvas").classList.remove("d-none");
    document.getElementById("myCanvasStart").classList.add("d-none");
    document.getElementById("btnStart").classList.add("d-none");
    soundbackground.play();
}
var interval;
function Pause() {
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", " white");
    gradient.addColorStop("0.4", "yellow");
    gradient.addColorStop("0.5", "lightgreen");
    gradient.addColorStop("0.6", "yellow");
    gradient.addColorStop("1.0", "white");
    ctx.fillStyle = gradient;
    ctx.font = "30px Oxygen"
    ctx.fillText(" Press The Resume to Continue!", canvas.width / 4, canvas.height / 2);
    ctx.font = "30px Oxygen"
    ctx.fillText(" Press The Quit to Reset Games!", canvas.width / 4, canvas.height / 2 + 100);
    document.getElementById("quit").classList.remove('d-none');
    document.getElementById("pause").classList.add('d-none');
    document.getElementById("reset").classList.add('d-none');
    document.getElementById("resume").classList.remove('d-none');
    soundbackground.pause();
    clearInterval(interval);
}
function Resume() {
    document.getElementById("resume").classList.add("d-none");
    document.getElementById("quit").classList.add('d-none');
    document.getElementById("pause").classList.remove("d-none");
    document.getElementById("reset").classList.remove("d-none");
    interval = setInterval(draw, 15);
    soundbackground.play();
}
function Volumeon() {
    soundbackground.volume = 0;
    soundgetpoint.volume = 0;
    soundgamesover.volume = 0;
    soundgameswin.volume = 0;
    document.getElementById("volumeon").classList.add("d-none");
    document.getElementById("volumeoff").classList.remove("d-none");
}
function Volumeoff() {
    soundbackground.volume = 0.5;
    soundgetpoint.volume = 1;
    soundgamesover.volume = 1;
    soundgameswin.volume = 1;
    document.getElementById("volumeoff").classList.add("d-none");
    document.getElementById("volumeon").classList.remove("d-none");
}

function draw() {
    if (!isGamesOver) {
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
    else {
        GamesOver();
    }
}
draw();
