class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        return `My name is ${this.name}`
    }

    showStats(){
        return `Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`
    }

    drinkSake(){
        this.health += 10
    }
}

const chris = new Ninja('Chris', 10,)

console.log(chris.sayName())
console.log(chris.showStats())
chris.drinkSake()
console.log(chris.showStats())