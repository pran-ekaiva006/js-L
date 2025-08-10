const marvel_heros= ["thor","Ironman","spiderman"];

const Dc_heros=["superma","flash","batman"];
marvel_heros.push(Dc_heros);

console.log(marvel_heros)


const all_heros=marvel_heros.concat(Dc_heros);

console.log(all_heros)


const all_new_heros=[...marvel_heros,...Dc_heros] /***** Spread operator */

console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real=another_array.flat(Infinity)
console.log(real)


console.log(Array.isArray("pranjal"))

console.log(Array.from("Pranjal"));

console.log(Array.from({name:"Pranjal;"})) //Interseting case return Empty Array

let score01=100
let score02=200
let score03=300

console.log(Array.of(score01,score02,score03))