var stage;
var randomBubbleTimestamp = 0;
var bubbleSize = 60;
var floatingRight = 1;
var bubbleColors = ["#FDD", "#DFD", "#DDF", "#FDFDDD", "#FDDDFD", "#DDFDFD"];
var shape = new createjs.Shape();	
 var container4 = new createjs.Container();
        container4.x = 0;
        container4.y = 0;
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
     $('#tabs').addClass("hide");
   // loadDataFromJson();
    canvas_resize();
}

function canvas_resize(){
        c = document.getElementById("canvas");
        ctx = c.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight
}

function klasser(){
      stage.addChild(container4);
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
        $('container1')
    
       
        container1.addChild(btn1,txt1); 
        stage.addChild(container1);
        $('container1').addClass('btn:hover');
        //container1.addClass(btn:hover);
       container1.addEventListener('click', function (e) {createjs.Tween.get(container1).to({alpha:1,scaleX:0.5,scaleY:0.5,rotation:0,x:100,y:100}, 400).wait(400).to({visible:false}),$('#tabs').removeClass("hide"),stage.removeChild(container1),stage.removeChild(container2),stage.removeChild(container3),loadDataFromJson(0),canvas_resize();});	 
        
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
        //stage.addChild(txt2);
    
        
       
    
  
       //container2.addEventListener('click', function (e) { //createjs.Tween.get(container2).to({alpha:1,scaleX:0.5,scaleY:0.5,rotation:0,x:300,y:300}, 400).wait(400).to({visible:false})
         //  console.log("hej");
                                                         //});
   
        container2.addChild(btn2,txt2);
        stage.addChild(container2);
   
 container2.addEventListener('click', function (e) {$('#tabs').removeClass("hide"),stage.removeChild(container1),stage.removeChild(container2),stage.removeChild(container3),loadDataFromJson(1),canvas_resize();});
    //$('#tabs').removeClass("hide"),stage.removeChild(container1),stage.removeChild(container2),stage.removeChild(container3),loadDataFromJson(1),canvas_resize();
    //  createjs.Tween.get(container2).to({alpha:1,scaleX:0.5,scaleY:0.5,rotation:0,x:300,y:300}, 400).wait(400).to({visible:false})
        
         var container3 = new createjs.Container();
        container3.x = 0;
        container3.y = 0;

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
        //stage.setChildIndex(container3, 1);
        container3.addChild(btn3,txt3);
        stage.addChild(container3);
        stage.update();
     container3.addEventListener('click', function (e) {$('#tabs').removeClass("hide"),stage.removeChild(container1),stage.removeChild(container2),stage.removeChild(container3),loadDataFromJson(2),canvas_resize();});
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
        
      
        container4.addChild(bubble);
        createjs.Tween.get(bubble).to({x: endX},Math.random()*20000+20000).call(function(){ stage.removeChild(this);});
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
    if($('#wrapper .border-popup').length <= 0){
        $('#wrapper').append('<div class="border-popup"<div>');
        $('#wrapper .border-popup').append('<p></p>');
        $('#wrapper .border-popup').append('<p></p>');
        $('#wrapper .border-popup').append('<p></p>');
    }
     $('#wrapper .border-popup p:eq(0)').text(emne);
     $('#wrapper .border-popup p:eq(1)').text(beskrivelse); 
    var linkText = '';
    for(var i = 0; i < links.length; i++){
        linkText += '<a href="' + links[i] + '">' + links[i] + '</a></br>';
    }
    console.log(links.length);
     $('#wrapper .border-popup p:eq(2)').html(linkText);
    
}

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
            $('#overEmne'+overEmneIndex).append('<div><button class="emneButton btn" id="emne'+i +''+i2+'">' + data.classes[i].emner[i2].emneOverskrift +'</button></div>');
            
        }
    }
    $( ".accordion" ).accordion();
    $('#classTab' + selectedClass).click();
    fitCanvas();
    
    
$(function(){
    $('.emneButton').on('click',function(e){
        var classIndex = e.target.id.substring(4,5);
        var emneIndex = e.target.id.substring(5);
        pushedButton(data.classes[classIndex].emner[emneIndex].emneOverskrift, data.classes[classIndex].emner[emneIndex].emneBeskrivelse, data.classes[classIndex].emner[emneIndex].emneLinks)
    });
});
$(function(){
    $('#tabs ul li a').on('click', function(){
        $('.accordion').accordion('refresh');
    })
})
}