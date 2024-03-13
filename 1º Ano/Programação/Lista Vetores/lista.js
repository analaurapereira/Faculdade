function ex1alternativo(){ //console.log - percorre o vetor e mostra todos os dados
    let vet = []

    for(let i = 0; i<6; i++){
        vet[i]=Number(prompt(`Informe o ${i+1}º número: `))
    }
    const vetorPar = vet.map(item => { 
        if(item % 2 == 0) {
            return item
        }
    })
    const vetPar = []
    vet.forEach(item => {
        if(item % 2 == 0) {
            vetPar.push(item)
        }
    })
    console.log(vetorPar)
    console.log(vetPar)

    //nome.length = mostra quantos elementos tem no vetor
}

function ex1(){
    let vet = []; let par = []; let impar = []

    for(let i = 0; i < 6; i++){
        vet[i]= Number(prompt(`Informe o ${i+1}º nùmero: `))
    

     if(vet[i]%2 == 0){
        par.push(vet[i]) // puxa o número de um vetor para o outro
     }

     else{
        impar.push(vet[i])
     }
    }

    console.log(`Números pares ${par} 
    \n Numeros ímpares: ${impar} 
    \n Quant de nº pares: ${par.length} 
    \n Quant de nº impares: ${impar.length}` )
}

function ex2(){
    let vet = []; let div2 = []; let div3 = []; let div2e3 = []
    for(let i = 0; i < 6; i++){
        vet[i]= Number(prompt(`Informe o ${i+1}º nùmero: `))

        if(vet[i]%2 == 0){
            div2.push(vet[i]) 
        }

        else if(vet[i]%3 == 0){
            div3.push(vet[i])
        }

        if(vet[i]%2 == 0 && vet[i]%3 == 0){
            div2e3.push(vet[i])
        }
    }
    
    console.log(`Números divisores de 2: ${div2} 
    \n Numeros divisores de 3: ${div3} 
    \n Números dívisiveis por 2 e 3: ${div2e3}` )
}

function ex3(){
    //declaração de vetores
    let codigos = []
    let estoque = []
    let achou = false

    //entrada de 5 produtos

    for(let i = 0; i<5; i++){
        codigos[i] = Number(prompt(`Informe o código do produto ${i+1}: `))
        estoque[i] = Number(prompt(`Quantidade em estoque ${i+1}: `))
    }

    let cliente = Number(prompt(`Informe o código do cliente: `))

    while(cliente != 0){ //perguntar o que ele quer comprar

        let codigo = Number(prompt(`Código do produto da compra: `))
        let qtde = Number(prompt(`Quantidade do produto: `))

        //procurar se o código existe
        let achou = false

        for(let i = 0; i<5; i++){
                //produto encontrado
            if(codigos[i] == codigo){
               
                if(estoque[i] <= 0){
                  estoque[i] -= qtde
                  achou = true
                }
                 else{
                alert(`Produto não disponível`)
                }
            }
        }    
        if(!achou){
            alert(`Produto não encontrado`)
        }

        cliente = Number(prompt(`Digite 0 para encerrar`))
        alert(estoque)
    }
}

function ex4(){
    //achar posição de um elemento no vetor
    //(nome do vetor).indexOf()

    let nomes = []
    let salario = []

    for(let i = 0; i<6; i++){
            nomes[i] = prompt(`Informe o nome: `)
            salario[i] = Number(prompt(`Informe o salário: `))
    }

    //armazena maior e menor salário
    let maior = []
    let menor = []

    for(let i = 0; i<10; i++){
        if(salario[i] > maior[i]){
            maior[i] = salario[i]//atualiza maior salário
        }

        if(salario[i] < menor[i]){
            menor[i] = salario[i]//atualiza menor salário
        }
    }

    let nomeMaior = nomes[salario.indexOf(maior)]
    let nomeMenor = nomes[salario.indexOf(menor)]

    console.log(`O nome do maior salário é ${nomeMaior}`)
    console.log(`O nome do menor salário é ${nomeMenor}`)
}

function ex5(){
    //{nome do vetor}. includes(numero) = ve se o número está no vetor
    //ex: vetor [1, 2, 3] // vetor.includes(2)

    let logica = []
    let lingueagem = []

    for(let i = 0; i<15; i++){
        logica[i] = Number(prompt(`Informe o código do aluno que faz lógica:`))
    }

    for(let i = 0; i<10; i++){
        lingueagem[i] = Number(prompt(`Informe o código do aluno que faz linguagem:`))
    }
   //verifica os alunos que fazem as diciplinas em comum
   let comum = []

   for(let i = 0; i<10; i++){//verifica  aluno que faz lógica
         //verifica se fazem linguagem também
        if(lingueagem.includes(logica[i])){
               comum.push(logica[i]) // adiciona a um vetor comum
        }
    }

    console.log(`Alunos que fazem as duas matérias: ${comum}`)
}

