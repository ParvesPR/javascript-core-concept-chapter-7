// Function express
var addition = function (a, b) {
    return a + b;
}
addition(10 + 20);

setTimeout(function () {
    console.log('I will call after 3 second');
},
    3000);
var another = addition;
console.log(another(7, 3));

