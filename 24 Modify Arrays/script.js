var myArray = ["KirA", "L", 9, 5, 99];

myArray[2] = 95;

console.log(myArray);

myArray.push(9);

console.log(myArray);

myArray.filter((i) => {
    if (i%3 == 0) {
        console.log(i);
    }
})