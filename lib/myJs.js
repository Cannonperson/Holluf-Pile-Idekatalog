var stage;
        var circle;
        function init(){
            stage = new createjs.Stage(document.getElementById('canvas'));
            stage.enableMouseOver();
            createjs.Ticker.setFPS(60);
            createjs.Ticker.addEventListener("tick", function (e) {
                stage.update();
                localStorage.setItem("shapeX", circle.x + "");
            });
            createCircle();
            createBackground();
        }

        funcrtion createBackgroubd(){
            var bg = new createjs.Shape();
            bg.graphics.beginFill("999900");
            bg.graphics.drawRect(0,0,canvas.width,canvas.height);
            stage.addChild(bg);
        }
        
        function createCircle(){
            for(var x = 0; x < 4; x++){
                for(var y = 0; y < 3; y++){
                    circle = new createjs.Shape();
                    circle.graphics.beginFill('#FF0000');
                    circle.graphics.drawCircle(0,0,70);
                    circle.x = 90 + (x * 180) + (y * 90 * (y % 2));
                    circle.y = 100 + (180 * y);
                    
                    circle.addEventListener("mouseover", function(){
                        circle.graphics.clear();
                        circle.graphics.beginFill('#FFA500');
                        circle.graphics.drawCircle(0,0,70);
                    });
                    circle.addEventListener("mouseout", function(){
                        circle.graphics.clear()
                        circle.graphics.beginFill('#FF0000');
                        circle.graphics.drawCircle(0,0,70);
                    });
                    
                    stage.addChild(circle);
                }
            }
            stage.update();
        }