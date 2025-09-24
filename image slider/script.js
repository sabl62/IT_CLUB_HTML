let imageNumber = 1;
let totalImages =5;
function changeImage(event){
    let container = document.getElementById("container")
    if (event.target.id == "left-arrow") {
        if (imageNumber <= 1) {
            imageNumber = 5;
        }
        else{
            imageNumber =imageNumber-1;
        }
    }
    if (event.target.id == "right-arrow") {
        if (imageNumber >= totalImages){
            imageNumber = 1;
        }
    }
}