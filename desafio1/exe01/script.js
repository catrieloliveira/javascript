function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let min = new Date();
    let hora = data.getHours();
    let minuto = min.getMinutes();
    
    msg.innerHTML= `Agora são ${hora}:${minuto}!`;

    if (hora>=0 && hora<12){
        img.src = 'manha.png'
        document.body.style.background= '#F27B35'
        msg.innerHTML= `Agora são ${hora}:${minuto} ! Bom dia!`;
    } else if (hora>=12 && hora<=18) {
        img.src = 'tarde.png'
        document.body.style.background= '#1BB5F2'
        msg.innerHTML= `Agora são ${hora}:${minuto} ! Boa tarde!`;
    } else {
        img.src = 'noite.png'
        document.body.style.background= '#102540'
        msg.innerHTML= `Agora são ${hora}:${minuto} ! Boa noite!`;
    }

}
