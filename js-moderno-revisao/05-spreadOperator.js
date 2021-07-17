const user = {
  firstName: 'Rafael',
  lastName: 'Domingues',
  age: 29,
  instagram: '@rafadomingues23',
  skills: ['back-end', 'front-end', 'ui/ux'],
  active: false,
};

// Spread
// supondo que queiramos mudar o active do user - podem temos que manter a imutabilidade do obj
const updatedUser = {  // fizemos o spread do user no updatedUser e mudamos o active
  ...user,
  skills: [...user.skills, 'cisco' ],
  active: true,  // sempre o ultimo propriedade de nome igual é o que prevalece
};

console.log(user)

console.log(updatedUser);
