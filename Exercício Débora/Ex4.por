programa {

  // Testar no Portugol web pois no aplicativo pode dar erro
  
  funcao inicio() {
    
    caracter a
    inteiro b
    real d, f, g

    escreva("Sabor do sorvete(U/C): ")
    leia(a)

    escreva("Quantidade de bolas: ")
    leia(b)

    escreva("Pre�o por bola: ")
    leia(d)

     f = b*d

    escolha(a){

      caso "U":
       se(b > 1 e b <= 3){

          escreva("Sem desconto. Valor: R$ ", f)
        }

        se(b > 3 e b <= 5){
         
          g = f - (f*0.15)

          escreva("Desconto de 15%. Valor: R$ ", g)
        }

        se(b > 5){
          g = f - (f*0.30)

         escreva("Desconto de 30%. Valor: R$ ", g)
        }
      pare

      caso "C":
       se(b >=1 e b <=3){
          escreva("Sem desconto. Valor: R$ ", f)
        }

       se(b > 3){
          g = f - (f*0.20)

         escreva("Desconto de 20%. Valor: R$ ", g)
        }
      pare
    }
  }
}