/* MÉTODOS ÚTEIS DE ARRAYS:
Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18.*/


const pessoas = [
  {
    nome: "Eduarda",
    idade: 5,
  },
  {
    nome: "Érica",
    idade: 52,
  },
  {
    nome: "Elena",
    idade: 10,
  }
];
const pessoaSelecionada = pessoas.find((pessoas) => pessoas.idade > 18);
console.log(pessoaSelecionada)