// 4.) Storing my name in a variable.
let myName = "Josh";

// 5.) Storing the number of states in a variable.
const numOfStates = 50;

// 6.) Computing 5 plus 4 and storing in a variable.
const addingNumbers = 5 + 4;

// 8.) Function to alert "hello world!"
function sayHello() {
    alert("Hello World!");
}
sayHello();

// 9.) Function checks age and alerts based on whether result is </> 21.
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else {
        alert("Welcome!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// 10.) Array of favorite veggies.
let myFavoriteVeg = ["Broccoli", "Squash", "Green Beans", "Corn", "Beets"];

for (let i = 0; i < myFavoriteVeg.length; i++) {
    console.log(myFavoriteVeg[i]);
}

// 11.) An object with name and breed properties.
let pet = {
    name: "Lassy",
    breed: "Collie"
};

console.log(pet.name, pet.breed);

// 12.) An array of five objects. Each object has name and age properties. Then looping through each one and checking age.
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

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

// 14.) Function returns the length of any word or string passed in. Then we find whether the word is even or odd using modulus
//      and console.log based on that.
function getLength(word) {
    return word.length;
}

let stringLength = getLength("hello world");

if (stringLength % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}