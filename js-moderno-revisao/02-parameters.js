// definiindo um params default

// versao antiga
function printGreetings(params) {
  console.log(params ? params : 'Default message');  // usando uma condicional
};

printGreetings();

// versao nova
function printGreetings2(params = 'Default message') { // basta acrescentar o valor default como parametro
  console.log(params);
};

printGreetings2();