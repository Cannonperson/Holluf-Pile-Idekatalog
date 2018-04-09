        var stage;
        var circle;
        function init(){
            responsiveCanvasSize();
            
            stage = new createjs.Stage(document.getElementById('canvas'));
            stage.enableMouseOver();
            createjs.Ticker.setFPS(60);
            createjs.Ticker.addEventListener("tick", function (e) {
                stage.update();
            });
            
            createBackground();
            createCircle();
        }

function responsiveCanvasSize(){
    canvas.width = $(window).width();
    canvas.height = $(window).height();
}

        function createBackground(){
            var bg = new createjs.Shape();
            bg.graphics.beginFill("#FF9900");
            bg.graphics.drawRect(0,0,canvas.width,canvas.height);
            stage.addChild(bg);
        }
        
        function createCircle(){
            var circles = [];
            for(var x = 0; x < 5; x++){
                for(var y = 0; y < 3; y++){
                    circle = new createjs.Shape();
                    circle.graphics.beginFill('#FF0000');
                    circle.graphics.drawEllipse(0,0,150, 100);
                    circle.x = 90 + (x * 180) + (y * 90 * (y % 2));
                    circle.y = 100 + (180 * y);
                    circles.push(circle);
                    
                    circle.addEventListener("mouseover", function(e){
                        e.target.graphics.clear();
                        e.target.graphics.beginFill('#FFFF00');
                    e.target.graphics.drawEllipse(0,0,150, 100);
                    });
                    circle.addEventListener("mouseout", function(e){
                        e.target.graphics.clear()
                        e.target.graphics.beginFill('#FF0000');
                    e.target.graphics.drawEllipse(0,0,150, 100);
                    });
                    stage.addChild(circle);
                }
            }
            console.log(circles.length);
            stage.update();
        }