let quantidadePalmas = 6;
let sequenciaPalmas = "";

for (let i = 1; i< quantidadePalmas; i++) {
sequenciaPalmas += "👏";
    if (i % 5 === 0) {
       sequenciaPalmas +="🎉";

    }
}

console.log (sequenciaPalmas);