function controle() {
    var data = new Date();
    var hora = data.getHours ();
    var data2= new Date();
    var min = data2.getMinutes ();
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');

    if (hora >=0 && hora<12) {
        img.src = 'manha.png';
    } else if (hora < 18){
        img.src = 'tarde.png';
    }

    msg.innerHTML = `Agora são ${hora}:${min}!`
}