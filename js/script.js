function calcularIMC() {
    var pesoInput = document.querySelector("#peso");
    var alturaInput = document.querySelector("#altura");
    var resultado = document.querySelector("#resposta");
    var classificacaoOutput = document.querySelector("#classificacao");


    var valorPeso = pesoInput.value;
    var valorAltura = alturaInput.value;
    var valorResultado = resultado.value;
    var valorClassificacao = classificacaoOutput.value;

    if (valorPeso <= 0) {
        alert("Peso não pode ser nagativo");
    } else if (valorAltura <= 0) {
        alert("Altura não pode ser nagativo");
    } else {
        var IMC = valorPeso / (valorAltura * valorAltura);
        resultado.textContent = IMC.toFixed(2);
    }



}

