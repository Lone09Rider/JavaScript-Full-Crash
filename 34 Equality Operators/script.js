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

console.log(9 == 7); // Double Equality > Check only values if same or not
console.log(5 == '5');

console.log(3 === 3); // Strict Equality > Checks address with values and it types
console.log(3 === '3'); 