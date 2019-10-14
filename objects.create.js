// Object.create

// First we define an object which will act like a prototype

var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    },
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' },
});
//
