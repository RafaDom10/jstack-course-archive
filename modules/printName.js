/* 
function printName(name) {
  console.log(name);
}

const lastName = 'Domingues';

// exportando módulo
//module.exports = printName;

// exportando mais de dois elementos
module.exports = { printName, lastName }; */


// Refatorando
exports.printName = (name) => {
  console.log(name);
};

exports.lastName = 'Domingues';