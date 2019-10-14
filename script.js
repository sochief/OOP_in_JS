// Function constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    };
};

// Either way we can create a prototype function, like that

//Person.prototype.calculateAge = function() {
//    console.log(2019 - this.yearOfBirth);
//};

var john = new Person('John', 1998, 'designer');
john.calculateAge();
