programa {//ANA LAURA SILVA PEREIRA, 24696
          //CAMILO VERÍSSIMO GARCIA PRADO, 24583
  funcao inicio() {
    cadeia alunos[40]
    caracter gabarito[5], resposta[5][40]
    inteiro i, aux, j, notas[40], med
    aux = 40

    para(i = 0; i < aux; i++){
      escreva("Nome do aluno: ")
      leia(alunos[i])
      para(j = 0; j < 5; j++){
        escreva("Resposta da questão ", j+1, " : ")
        leia(resposta[j][i])  
      }
      escreva("\n")
    }

    escreva("\n  GABARITO  \n")

    para(i = 0; i < 5; i++){
      escreva("Gabarito da questão ", i+1, " : ")
      leia(gabarito[i])
    }

    nota(resposta, gabarito, aux, notas)

    escreva("\n")

    escreva("A menor nota é: ", menorNota(notas, aux), "\n")
    escreva("A maior nota é: ", maiorNota(notas, aux), "\n")
    med = media(notas, aux)
    escreva("A média da turma foi de: ", med, "\n")
    escreva("A quantidade de alunos com nota acima da média da turma: ", acima(med, notas, aux), "\n")
    escreva("Portcentagem de alunos aprovados: ", aprovados(notas, aux))
  }

  funcao nota(caracter resposta[][], caracter gabarito[], inteiro aux, inteiro notas[]){
    inteiro i, j
    
    para(i = 0; i < aux; i++){
      notas[i] = 0
      para(j = 0; j < 5; j++){  
        se(resposta[j][i] == gabarito[j]) {
          notas[i] = notas[i] + 2
        }
      }
    }
  }

  funcao inteiro menorNota(inteiro notas[], inteiro aux){
    inteiro menor, i
    menor = notas[0]

    para(i = 0; i < aux; i++){
      se(notas[i] < menor){
        menor = notas[i]
      }
    }

    retorne menor
  }

  funcao inteiro maiorNota(inteiro notas[], inteiro aux){
    inteiro maior, i
    maior = notas[0]

    para(i = 0; i < aux; i++){
      se(notas[i] > maior){
        maior = notas[i]
      }
    }

    retorne maior
  }

  funcao inteiro media(inteiro notas[], inteiro aux){
    inteiro i, med, total
    med = 0

    para(i = 0; i < aux; i++){
      med = med + notas[i]
    }

    total = med / aux

    retorne total
  }

  funcao inteiro acima(inteiro med, inteiro notas[], inteiro aux){
    inteiro i, cont
    cont = 0

    para(i = 0; i < aux; i++){
      se(notas [i] > med){
        cont++
      }
    }

    retorne cont
  }

  funcao real aprovados(inteiro notas[], inteiro aux){
    inteiro i, apv, porcent
    apv = 0
    para(i = 0; i < aux; i++){
      se(notas[i] >= 7){
        apv++
      }
    }
    porcent = (apv / aux) * 100

    retorne porcent
  }
}