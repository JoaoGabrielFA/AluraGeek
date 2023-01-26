const loginBtn = document.getElementById('login');

let logado;
logado = JSON.parse(localStorage.getItem('Logado')) == null ? logado = false : logado = JSON.parse(localStorage.getItem('Logado'));



if(!logado){
    loginBtn.innerHTML = 'Logar';
} else {
    loginBtn.innerHTML = 'Deslogar';
    loginBtn.href = '#';
    loginBtn.addEventListener('click', deslogar); 
}

function checkLogin(){
    if(!logado){
        alert("Você precisa estar logado para adicionar produtos!");
    }else{
        document.getElementById('adicionar').href = "alurageek_adicionar.html";
    }
}

function logar(){
    logado = true;
    localStorage.setItem('Logado', true);
    window.location.reload(true);
}

function deslogar(){
    if(logado){
        if(confirm('Você quer deslogar?')){
            localStorage.setItem('Logado', false);
            window.location.reload(true);
        }
    }
}

document.querySelector('.header__logo').addEventListener('click', function(){
    window.location.replace('index.html');
})

