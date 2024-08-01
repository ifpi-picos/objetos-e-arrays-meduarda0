/* MÉTODOS ÚTEIS DE ARRAYS: 
Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.*/

const carros = [
  {
    nome: "Hilux",
    ano: 2020,
  },
  {
    nome: "BMW",
    ano: 2000,
  },
  {
    nome: "Corolla",
    ano: 2010,
  },
  {
    nome: "Lamborghini",
    ano: 2022,
  },
  {
    nome: "Ferrari",
    ano: 2009,
  }
];

const novaLista = carros.filter((carros) => carros.ano > 2010)
console.log(novaLista)