function checkSign(num) {
    return num > 0 ? "Positive" : num == 0 ? "Zero" : "Negetive";
}

console.log(checkSign(2));
console.log(checkSign(0));
console.log(checkSign(-3));