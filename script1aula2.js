let carro1 = "Fuscao";
let carro2 = "Brasilia";
let carro3 = "Fiesta";

const carro = [];
carro [0] = "Celta";
carro [1] = "Corsa";
carro [2] = "Fuscao";
carro [3] = "Brsilia";
carro [4] = "Fiesta";
carro [5] = "Ka";


const carro = [];
carro [0] = "Celta";
carro[1] = "Corsa";

console.log(carro);
console.table(carro);
console.log(carro.length);
console.clear();

let carroCopia1 = [...carro];
console.table(carro);
console.log(carroCopia1);
console.log(carro == carroCopia1);

let carroCopia2 = carro.slice();
let carroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);