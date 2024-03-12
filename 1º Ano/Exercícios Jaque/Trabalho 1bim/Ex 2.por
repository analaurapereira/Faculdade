programa { //ANA LAURA SILVA PEREIRA, 24696
           //CAMILO VERÍSSIMO GARCIA PRADO, 24583

  inclua biblioteca Util --> u
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    inteiro num, i = 0, j = 0, n
    faca{
      escreva("\nDigite um dos números abaixo:\n1-Tabuada\n2-Menor Valor\n3-Fatorial\n4-Somatório\n5-Posição de Elemento\n6-Média dos Números Pares\n7-Finalizar\nDigite a sua escolha: ")
      leia(num)

      escolha (num){
        caso 1: 
          escreva("\nDigite um número de 1 a 9: ")
          leia(n)
          tabuada(n)
        pare

        caso 2:
          inteiro vetor[3]
          escreva("Digite 3 valores\n")
          para(i = 0; i < 3; i++){
            escreva("Digite o ", i+1, "° valor: ")
            leia(vetor[i])
            escreva("\n")
          }
          escreva("O menor valor é: ", menor(vetor))
          escreva("\n")
        pare   

        caso 3:
          escreva("Digite um número: ")
          leia(num)
          escreva("O fatorial de ", num, " é ", fatorial(num))
          escreva("\n")
          pare
        caso 4: 

          escreva("O somatório é: ", somatorio())
          escreva("\n")
        pare

        caso 5:
          inteiro vet[10]
          para(i = 0; i < 10; i++){
            vet[i] = u.sorteia(1,100)
            escreva(vet[i], "   ")
          }
          inteiro v = dados(vet)
          se(v >= 0){
            escreva("O valor se encontra na ", v+1,"° posição")
          }
          senao(escreva(v))
        pare

        caso 6: 
          inteiro m[3][3], TAM = 3
          para(i = 0; i < TAM; i++){
            para(j = 0; j < TAM; j++){
              m[i][j] = u.sorteia(1,10)
              escreva(m[i][j], "   ")
            }
            escreva("\n")
          }
          escreva("A média dos pares da matriz é: ", pares(m, TAM))
        pare 

        caso 7:
          escreva("Programa encerrado. Obrigado por utilizar!")
        pare

        caso contrario: 
          escreva ("Opção Inválida!")
      }
    }enquanto(num != 7)
  }

  funcao tabuada(inteiro num){
    inteiro valor
    enquanto(num < 1 ou num > 9){
        escreva("\nValor incorreto! Digite um número de 1 a 9: ")
        leia(num)
      }

    para(inteiro i = 0; i < 11; i++){
      valor = num * i
      escreva(num, " X ", i, " = ", valor, "\n")
    }
  }

  funcao inteiro menor(inteiro vet[]){
    inteiro menornum = vet[0]
    para(inteiro i = 0; i < u.numero_elementos(vet); i++){
      se(vet[i] < menornum){
        menornum= vet[i]
      }
    }
    retorne menornum
  }

  funcao inteiro fatorial(inteiro &num){
    inteiro fat = 1, cont = 1
    enquanto (cont <= num){
			fat = fat * cont
			cont++
		}
    retorne fat
  }

  funcao real somatorio(){
    inteiro num, f
    real valor = 1

    faca{
      escreva("Digite um número: ")
      leia(num)
    }enquanto(num <=0)

    para(inteiro i = 1; i <= num; i++){
      valor = valor + (1/fatorial(i))
    }
    retorne mat.arredondar(valor, 3)
  }

  funcao inteiro dados(inteiro vet[]){
    inteiro v, procurado, cont = 0
    escreva("\nDigite o valor procurado: ")
    leia(procurado)
      para(inteiro i = 0; i < u.numero_elementos(vet); i++){
        se(vet[i] == procurado){
            v = i
            cont++
        } 
      }
      se(cont <= 0){
        v = -1
      }
    retorne v
  }

  funcao real pares(inteiro matriz[][], inteiro TAM){
    real soma = 0, cont = 0
    para(inteiro i = 0 ; i < TAM; i++){
      para(inteiro j = 0 ; j < TAM; j++){
        se(matriz[i][j] % 2 == 0){
          soma += matriz[i][j]
          cont++
        }
      }
    }
    retorne (soma/cont)
  }
}