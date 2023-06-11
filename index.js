var items = document.querySelectorAll('.item');
var xCoord,yCoord;

items.forEach(function(item) {
    item.addEventListener('click', function() {
        if(item.textContent=="Home"){
            xCoord = 0;
            yCoord = 0;
        }
        else if(item.textContent=="Portofolio" | item.textContent=="Services"){
            xCoord = 0;
            yCoord = 1000;
        }
        else if(item.textContent=="Contact"){
            xCoord = 0;
            yCoord = 1200;
        }
        else if(item.textContent=="About"){
            xCoord = 0;
            yCoord = 450;
        }
        
        window.scrollTo(xCoord, yCoord);
    })
})