let buttton = document.getElementById('btn')
let body = document.body.style;
// function doSomething() {
//     alert("welcome!");
//     buttton.style.background = "red";
//     buttton.style.color = "white";
//     let newButton = document.createElement("button");
//     newButton.textContent = "Hello"
//     document.body.appendChild(newButton);
// }

function doSomethingMore() {
    alert("You just double clicked me lmao");
    let para = document.createElement("p");
    para.innerText = "I just got created lol";
    document.body.appendChild(para);
    para.style.background = "black";
    para.style.color = "white";
}

function changeSomething() {
    alert("hover garis");
    body.width = "100vw";
    body.height = "100vh";
    body.backgroundColor = "red";
    for (i = 1; i <= 1000; i++){
        let h3 = document.createElement("h3")
        h3.innerText = "cool"
        document.body.appendChild(h3)
    }
}