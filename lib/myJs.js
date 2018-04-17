var stage;
var circle;
var ellipseWidth = 300;
var ellipseHeight = 250;

function init() {
    /*responsiveCanvasSize();
    
    stage = new createjs.Stage(document.getElementById('canvas'));
    stage.enableMouseOver();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", function (e) {
        stage.update();
    });
    createCircle();*/
}

function responsiveCanvasSize(){
    canvas.width = $(window).width();
    canvas.height = $(window).height();
}
        
function createCircle(){
    var circles = [];
    var circleAmount = 3;
    for(var y = 0; circleAmount > 0; y++){
        for(var x = 0; x < -1 + (canvas.width  - (y%2 * ellipseWidth / 2)) / (ellipseWidth*1.2) && circleAmount > 0; x++){
            circle = new createjs.Shape();
            circle.graphics.beginFill('#FF0000');
            circle.graphics.drawEllipse(0,0,ellipseWidth, ellipseHeight);
            circle.x = ellipseWidth * 0.2 + (x * ellipseWidth * 1.2) + (y * (ellipseWidth*1.2 / 2) * (y % 2));
            circle.y = ellipseHeight * 0.2 + (ellipseHeight * y);
            circles.push(circle);
            
            circle.addEventListener("mouseover", function(e){
                e.target.graphics.clear();
                e.target.graphics.beginFill('#FFFF00');
            e.target.graphics.drawEllipse(0,0,ellipseWidth, ellipseHeight);
            });
            circle.addEventListener("mouseout", function(e){
                e.target.graphics.clear()
                e.target.graphics.beginFill('#FF0000');
            e.target.graphics.drawEllipse(0,0,ellipseWidth, ellipseHeight);
            });
            stage.addChild(circle);
            circleAmount--;
        }
        canvas.height = (1 + y) * ellipseHeight + ellipseHeight/2;
    }
            
    stage.update();
}