canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
roverimage="rover.png"
var array=["image1.jfif","image2.jfif","image3.jpg","mars.jpg"]
randomnumber=Math.floor(Math.random()*4)
background=array[randomnumber]
roverx=300
rovery=500
roverheight=100
roverwidth=90
function high()
{
    backgroundimage=new Image();
    backgroundimage.onload=uploadbackground;
    backgroundimage.src=background;
    roverimage1=new Image();
    roverimage1.onload=uploadrover;
    roverimage1.src=roverimage;
}
function uploadbackground()
{
    ctx.drawImage(backgroundimage,0,0,canvas.width,canvas.height)
}
function uploadrover()
{
    ctx.drawImage(roverimage1,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown",keydown);
function keydown(e)
{
keyvalue=e.keyCode;
console.log(keyvalue);
if(keyvalue=="38")
{
    up()
    console.log("up")
}
if(keyvalue=="40")
{
    down()
    console.log("down")
}
if(keyvalue=="39")
{
    right()
    console.log("right")
}
if(keyvalue=="37")
{
    left()
    console.log("left")
}
}

function up()
{
    if(rovery>=0){
        rovery=rovery-10
        uploadbackground()
        uploadrover()
    }
}
function down()
{
    if(rovery<=500)
{
    rovery=rovery+10
    uploadbackground()
    uploadrover()
}
}
function right()
{
    if(roverx<=700)
    {
        roverx=roverx+10
        uploadbackground()
        uploadrover()
    }
}
function left()
{
    if(roverx>=0)
    {
        roverx=roverx-10
        uploadbackground()
        uploadrover()
    }
}