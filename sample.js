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
