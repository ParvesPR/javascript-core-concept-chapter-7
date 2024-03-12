function add() {
    var sum = 0;
    for (var x = 0; x < arguments.length; x++) {
        sum += arguments[x]
    }
    return sum;
}
var result = add(1, 2, 3, 4);
console.log(result);

function person(name, email) {
    return {
        name: name,
        email: email
    }
}
var result= person('Parves', 'parves2864@gmail.com');
console.log(result);