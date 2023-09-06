function biciclieta(){
    let qtde = 10
    let bikes = []
    let media = 0
    let marcas = ["CALOI", "SCOTT", "CANONDALE"]

    for(let i=0; i<qtde; i++){
        let obj = {
            marca: String(prompt("Marca da bicicleta")).toUpperCase(),
            modelo: String(prompt("Modelo")),
            quadro: Number(prompt("Quadro")),
            aro:Number(prompt("Aro")),
            ano: Number(prompt("Ano")),
            preco: Number(prompt("Preço")),
        }

        while(!marcas.includes(obj.marca)){
            obj.marca = prompt(`Marca inválida, tente novamente: `).toUpperCase()
        }

        media = media + obj.preco
        bikes.push(obj)
    }

    console.log(`A média de preço é ${(media/qtde).toFixed(2)}`)

    let antiga = bikes[0]

    for(i=0; i<qtde; i++){
        if(bikes[i].ano < antiga.ano){
            antiga = bikes[i]
        }
    }

    console.log(`A bicicleta mais antiga é a ${antiga}`)

    let cont = 0
    let qtdeAro = 0

    for(i=0; i<qtde; i++){
        if(bikes[i].marca == 'CALOI'){
            cont++
        }

        if(bikes[i].aro == 29){
            qtdeAro++
        }
    }

    if(cont == 0){
        console.log(`A marca Caloi não foi inserida`)
    }
    else{
        console.log(`Qtde de bikes Caloi: ${cont}`)
    }
    
    let maiorQuadro = bikes[0].quadro
    let nomeQuadro = bikes[0].marca

    if(qtdeAro == 0 ){
        console.log(`Não foi inserida bike com aro 29`)
    }
    else{
     console.log(`Qtde de bikes com aro 29: ${qtdeAro}`)
    }

    for(i=0; i<qtde; i++){
        if(maiorQuadro < bikes[i].quadro){
            maiorQuadro = bikes[i].quadro
            nomeQuadro = bikes[i]
        }
    }

    console.log(`A bike de maior quadro é  ${nomeQuadro}`)

}










function bicicleta2(){
    let qtde = 2
    let bikes = []
    
    pegarBikes(bikes, qtde)
    idade(bikes, qtde)
    aroCaloi(bikes, qtde)
    aro29(bikes, qtde)
    Quadro(bikes, qtde)
}

function pegarBikes(bikes, qtde){
    let marcas = ["CALOI", "SCOTT", "CANONDALE"]
    let media = 0

    for(let i=0; i<qtde; i++){
        let obj = {
            marca: String(prompt("Marca da bicicleta")).toUpperCase(),
            modelo: String(prompt("Modelo")),
            quadro: Number(prompt("Quadro")),
            aro:Number(prompt("Aro")),
            ano: Number(prompt("Ano")),
            preco: Number(prompt("Preço")),
        }

        while(!marcas.includes(obj.marca)){
            obj.marca = prompt(`Marca inválida, tente novamente: `).toUpperCase()
        }

        media = media + obj.preco
        bikes.push(obj)
    } 
    
    console.log(`A média de preço é ${(media/qtde).toFixed(2)}`)
}

function idade(bikes, qtde){
    let antiga = bikes[0]

    for(i=0; i<qtde; i++){
        if(bikes[i].ano < antiga.ano){
            antiga = bikes[i]
        }
    }
    
    console.log(`A bicicleta mais antiga é: `)
    console.log(antiga)
}

function aroCaloi(bikes, qtde){
    let cont = 0
    let qtdeAro = 0

    for(i=0; i<qtde; i++){
        if(bikes[i].marca == 'CALOI'){
            cont++
        }

        if(bikes[i].aro == 29){
            qtdeAro++
        }
    }

    if(cont == 0){
        console.log(`A marca Caloi não foi inserida`)
    }
    else{
        console.log(`Qtde de bikes Caloi: ${cont}`)
    }
    
}

