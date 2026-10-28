let nome = prompt("Digite seu nome: ")
let altura = parseFloat(prompt("Digite sua altura(M): "))
let peso = parseFloat(prompt("Digite seu peso(Kg): "))
relatorio(altura, peso, nome)
function calcularimc(altura, peso) {
    return peso / altura / altura
}

function classificar(imc) {
    if (imc >= 40) {
        return "Você tem obesidade grau 3"
    } else if (imc >= 35) {
        return "Você tem obesidade grau 2"
    } else if (imc >= 30) {
        return "Você tem obesidade grau 1"
    } else if (imc >= 25) {
        return "Você tem sobrepeso"
    } else if (imc >= 18.5) {
        return "Você tem o peso normal"
    } else if (imc >= 17) {
        return "Você tem magreza leve"
    } else if (imc >= 16) {
        return "Você tem magreza moderada"
    } else if (imc < 16) {
        return "Você tem magreza grave"
    }
}

function relatorio(altura, peso, nome) {
    alert(
        "Nome: " + nome + 
        "\nPeso: " + peso +
        "\nAltura: " + altura +
        "\nIMC: " + calcularimc(altura, peso) +
        "\nClassificação: " + classificar(calcularimc(altura, peso))
    )
}