function contar () {
    let inicio = document.getElementById('numero1');
    let fim = document.getElementById('numero2');
    let passo = document.getElementById('passo');
    let res = document.getElementById ('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Digite um número!');
    } else {
        let i = Number (inicio.value);
        let f = Number (fim.value);
        let p = Number (passo.value);
        res.innerHTML = '';

        if(p<=0){
            window.alert ('Passo inválido! Considerando passo 1');
            p = 1;
        }
         if (i<f) {
            for (let c = i; c<=f;c+=p){
            res.innerHTML += `${c} \u{1F525}`;
            } 
        } else if(i>f){
            for (let c = i; c>=f;c-=p){
            res.innerHTML += `${c} \u{1F525}`;
            }   
        }
    }
}