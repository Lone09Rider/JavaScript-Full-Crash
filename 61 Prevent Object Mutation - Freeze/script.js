function freezeObj() {
    const MATH_Cons = {
        PI : 3.14
    };

    Object.freeze(MATH_Cons)

    try {
        MATH_Cons.PI = 59; // Will Not Change
    } catch (ex) {
        console.log(ex);
    }

    return MATH_Cons.PI;
}

const PI = freezeObj();
console.log(PI);