function ex6(){
    let nome = []
    let vetnome = []
    let comissao = []
    let vetcomissao = []
    let vendas = []
    let vetvendas = []
    let total = " "
    let totalvendas = 0
    let salario = []

    for (let i = 0; i < 10; i++) {
    nome.push(String(prompt(`Nome do vendedor: `)))
    comissao.push(Number(prompt(`Porcentagem de comissão: `)))
    vendas.push(Number(prompt(`Número de vendas (R$): `)))

    if (comissao[i] < 0) {
        alert(`Porcentagem inválida`)
        i--
    }

    if (vendas[i] < 0) {
        alert(`Número inválido`)
        i--
    } else {
        vetnome.push(nome[i])
        vetcomissao.push(comissao[i])
        vetvendas.push(vendas[i])
        salario.push((vendas[i] + (vendas[i] * (comissao[i] / 100))).toFixed(2))
    }
    }

    let maior = salario[0]
    let menor = salario[0]

    for (let i = 0; i < 10; i++) {
        total = total + `${vetnome[i]}: comissão de R$ ${(vetvendas[i] * (vetcomissao[i] / 100)).toFixed(2)} \n`
        totalvendas = totalvendas + vetvendas[i]

        if (salario[i] > maior) {
            maior = salario[i] //atualiza maior salário
        }

        if (salario[i] < menor) {
            menor = salario[i] //atualiza menor salário
        }
    }

    alert(`${total} \n`)
    alert(`Total de vendas: R$ ${totalvendas} \n`)

    let nomeMaior = vetnome[salario.indexOf(maior)]
    let nomeMenor = vetnome[salario.indexOf(menor)]

    alert(`O nome do maior salário é ${nomeMaior}. O salário é R$ ${String(maior)} \n`)
    alert(`O nome do menor salário é ${nomeMenor}. O salário é R$ ${String(menor)} \n`)
}

function ex7(){
    let n = []
    let negativo = 0
    let positivos = 0

    for(let i = 0; i<10; i++){
        n[i] = Number(prompt(`Informe um número: `))

        if(n[i] < 0){
             negativo++
        }

        else{
            positivos = positivos + n[i]
        }
    }

    alert(`Quantidade de números negativos: ${negativo}`)
    alert(`Soma dos números positivos: ${positivos}`)
}

function ex8(){
    let nomes = []
    let medias = []
    
    for (let i = 0; i < 7; i++) {
      nomes[i] = prompt(`ome do aluno :`)
      medias[i] = parseFloat(prompt(`Média final do aluno :`))
    }
    
    let maiorMedia = medias[0]
    let nomeMaiorMedia = nomes[0]
    
    for (let i = 1; i < 7; i++) {
      if (medias[i] > maiorMedia) {
        maiorMedia = medias[i]
        nomeMaiorMedia = nomes[i]
      }
    }
    
    alert(`O nome do aluno com maior média é ${nomeMaiorMedia}.`)
    
    for (let i = 0; i < 7; i++) {
      if (medias[i] < 7) {
        let notaExame = 5 - medias[i]
            if(notaExame > 0){
                alert(`O(a) aluno(a) ${nomes[i]} precisa tirar ${notaExame} na prova de exame final para ser aprovado(a).`)
            }

            else{
                 alert(`O(a) aluno(a) ${nomes[i]} está aprovado(a).`)
            }
        }
    }
}



function exextra(){
    let cod = []
    let nome = []
    let vetcod = []
    let vetnome = []
    let i = 0

    do{
        nome.push(String(prompt(`Nome do aluno: `)))
        cod.push(Number(prompt(`Código do aluno(escreva "-1" para encerrar o programa): `)))

        if(cod[i] == -1){
            alert(`Programa finalizado`)
        }

        else if(cod[i] < 0){
            alert(`Número inválido`)
        }

        else{
            if(vetcod.includes(cod[i])){
                alert(`O código pertence ao aluno(a) ${nome[vetcod.indexOf(cod[i])]}`)
            }

            else{
                vetnome.push(nome[i])
                vetcod.push(cod[i])
            }

            i++
        }
    } while(cod[i]!==-1)
}