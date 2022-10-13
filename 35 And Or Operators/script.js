function checkCondition(num) {
    if (num <= 50 && num >= 25) {
        return "Greater than 25 less than 50";
    }

    if (num == 100 || num == 1000) {
        return "Just 10 Multiple";
    }
}

console.log(checkCondition(0));
console.log(checkCondition(29));