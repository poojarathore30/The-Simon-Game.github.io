
//declare varibale and arrays.
var userClickedPattern=[];
let buttonColors=["red","blue","green","yellow"];
var started=false;
var level=0;
let gamePattern=[];

//keypress
$(document).keypress(function()
{
if(!started){
$("h1").text("level "+level);
nextSequence();
started=true;
}})
//function to create random color.

function nextSequence()
{  
    level++;
    $("#level-title").text("level "+level);
 var r=(Math.random()*4);
let randomNumber=Math.floor(r);
$("h1").text("level "+level);
var randomChosenColor=buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
}
var count=0;
//if any button is clicked then animate and playsound.
$(".btn").on("click",function ()
{
let userChosenColor=$(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animate(userChosenColor);
if((userClickedPattern.length)==level){
check(level);
}
})

//function to play sound.
function playSound(name){
  switch(name){
case "red":
    var audio=new Audio("sounds/red.mp3");
audio.play();break;
case "green":
    var audio=new Audio("sounds/green.mp3");
audio.play();break;
case "yellow":
    var audio=new Audio("sounds/yellow.mp3");
audio.play();break;
case "blue":
    var audio=new Audio("sounds/blue.mp3");
audio.play();break;
default:alert("cannot play");}
}

//function to naimate the buttons.
function animate(name){
$("."+name).addClass("pressed");
setTimeout(function(){
    $("."+name).removeClass("pressed");
},100)
}

//to chevk
function check(currentLevel){
if(userClickedPattern[currentLevel-1]==gamePattern[0]){
    userClickedPattern=[];
    gamePattern=[];
    setTimeout(function(){nextSequence();},900)

}
else{
    $("#level-title").text("GAme over");
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    userClickedPattern=[];
    started=false;
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },300);
    $("#level-title").text("Game over ,Press any key to restart");
    level=0;
    gamePattern=[];
}
}
