// Inner function or nested function
function greeting(greet, name) {
    function getName() {
        if (name) {
            return name.split(' ')[0]
        }
        else {
            return ''
        }
    }
    var greetMsg = greet + ' ' + getName();
    console.log(greetMsg);
}
greeting('Good Morning', 'PR Parves')