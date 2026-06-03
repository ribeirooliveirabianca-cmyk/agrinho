// Contador animado

let numero = 0;
const alvo = 5000;

const contador = document.getElementById("contador");

const intervalo = setInterval(() => {

    numero += 50;

    contador.textContent = numero.toLocaleString("pt-BR");

    if (numero >= alvo) {
        clearInterval(intervalo);
    }

}, 20);


// Botão Saiba Mais

const botao = document.getElementById("btnSaibaMais");

botao.addEventListener("click", () => {

    document.getElementById("mensagem").innerHTML =
        "🌿 O desenvolvimento sustentável garante produtividade hoje e preservação para amanhã.";

});