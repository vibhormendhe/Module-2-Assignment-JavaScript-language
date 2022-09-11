
// function greetTheStudent(studentName){//parameter //named function
//     return `Hello there ${studentName}`
// }

// const greetTheStudent = function (studentName){//parameter anonymous function //expression

//     return `Hello there ${studentName}`
// }

//fat arrow function
// const greetTheStudent = (studentName) =>{
//     return `Hello there ${studentName}`
// }

const greetTheStudent = studentName =>`Hello there ${studentName}`


// const fullName = function (firstName, middleName, lastName){
//     return `${lastName}, ${middleName}, ${firstName}`
// }

// const fullName = (firstName, middleName, lastName)=>{
//     return `${lastName}, ${middleName}, ${firstName}`
// }

const fullName = (firstName, middleName, lastName) =>`${lastName}, ${middleName}, ${firstName}`


// const student = 'Vibhor Mendhe'
// const greet = greetTheStudent(student)
// console.log(greet)

const titleName = fullName('Vibhor','T','Mendhe')
console.log(titleName)