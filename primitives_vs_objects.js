// Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a + ' ' + b);
// a 46
// b 23

// Objects
var obj1 = {
    name: 'John',
    age: 26,
};
var obj2 = obj1;

obj1.name = 'Petya';
console.log(obj1);
console.log(obj2);
// Both of them will be Petya

// No copy was created here, they are just a reference to an object(pionter)

// Funcctions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(name, city);
console.log(age);
console.log(obj.city);
