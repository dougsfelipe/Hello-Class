function calcularIMC() {
    var pesoInput = document.querySelector("#peso");
    var alturaInput = document.querySelector("#altura");
    var resultado = document.querySelector("#resposta");
    var classificacaoOutput = document.querySelector("#classificacao");


    var valorPeso = pesoInput.value;
    var valorAltura = alturaInput.value;
    var escala = null;



    if (valorPeso <= 0) {
        alert("Peso não pode ser nagativo");
    } else if (valorAltura <= 0) {
        alert("Altura não pode ser nagativo");
    } else {
        var IMC = valorPeso / (valorAltura * valorAltura);
        resultado.textContent = IMC.toFixed(2);
        


        if(IMC < 14.5){
            escala = "desnutrição";
        }else if(IMC >= 14.5 && IMC < 20){
            escala = "Peso abaixo do normal";
        }else if(IMC >=20 && IMC < 24.9){
            escala = "Peso normal";
        }else if(IMC >=24.9 && IMC < 29.9){
            escala = "Sobrepeso";
        }else if(IMC >29.9 && IMC <39.9){
            escala = "Obesidade";
        }else{
            escala = "Obesidade Morbida";
        }

        classificacaoOutput.textContent = escala;
        
    }



}

