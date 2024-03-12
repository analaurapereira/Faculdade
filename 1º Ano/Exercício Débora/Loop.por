programa {
  funcao inicio() {
    real m, acm, mt
    inteiro cont

    cont = 0
    acm = 0.0

    escreva("Média: ")
    leia(m)

    enquanto(m > -1){
      acm = acm + m
      cont = cont + 1

      escreva("Média: ")
      leia(m)
    }

    se(cont == 0){
      escreva("Nenhum aluno inscrito")
    }

    senao{
      mt = acm/cont
      escreva("Média: ", mt)
    }

  }
}