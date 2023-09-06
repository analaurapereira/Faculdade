function exemplo(){
    let conta = 1

    while(conta <= 10){
        console.log("Boa noite " + conta)

        conta = conta + 1 //incremento de 1(soma de 1)
    }

    console.log("Depois de while " + conta)
}

function somaidade(){//o usuárioinforma 10 idades
    let cont = 1
    let soma = 0

    while(cont <= 10){
        let idade = Number(prompt("Informe idades: " + cont))     
        //console.log("idade "+ idade)
        soma = soma + idade
        //console.log("soma "+ soma)
        cont = cont + 1
    }

    let media = soma/10
    alert("A média é "+ media)
}

function idadeusuario(){//o usuario informa quantas idades ele quer colocar
    let cont = 1
    let soma = 0
    
    let n = Number(prompt("Informe a quantidade de idades: "))

    while(cont <= n){
        let idade = Number(prompt("Informe idades: " + cont))     
        //console.log("idade "+ idade)
        soma = soma + idade
        //console.log("soma "+ soma)
        cont = cont + 1
    }

    let media = soma/n
    alert("A média é "+ media)
}

function tabuada(){
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

function ex(){
    let nome = prompt('Informe seu nome: ')
    alert(`Boa noite ${nome}`)
}