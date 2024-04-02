let estados: Array<string> = [

    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Rio grande do Sul",
    "Rio grande do Norte",
    "Santa catarina" ,
    "Paraná"
]
let estadosRepitidos: Array<string> = [

    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Rio grande do Sul",
    "Rio grande do Norte",
    "Santa catarina" ,
    "Minas Gerais",
    "Rio de Janeiro",
    "Paraná"
]
let estadosContemRio = estados.filter(e => e.includes("Rio"));

console.dir(estadosContemRio.sort())

let estadosRioParana = estados.some(e => {
return e === "Rio de Janeiro" || e === "Paraná"});
console.log(estadosRioParana);


