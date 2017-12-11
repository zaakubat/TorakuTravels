var $ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {
    var imageNode = $("image");
    
    var links = document.getElementsByTagName("a");
    
  
    
    var i, linkNode, image;
    var imageCache = [];
    
    for (i = 0; i<links.length; i++){
        linkNode = links[i];
        
        image= new Image(); 
        image.src = linkNode.getAttribute("href");
        imageCache.push(image);
    }
    
    
    
    var imageCounter = 0;
    var timer = setInterval (
        function () {
            imageCounter = (imageCounter + 1) % imageCache.length;
            image = imageCache[imageCounter];
            imageNode.src = image.src;
        },
            2000);
    }
