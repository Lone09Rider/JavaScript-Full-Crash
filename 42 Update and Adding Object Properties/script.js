var myDog = {
    name: "Peter",
    legs: 4,
    tail: true,
};

myDog["name"] = "Marcos";
console.table(myDog);

myDog.name = "Peter";
console.table(myDog);

myDog.color = "Black";
console.table(myDog);

myDog["color"] = "Brown";
console.table(myDog);