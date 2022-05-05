let valores = [5,9,8,6,9,3]
valores.sort()

/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}
*/
/*
for (let pos in valores ) {
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

let pos = valores.indexOf(7)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posicao ${pos}`)
}


