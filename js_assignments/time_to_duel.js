class Card{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power
        this.resilience = resilience
    }
    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power
            // console.log(`${target.name} took ${this.power} damage`)
        } else {
            throw new Error('Target must be a unit!')
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
    play(target){
        if( target instanceof Unit ) {
            // implement card text here
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBelt = new Unit('Red Belt Ninja', 3, 3, 4)

const blackBelt = new Unit('Black Belt Ninja', 4, 5, 4)

redBelt.attack(blackBelt)
console.log(blackBelt.resilience)