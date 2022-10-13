var myDog = {

    name: "Peter",
    legs: 4,
    tail: true,
};


function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp];
    } else {
        return "Not Found";
    }
    
    return "Change Me !";
}

console.log(checkObj("name"));
console.log(checkObj("malik"));