// criptografar
// descriptografar
let inputTexto = document.getElementById("textInput");

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

function criptografar() {
    console.log(inputTexto.value);
}


let textoOriginal = "Olá tudo bem?";
let textoCifrado = cifraDeCesar(textoOriginal, 3, true);
let textoDecifrado = cifraDeCesar(textoCifrado, 3, false);

console.log("Texto Original:", textoOriginal);
console.log("Texto Cifrado:", textoCifrado);
console.log("Texto Decifrado:", textoDecifrado);
