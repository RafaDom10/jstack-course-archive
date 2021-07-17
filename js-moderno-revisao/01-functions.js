// 1- Diferenças entre funções arrow e normal

// principais diferencas é o contexto this de cada function

function minhaFunction() {
  this.name = `rafael`; // esse tipo de funcao tem seu proprio this seu proprio contexto
};

const minhaArrowFunction = () => {
  this.name = 'rafael';
};  // this do escopo em que a function foi criada neste caso contexto node


// 2 - receber varios argumentos dentro de uma funcao e realizar a soma

// metodo 1
function soma() {
  console.log(Object.values(arguments));  // automaticamente arguments ira reconhecer todos os parametros passados na funcao
};  // arguments em arrow functions ele traz o arguments do contexto que ela foi criada

soma(1, 2, 3, 4, 5, 6, 7);

// metodo 2 - rest operator
function soma2(...params) {  // nas arrow functions só funciona o rest operator ...
  console.log(params)
};

soma2(5, 6, 7, 8, 9, 10)


// 4 - diferenças de arrows functions

// normal
const hello = () => {
  return 'Hello world!';
};

// short syntax
const hello2 = () => 'Hello world!';

// com parenteses () - quando utilizamos alguma condicional é recomendado utilizar parenteses
const number = 10;
const soma = () => (
  number >= 10 
    ? 'Maior igual a 10' 
    : 'Menor que 10'
);

// retornando um obj diretamento com return implicito
const getUser = () => ({
  id: '123',
  name: 'rafael'
});

// com return
const getUser1 = () => {
  return {
    id: '123',
    name: 'rafael'
  }
};