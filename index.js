// criptografar
// descriptografar
let textEncriptar = '';
let textDescriptar = '';
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

function lidarComCampoVazio() {
    let classes = ["svgImg", "outputTitle", "outputText"];
    for (let i = 0; i < classes.length; i++) {
        let element = document.getElementsByClassName(classes[i])[0];
        element.classList.add('active');
    }
}

function criptografar() {
    let inputTexto = document.getElementById("textInput");
    if (!inputTexto.value) {
        lidarComCampoVazio()
    }

    // textEncriptar = inputTexto.value;
    // if (inputTexto.value) {
    //     textEncriptar = cifraDeCesar(textEncriptar, 3, true);
    // }
    // console.log(textEncriptar);
}


// let textoOriginal = "Olá tudo bem?";
// let textoCifrado = cifraDeCesar(textoOriginal, 3, true);
// let textoDecifrado = cifraDeCesar(textoCifrado, 3, false);
