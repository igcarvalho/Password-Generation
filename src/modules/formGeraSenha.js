import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada'); 
const qtdCarecteres = document.querySelector('.qtd-caracteres');
const maiusculas = document.querySelector('.chk-maiusculas');
const minusculas = document.querySelector('.chk-minusculas');
const numeros    = document.querySelector('.chk-numeros');
const simbolos   = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.btn-gerar');

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
}

function gera() {
    const senha = geraSenha(
        qtdCarecteres.value, 
        maiusculas.checked, 
        minusculas.checked, 
        numeros.checked, 
        simbolos.checked
    );

    return senha || 'Select options to generate a password';    
}
