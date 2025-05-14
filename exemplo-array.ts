// FUP que solicite a altura de 5 pessoas, calcule a media e exiba o resultado.
const alturas: number[] = [1,2,3,4,5]

console.log((alturas[0]+alturas[1]+alturas[2]+alturas[3]+alturas[4])/alturas.length)

let somaFor = 0;
for(let i =0; i < alturas.length; i++) {
    somaFor = somaFor + alturas[i];
}
console.log(somaFor/alturas.length)

let somaEach = 0;
alturas.forEach((altura) => {
    somaEach += altura;
})
console.log(somaEach/alturas.length)

const somaReduce = alturas.reduce((acumulador, altura) => acumulador + altura, 0)
console.log(somaReduce/alturas.length)
