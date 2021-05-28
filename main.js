var canvas= document.getElementById("myCanvas")
var mouseEvent=""
var ctx= canvas.getContext("2d")
canvas.addEventListener("mousedown", mousedown_event)
function mousedown_event(e){
mouseEvent= "mousedown";
}
canvas.addEventListener("mouseup", mouseUP_event)
function mouseUP_event(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", mouseleave_event)
function mouseleave_event(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", mousemove_event)
function mousemove_event(e){
    var current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y= e.clientY - canvas.offsetTop;
    if(mouseEvent== "mousedown"){
        ctx.beginPath()
        ctx.moveTo(last_position_X, last_position_Y)
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 50, 0, 2*Math.PI)
        ctx.stroke()
    }
   last_position_X= current_position_of_mouse_x
   last_position_Y= current_position_of_mouse_y
}