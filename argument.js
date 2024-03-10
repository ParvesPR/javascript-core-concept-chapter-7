// Pass an parameter in a function
function add(a, b) {
    var result = a + b;
    console.log(result);
}
console.log(10 + 20);

// Summation using function
var arr1 = [1, 3, 5]
var arr2 = [7, 9, 11]
var arr3 = [13, 15, 17]

function sumArray(arr) {
    var total = 0;
    for (var x = 0; x < arr.length; x++) {
        total += arr[x];
    }
    console.log(total);
}
sumArray(arr1)
sumArray(arr2)
sumArray(arr3)

// Argument 
function sumAdd() {
    console.log(arguments);
}
sumAdd(10, 20, 30);

function addAll() {
    var total = 0;
    for (var x = 0; x < arguments.length; x++) {
        total += arguments[x]
    }
    console.log(total);
}
addAll(1, 2, 3, 4,5)