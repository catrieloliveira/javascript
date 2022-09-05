function criar (){
    var numero = document.getElementById ('num');
    var tabu = document.getElementById ('tabu');
    if(numero.value.length == 0) {
        window.alert ('[ERRO] Digite um número!');
    } else {
        var num = Number(numero.value);
        var c = 1;

        for(c;c<=10;c++){
            var contas = c*num;
            var tabuada = document.createElement('option'); 
            tabuada.innerHTML = `${c} x ${num} = ${contas}`
            tabu.appendChild(tabuada);
        }


    }
}