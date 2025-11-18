let list = document.querySelectorAll(".test");
console.log(list);

// list[0].style.color = "red";
// list[1].style.backgroundColor = "green";

list.forEach(e => {
    e.style.color = "red";
});

let task = document.querySelector("#task");
console.log(task);

task.style.width = "13vw";
task.style.height = "4vh";

 function handleChange(event){
    console.log("working");
    let data = event.target.value
    console.log(data)
 };
