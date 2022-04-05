// Steps
// You will use the spread operator to copy an array which is stored in an object which itself is stored in an array. 
// You will create a single line arrow function (has no return statement), which should copy an array passed in 
// and add the value passed to it, then return the array.
// Create a variable named subjects using the keyword let
// Assign it a copy of the subjects array from the first object in the students array
// Create a variable named update using the keyword const
// Assign the variable update a single line arrow function  (should not have a return statement)
// The arrow function should take two parameters named: item and val the arrow function should copy the array passed in 
// and add the value passed to it, then return the array.
// Create a variable named: updatedSubjects using the keyword let
// Variable updatedSubjects should be assigned the return value from calling the update function passing in the 
// subjects array and the string "Electronics"
// Variable updatedSubjects should have the correct value
// The original version of the subjects array in the students array should not have been modified
// log out the variable updatedSubjects to see its value
// log out students[0] to see that it has not been changed, if you have done everything correctly

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects]
console.log(subjects);

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);
console.log(students[0]);
