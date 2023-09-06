programa {
  funcao inicio() {
    real n, i, j
    inteiro cont, num

    cont = 0

	//pega a altura do triangulo
    faca{

      escreva("Altura: ")
      leia(n)

	//condiçao para nao ser negativo
      se(n>0){

        num = 1

		//coluna
        para(i=1; i<=n; i++){
        	//linha
          para(j=1;j<=i;j++){

            escreva(num, " ")
            num++
          }
          
          escreva("\n")
        }
      }

	//encerrar o programa
      senao se( n == -1){
      	escreva("Programa finalizado \n")
      	cont-- // para nao contar esse numero
      }

	//valor negativo
      senao{

        escreva("Valor inválido \n")
        cont-- // para nao contar esse numero
      }

      cont++

    }enquanto (n!=-1)

    escreva("Quantidade de triângulos pedidos: ", cont)
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 88; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */