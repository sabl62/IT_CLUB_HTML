function startGame() {
    gn = 12
    n = prompt("guess number: ");
    while (gn != n) {
        if (gn == n) {
            alert("Entered number is correct!");
        }
        else if (n < gn) {
            alert("Entered number is smaller than correct number!, try with greater value");
            n = prompt("try again ");
        }
        else {
            alert("Smaller");
            n = prompt("try again: ")
        }
    }
}

// api calling
fetch("https://dummyjson.com/products")
    .then((res) => { //fat arrow function
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })