const user = {
  firstName: 'Rafael',
  lastName: 'Domingues',
  age: 29,
  instagram: '@rafadomingues23',
  skills: ['back-end', 'front-end', 'ui/ux'],
};

// Rest Operator
const { firstName, skills, ...rest} = user; // todas as propriedades que restou ficaram salvas em rest
console.log(rest)  // o rest sempre precisa ser a ultima variavel da nossa desestruturacao

const [primarySkill, ...restSkills] = skills;
console.log(restSkills)
