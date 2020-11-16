// function add(num1: number, num2: number) {
//     return num1 + num2
// }

// const number1 = 5
// const number2 = 2.3

// const result = add(number1, number2)

const person = {
    name: 'Alex',
    age: 35,
    hobbies: ['Guitar', 'Tennis']
}
let favouriteActivities: string[]

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}