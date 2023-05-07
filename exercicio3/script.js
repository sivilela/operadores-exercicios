// console.log("************Parte 1****************")

// const comparacao1 = 5 > 20 && 5 < 2
// console.log("a) 5 é maior que 20 e também é menor que 2: ", comparacao1);

// const comparacao2 = 5 === 5 || 5 === "5"
// console.log("b) 5 é igual a 5 ou é igual a “5”: ", comparacao2);

// const comparacao3 = !(20 > 50)
// console.log("c) negação de (vinte é maior que cinquenta): ", comparacao3);

// const comparacao4 = !(20 > 50 || 50 > 60)
// console.log("d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", comparacao4);

console.log("************Parte 2****************")

let salarioFixo = 2000.00
let valorAuxCreche = 45.50
let numeroDeFilhos = 2
let auxCreche = valorAuxCreche * numeroDeFilhos

const vendaJan = 5784.50
const vendaFev = 3418.41
const vendaMar = 4124.10
const vendaAbr = 1874.00
const vendaMai = 7000.00
const vendaJun = 9450.00
let comissao = 0.1
let inss = 0.05

const totalDeVendasSemestre = vendaJan + vendaFev + vendaMar + vendaAbr + vendaMai + vendaJun
const salFixoComAuxCreche = auxCreche + salarioFixo
console.log(`1. Salário fixo mais o auxílio creche: R$${salFixoComAuxCreche.toFixed(2)}`);

const comissaoJan = vendaJan * comissao
console.log(`2. Quanto Fulano de Silva receberá de comissão em janeiro:  R$${comissaoJan.toFixed(2)}`);

const comissaoFev = vendaFev * comissao
const comissaoMar = vendaMar * comissao
const comissaoAbr = vendaAbr * comissao
const comissaoMai = vendaMai * comissao
const comissaoJun = vendaJun * comissao

const descInssJan = (salarioFixo + comissaoJan) * inss
console.log(`3. Quanto Fulano de Silva será descontado em janeiro pelo INSS: R$${descInssJan.toFixed(2)}`)

const descInssFev = (salarioFixo + comissaoFev) * inss
const descInssMar = (salarioFixo + comissaoMar) * inss
const descInssAbr = (salarioFixo + comissaoAbr) * inss
const descInssMai = (salarioFixo + comissaoMai) * inss
const descInssJun = (salarioFixo + comissaoJun) * inss

const salalrioLiqJan = salFixoComAuxCreche + comissaoJan - descInssJan
const salalrioLiqFev = salFixoComAuxCreche + comissaoFev - descInssFev
const salalrioLiqMar = salFixoComAuxCreche + comissaoMar - descInssMar
const salalrioLiqAbr = salFixoComAuxCreche + comissaoAbr - descInssAbr
const salalrioLiqMai = salFixoComAuxCreche + comissaoMai - descInssMai
const salalrioLiqJun = salFixoComAuxCreche + comissaoJun - descInssJun

console.log(`4. Salário líquido a receber: `);
console.log(`JANEIRO R$${salalrioLiqJan.toFixed(2)}`);
console.log(`FEVEREIRO R$${salalrioLiqFev.toFixed(2)}`);
console.log(`MARÇO R$${salalrioLiqMar.toFixed(2)}`);
console.log(`ABRIL R$${salalrioLiqAbr.toFixed(2)}`);
console.log(`MAIO R$${salalrioLiqMai.toFixed(2)}`);
console.log(`JUNHO R$${salalrioLiqJun.toFixed(2)}`);

const mediaSalSemestre = (salalrioLiqJan + salalrioLiqFev + salalrioLiqMar + salalrioLiqAbr + 
salalrioLiqMai + salalrioLiqJun)/6
console.log(`5. A média do salário em  seis meses: R$${mediaSalSemestre.toFixed(2)}`);
                          




