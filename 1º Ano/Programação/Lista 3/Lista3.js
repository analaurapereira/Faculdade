function ex1() {
    let a, b, c, d, aux
    let conta = 1

    while (conta <= 5) {
        a = Number(prompt("Informe a:"))
        b = Number(prompt("Informe b:"))
        c = Number(prompt("Informe c:"))
        d = Number(prompt("Informe d:"))
        let cont = 1

        while (cont <= 3) {
            if (a > b) {
                aux = a
                a = b
                b = aux
            }

            if (b > c) {
                aux = b
                b = c
                c = aux
            }

            if (c > d) {
                aux = c
                c = d
                d = aux
            }

            cont++

        }

        alert(`Crescente: ${a}, ${b}, ${c}, ${d} `)
        alert(`Decrescente: ${d}, ${c}, ${b}, ${a} `)

        conta++
    }
}

function ex2() {
    let preco = 5.0
    let quant = 120
    const despesa = 200
    let lucro
    let cont

    while (preco >= 1.0) {
        lucro = (preco * quant) - despesa

        console.log(` Preço : ${preco} \n Quantidade : ${quant} \n Despesas: ${despesa} \n Lucro: ${lucro}`)

        preco = preco - 0.50
        quant = quant + 26
    }

    //resolução alternativa

    let preco2 = 5.0
    let qtde = 120
    const despesa2 = 200
    let saida = "<table border='1'> <tr> <th> Preço </th> <th> Qtde </th> <th> Despesa </th> <th> Lucro </th></tr>"
    while (preco >= 1.0) {
        let lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco2} </td> <td> ${qtde} </td> <td> ${despesa2} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida
}

function ex3(){
    let cont = 1
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0

    while (cont <= 8) {
        let idade = Number(prompt("Digite a idade " + cont))

        if (idade >= 0 && idade <= 15) {
            f1++
        }

        else if (idade >= 16 && idade <= 30) {
            f2++
        }

        else if (idade >= 31 && idade <= 45) {
            f3++
        }

        else if (idade >= 46 && idade <= 60) {
            f4++
        }

        else if (idade > 60) {
            f5++
        }

        else {
            alert("Idade negativa")
        }
        cont++
    }

    console.log("Primeira faixa etária: " + f1)
    console.log("Segunda faixa etária: " + f2)
    console.log("Terceira faixa etária: " + f3)
    console.log("Quarta faixa etária: " + f4)
    console.log("Quinta faixa etária: " + f5)
    console.log("Porcentagem de pessoas de 0 a 15 anos em relação ao total: " + (f1 / (cont - 1)) * 100 + "%")
    console.log("Porcentagem de pessoas com mais de 60 anos em relação ao total: " + (f5 / (cont - 1)) * 100 + "%")
}

function ex4() {
    let cont = 0
    let r
    let saida = ""

    let tabuada = Number(prompt("Informa a tabuada: "))

    while(cont<=10){
        
        r = cont*tabuada

        saida = saida + `\n ${tabuada} X ${cont} = ${r}`

        cont++ //cont = cont + 1
    }

    alert(saida)
}

function ex5(){
    let decisao = prompt(`Deseja ver as tabuadas? (S/N)`).toUpperCase()

    while(decisao == 'S'){
        let cont = 0
        let r
        let saida = ""
    
        let tabuada = Number(prompt("Informa a tabuada que deseja ver: "))
    
        while(cont<=10){
            
            r = cont*tabuada
    
            saida = saida + `\n ${tabuada} X ${cont} = ${r}`
    
            cont++ //cont = cont + 1
        }
    
        alert(saida)

        decisao = prompt(`Deseja ver outras tabuadas? (S/N) `).toUpperCase()
    }

    if(decisao == "N"){
     alert(`Programa encerrado`)
    }

    else{
        alert(`Resposta inválida`)
    }
    
}

