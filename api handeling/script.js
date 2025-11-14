// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

// console.log(numbers)

//  console.log(numbers[4])

// console.log(numbers[6])

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
//      }
//  }

// string array
// let names = ["santosh", "aman", "prabhav", "rohan", "rahul", "miraj"]
//  console.log(names[3]);
// for(var p = 0; p < names.length; p++){
//      console.log(names[p]);
//  }

// names.forEach(element => {
//     console.log(element);
// });

// objects in js
// let students = {
//     name: "Sabal",
//     class: 9,
//     age: 14,
//     section: "AP",
//     address: "Kathmandu"
// };

// console.log(students.age);
// console.log(students.name);
// console.log(students.class);
// console.log(students.address);
// console.log(students.section);

let students = [
    {
        name: "abc",
        class: 9,
        roll: 12
    },

    {
        name: "def",
        class: 8,
        roll: 2
    },
];

// students.forEach(element => {
//     console.log(element.roll, element.name, element.class)
// });

for(let std = 0; std<students.length; std++){
    console.log(
        students[std].name, 
        students[std].class,
        students[std].roll
        );
}