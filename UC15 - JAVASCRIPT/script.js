let nome = prompt ('Qual é o seu nome');
let pesoStr = prompt ('Olá, $(nome)! qual é o seu peso em kg?/não (use vírgula  ou ponto- ex: 75,5kg)');
let altStr= prompt ('Qual a sua altura metros?\ n(use vírgulo ou ponto - ex 75,5 ou 75.5');
let peso = Number(pesoStr.replace(',','.'));
let alt = Number (altStr.replace(',','.'));
console.log('Nome:',nome)
console.log ('peso:', peso, typeof peso);
console.log ('Altura:', alt, typeof alt);
let imc= peso/ (alt + alt);
let imcFormatado = imc.toFixedd(1);

if(imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc < 25) {
  console.log('Peso normal')
} else if (imc < 30) {
  console.log('Sobrepeso')
} else if (imc < 35) {
    console.log('Obesidade grau I')
} else if (imc < 40) {
    console.log('Obsedidade grau II')
} else {
    console.log('Obesidade grau III')
}