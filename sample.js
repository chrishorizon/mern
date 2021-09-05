function compress(str){
    if(str.length === 0){
        return '';
    }
    var newStr = '';
    var count = 1;
    for(var i=1; i<str.length; i++){
        if(str[i-1] === str[i]){
            count++;
        } else {
            newStr += str[i-1]
            if(count > 1){
                newStr += count;
                count = 1;
            }
        }
    }
    newStr += str[str.length-1]
    if(count > 1){
        newStr += count;
    }
    if(newStr.length < str.length){
        return newStr;
    } else {
        return str;
    }
}

console.log(compress('aaaabbbbbbcc'))


// Call back function
var sample = function(message) {
    console.log( message)
}

// sample('thellowojfowfjow')

function parentFunction(callback){
    callback('information')
}

// parentFunction( sample);

parentFunction( function(message) {
    console.log( message );
});


const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);

const sortedItems = [...items].sort();
console.log(sortedItems)

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
// points.sort((a,b) => (a-b))

console.log(points)

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList)

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes)

const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 !== 0 );
console.log(evens)

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods)

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes)

// Currying
function ninjaBelt(ninja) {
    return function belt(beltColor) { //note the closure here!
        console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
    }
}
ninjaBelt('Eileen')('black'); //note the double invocation here.


// Closures
// here we have a function called "Outer"
function outer() {
    let count = 0; // this is a count variable that is scoped to the function
    // there is an inner function that increments count and then console logs it
    function inner() {
        count++;
        console.log(count);
    }
    // we're returning the inner function
    return inner;
}

const counter = outer();   // counter is the function that we returned from calling the outer function
counter();                 // this will console.log "1"
counter();                 // this will console.log "2"
counter();                 // this will console.log "3"
counter();                 // this will console.log "4"

// so that means that the count variable still exists! 
// and it is being changed even though we aren't inside of the Outer function!
// can we access count out here?
console.log(count); // doesn't work!


function revStr(str){
    // return str.split('').reverse().join('')
    let temp = '';
    for(let i = str.length -1; i >= 0; i--){
        temp += str[i]
    }
    return temp;
}


var halo = "Chris";

console.log(revStr(halo))

