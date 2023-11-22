const usuarios = [
    {   
        login:'caio.icolor@gmail.com',
        pass: 'admin'
    },
    {
        login:'user',
        pass:'user'
    }
]

let botao = document.getElementById('btnLogar');

botao.addEventListener('click',function logar(){
    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false
    
    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }else{
            validaLogin = false
        }
    } 
    if(validaLogin == true){
        location.href = 'index.html'
    }else{
        alert('erro')
    }
})

