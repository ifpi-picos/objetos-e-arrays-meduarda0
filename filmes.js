const filmes = [];
const filmesAssistidos = [];

function adicionarFilme() {
  let titulo;
  do {
    titulo = prompt("\nDigite o filme a ser adicionado (ou deixe em branco para finalizar): ");
    const anoLancamento = Number(prompt("Digite o ano de lançamento: "));
    if (titulo) {
      const filme = {
        titulo: titulo,
        lancamento: anoLancamento
      }
      filmes.push(filme)
      console.log(`FILME ADICIONADO: ${filme.titulo} (${filme.lancamento})`);
    }
  } while (titulo);
}


function ordenarPorAno() {
  const ordenar = filmes.sort((a, b) => a.lancamento - b.lancamento);
  console.log(ordenar)
  
}

function ordenarPorTitulo() {
  filmes.sort((a, b) => a.titulo.localeCompare(b.titulo));
  console.log(filmes)
}

function pesquisarFilme() {
  const filme = prompt("Digite o nome do filme a ser pesquisado: ");
  const filmeEncontrado = filmes.find((f) => f.titulo === filme);
  if (filmeEncontrado) {
    console.log(`${filme} está na lista.`);
  } else {
    console.log(`${filme} não está na lista.`);
  }
}


function exibirLista() {
  const exibir = Number(prompt(`Digite 1 para exibir a lista de filmes não assistidos e 2 para a lista dos assistidos: `));
  if (exibir === 1){
    console.log(filmes)
    
  } else if (exibir === 2) {
    console.log(filmesAssistidos);
  }
}


function marcarComoAssistido() {
  const filme = prompt('Digite o filme que deseja marcar como assistido: ')
  const index = filmes.findIndex((f) => f.titulo === filme)
  if(index != -1){
    filmesAssistidos.push(filmes[index]);
    filmes.splice(index, 1)
    console.log(`${filme} marcado como assistido!`)
  } else {
    console.log('Esse filme não existe na lista!')
  } 
}


function removerFilme() {
  const filme = prompt("Digite o filme a ser removido: ");
  const index = filmes.findIndex((f) => f.titulo === filme)
  if (index != -1){
    filmes.splice(index, 1)
    console.log(`${filme} removido com sucesso!`)
  } else{
    console.log('Esse filme não existe na lista!')
  }
}


while (true) {
  console.log(`\nOPÇÕES:
  1. Adicionar filme
  2. Ordenar por ano
  3. Ordenar por título 
  4. Pesquisar filme
  5. Exibir listas
  6. Marcar filme como assistido
  7. Remover filme
  8. Encerrar porgrama `);
  const opcao = Number(prompt("\nDigite um número como opção: "));

  switch (opcao) {
    case 1:
      adicionarFilme();
      break;
    case 2:
      ordenarPorAno()
      break;
    case 3:
      ordenarPorTitulo()
      break;
    case 4:
      pesquisarFilme();
      break;
    case 5:
      exibirLista();
      break;
    case 6:
      marcarComoAssistido();
      break;
    case 7:
      removerFilme();
      break;
    case 8:
      console.log(`Programa encerrado!`);
      process.exit();
    default:
      console.log(`Opção inválida!`);
  }
}
