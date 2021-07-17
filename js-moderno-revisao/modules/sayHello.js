function sayHello(params) {
  console.log(`Olá ${params} !!`);
};

// exportando
export default function sayHello(params) {
  console.log(`Olá ${params} !!`);
};

// exportando
export function sayHello(params) {
  console.log(`Olá ${params} !!`);
};

// maneira convencional de exportar um modulo
// module.exports = sayHello;


// nova maneira
export default sayHello; // export default, podendo ser importado com qualquer nome
export {sayHello}; // dessa maneira somos obrigado a importar com o nome original
