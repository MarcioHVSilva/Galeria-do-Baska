var senha = '';
var confirmarSenha = '';

function verificarSenha() {
    senha = senha_inp.value;

    while (senha.length <= 20) {
        msg_senha.innerHTML = '';

        if (senha.length < 1) {
            senha_inp.style.boxShadow = '';
        } else if (senha.length >= 1 && senha.length < 8) {
            senha_inp.style.boxShadow = '2px 2px 5px red';
            msg_senha.innerHTML += `Sua senha deve ter 8 ou mais caracteres.`;
        } else if (senha.length >= 8) {
            senha_inp.style.boxShadow = '2px 2px 5px green';
        }

        senha++;
    }

}

function confirmarASenha() {
    confirmarSenha = confirme_senha_inp.value;

    while (confirmarSenha.length <= 20) {
        msg_senha2.innerHTML = '';

        if (confirmarSenha.length < 1) {
            confirme_senha_inp.style.boxShadow = '';
        } else if (confirmarSenha == senha_inp.value) {
            confirme_senha_inp.style.boxShadow = '2px 2px 5px orange';
        } else {
            confirme_senha_inp.style.boxShadow = '2px 2px 5px red';
            msg_senha2.innerHTML += `A senha está diferente`;
        }

        confirmarSenha++;
    }

}

function cadastrar() {
    var nomeUsuario = nome_inp.value;
    senha = senha_inp.value;
    var email = email_inp.value;
    var resultado = confirm(`Deseja cadastrar o usuário ${nomeUsuario}`)

    if(nomeUsuario == ""){
        alert("Usuário Inválido")
    }

    else if(( (email.includes('@gmail') || (email.includes('@hotmail') || (email.includes('@outlook')) && email.endsWith('.com')))) == false){
        alert("Email Inválido")
    }

    else if(senha == "" || confirmarSenha == ""){
        alert("Senha Incorreta")
    }

}