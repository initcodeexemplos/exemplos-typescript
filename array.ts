// let numeros: number[] = [10, 20, 30];

// numeros.push(40); // [10, 20, 30, 40]

// const ultimo = numeros.pop(); // 40, array: [10, 20, 30]

// numeros.unshift(5); // [5, 10, 20, 30]

// const primeiro = numeros.shift(); // 5, array: [10, 20, 30]

// numeros.splice(1, 1); // remove 1 item na posição 1 → [10, 30]
// numeros.splice(1, 0, 25); // insere 25 na posição 1 → [10, 25, 30]
// console.log(numeros)

const nomes: string[] = ["Ana", "Bruno", "Carlos"];

// // forEach
// nomes.forEach((nome) => console.log(nome)); // Imprime cada nome

// // map
// const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase()); // ["ANA", "BRUNO", "CARLOS"]
// console.log(nomesMaiusculos, nomes)

// // filter
const nomesComMaisDe4Letras = nomes.filter((nome) => nome.length > 4); // ["Bruno", "Carlos"]
// console.log(nomesComMaisDe4Letras, nomes)

// // reduce
// const totalLetras = nomes.reduce((acum, nome) => acum + nome.length, 0); // 15

// // some
// const temNomeComB = nomes.some((nome) => nome.startsWith("B")); // true

// // every
// const todosTemMaisDe3Letras = nomes.every((nome) => nome.length > 3); // true

// // find
// const nomeComA = nomes.find((nome) => nome.includes("a")); // "Ana" (case sensitive)

// // findIndex
// const indexCarlos = nomes.findIndex((nome) => nome === "Carlos"); // 2

const cores: string[] = ["vermelho", "azul", "verde"];

// // includes
// const temAzul = cores.includes("azul"); // true

// // indexOf
// const indiceVerde = cores.indexOf("verde"); // 2

// // join
// const textoCores = cores.join(", "); // "vermelho, azul, verde"

// // slice
// const primeirasDuas = cores.slice(0, 2); // ["vermelho", "azul"]

// // concat
// const maisCores = cores.concat(["amarelo", "roxo"]); // ["vermelho", "azul", "verde", "amarelo", "roxo"]

// // reverse
// const coresInvertidas = [...cores].reverse(); // ["verde", "azul", "vermelho"]

// // sort (atenção com ordenação alfabética padrão)
// const numeros2: number[] = [3, 1, 10, 2];
// numeros2.sort((a, b) => a - b); // [1, 2, 3, 10]