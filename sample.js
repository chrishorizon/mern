const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const {firstName, lastName, ...attributes} = person;
console.log(firstName)
console.log(lastName)
console.log(attributes)

const newPerson = {...person}; // creates a copy of the object
console.log(newPerson)

const sayHello = (name) => {
    console.log(`Hello ${name}`);
};
console.log(sayHello('chris'))

const sayHello = name => console.log(`Hello ${name}`);
console.log(sayHello('chris'))

function square(n){
    return n * n;
}

const square = n => n + n

console.log(square(5));

const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}

const returnObjLonghand = () => ({firstName: 'John', lastName: 'Wick'});

console.log(returnObjLonghand())


class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
}

console.log(Deck())