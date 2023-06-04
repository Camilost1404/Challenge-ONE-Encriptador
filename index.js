const texto = document.querySelector('.text-area')
const mensaje = document.querySelector(".mensaje");
const seccionSinResult = document.querySelector('.seccion-sin-resultado')
const seccionResult = document.querySelector('.seccion-con-resultado')
const copia = document.querySelector(".copiar");

const validarTexto = () => {
    let textoEscrito = texto.value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if (validador === null) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        return false;
    }
    else if (textoEscrito === '') {
        alert('No puedes encriptar un texto vacío')
        return false;
    }

    return true;
}

const btnEncriptar = () => {
    if (validarTexto()) {
        const textoEncriptado = encriptar(texto.value)
        seccionSinResult.style.display = 'none'
        seccionResult.style.display = 'flex'
        mensaje.value = textoEncriptado
        texto.value = "";
    }
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const encriptar = (texto) => {

    const codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]

    for (let i = 0; i < codigo.length; i++) {

        if (texto.includes(codigo[i][0])) {
            texto = texto.replaceAll(codigo[i][0], codigo[i][1])
        }

    }

    return texto
}

const copiar = () => {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    // mensaje.value = "";
    alert("Texto Copiado")
}