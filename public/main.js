document.getElementById("ButtonCopyEmail").addEventListener("click", function copiarTexto() {
    let textoCopiado = document.getElementById("TextCopyEmail");
    console.log(textoCopiado)
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("name").focus()
})

document.getElementById("Submit").addEventListener("submit", e => {
  e.preventDefault()
  const SubmitAssunto = String(document.getElementById("_subject").value)
  const SubmitNome = String(document.getElementById("name").value)
  const SubmitEmail = String(document.getElementById("email").value)
  const SubmitMessagem = String(document.getElementById("message").value)

  console.log(SubmitAssunto)
  console.log(SubmitNome)
  console.log(SubmitEmail)
  console.log(SubmitMessagem)

  document.getElementById("Status").style.display = "block";
  document.getElementById("Status").style.backgroundColor = "gray";
  document.getElementById("Status").style.color = "white";
  document.getElementById("Status").innerText = "Enviando Mensagem...";

  // console.log("oi")
  // https://github.com/axios/axios
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.post('https://formsubmit.co/ajax/samarion2@hotmail.com', JSON.stringify({
      _subject: SubmitAssunto,
      name: SubmitNome,
      email: SubmitEmail,
      message: SubmitMessagem
  }))
  .then(response => {
      console.log(response)
      if(response.status === 200){
          document.getElementById("Status").style.backgroundColor = "#339900";
          document.getElementById("Status").innerText = "Seu E-mail Foi Enviado Com Sucesso!!!";
      }
  })
  .catch(error => {
    console.log(error)
    document.getElementById("Status").style.backgroundColor = "#ff0f0f";
    document.getElementById("Status").innerText = "Houve um erro no envio do seu E-mail!!!"
  });

})

// const axios = require('axios');

// // Faz uma requisição a um usuarío com um ID expecifico
// axios.get('/Teste/user')
//   .then(function (response) {
//     // manipula o sucesso da requisição
//     console.log(response);
//   })
//   .catch(function (error) {
//     // manipula erros da requisição
//     console.error(error);
//   })
//   .then(function () {
//     // sempre será executado
//   });