//Etapa 01: Preciso verificar se a idade do aluno é maior que 7 anos

//Etapa 02: Para alunos entre 8 e 12 anos: infantil;
//Para alunos entre 13 e 17 anos: adolescentes;
//Pra alunos de 18: adulto;

let idadeAluno = 2;

if (idadeAluno > 7 && idadeAluno < 13) {
 console.log("Aluno está na cateoria infantil");
}else if (idadeAluno > 12 && idadeAluno <18)
console.log("Aluno está na categoria adolescente")
else if (idadeAluno > 17) {
    console.log("Aluno não pode se matricular");
}else{
    console.log("O aluno não pode ser matriculado")
}

// Nova atividade 

let quantidadePalmas = 6;
let sequenciaPalmas = "";

for (let i = 1; i< quantidadePalmas; i++) {
sequenciaPalmas += "👏";
    if (i % 5 === 0) {
       sequenciaPalmas +="🎉";

    }
}

console.log (sequenciaPalmas);