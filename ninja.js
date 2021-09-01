// Class is the template/blueprint for creating objects, encapsulate data with code to work on that data.
class Ninja{
    // Constructor method creates and initializes an object created with a class.
    constructor(name, health, speed = 3, strength = 3){
        // Instance properties must be defined inside of class methods
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    // Methods below
    sayName(){
        console.log(`My name is ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    
    speakWisdom(){
        super.drinkSake()
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// Created instance of a class object
const chris = new Ninja('Chris', 10,)

console.log(chris.sayName())
console.log(chris.showStats())
chris.drinkSake()
console.log(chris.showStats())
