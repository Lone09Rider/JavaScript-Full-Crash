function checkCondition(num) {
    if (num == 0) {
        return 0;
    }
    else if (num % 2 == 0) {
        return "Even";
    }
    return "Odd";
}

console.log(checkCondition(0));
console.log(checkCondition(59));
console.log(checkCondition(2264));