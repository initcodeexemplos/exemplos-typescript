// salvar 3 notas
const nota1: number = 7;
const nota2: number = 7;
const nota3: number = 6;
// calcular a media
const media: number = (nota1 + nota2 + nota3)/3
console.log(media)
// se < 3- horrivel
if (media < 3) {
    console.log('Horrivel')
    // se > 3 < 7 - da pra melhorar
} else if (media < 7) {
    console.log('Da pra melhorar')
    // se > 7 - ótimo
} else {
    console.log("ótimo")
}