function ex6() {
    let totalprazo = 0
    let totalvista = 0
    let total = 0
    let codigo
    let valor

    for (let conta = 1; conta <= 3; conta++) {

        codigo = prompt("Informe V ou P como código da compra: ").toUpperCase() //toUpperCase: tranforma o que foi digitado em maiúsculo
        valor = Number(prompt("Informe o valor das compras: "))

        if (codigo == 'V') {
            totalvista = totalvista + valor
        }

        else if (codigo == 'P') {
            totalprazo = totalprazo + valor
        }

        else {
            alert("Código inválido")
            conta--
        }
    }

    total = totalprazo + totalvista
    alert("Total à vista: " + totalvista)
    alert("Total à prazo: " + totalprazo)
    alert("Valor total: " + total)
    alert(`Valor da 1º prestação ${(totalprazo / 3).toFixed(2)}`)

}

function ex7() {
    let idade; let altura; let peso
    let contaaltura = 0; let peso40 = 0
    let idade50 = 0; let somaaltura = 0

    for (let cont = 1; cont <= 5; cont++) {
        idade = Number(prompt("Informe idade: "))
        altura = Number(prompt("Informe altura: "))
        peso = Number(prompt("Informe peso: "))

        if (idade > 50) {
            idade50++
        }

        else if (idade >= 10 && idade <= 20) {
            somaaltura = somaaltura + altura
            contaaltura++
        }

        if (peso < 40) {
            peso40++
        }
    }

    alert(`Idade > 50: ${idade50} \n Média de altura com idade 10 <= idade <= 20: ${somaaltura / contaaltura} \n % peso < 40: ${(peso40 / 5) * 100}`)
}

function ex8() {
    let idade = 0; let peso = 0; let altura = 0; let pi = 0; let baixo = 0; let azul = 0; let ruivoazul = 0; let alturabaixo = 0
    let cont
    for (cont = 0; cont < 6; cont++) {
        idade = Number(prompt("Informe idade: "))
        altura = Number(prompt("Informe altura: "))
        peso = Number(prompt("Informe peso: "))

        let cabelo = prompt("Informe a cor de cabelo (P - preto, C - castanho, L - loiro, R - ruivo): ").toUpperCase()
        let olho = prompt("Informe a cor dos olhos (A - azul, P - preto, V - verde, C - castanho): ").toUpperCase()

        if (idade > 50 && peso < 60) {
            pi++
        }

        if (altura < 1.50) {
            baixo++
            alturabaixo = alturabaixo + idade
        }

        if (olho == 'A') {
            azul++
        }

        if (cabelo == 'R' && olho !== 'A') {
            ruivoazul++
        }
    }

    alert(`Quantidade de pessoas com idade > 50 e peso < 60: ${pi} \n Média de idade de pessoas menores que 1.50: ${alturabaixo / baixo} \n % das pessoas com olhos azuis: ${((azul / cont) * 100).toFixed(2)}% \n Quantidade de pessoas ruivas que não possuem olho azul: ${ruivoazul}`)

}

function ex9() {
    let idade; let peso; let altura; let acmi = 0; let pesoaltura = 0; let alto = 0; let novoalto = 0

    for (let cont = 1; cont <= 6; cont++) {
        idade = Number(prompt("Idade: "))
        peso = Number(prompt("Peso(kg): "))
        altura = Number(prompt("Altura(m): "))

        if (peso > 90 && altura < 1.50) {
            pesoaltura++
        }

        if (altura > 1.90) {
            alto++
            if (idade > 10 && idade < 30) {
                novoalto++
            }
        }

        acmi = acmi + idade //acumula a idade
    }

    alert(`Média de idade: ${(acmi / 6).toFixed(1)} \n Quantidade de pessoas com peso > 90 e altura < 1.50: ${pesoaltura} \n % de pessoas entre 10 e 30 anos entre pessoas maiores que 1.90: ${((novoalto / alto) * 100).toFixed(2)}`)
}

function ex10() {
    let numero

    for (let cont = 1; cont <= 10; cont++) {
        numero = Number(prompt("Informe o número: "))

        if (numero == 2 || numero == 3 || numero == 5) {
            alert("É primo")
        }

        else if (numero == 1) {
            alert("Não é primo")
        }

        else {

            if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0) {
                alert("Não primo")
            }

            else {
                alert("É primo")
            }
        }
    }
}

