function ex1(){

    let n1 = Number(document.getElementById("n1").value)
   
    let n2 = Number(document.getElementById("n2").value)

    let resultado = (n1 - n2)

    alert("Resultado: " + resultado)

}

function ex2(){
    let n1 = Number(document.getElementById("n1").value)
   
    let n2 = Number(document.getElementById("n2").value)

    let n3 = Number(document.getElementById("n3").value)

    let resultado = (n1*n2*n3)

    alert("Resultado: " + resultado)
}

function ex3(){
    let n1 = Number(document.getElementById("n1").value)
   
    let n2 = Number(document.getElementById("n2").value)

    let resultado = (n1/n2)

    alert("Resultado: " + resultado.toFixed(1))
}

function ex4(){
  
    let n1 = Number(document.getElementById("n1").value)

    let n2 = Number(document.getElementById("n2").value)

    let resultado = (((n1*2)+(n2*3))/2)

    alert("Nota final: R$ " + resultado.toFixed(1))
}

function ex5(){

    let valor = Number(document.getElementById("valor").value)

    let resultado = (valor - (valor*0.10))

    alert("Valor com desconto:" + resultado.toFixed(2))
    
}

function ex6(){
    //recupera salário fixo do usuário
    //number converte em número
    let fixo = Number(document.getElementById("fixo").value)

    //recupera as vendas do usuário
    let vendas = Number(document.getElementById("vendas").value)

    //calcula comissão
    let comissao = ((vendas *(4/100)))

    //calcular salário total
    let total = (fixo + comissao)
    alert("A comissão é de R$" + comissao.toFixed(2) + ".  O salário total é de R$" + total)

}

function ex7(){

    let peso = Number(document.getElementById("peso").value)

    let en = peso + (peso*0.15)

    let ema = peso - (peso*0.20)

    alert("Engordando 15%, seu novo peso é de " + en.toFixed(2) + " kg.  Emagrecendo 20%, seu novo peso é de " + ema.toFixed(2) + " kg.")

}

function ex8(){

        let peso = Number(document.getElementById("peso").value)

        let resultado = peso*1000

        alert("Peso em gramas: " + resultado)
}

function ex9(){

    let bM = Number(document.getElementById("bM").value)

    let bm = Number(document.getElementById("bm").value)

    let a = Number(document.getElementById("a").value)

    let resultado = ((bM+bm)*a)/2

    alert("Área do trapézio é " + resultado)

}

function ex10(){

    let l = Number(document.getElementById("l").value)

    let resultado = l*l

    alert("A área do quadrado é " + resultado)
}