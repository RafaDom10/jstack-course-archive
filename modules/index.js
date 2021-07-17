// importando um módulo, no caso o printName
// const printName = require('./printName');

// para import dos modules nativos do node basta passar o nome do module ex.: const os = require('os');

// importando e ja utilizando destructuring para não precisar usar module.printName ou module.lastName
const { printName, lastName } = require('./printName');

printName(`Rafael ${lastName}`);