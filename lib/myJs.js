var stage;
var randomBubbleTimestamp = 0;
var bubbleSize = 60;
var floatingRight = 1;
var bubbleColors = ["#FDD", "#DFD", "#DDF", "#FDFDDD", "#FDDDFD", "#DDFDFD"];
var shape = new createjs.Shape();	

function init() {
    fitCanvas();
    stage = new createjs.Stage(document.getElementById('canvas'));
    stage.enableMouseOver();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", function (e) {
        stage.update();
        randomBubbles();
    });
    $("#tabs").click(fitCanvas);
    $(".accordion").click(fitCanvas);
}

function randomBubbles(){
    if(randomBubbleTimestamp <= 0){
        randomBubbleTimestamp = (Math.random() * 30 + 5) * ( 500 / $("#tabs").height() );
        var bubble = new createjs.Shape();
        bubble.graphics.beginFill(bubbleColors[parseInt(Math.random() * 5)]);
        
        bubble.graphics.drawCircle(0,0,bubbleSize);
        bubble.y = Math.random() * (canvas.height - bubbleSize) + bubbleSize;
        var startX = (canvas.width / 2) + (floatingRight * (canvas.width / 2) + floatingRight * bubbleSize);
        var endX = (canvas.width / 2) + (-floatingRight * (canvas.width / 2) + -floatingRight * bubbleSize);
        bubble.x = startX;
        stage.addChild(bubble);
        createjs.Tween.get(bubble).to({x: endX},5000).delete;
        floatingRight *= -1;
    }
    randomBubbleTimestamp--;
}

function fitCanvas(){
    canvas.height = $("#tabs").innerHeight() + parseInt($("#tabs").css("margin")) * 2;
}
/*function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    
}*/


$(function(){
$('.reset').on('click',function(){
                console.log("hej");
    
    shape.graphics.setStrokeStyle(2).beginStroke("#000000").beginFill("#ffff00").drawRoundRect(0, 0, 300, 300,10);
		shape.regX = 50;
		shape.regY = 50;
		shape.x = 650;
		shape.y = 250;
		stage.addChild(shape);

    // laver en firkant, der styles i CSS? eller med createJS, men den skal laves responsiv, hvordan?
    //være tekst der skal være responsiv inde i, hvordan?
    //skal laves for alle divs længst ude i rækken, hvordan? 
    
    
    
    
    
    
    /*$('#controls-ipclasses.on').on('click',function(){
        $('.person').filter(function(){
            var ipADDr = $(this).children().eq(3).text();
            var ip = ipaddr.split('.')
        }).addClass('classsss');
    })*/
    
            });
    
});