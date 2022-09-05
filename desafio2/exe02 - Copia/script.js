function verificar () {
    var data = new Date ();
    var ano = data.getFullYear();
    var fano = document.getElementById ('nasc');
    var res = document.querySelector('div#resu');

    if (fano.value.length == 0 || Number(fano.value)>ano){
        window.alert('[ERRO]Número Inválido! Tente Novamente.')
    } else {
        var genero = '' ; 
        var idade = ano - Number(fano.value);
        var sex = document.getElementsByName('radsex');
        var img = document.createElement ('img');

        img.setAttribute('id','foto');
        
        if (sex [0].checked) {
            genero = 'Homem'
            if (idade>=0 && idade<12){
                //CRIANÇA
                img.setAttribute('src','foto-bebe-menino.png');
            } else if (idade<22){
                //jovem
            } else if(idade<55){
                //adulto
            } else {
                //idoso
            }
        } else {
            genero = 'Mulher'
        }
    }
    res.innerHTML = `Detectado ${genero} com ${idade} anos!`;
    res.appendChild(img);
}