



let blockX,blockY,blockW,blockH





drawBlocks()
function drawBlocks(){
    blockX=70
    blockY=90
    blockH=50;
    blockW=50;
    ctx.beginPath()
    ctx.rect(blockX,blockY,blockW,blockH)
    ctx.fillStyle='blue'
    ctx.fill()
    ctx.closePath()
    collision()
}
function collision(){
    if (circleY + radius < (blockY + blockH)  && circleY + radius > blockY){
        if(circleX + radius > (blockX) && circleX + radius < (blockX  + blockW )){
        console.log('james')
        }
    }
    if (circleX + radius >= (blockX) && circleX + radius <= ((blockX) + blockW)){
        if(circleY + radius > blockY && circleY + radius < (blockY + blockH )){
            console.log('game')
        }
    }






















    // if(blockY+blockH>circleY-radius){
    //     if(blockX+blockW>circleX-radius){
    //         console.log('james')
    //     }
    // }else
    // if(blockY<circleY+radius){
    //     if(blockX<circleX+radius){
    //         console.log('jgame')
    //     }
    // }
    
}