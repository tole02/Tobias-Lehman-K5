var images = [
     {name:"oilpump", src: "1.png"},
     {name:"oilrig", src: "2.png"},
     {name:"naturalgas", src: "3.png"},
     {name:"mine", src: "4.png"}
]

var endofimages=images.length;

var i=-1;

function nextImage(){
    i++;
    if(i==endofimages) i=0;

        document.getElementById('testimage').setAttribute('src', images[i].src);
}
function previousImage(){
    i--;
    if(i<0) i=endofimages-1;
        document.getElementById('testimage').setAttribute('src', images[i].src);

}