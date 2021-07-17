// templatestring permite quebras de linhas e prmite interpolação

// quebra de linha
console.log(`
  linha 1
  linha 2
  linha 3
`);

//interpolcao
const myName = 'rafael';

console.log(`Seja bem-vindo ${myName} !!`);

console.log(`Seja bem-vindo ${Math.random() > 0.5 ? 'SIM' : 'NÃO'} !!`);
