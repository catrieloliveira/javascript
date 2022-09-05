function contar() {
    var num1 = document.getElementById('numero1');
    var num2 = document.getElementById('numero2');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');

    if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Tente Novamente!');
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(num1.value)
        var f = Number(num2.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p=1
        }
        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        }
        res.innerHTML += ` \u{1F3C1}`
    }
}