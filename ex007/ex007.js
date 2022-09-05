let agora = new Date();
let hora = agora.getHours()
console.log (`Agora são ${hora} horas.`);
if (hora < 12) {
    console.log('Bom Dia!')
} else if ( hora <= 18) {
    console.log ('Boa Tarde!')
} else if (hora < 24) {
    console.log('Boa Noite!')
} else {
    console.log ('Hora ínvalida')
}
