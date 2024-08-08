//Array com o nome das armas
let armas = ["laser", "mísseis", "espada", "espada de plasma", "lança chamas"];

// Array vazio porque vai ser adicionado o numero do ataque ao longo  do código
let ataques = [];

//Array começa no zero porque quando é zero indica o nome do robô
ataques[0] = "Dev";


ataques.push(armas[0]); // laser
ataques.push(armas[2]); // mísseis
ataques.push(armas[1]); // espada
ataques.push(armas[3]); // espada de plasma
ataques.push(armas[4]); // lança chamas


console.log("Nome do Robô: " + ataques[0]);

for (let i = 1; i < ataques.length; i++) {
    console.log("Nome do RobÔ " + i + ": " + ataques[i]);
}
   