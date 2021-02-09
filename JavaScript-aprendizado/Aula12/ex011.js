var idade = 65
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não pode votar.`)
} else if (idade < 18 || idade >= 65) {
    console.log(`Seu voto é opcional.`)
} else {
    console.log(`Deve votar.`)
    }


/*s
var idade = 17 
if (idade >= 18) {
    console.log('Vota.')
} else {
    if (idade >= 16 && idade < 18) {
    console.log('Voto opcional.')
    }
}
*/