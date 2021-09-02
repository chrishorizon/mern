const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// const bListPkmn = pokémon.filter( p => p.name[0] === "B");

// const pkmnIds = pokémon.map( p => p.id )

// array of pokemon objects where the id is evenly divisible by 3
// const idDiv3 = pokémon.filter(p => p.id % 3 === 0)

// an array of pokémon objects that are "fire" type
// const firePkm = pokémon.filter(type => type.types.includes('fire'))

// an array of pokémon objects that have more than one type
// const type2 = pokémon.filter(m => m.types.length > 1)

// an array with just the names of the pokémon
// const pkmNames = pokémon.map((n) => n.name).sort()

// an array with just the names of pokémon with an id greater than 99
// const pkmid = pokémon.filter(i => i.id > 99).map((n) => n.name)

// an array with just the names of the pokémon whose only type is poison
// const poisonPkm = pokémon.filter(p => p.types.includes("poison")).map(n => n.name)

// an array containing just the first type of all the pokémon whose second type is "flying"
// const flyingPkm = pokémon.filter(p => p.types.includes("flying")).map(n => n.types[0])

const countPkm = pokémon.filter(p => p.types.includes('normal')).reduce()

const countPkm1 = pokémon.forEach((user) => user.id++);

console.log(countPkm1)