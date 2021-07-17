const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!!');
    // reject('Error!!');
  }, 2000);
});

// 1 - primeira forma de trabalhar com promises (maneira antiga) - não trava o codigo, continua a execução
apiCall.then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});

// 2 - utilizando a maneira nova async await - ele gtrava o codigo ate que a promises seja reolvida
//  para utilizar precisamos estar dentro de uma function
// para pegar o erro precisamos utilizar try catch
async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
  } catch (error) {
    console.log(error);
  }
};

run();
