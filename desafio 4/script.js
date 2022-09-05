function criar () {
    let num = document.getElementById('num');
    let tab = document.getElementById('tabu');

    if(num.value.length == 0 ){
        window.alert ('[ERRO] Tente Novamente!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        for (c; c<=10; c++) {
            let item = document.createElement ('option');
            let resu = n*c;
            item.value = `tab${c}`
            item.innerHTML = `${n} x ${c} = ${resu}`
            tab.appendChild(item);
        }
        /*while (c<=10){
            let item = document.createElement ('option');
            item.text = `${n} x ${c} = ${n*c}`;
            tab.appendChild(item);
            c++; 
        }*/
        }
        
    }