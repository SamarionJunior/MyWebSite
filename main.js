document.getElementById("ButtonCopyEmail").addEventListener("click", function copiarTexto() {
    let textoCopiado = document.getElementById("TextCopyEmail");
    console.log(textoCopiado)
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("InputDe").focus()
})