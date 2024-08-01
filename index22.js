/* STRINGS:
Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.*/

function primeiroUltimoNome() {
  const nomeCompleto = prompt('Digite seu nome completo: ');
  const nome = nomeCompleto.split(" ");
  const primeiroNome = nome[0];
  const ultimoNome = nome [nome.length - 1];
  console.log(`PRIMEIRO NOME: ${primeiroNome}`, `\n ÚLTIMO NOME: ${ultimoNome}`);
}
primeiroUltimoNome()