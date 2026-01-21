const dv = document.getElementById('loginform'); 
const rtn = document.getElementById('sucesso')


dv.addEventListener("submit", function(e){
    

    const nomeInput = document.getElementById('inLogin');
    const emailInput = document.getElementById('inEmail');
    const senhaInput = document.getElementById('inPassword');

    const nomeError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');

    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;

    let isValido = true;

    if (nome.trim() === ''){ 
        nomeError.style.visibility = 'visible';
        isValido = false
    }
    else {
        nomeError.style.visibility = 'hidden';
    }

     if (email.trim() === ''){
        emailError.style.visibility = 'visible';
        isValido = false
    }
    else {
        emailError.style.visibility = 'hidden';
    }

    if (senha.trim() === ''){
        senhaError.style.visibility = 'visible';
        isValido = false
    }
    else {
       senhaError.style.visibility = 'hidden';
    }
    
   if (isValido){
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuarios.find(u => u.nome === nome);
    if (usuarioExistente) {
        nomeError.innerText = 'nome já cadastrado.'
        nomeError.style.display = 'block';
        isValido = false
    } else {
        usuarios.push({nome: nome, senha: senha});
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        nomeInput.style.outline = 'green 2px solid'        
        emailInput.style.outline = 'green 2px solid'
        senhaInput.style.outline = 'green 2px solid'
        rtn.innerText = `Cadastro realizado!! Redirecionando para a pagina de login...`
        rtn.style.color = 'green'
        setTimeout(() => {
            window.location.href = 'login.html'
        }, 2000);
    }
   }
   e.preventDefault();
})


