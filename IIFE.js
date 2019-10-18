// Immediately invoked function expressions
/*function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
// will return true or false

// Okay, what if we need to pass some of the arguments to this kind of functions?

// So you pass the argument, for example, let it be goodLuck paramether, which will make you win all the time

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(5);
// So thats for the variable privacy, so noone can get it or change it
