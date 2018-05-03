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
    klasser();
    $("#tabs").click(fitCanvas);
    $(".accordion").click(fitCanvas);
    
    loadDataFromJson();
    canvas_resize();
}

function canvas_resize(){
        c = document.getElementById("canvas");
        ctx = c.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight
}

function klasser(){
    
        var container1 = new createjs.Container();
        container1.x = 0;
        container1.y = 0;
          

        var txt1 = new createjs.Text("1-3. Klasse");
        var btn1 = new createjs.Shape();
        stage.enableMouseOver();
        btn1.graphics.beginStroke("black");
        btn1.graphics.beginFill("#BCA9F5");
        btn1.graphics.drawRoundRectComplex(30, 200, 260, 100, 20, 20, 20, 20);
        //stage.addChild(btn1);
        txt1.textAlign = 'center';
        txt1.textBaseline = 'middle';
        txt1.scaleX = 5;
        txt1.scaleY = 5;
        txt1.x = 160;
        txt1.y = 250;
        
        container1.addChild(txt1,btn1); 
        stage.addChild(container1);
        createjs.Tween.get(container1).to({alpha:1,scaleX:0.5,scaleY:0.5,rotation:0,x:100,y:100}, 400).wait(400).to({visible:false});
        
        var container2 = new createjs.Container();
        container2.x = 0;
        container2.y = 0;

        var txt2 = new createjs.Text("4-6. Klasse");
        var btn2 = new createjs.Shape();
        stage.enableMouseOver();
        btn2.graphics.beginStroke("black");
        btn2.graphics.beginFill("#BCA9F5");
        btn2.graphics.drawRoundRectComplex(320, 200, 260, 100, 20, 20, 20, 20);
        //stage.addChild(btn2);
        txt2.textAlign = 'center';
        txt2.textBaseline = 'middle';
        txt2.scaleX = 5;
        txt2.scaleY = 5;
        txt2.x = 450;
        txt2.y = 250;
        
        container2.addChild(txt2,btn2); 
        stage.addChild(container2);
        createjs.Tween.get(container2).to({alpha:1,scaleX:0.5,scaleY:0.5,rotation:0,x:300,y:300}, 400).wait(400).to({visible:false});
        
        
        var txt3 = new createjs.Text("7-9. Klasse");
        var btn3 = new createjs.Shape();
        stage.enableMouseOver();
        btn3.graphics.beginStroke("black");
        btn3.graphics.beginFill("#BCA9F5");
        btn3.graphics.drawRoundRectComplex(610, 200, 260, 100, 20, 20, 20, 20);
        stage.addChild(btn3);
        txt3.textAlign = 'center';
        txt3.textBaseline = 'middle';
        txt3.scaleX = 5;
        txt3.scaleY = 5;
        txt3.x = 740;
        txt3.y = 250;
        stage.addChild(txt3);
   
       
        
    }
function randomBubbles(){
    if(randomBubbleTimestamp <= 0){
        randomBubbleTimestamp = (Math.random() * 100 + 5) * ( 500 / $("#tabs").height() );
        var bubble = new createjs.Shape();
        bubble.graphics.beginFill(bubbleColors[parseInt(Math.random() * 5)]);
        
        bubble.graphics.drawCircle(0,0,bubbleSize);
        bubble.y = Math.random() * (canvas.height - bubbleSize) + bubbleSize;
        var startX = (canvas.width / 2) + (floatingRight * (canvas.width / 2) + floatingRight * bubbleSize);
        var endX = (canvas.width / 2) + (-floatingRight * (canvas.width / 2) + -floatingRight * bubbleSize);
        bubble.x = startX;
        stage.addChild(bubble);
        createjs.Tween.get(bubble).to({x: endX},Math.random()*20000+20000).delete;
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

function pushedButton(emne, beskrivelse, links){
     
     $('#wrapper').append('<div class="border-popup"><p>'+ emne +'</p></div>');
     $('#wrapper').append('<div class="border-popup"><p>'+ beskrivelse +'</p></div>');     
     $('#wrapper').append('<div class="border-popup"><p>'+ links +'</p></div>');
     //wrapper.lineWidth= 10;

    var div = document.getElementById('wrapper');
    //div.style.left = '100px';
    //div.style.top = '100px';
    //div.lineWidth = 10;
}

$(function(){
$('.reset').on('click',function(){
//$('.reset').append('<div><p>'+ "tekst" +'</p></div>');    
    
    /*
    var container1 = new createjs.Container();
    container1.x = 650;
    container1.y = 250;
    container1.height = 200;
    $('container1').addClass('autowrap');
       
    shape.graphics.setStrokeStyle(2).beginStroke("#000000").beginFill("#ffff00").drawRoundRect(0, 0, 300, 300,10);
	shape.regX = 50;
	shape.regY = 50;
	shape.x = 0;
	shape.y = 0;
    
    var txt = new createjs.Text("22222222222222222222", " 100px Arial", "#0000FF");
    txt.x = -50;
    txt.y = 0;
               
    container1.addChild(shape,txt);
    stage.addChild(container1);
    stage.update();*/

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

//selectedClass should be a number from 0-2
function loadDataFromJson(selectedClass){
    var overEmneIndex = 0;
    for(var i = 0; i < data.classes.length; i++){
        $('#tabs').append('<div class="accordion" id="class'+ i +'"></div>');
        for(var i2 = 0; i2 < data.classes[i].emner.length; i2++){
            if(i2 == 0 || data.classes[i].emner[i2 - 1].overEmne != data.classes[i].emner[i2].overEmne){
                overEmneIndex++;
                $('#class'+i).append('<h3>' + data.classes[i].emner[i2].overEmne + '</h3><div id="overEmne'+overEmneIndex+'"></div>');
            }
            $('#overEmne'+overEmneIndex).append('<div><button class="reset" id="emne'+i +''+i2+'">' + data.classes[i].emner[i2].emneOverskrift +'</button></div>');
            
        }
    }
    $( ".accordion" ).accordion();
    $('#classTab' + selectedClass).click();
    fitCanvas();
}