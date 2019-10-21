// Bind call and apply methods

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log(
                'Good ' +
                    timeOfDay +
                    ", Ladies and gentelmen I'm " +
                    this.name +
                    " , I'm " +
                    this.job +
                    " and I'm " +
                    this.age +
                    ' years old.'
            );
        } else if (style === 'friendly') {
            console.log(
                "Hey what's up? I'm " +
                    this.name +
                    " I'm a " +
                    this.job +
                    " I'm " +
                    this.age +
                    ' years old. Have a nice ' +
                    timeOfDay +
                    '.'
            );
        }
    },
};
john.presentation('formal', 'evening');
var emily = {
    name: 'Emily',
    age: 26,
    job: 'designer',
};

john.presentation.call(emily, 'friendly', 'afternoon');
// call method makes us apply method for the other objects
// there is a similar method called apply, where we pass arguments to the function  as an array
// Bind method , makes a copy of a function, and doesnt call a function  itself
