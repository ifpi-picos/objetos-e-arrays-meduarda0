/* MÉTODOS ÚTEIS DE ARRAYS:
Crie um array de números de 1 a 10 e use map para criar um novo array onde cada número é multiplicado por 2.*/

const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const novosElementos = elementos.map((elementos) => elementos*2)
console.log(`Nova lista de arays: ${novosElementos}`)