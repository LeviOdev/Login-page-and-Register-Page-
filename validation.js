const dv = document.getElementById('loginform'); 
const rtn = document.getElementById('sucesso')


dv.addEventListener("submit", function(e){
    

    const nomeInput = document.getElementById('inLogin');
    const senhaInput = document.getElementById('inPassword');

    const nomeError = document.getElementById('nomeError');
    const senhaError = document.getElementById('senhaError');

    const nome = nomeInput.value;
    const senha = senhaInput.value;

    let isValido = true;

    if (nome.trim() === ''){
        nomeError.style.visibility = 'visible';
        isValido = false
    }
    else {
        nomeError.style.visibility = 'hidden';
    }



    if (senha.trim() === ''){
        senhaError.style.visibility = 'visible';
        isValido = false
    }
    else {
        senhaError.style.visibility = 'hidden'
    }


   
   if (isValido) {
  
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.nome === nome && u.senha === senha);

    if (usuario) {
        nomeInput.style.outline = 'green 2px solid'
        senhaInput.style.outline = 'green 2px solid'
        rtn.innerText = 'Estamos te redirecionando para a pagina inicial...';
        rtn.style.color = 'green'
        setTimeout(() => {
            window.location.href = '/templates/index.html';
        }, 2000); 
    } else {
        rtn.innerText = 'Login e senha inválidos, tente novamente.';
    }
}
   e.preventDefault();
})




