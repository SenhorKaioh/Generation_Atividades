const leia = require('readline-sync');

let salary
let abono
let ajuste

salary = leia.questionFloat("Informe o salario: ", {limitMessage: 'Informe o salario: '});
abono = leia.questionFloat("Informe o abono: ", {limitMessage: 'Informe o abono: '});

ajuste = (salary + abono);

console.log(ajuste.toFixed(2));