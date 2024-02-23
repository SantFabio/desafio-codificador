// criptografar
// descriptografar
let inputTexto = document.getElementById("textInput");
let output = document.getElementById("output");
let textOutput = document.getElementsByClassName("text-output")[0];
let textCodified = document.getElementsByClassName("text-codified")[0];

function cifraDeCesar(texto, chave, criptografar) {
    // a função recebe esse dados substituindo o valor de cada caractere da string; por o resultado;
    // do callback no caso é o (criptografar)
    return texto.replace(/./g, (caracter) => {
        // console.log(codigo) // imprimindo o valor Unicode do caractere
        const codigo = caracter.charCodeAt(0);
        // Aplicante a cifra de César
        const ajuste = criptografar ? chave : -chave;
        // está retornando o caractere referente ao valor unicode
        return String.fromCharCode(codigo + ajuste);
    });
}

function lidarComCampoVazio(value) {

    if (value) {
        if (!textCodified) {
            let classes = ["svgImg", "outputTitle", "outputText"];
            for (let i = 0; i < classes.length; i++) {
                let element = document.getElementsByClassName(classes[i])[0];
                element.classList.add('active');
            }
        } else {
            lidarComCampoVazio();
        }
    } else {
        let classes = ["svgImg", "outputTitle", "outputText"];
        for (let i = 0; i < classes.length; i++) {
            let element = document.getElementsByClassName(classes[i])[0];
            element.classList.remove('active');
        }
    }
}
function lidarComTexto(text) {

}

function criptografar() {
    if (!inputTexto.value) {
        lidarComCampoVazio(true);
    } else {
        textCodified.innerHTML = cifraDeCesar(inputTexto.value, 3, true);
        textOutput.classList.add("active");
        lidarComCampoVazio()
        inputTexto.value = "";
    }
}

// let iconElement = document.createElement("img")
// iconElement.src = `./assets/images/${card.icon}.png`;
// iconElement.classList.add(ICON)
// cardElementFace.appendChild(iconElement);

// let textoOriginal = "Olá tudo bem?";
// let textoCifrado = cifraDeCesar(textoOriginal, 3, true);
// let textoDecifrado = cifraDeCesar(textoCifrado, 3, false);
