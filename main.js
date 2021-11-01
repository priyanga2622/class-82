var mouseEvent="empty";
var lastx,lasty;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
clr="black";
wd=2;
canvas.addEventListener("mousedown",md);
function md(e)
{
    clr=document.getElementById("clr").value;
    wd=document.getElementById("wd").value;
    mouseEvent="mousedown";

}
canvas.addEventListener("mousemove",mv);
function mv(e)
{
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=clr;
        ctx.lineWidth=wd;
     ctx.moveTo(lastx,lasty);
         ctx.lineTo(currentx,currenty);
        ctx.stroke()
    }
    lastx=currentx;
    lasty=currenty;
}
canvas.addEventListener("mouseup",mp);
function mp(e)
{
    mouseEvent="mouseup";
}
    canvas.addEventListener("mouseLeave",ml);
function ml(e)
{
    mouseEvent="mouseLeave";
}
