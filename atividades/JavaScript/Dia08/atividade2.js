const leia = require('readline-sync');

let n1, n2, n3, n4, media;

n1 = leia.questionFloat("Digite a  primeira nota: ", {limitMessage: 'Digite a primeira nota: '});
n2 = leia.questionFloat("Digite a  segunda nota: ", {limitMessage: 'Digite a segunda nota: '});
n3 = leia.questionFloat("Digite a  terceira nota: ", {limitMessage: 'Digite a terceira nota: '});
n4 = leia.questionFloat("Digite a  quarta nota: ", {limitMessage: 'Digite a quarta nota: '});

media = (n1 + n2 + n3 + n4) / 4;



console.log("Media final: ", media.toFixed(1))