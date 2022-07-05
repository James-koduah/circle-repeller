let canvas=document.getElementById('canvas')
let ctx= canvas.getContext('2d')


let canW=canvas.width=1020
let canH=canvas.height=720
let circleX=360;
let circleY=360;
let radius=35;

drawCircle()

function drawCircle(){
    ctx.beginPath()
    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI)
    ctx.fillStyle='red'
    ctx.fill()
    ctx.closePath()
}


setInterval(()=>{
    document.addEventListener('mousemove',repelCircle );



function repelCircle(event){
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    let mouseX=event.clientX;
    let mouseY=event.clientY
    
    
    if(mouseX>circleX){
        if(mouseX<(circleX+radius) && mouseX>(circleX-radius)){
            if(mouseY<(circleY+radius-1) && mouseY>(circleY-radius-1) ){
                circleX-=1
                ctx.clearRect(0,0,canW,canH)
                drawCircle()
                drawBlocks()
            }    
        }
    }
    if(mouseX<circleX){
        if(mouseX>(circleX-radius)&& mouseX<(circleX+radius)){
            if(mouseY<(circleY+radius-1) && mouseY>(circleY-radius-1) ){
                circleX+=1
                ctx.clearRect(0,0,canW,canH)
                drawCircle()
                drawBlocks()
            }    
        }
    }
    if(mouseY>(circleY)){
        if(mouseY<(circleY+radius) && mouseY>(circleY-radius)){
            if(mouseX<(circleX+radius-1)&&mouseX>(circleX-radius-1)){
                circleY-=1
                ctx.clearRect(0,0,canW,canH)
                drawCircle()
                drawBlocks()
            }
        }
    }
    if(mouseY<(circleY)){
        if(mouseY>(circleY-radius)&& mouseY<(circleY+radius)){
                if(mouseX<(circleX+radius-1)&&mouseX>(circleX-radius-1)){
                circleY+=1
                ctx.clearRect(0,0,canW,canH)
                drawCircle()
                drawBlocks()
            }
        }
    }
}
},2000)



// Add a goal post and some obstacles. if the person touches an obstacle there should be consequenses
