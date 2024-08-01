/* STRINGS:
Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.*/

function exibirPrimeiroNome() {
  const nomeCompleto = prompt('Digite seu nome completo: ');
  const nome = nomeCompleto.split(' ');
  const primeiroNome = nome[0];
  console.log(`PRIMEIRO NOME: ${primeiroNome} \n`)
}
exibirPrimeiroNome()