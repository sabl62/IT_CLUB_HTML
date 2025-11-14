let slider = document.getElementById('slider');
let imageNumber = 1;
let totalImages = 5;
let change = document.getElementById('change')

function changeImage(event) {
    if (event.target.id == 'left-arrow') {
        if (imageNumber <= 1) {
            imageNumber = totalImages; //if already the 1st image is selected and tried to change image
            //by left arrow, it takes to last image.
        }

        else {
            imageNumber -= 1; //imgno = imgno - 1
        }

    }
    else if (event.target.id == 'right-arrow') {
        if (imageNumber >= 5) {
            imageNumber = 1;
        }

        else {
            imageNumber += 1;
        }
    }
    change.innerText = imageNumber;
    slider.style.background = `url(images/${imageNumber}.jpg)`
}
