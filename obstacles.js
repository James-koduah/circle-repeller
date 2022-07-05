



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
    if(blockY+blockH>circleY-radius){
        if(circleX-radius<(blockX+blockW)){
            alert('gameOver')
        }
    }
}