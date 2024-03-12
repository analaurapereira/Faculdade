function ex1() {
    let obj = {
        a: Number(prompt(`Digite o a: `)),
        b: Number(prompt(`Digite o b: `)),
        c: Number(prompt(`Digite o c: `)),
    }
    // ** é exponencial
    let delta = (obj.b ** 2) - (4 * obj.a * obj.c)

    alert(`Valor do delta: ${delta}`)
}

function ex2() {
    let soma = 0
    let total = 0

    for (let i = 0; i < 10; i++) {
        let obj = {
            nome: String(prompt(`Nome: `)),
            codigo: Number(prompt(`Codigo: `)),
            p1: Number(prompt(`Nota 1: `)),
            p2: Number(prompt(`Nota 2: `)),
            media: 0,
        }

        obj.media = (obj.p1 + obj.p2) / 2

        console.log(`O aluno ${obj.nome}, código ${obj.codigo}, teve a média ${obj.media}`)

        soma = soma + obj.media
    }

    total = soma / 10

    console.log(`A média da turma é ${total}`)
}

function ex3() {
    let filmes = []
    let soma = 0

    for (let i = 0; i < 3; i++) {
        let obj = {
            filme: String(prompt(`Nome do filme: `)),
            classificacao: Number(prompt(`Classificação indicativa`)),
            duracao: Number(prompt(`Duracao do filme(min): `)),
            nota: Number(prompt(`Nota do filme: `)),
        }

        filmes.push(obj)

        soma = soma + filmes[i].classificacao
    }

    console.log(`A média etária é: ${(soma / 3).toFixed(2)}`)

    let maior = ''
    let maiortempo = filmes[0].duracao

    for (let i = 0; i < 3; i++) {
        if (filmes[i].duracao > maiortempo) {
            maiortempo = filmes[i].duracao
            maior = filmes[i].filme
        }
    }

    console.log(`Filme com a maior duração é: ${maior}`)

    let menor = ''
    let menortempo = filmes[0].duracao

    for (let i = 0; i < 3; i++) {
        if (filmes[i].duracao < menor) {
            menortempo = filmes[i].duracao
            menor = filmes[i].filme
        }
    }

    console.log(`Filme com a menor duração é: ${menor}`)

    let melhor = ''
    let melhornota = filmes[0].nota

    for (let i = 0; i < 3; i++) {
        if (melhor < filmes[i].nota) {
            melhornota = filmes[i].nota
            melhor = filmes[i].filme
        }
    }

    console.log(`Filme melhor avaliado: ${melhor}`)
}

function eleicao() {
    let candidatos = []
    let partidos = ['PT', 'PSDB0', 'PL', 'PSB']
    for (let i = 0; i < 3; i++) {
        let obj = {
            nome: String(prompt(`Nome do candidato: `)),
            codigo: Number(prompt(`Código do candidato: `)),
            partido: String(prompt(`Partido: `).toUpperCase()),
            votos: Number(prompt(`Quantidade de votos: `)),
        }

        while(!partidos.includes(obj.partido)){
            obj.partido = prompt(`Partido inválido, tente novamente: `).toUpperCase()
        }

        candidatos.push(obj)

    }

    let vencedor = candidatos[0].nome
    let partidoVencedor = candidatos[0].partido
    let maior = candidatos[0].votos

    for (let i = 0; i < 3; i++) {
        if (candidatos[i].votos > maior) {
            maior = candidatos[i].votos
            vencedor = candidatos[i].nome
            partidoVencedor = candidatos[i].partido
        }
    }

    console.log(` O vencedor é o ${vencedor} do partido ${partidoVencedor} com ${maior} votos`)

    let votosPartido = console.log(`Escolha um partido: `).toUpperCase()

    let nomeVotosPartido = " "
    let qtdeVotosPartido = 0

    for(i = 0; i < 3; i++){
        if(candidatos[i].qtdeVotosPertido == votosPartido){ 
            qtdeVotosPartido = candidatos[i].votos
            nomeVotosPartido = candidatos[i].nome
        }
    }

    console.log(`O candidato mais votado do partido ${votosPartido} é ${nomeVotosPartido}`)
}

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

    console.log(`A bike de maior aro é  ${nomeQuadro}`)

}