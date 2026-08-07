// Variáveis
let nomeCliente = "Emili Poliana Texeira da Silva";
let valorCompra = 340.00;
let clienteVip = false;

// Variáveis para o desconto
let percentualDesconto = 0;

// Verificando as regras de desconto
if (clienteVip) {
    percentualDesconto = 20;
} else if (valorCompra >= 500) {
    percentualDesconto = 15;
} else if (valorCompra >= 200) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 0;
}

// Cálculos
let valorDesconto = valorCompra * (percentualDesconto / 100);
let valorFinal = valorCompra - valorDesconto;

// Exibindo os resultados
console.log("Nome:", nomeCliente);
console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Desconto:", percentualDesconto + "%");
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2));

// Desafio (opcional)
if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}
