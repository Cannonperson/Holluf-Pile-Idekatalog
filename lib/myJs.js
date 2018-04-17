var stage;
var randomBubbleTimestamp = 0;
var bubbleSize = 60;
var floatingRight = 1;

function init() {
    stage = new createjs.Stage(document.getElementById('canvas'));
    stage.enableMouseOver();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", function (e) {
        stage.update();
        randomBubbles();
    });
}

function randomBubbles(){
    if(randomBubbleTimestamp <= 0){
        randomBubbleTimestamp = Math.random() * 30 + 10;
        var bubble = new createjs.Shape();
        bubble.graphics.beginFill("#FFDDDD");
        bubble.graphics.drawCircle(0,0,bubbleSize);
        bubble.y = Math.random() * canvas.height;
        var startX = (canvas.width / 2) + (floatingRight * (canvas.width / 2) + floatingRight * bubbleSize);
        var endX = (canvas.width / 2) + (-floatingRight * (canvas.width / 2) + -floatingRight * bubbleSize);
        bubble.x = startX;
        stage.addChild(bubble);
        createjs.Tween.get(bubble).to({x: endX},5000).delete;
        floatingRight *= -1;
    }
    randomBubbleTimestamp--;
}