let numero1 = Number(prompt("Informe um número: "))
let numero2 = Number(prompt("Informe outro número: "))
console.log("Números digitados ", numero1,",", numero2)
const result1 = numero1 > numero2
console.log("O primeiro numero é maior que o segundo?", result1) 
const result2 = numero1 === numero2
console.log("O primeiro numero é igual ao segundo?", result2)
const result3 = (numero1 % numero2) === 0
console.log("O primeiro numero é divisível pelo segundo?", result3) 
const result4 = (numero2 % numero1) === 0
console.log("O segundo numero é divisível pelo primeiro?", result4)
