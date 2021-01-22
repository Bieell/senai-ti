//Conversão de temperaturas
function calculoCelsius() {
    let c = parseFloat(document.getElementById("celsius").value)
    let f = (9 * c + 160) / 5;
    document.getElementById("resultCelsius").textContent = `: ${f} °F`
}

//calculadora 4 operações
function calcular(event) {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let operacao = event.target.textContent
    let resultado
    switch (operacao) {
        case "+":
            console.log("soma")
            resultado = num1 + num2
            break;

        case "-":
            console.log("subtração")
            resultado = num1 - num2
            break;

        case "*":
            console.log("multiplicação")
            resultado = num1 * num2
            break;
        case "/":
            console.log("divisão")
            resultado = num1 / num2
            break;
        default:
            console.log("Não é uma Operação")
    }
    document.getElementById("resultado").textContent = `: ${resultado}`
}

//par e impar

function calcularpar(event) {
    let num = parseInt(document.getElementById("num").value)
    let par_impar_resultado = document.getElementById("par_impar_resultado")
    if (num % 2 == 0) {
        par_impar_resultado.innerHTML = ": Par"
    }
    else {
        par_impar_resultado.innerHTML = ": Impar"
    }
}

//listagem de número impar
function calcFatorial(event) {
    let num = parseInt(document.getElementById("numfatorial").value)
    let contador = 1
    let fatorial = 1

    while (contador <= num) {
        fatorial *= contador;
        contador++;
    }
    document.getElementById("resultfatorial").textContent = ": " + fatorial
}

//Tipo de Triângulo
function triangulo() {
    // Entrada
    let l1 = parseInt(document.getElementById("numtriangulo").value)
    let l2 = parseInt(document.getElementById("numtriangulo2").value)
    let l3 = parseInt(document.getElementById("numtriangulo3").value)
    //Processamento e Saída
    if (l1 > (l2 + l3) || l2 > (l1 + l3) || l3 > (l1 + l2)) {
        resultadotriangulo.innerHTML = ": Não é um triângulo"
    }
    else if (l1 == l2 && l1 == l3 && l2 == l3) {
        resultadotriangulo.innerHTML = ": Equilatero"
    }
    else if (l1 == l2 || l1 == l3 || l2 == l3) {
        resultadotriangulo.innerHTML = ": Ísoceles"
    }
    else {
        resultadotriangulo.innerHTML = ": Escaleno"
    }
}

//Conversor de Moedas
function conversor() {
    let valor = parseFloat(document.getElementById("numconversor").value)
    let cotacao = parseFloat(document.getElementById("numconversor2").value)
    convert = valor * cotacao;
    resultconversor.innerHTML = `: ${convert}`
}

//IMC
function imc() {
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    altura = altura / 100
    let resultado = altura * altura
    let imc = peso / resultado

    resultadoIMC.innerHTML = ": " + imc
}

//Verificar se é primo
function verificarPrimo() {
    let num = parseInt(document.getElementById("numprimo").value)
    let divisores = 0

    for (let count = 1; count <= num; count++) {
        if (num % count == 0) {
            divisores++;
        }
        if (divisores == 2) {
            verifprimo.innerHTML = ": É primo"
        }
        else {
            verifprimo.innerHTML = ": Não é primo"
        }
    }
}

//Listagem de primos
function verificarprimolist() {
    let num = parseInt(document.getElementById("numlistprimo").value)
    var divisores;
    var texto ='';
    var divisores;
    for (let count = 0; count <= num; count++) {
        divisores = 0;
        for(var aux=0; aux<=count; aux++)
        if (count % aux == 0) {
            divisores++;
        }
        if (divisores == 2) {
            texto +=  + count + " " 
        }
        resultlistprimo.innerHTML = ": " + texto
    }
}

//Conversor decimal para binário
function conversorDectoBin(){
    let dec = parseInt(document.getElementById("numDec").value)
    let bin = dec.toString(2)
    document.getElementById("resultBin").textContent = `: ${bin}`
    
}


//cpf
function verificarCpf() {
    let cpf = document.getElementById("cpf").value
    let resultado;
    
    let segmento = parseInt(cpf.split("")[8])
    
    switch(segmento)
    {
        case 0:
            resultado = "RS"
            break
        case 1:
            resultado = "DF, GO, MT, MS, TO"
            break
        case 2:
            resultado = "AM, PA, RR, AP, AC, RO"
            break
        case 3:
            resultado = "CE, MA, PI"
            break
        case 4:
            resultado = "PB, PE, AL, RN"
            break
        case 5:
            resultado = "BH, SE"
            break
        case 6:
            resultado = "MG"
            break
        case 7:
            resultado = "RJ, ES"
            break
        case 8:
            resultado = "SP"
            break
        case 9:
            resultado = "PR, SC"
            break
    }

    document.getElementById("resultcpf").textContent = ": " + resultado

}
