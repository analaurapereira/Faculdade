programa {
  funcao inicio() {
    inteiro n, t, r

    escreva("Escolha a tabuada de um número: \n")
    leia(n)

    t = 0

    enquanto(t<=11){

       r = n*t

       escreva( n , " X ",t, " = ", r, "\n")

       t = t+1
    }

  }
}