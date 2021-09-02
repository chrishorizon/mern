// Rewrite the code the way it would be seen by the interpreter and predict the output.

// 1
var hello = 'world';
console.log(hello);
// Output: 'world'

// 2
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();
// Output: 'magnet'

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Output: 'super cool'

// 4
var food = 'chicken';
console.log(food);
function eat(){
    var food = 'gone'; 
    console.log(food);
}
eat();
// Output: 'chicken', 'gone'

// 5
var mean = function() {
    let food = "fish";
    food = "chicken";
    console.log(food);
    console.log(food);
}
mean();
// Output: 'chicken', 'chicken'

// 6
const genre = "disco";
function rewind() {
    var genre = "r&b";
    console.log(genre);
    genre = "rock";
    console.log(genre);
}
console.log(genre);
rewind();
// Output: 'disco', 'r&b', 'rock'

// 7
dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();
// Output: 'san jose', 'san jose', 'seattle', 'burbank'

// 8 
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// Output: 'true', 'closed for now'

