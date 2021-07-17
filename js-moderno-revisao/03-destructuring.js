const user = {
  firstName: 'Rafael',
  lastName: 'Domingues',
  age: 29,
  instagram: '@rafadomingues23',
  skills: ['back-end', 'node', 'front-end'],
};

// obtendo name e age do usuario
const firstName1 = user.firstName;
const age1 = user.age;
console.log(firstName1, age1);

// utilizando destructuring para obter apenas o nome do usuario e a idade
const { firstName, age, skills } = user;
console.log(firstName, age, skills[0])

// utilizando destructuring com arrays
const [a, b, c] = skills;  // no array podemos dar o nome que quisermos
console.log(a, b, c)

// renomeando com destructuring
const {firstName: nome, age: idade} = user; // para renomear basta apenas colocar : e stribuir o nome
console.log(nome, idade)