function ex20() {
    let op; let n1; let n2; let n3; let peso1; let peso2; let peso3
    do {
        op = Number(prompt("Menu de opções \n 1. Média aritmética \n 2. Média ponderada \n 3. Sair"))

        switch (op) {
            case 1: 
                alert("Opção 1 escolhida")
                n1 = Number(prompt("Informe nota 1: "))
                n2 = Number(prompt("Informe nota 2: "))

                alert(`Média aritmética: ${((n1 + n2) / 2).toFixed(2)}`)
                break

            case 2: alert("Opção 2 escolhida ")
                n1 = Number(prompt("Informe nota 1: "))
                peso1 = Number(prompt("Informe o peso da nota 1: "))
                n2 = Number(prompt("Informe nota 2: "))
                peso2 = Number(prompt("Informe o peso da nota 2: "))
                n3 = Number(prompt("Informe nota 3: "))
                peso3 = Number(prompt("Informe o peso da nota 3: "))

                alert(`Média ponderada: ${(((n1 * peso1) + (n2 * peso2) + (n3 * peso3)) / (peso1 + peso2 + peso3)).toFixed(2)}`)
                break

            case 3: alert("Programa encerrado"); break

            default: alert("Opção inválida")
        }
    }
    while (op != 3)
}

function ex21(){
    let c1 =0; let c2=0; let c3=0; let c4=0; let c5=0; let c6=0; let cont = 0; let op

    do{
        op = Number(prompt("Escolha uma opção: \n 1.Candidato 1 \n 2.Candidato 2 \n 3.Candidato 3 \n 4.Candidato 4 \n 5. Voto nulo \n 6.Voto em branco \n 0. Finalizar votação "))

        switch(op){

            case 0:
                alert("Obrigado por votar")
            break

            case 1:
                c1++
                alert("Voto realizado com sucesso")
            break

            case 2:
                c2++
                alert("Voto realizado com sucesso")
            break

            case 3:
                c3++
                alert("Voto realizado com sucesso")
            break

            case 4:
                c4++
                alert("Voto realizado com sucesso")
            break

            case 5:
                c5++
                alert("Voto realizado com sucesso")
            break

            case 6:
                c6++
                alert("Voto realizado com sucesso")
            break

            default:
                alert("Número inválido")
            break
        }

        cont++
    }
    while(op !=0)

    alert(`Total de votos para cada candidato: \n 1. ${c1} \n 2. ${c2} \n 3. ${c3} \n 4. ${c4}`)
    alert(`Total de votos em branco: ${c6} \n Total de votos nulos: ${c5}`)
    alert(`Porcentagem de votos em branco: ${(c6/(cont-1))*100}% \n Porcentagem de votos nulos: ${(c5/(cont-1))*100}%`)
}

function ex23(){
    let op; let salario; let resultado; let trabalho
    do{
        op = Number(prompt("1. Novo salário \n 2. Férias \n 3. Décimo terceiro \n 4. Sair"))

        switch(op){
            case 1: 
                salario = Number(prompt("Salário atual: "))

                if(salario > 0 && salario <= 210){
                    resultado = salario + (salario*0.15)
                    alert(`Novo salário: ${resultado.toFixed(2)}`)
                }

                else if(salario> 210 && salario <=600){
                    resultado = salario + (salario*0.10)
                    alert(`Novo salário: ${resultado.toFixed(2)}`)
                }

                else if(salario > 600){
                    resultado = salario + (salario *0.05)
                    alert(`Novo salário: ${resultado.toFixed(2)}`)
                }

                else{
                    alert(`Valor inválido`)
                }
            break

            case 2:
                salario = Number(prompt("Salário atual: "))

                resultado = salario + (salario *(1/3))

                alert(`Salário das férias: ${resultado.toFixed(2)}`)
            break

            case 3: 
              salario = Number(prompt("Salário atual: "))

              trabalho = Number(prompt("Meses trabalho na empresa: "))

                if(trabalho > 0 && trabalho <=12){
                    resultado = (salario*trabalho)/12
                    alert(`Décimo terceiro: ${resultado}`)
                }

                else{
                    alert(`Tempo inválido`)
                }
                
            break

            case 4:
                alert(`Fim do programa`)
            break

            default:
            alert(`Número inválido`)
            break
        }
    }
    while(op != 4 )
}