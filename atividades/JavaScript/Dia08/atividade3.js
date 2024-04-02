const leia = require('readline-sync');

let salario_base, adicional_noturno, horas_extras, descontos, salario_final;

salario_base = leia.questionFloat("Informe o Salario: ", {limitMessage: 'Informe o Salario: '});
adicional_noturno = leia.questionFloat("Informe o adicional noturno: ", {limitMessage: 'Informe o adicional noturno: '});
horas_extras = leia.questionInt("Informe o hora extras: ", {limitMessage: 'Informe o hora extras: '});
descontos = leia.questionFloat("Informe os descontos: ", {limitMessage: 'Informe os descontos: '});

salario_final = salario_base + adicional_noturno + (horas_extras * 5) - descontos;

console.log("O Salário Líquido: " + salario_final.toFixed(2));