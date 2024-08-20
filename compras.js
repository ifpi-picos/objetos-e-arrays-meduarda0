const lista = [];

function adicionarItem() {
  let item;
  do {
    item = prompt('\nDigite o item a ser adicionado (ou deixe em branco para finalizar): ');
    if (item) {
      lista.push(item);
      console.log(`ITEM ADICIONADO: ${item}`);
    }
  } while (item);
}
//do-while executa o código pelo menos uma vez, só depois verifica a condição (código executado independente de a coondição ser verdade ou falsa na primeira iteração).


function removerItem() {
  const item = prompt('Digite o item a ser removido: ')
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === item) { //verificação do elemento atual da lista com o que o usuário deseja remover.
      lista.splice(i, 1);
      console.log(`ITEM REMOVIDO: ${item}`);
      return;
    }
  }
  console.log("Item não encontrado.")
}
/*laço for: variável inicializada em 0 (índice do primeiro elemento da lista); na condição, o loop continua enquanto i for menor que o tamanho da lista; no incremento, o valor de i é incrementado para que o próximo elemento seja verificado.*/

function pesquisarItem() {
  const item = prompt('Digite o item a ser pesquisado: ')
  if (lista.includes(item)){
    console.log(`${item} está na lista.`);
  } else{
    console.log(`${item} não está na lista.`)
  }
}

function ordenarLista() {
  lista.sort();
  console.log(`LISTA ORDENADA!`)
}

function exibirLista() {
  console.log(`LISTA DE COMPRAS: ${lista}`);
}

function limparLista() {
  lista.length = 0;
  console.log(`LISTA LIMPA!`)
}

while(true){
  console.log(`\n OPÇÕES:
     1 - Adicionar item
     2 - Remover item
     3 - Pesquisar item
     4 - Ordenar lista 
     5 - Exibir lista
     6 - Limpar lista
     7 - Encerrar programa`);
  const opcao = Number(prompt('\n Digite um número como opção: '))
  
  switch(opcao) {
  case 1:
    adicionarItem()
    break;
    case 2:
      removerItem()
      break;
    case 3:
      pesquisarItem()
      break;
    case 4:
      ordenarLista()
      break;
    case 5:
      exibirLista()
      break;
    case 6:
      limparLista()
      break;
    case 7:
      console.log('Programa encerrado!')
    process.exit() 
  default:
    console.log('Opção inválida!')
}
}
