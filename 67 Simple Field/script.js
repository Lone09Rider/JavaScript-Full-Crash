const createHuman = (name, age, gender) => ({name, age, gender});

// Javascript knows because of key value pair if same name
// {
//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// };

console.log(createHuman("KirA", 22, "M"));