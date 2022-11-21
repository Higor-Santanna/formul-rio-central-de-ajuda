const formulario = document.getElementById("formulario");
const nomeUsuario = document.getElementById("full-name");
const email = document.getElementById("email");
const telefone = document.getElementById("phone-number");
const mensagem = document.getElementById("message");


formulario.addEventListener("submit", function(e){
    e.preventDefault()
    verificandoSeATexto()
})

function verificandoSeATexto(){
    let usuarioVazioPreenchido = nomeUsuario.value;
    let emailVazioPreenchido = email.value;
    let telefoneVazioPreenchido = telefone.value;
    let mensagemVazioPreenchido = mensagem.value;
    

    if(usuarioVazioPreenchido === ""){
        erro(nomeUsuario);
    } else {
        sucesso(nomeUsuario);
    }

    if(emailVazioPreenchido === ""){
        erro(email);
    } else {
        sucesso(email);
    }

    if(telefoneVazioPreenchido === ""){
        erro(telefone);
    } else if(telefoneVazioPreenchido.length < 8){
        erro(telefone);
    } else {
        sucesso(telefone);
    }

    if(mensagemVazioPreenchido === ""){
        erro(mensagem);
    } else {
        sucesso(mensagem);
    }

}

function erro(input) {
    const formulario = input.parentNode;
    formulario.classList.add("error")
}

function sucesso(input){
    const formulario = input.parentNode;
    formulario.classList.add("success");
}