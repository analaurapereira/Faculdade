programa {

  // Testar no Portugol web pois no aplicativo pode dar erro

  funcao inicio() {

    real a, b, c, d

    escreva("Nota do trabalho de laborat�rio: ")
    leia(a)

    escreva("Nota da avalia��o semestral: ")
    leia(b)

    escreva("Nota do exame final: ")
    leia(c)

    d = ((a*3)+(b*4)+(c*3))/10

    se(d >=8 e d <= 10){
      escreva("M�dia ponderada: ", d, ". Conceito A.")
    }

    se(d >=7 e d <= 7.99){
      escreva("M�dia ponderada: ", d, ". Conceito B.")
    }

    se(d >=6 e d <= 6.99){
      escreva("M�dia ponderada: ", d, ". Conceito C.")
    }

    se(d >=5 e d <= 5.99){
      escreva("M�dia ponderada: ", d, ". Conceito D.")
    }

    se(d >=0 e d <= 4.99){
      escreva("M�dia ponderada: ", d, ". Conceito E.")
    }
  }
}