function reqListener () {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  imageObj = new Image();

    imageObj.onload = function() {
    context.drawImage(imageObj, 0,0);  
  }
  imageObj.setAttribute("src", this.responseURL)

  }
  
  var oReq = new XMLHttpRequest()
  oReq.addEventListener("load", reqListener)
  oReq.open("GET", "https://source.unsplash.com/collection/652250/1200x800")
  oReq.send()


  
  