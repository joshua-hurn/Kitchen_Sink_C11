// Storing my name in a variable.
let myName = "Josh";

// Storing the number of states in a variable.
const numOfStates = 50;

// Computing 5 plus 4 and storing in a variable.
const addingNumbers = 5 + 4;

function sayHello() {
    alert("Hello World!");
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else {
        alert("Welcome!");
    }
}

// checkAge("Charles", 21);
// checkAge("Abby", 27);
// checkAge("James", 18);
// checkAge("John", 17);

let myFavoriteVeg = ["Broccoli", "Squash", "Green Beans", "Corn", "Beets"];

for (let i = 0; i < myFavoriteVeg.length; i++) {
    console.log(myFavoriteVeg[i]);
}

let pet = {
    name: "Lassy",
    breed: "Collie"
};

console.log(pet.name, pet.breed);

let people = [
    {
        name: "Josh",
        age: 26
    },
    {
        name: "Jake",
        age: 25
    },
    {
        name: "Garrett",
        age: 21
    },
    {
        name: "Erron",
        age: 30
    },
    {
        name: "Kim",
        age: 12
    }
];

// for (let i = 0; i < people.length; i++) {
//     checkAge(people[i].name, people[i].age);
// }

function getLength(word) {
    return word.length;
}

let stringLength = getLength("hello world");

if (stringLength % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}