const magic = () => new Date();

console.log(magic());

var arrJoin = (arr1, arr2) => arr1 + " " + arr2;

console.log(
  arrJoin([
    [1, 2],
    [5, 9],
  ])
);

// Default Parameters
const increment = (function() {
    return function increment(num, value = 1){
        return num + value;
    }
})();

console.log(increment(5));
console.log(increment(5, 9));