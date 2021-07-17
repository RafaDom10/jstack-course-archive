const array = [
  { name: 'Iphone', price: '5000', quantity: 2 },
  { name: 'Macbook Pro', price: '20000', quantity: 1 },
  { name: 'Magic KeyBoard', price: '1200', quantity: 5 },
];


// .find()
const find = array.find((product) => {
  return product.price >= 20000;  // retorna produto cujo o price é maior ou igual à 20000
});
console.log(find)
// short sintax
const find01 = array.find((product) => product.name === 'Iphone');
console.log(find01);

console.log('----------------------------------------------------------')

// .findIndex() - exatamente igual ao metodo find porem retorna o index do elemento
const findIndex = array.findIndex((product) => product.name === 'Iphone');
console.log(findIndex);
console.log('Produto: ', array[findIndex]);

console.log('----------------------------------------------------------')

// .some() - verifica se algum elemento bate com a condição - some retorna um boolean
const some = array.some((product) => product.price > 1000); // true

// .every() - verifica se todos os elementos bate com a condição - every retorna um boolean
const every = array.every((product) => product.price < 1000); // false


// .map() - pegar um array e criar um novo baseado no anterior modificando algo
const map = array.map((product) => ({
  ...product,
  subtotal: product.quantity * product.price,
}));
console.log(map);

console.log('----------------------------------------------------------')

// .filter() - filtrar o array - por exemplo tirar alguns elementos
const filter = array.filter((product) => product.quantity > 1); // filtrando os elementos com quantity maior que 1
console.log(filter);

console.log('----------------------------------------------------------')

// .reduce() - reduzir um array em um número inteiro
const reduce = array.reduce((acc, product) => {
  return acc + (product.price * product.quantity);  // soma o preco de todos os produtos
}, 0);
console.log({ reduce });


function media(...args) {
  return args.reduce((acc, curr) => acc + curr, 0) / args.length;
};
console.log(media(6.5, 9.5, 7.0).toFixed(1));
