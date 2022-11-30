const campos = document.querySelectorAll(".campo");
const botao = document.getElementById("button");
const messagemErro = document.querySelectorAll(".message");

botao.addEventListener("click", function(e){
    e.preventDefault()
    campos.forEach(function(campoPreenchidoOuVazio, mensagemDeErro){
        if(campoPreenchidoOuVazio.value === ""){
            erroDoCampo(campoPreenchidoOuVazio)
            messagemErro[mensagemDeErro].className = "message error"
            campoPreenchidoOuVazio.classList.remove("success")
        } else {
            sucessoDoCampo(campoPreenchidoOuVazio)
            campoPreenchidoOuVazio.classList.remove("error")
            messagemErro[mensagemDeErro].className = "message"
        }
    })
})

function erroDoCampo(input) {
    input.classList.add("error")
}

function sucessoDoCampo(input){
    input.classList.add("success");
}