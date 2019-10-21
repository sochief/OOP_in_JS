// Closures

function retirement(retirementAge) {
    var a = 'years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log(retirementAge - age + a);
    };
}
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);
retirementGermany(1990);
retirementUS(1990);
retirementIceLand(1990);
