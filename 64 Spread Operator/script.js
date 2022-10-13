const arr1 = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];

let arr2;

(function () {
    // arr2 = arr1; // Change thisand make a copy instead like a real on cause change in arr1 also does in arr2
    arr2 = [...arr1];
    arr1[1] = "ROSE"; // After the above line code will not change
})();


console.log(arr2);