const s = [5, 6, 7];

function editArr() {

    // s = [2, 5, 9]; // Error

    s[0] = 2;
    s[1] = 5;
    s[2] = 9;
}

editArr(); // Reassign Done

console.log(s);