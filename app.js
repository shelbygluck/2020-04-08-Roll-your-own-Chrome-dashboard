var oReq = new XMLHttpRequest()
oReq.addEventListener("load", reqListener)
oReq.open("GET", "https://source.unsplash.com/collection/652250/1200x800")
oReq.send()

function reqListener () {
    const canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let imageObj = new Image();
    imageObj.onload = function() {
        context.drawImage(imageObj, 0,0);  
    }
    imageObj.setAttribute("src", this.responseURL)
    context.strokeStyle = '#BADASS'
    context.lineJoin = 'round'
    context.lineCap = 'round'
    context.lineWidth = 10 

    let isDrawing = false
    let lastX
    let lastY

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true
       lastX = e.offsetX
       lastY = e.offsetY
   })
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', () => {isDrawing = false})
    canvas.addEventListener('mouseout', () => {isDrawing = false}) //handling reentering of canvas

    function draw(e) {
      if (!isDrawing) {return} //don't draw if mouse isn't down
      context.beginPath()
      context.moveTo(lastX, lastY) //start here
      context.lineTo(e.offsetX, e.offsetY) //go to here
      context.stroke() //color the line
      lastX = e.offsetX //reset starting position
      lastY = e.offsetY
  }
}






  
  