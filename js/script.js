let botoes = document.querySelectorAll(".number"); // procura todos os botoes que tem a classe .number
let equal = document.querySelector(".equal"); //para escutar o clique e calcular o resultado
let visor = document.querySelector(".screen"); //muda o conteudo da tela
let textoVisor = ""; // guarda tudo que o user digita

// Quando clicar em número ou operador
botoes.forEach(botao => { //
    botao.addEventListener("click", function () {
        let valor = botao.innerHTML; //aqui pegamos o number/operador que foi digitado e coloca dentro da variavel valor

        textoVisor += valor; // aqui acresentamos novo digito ao que já está guardado em valor
        visor.innerHTML = textoVisor; //aqui estamos mostrando o que já foi digitado no visor da calculadora
    });
});

// Quando clicar no botão igual
equal.addEventListener("click", function () {
    if (textoVisor !== "") {
        let resultado = eval(textoVisor); //aqui é calculado e guardo o resultado na variavel resultado
        visor.innerHTML = resultado;
        textoVisor = resultado + ""; // transforma em string para continuar cálculo
    }
});

// Botão de limpar (On/CE)
let clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
    textoVisor = "";
    visor.innerHTML = "";
});
