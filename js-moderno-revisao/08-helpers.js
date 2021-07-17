// Método include()
const tech = 'Node.js';
const array = ['Node.js', 'Java', 'Ruby', 'React.js'];

const includesString = tech.includes('.');  // verificar se contem algum caracter na str
const includesArray = array.includes('Node.js');

console.log({ includesString });  // true
console.log({ includesArray });

// Método startsWith()
const startsWith = tech.startsWith('N'); // true
console.log({ startsWith })

// Método endsWith
const endsWith = tech.startsWith('N'); // false
console.log({ endsWith })

