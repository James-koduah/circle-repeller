/**
 * Just a simple canvas and a number of elements to push around
 * with your mouse cursor
 * Its been fun building this
 */
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let canW = canvas.width = 1020
let canH = canvas.height = 720
/**
 * Objects to be rendered to screen
 */
let balls = {
    ball1: {xAxis: 360, yAxis: 360, radius: 35},
    ball2: {xAxis: 260, yAxis: 360, radius: 20},
    ball3: {xAxis: 360, yAxis: 160, radius: 30},
}

//Function calls
render(balls)
setInterval(()=>{
    document.addEventListener('mousemove', repelCircle);
}, 2000)


/**
 * Fuction descriptions 
 */
function render(items){
    /*
     * A Function that refreshes the screen with the new positions
     * of objects.
     */
    ctx.clearRect(0, 0, canW, canH)
    for (let ball in items){
        let specs = items[ball]
        drawCircle(specs.xAxis, specs.yAxis, specs.radius)
    }
}
function drawCircle(xAxis, yAxis, radius){
    // Draws Ball like objects to the screen
    ctx.beginPath()
    ctx.arc(xAxis, yAxis, radius, 0, 2 * Math.PI)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.closePath()
}
function repelCalculations(circle_xAxis, circle_yAxis, mouse_xAxis, mouse_yAxis, radius) {
    /**
     * The logic behind the repeling abilities of the balls
     */
    if(mouse_xAxis > circle_xAxis) {
        if(mouse_xAxis < (circle_xAxis + radius) && mouse_xAxis > (circle_xAxis - radius)) {
            if(mouse_yAxis < (circle_yAxis + radius - 1) && mouse_yAxis > (circle_yAxis - radius - 1) ){
                circle_xAxis -= 3
            }    
        }
    }
    if(mouse_xAxis < circle_xAxis){
        if(mouse_xAxis > (circle_xAxis - radius) && mouse_xAxis < (circle_xAxis + radius)) {
            if(mouse_yAxis < (circle_yAxis + radius - 1) && mouse_yAxis > (circle_yAxis - radius - 1)) {
                circle_xAxis += 3
            }    
        }
    }
    if(mouse_yAxis > (circle_yAxis)){
        if(mouse_yAxis < (circle_yAxis + radius) && mouse_yAxis > (circle_yAxis - radius)) {
            if(mouse_xAxis < (circle_xAxis + radius - 1) && mouse_xAxis > (circle_xAxis - radius - 1)) {
                circle_yAxis -= 3
            }
        }
    }
    if(mouse_yAxis < (circle_yAxis)){
        if(mouse_yAxis > (circle_yAxis - radius) && mouse_yAxis < (circle_yAxis + radius)){
                if(mouse_xAxis < (circle_xAxis + radius - 1) && mouse_xAxis > (circle_xAxis - radius - 1)) {
                circle_yAxis += 3
                // ctx.clearRect(0, 0, canW, canH)
                // drawBlocks()
            }
        }
    }
    return [circle_xAxis, circle_yAxis]
}
function repelCircle(event){
    /**
     * An overlay function that brings everything together
     * nicely as a well oiled machine
     */
    let mouseX = event.clientX;
    let mouseY = event.clientY
    
    for (let ball in balls){
        specs = balls[ball]
        let n = repelCalculations(specs.xAxis, specs.yAxis, mouseX, mouseY, specs.radius)
        specs.xAxis = n[0]
        specs.yAxis = n[1]        
    }
    render(balls)

}




// Add a goal post and some obstacles. if the person touches an obstacle there should be consequenses
