console.log("************Parte 1****************")

const comparacao1 = 5 > 20 && 5 < 2
console.log("a) 5 é maior que 20 e também é menor que 2: ", comparacao1);

const comparacao2 = 5 === 5 || 5 === "5"
console.log("b) 5 é igual a 5 ou é igual a “5”: ", comparacao2);

const comparacao3 = !(20 > 50)
console.log("c) negação de (vinte é maior que cinquenta): ", comparacao3);

const comparacao4 = !(20 > 50 || 50 > 60)
console.log("d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", comparacao4);

console.log("************Parte 2****************")

let salarioFixo = 2000.00
let comissao = 0.1
let auxCreche = 45.50
let inss = salarioFixo * 0.05
const vendaJan = 5784.50
const vendaFev = 3418.41
const vendaMar = 4124.10
const vendaAbr = 1874.00
const vendaMai = 7000.00
const vendaJun = 9450.00

const salFixoComAuxCreche = (auxCreche * 2) + salarioFixo
console.log(`1. Salário fixo mais o auxílio creche: ${salFixoComAuxCreche}`);

const comissaoJan = vendaJan * comissao
console.log(`2. Quanto Fulano de Silva receberá de comissão em janeiro:  ${comissaoJan}`);

const descInssJan = (salarioFixo + comissaoJan) - inss
console.log(`3. Quanto Fulano de Silva será descontado em janeiro pelo INSS: ${descInssJan}`)

const salalrioLiqJan = (salarioFixo + (vendaJan * comissao)) - inss + (auxCreche * 2)
const salalrioLiqFev = (salarioFixo + (vendaFev * comissao)) - inss + (auxCreche * 2)
const salalrioLiqMar = (salarioFixo + (vendaMar * comissao)) - inss + (auxCreche * 2)
const salalrioLiqAbr = (salarioFixo + (vendaAbr * comissao)) - inss + (auxCreche * 2)
const salalrioLiqMai = (salarioFixo + (vendaMai * comissao)) - inss + (auxCreche * 2)
const salalrioLiqJun = (salarioFixo + (vendaJun * comissao)) - inss + (auxCreche * 2)
console.log(`4. Imprima no console o cálculo do salário de todos os meses com acréscimos e 
descontos: `);
console.log(`JANEIRO ${salalrioLiqJan}`);
console.log(`FEVEREIRO ${salalrioLiqFev}`);
console.log(`MARÇO ${salalrioLiqMar}`);
console.log(`ABRIL ${salalrioLiqAbr}`);
console.log(`MAIO ${salalrioLiqMai}`);
console.log(`JUNHO ${salalrioLiqJun}`);

const mediaSalSemestre = (salalrioLiqJan + salalrioLiqFev + salalrioLiqMar + salalrioLiqAbr + 
salalrioLiqMai + salalrioLiqJun)/6
console.log(`A média do salário em  seis meses: ${mediaSalSemestre}`);
                          




