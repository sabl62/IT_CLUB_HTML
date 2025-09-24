function display(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const form = document.getElementById("form");
    document.getElementById("user").innerText = "Username: " + username;
    document.getElementById("pass").innerText = "Password: " + password;
    document.body.style.backgroundColor = "aqua";
    if (password && username) {
        alert("Login Successful!")
    }
    else {
        alert("please fill out all the fields")
    }
    form.reset();
}
// My method:
// function changeColor(){
//     let colors = ["aqua", "lightblue", "lightgreen", "lightpink", "lightyellow", "white"]; //This is called an array.
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];//Math.floor is a function for rounding up a value.
//     // Math.random() is a function for generating random between 1 and 0.
//     document.body.style.backgroundColor = randomColor;
//     alert(randomColor)
// }
//Santosh sir's Method:
function changeColor() {
    let colors = ["blue", "green", "red", "aqua", "yellow", "grey", "white", "lightblue", "pink", "orange"]
    let randomNumber = Math.floor(Math.random() * 10)//multiplying by no. of colors
    document.body.style.backgroundColor = colors[randomNumber]
    alert("the background is " + colors[randomNumber])
}