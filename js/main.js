var imagesElement=Array.from(document.querySelectorAll("#im1"));
console.log(imagesElement);
// imagesElement.addeventlistnear("click",function(){

// })
for(var i=0;i<imagesElement.length;i++){
    imagesElement[i].addeventlistnear("click",function(){
    console.log("hello");
 })
}
