// maneira convencional de importar um modulo
// const sayHello = require('./sayHello');

// nova maneira de importar
import ola from './sayHello.js';
// para usar esse tipo de syntax necessario adicionar ao package.json -> type: module
// ou alterar a extensao do arquivo para .mjs
import { sayHello } from './sayHello.js'; // para importamos com a exportação restrita
import { sayHello as novoNome} from './sayHello.js'; // renomeando funcoes restritas

ola('rafael');
sayHello('ana');
novoNome('Soso');
