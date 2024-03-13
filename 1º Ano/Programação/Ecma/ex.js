//ex forEach

let memorias = [4, 8, 16, 32, 64]
let saida = ''
memorias.forEach((item) => saida = saida + item + 'GB\n')
console.log(saida)


//ex map

let idade = [16, 17, 18 , 19, 20, 21]

let dobrar = idade.map((item) =>{
    return item*2
})
//let dobrar = idade.map((item) =>item*2))
console.log(dobrar)

// ex reduce

let notas = [7, 8, 9,10]
let soma = notas.reduce((acumula, item) => acumula + item)
console.log(soma)



