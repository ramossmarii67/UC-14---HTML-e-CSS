```javascript
// Valor inicial do contador
let valor = 10;

// Mostra a cidade escolhida
function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;

    document.getElementById("mensagem").textContent =
        "Que legal! Você vai conhecer " + cidade + "! ✈️";
}

// Altera o estilo da mensagem
function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "white";
    mensagem.style.backgroundColor = "blue";
    mensagem.style.fontSize = "28px";
    mensagem.style.padding = "15px";
}

// Aumenta o contador
function aumentar() {
    valor++;

    document.getElementById("contador").textContent = valor;
}

// Diminui o contador
function diminuir() {
    valor--;

    document.getElementById("contador").textContent = valor;
}
```