function aro29(bikes, qtde){
    let qtdeAro = 0

    if(qtdeAro == 0 ){
        console.log(`Não foi inserida bike com aro 29`)
    }
    else{
     console.log(`Qtde de bikes com aro 29: ${qtdeAro}`)
    }
}

function Quadro(bikes, qtde){
    let maiorQuadro = bikes[0].quadro
    let nomeQuadro = bikes[0].marca

    for(i=0; i<qtde; i++){
        if(maiorQuadro < bikes[i].quadro){
            maiorQuadro = bikes[i].quadro
            nomeQuadro = bikes[i]
        }
    }

    console.log(`A bike de maior quadro é: `)
    console.log(nomeQuadro)
}







bicicleta3 = () => {
    let qtde = bikes.length
    let bikes = []

    do{
        opcao = Number(prompt(`Digite \n 1. Cadastra bike \n 2. Bike mais antiga \n 3. Bikes Caloi \n 
        4. Quantidade de bikes aro 29 \n 5. Maior quadro \n 6.6 `))

        switch(opcao){
            case 1:
                pegarBikes(bikes, qtde)
            break

            case 2:
                idade(bikes, qtde)
            break

            case 3:
                aroCaloi(bikes, qtde)
            break

            case 4: 
                aro29(bikes, qtde)
            break

            case 5: 
                Quadro(bikes, qtde)
            break

            case 6:
                alert(`O programa será encerrado`)
            break

            default: alert(`Opção inválida`)
        }
    } while(opcao != 6)
}

pegarBikes2 = (bikes, qtde) => {
    let marcas = ["CALOI", "SCOTT", "CANONDALE"]

    let obj = {
        marca: String(prompt("Marca da bicicleta")).toUpperCase(),
        modelo: String(prompt("Modelo")),
        quadro: Number(prompt("Quadro")),
        aro:Number(prompt("Aro")),
        ano: Number(prompt("Ano")),
        preco: Number(prompt("Preço")),
    }

    while(!marcas.includes(obj.marca)){
        obj.marca = prompt(`Marca inválida, tente novamente: `).toUpperCase()
    }
    bikes.push(obj)
}

idade2 = (bikes, qtde) =>{
    let antiga = bikes[0]

    for(i=0; i<qtde; i++){
        if(bikes[i].ano < antiga.ano){
            antiga = bikes[i]
        }
    }

    if(bikes.length == 0){
        alert(`Ǹenhuma bike cadastrada`)
    }
    
    else{
        console.log(`A bicicleta mais antiga é: `)
        console.log(antiga)
    }
}

aroCaloi2 = (bikes, qtde) =>{
    let cont = 0
    let qtdeAro = 0
    if(bikes.length == 0){
        alert(`Ǹenhuma bike cadastrada`)
    }

    else{
        for(i=0; i<qtde; i++){
            if(bikes[i].marca == 'CALOI'){
                cont++
            }

            if(bikes[i].aro == 29){
                qtdeAro++
            }
        }
    } 
}

aro292 = (bikes, qtde) => {
    let qtdeAro = 0

    if(bikes.length == 0){
        alert(`Bikes não cadastradas`)
    }

    else{
        if(qtdeAro == 0 ){
            console.log(`Não foi inserida bike com aro 29`)
        }
        else{
        console.log(`Qtde de bikes com aro 29: ${qtdeAro}`)
        }
    }
}

Quadro2 = (bikes, qtde) => {
    let maiorQuadro = bikes[0].quadro
    let nomeQuadro = bikes[0].marca

    if(bikes.length == 0){
        alert(`Bikes não cadastradas`)
    }

    else{   
        for(i=0; i<qtde; i++){
            if(maiorQuadro < bikes[i].quadro){
                maiorQuadro = bikes[i].quadro
                nomeQuadro = bikes[i]
            }
        }

        console.log(`A bike de maior quadro é: `)
        console.log(nomeQuadro)
    }
}
