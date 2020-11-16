// function add(num1: number, num2: number) {
//     return num1 + num2
// }
// const number1 = 5
// const number2 = 2.3
// const result = add(number1, number2)
var person = {
    name: 'Alex',
    age: 35,
    hobbies: ['Guitar', 'Tennis'],
    role: [1, 'admin']
};
var favouriteActivities;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
