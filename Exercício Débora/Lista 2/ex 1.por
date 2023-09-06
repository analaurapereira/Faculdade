programa{
	funcao inicio(){
		
		inteiro idade[150], i, maior, menor, media, soma, a, soma2,geral, n, abaixo
		cadeia nome[150], nova

		soma = 0
		soma2 = 0
		media = 0
		a = 0
		n = 0
		geral = 0
		nova = " "
		abaixo = 0

		para(i=0; i<150; i++){
			escreva("Digite um nome:")
			leia(nome[i])

			escreva("Digite uma idade:")
			leia(idade[i])

			se(idade[i] < 0){
				escreva("Idade invalida")
				i--
			}
		}

		menor = idade[0]
		maior = idade[0]

		para(i=0; i<150; i++){
			// letra A 
			se(idade[i] > maior){
				maior = idade[i]
			}

			// letra B
			se(idade[i] > 50){
				soma = soma + idade[i]
				media = soma / (a + 1)
				a++
			}

			// letra C
			se(idade[i] <= menor){
				menor = idade[i]
				nova = nome[i]
			}

			// letra D
			se(idade[i] >= 15 e idade[i] <= 30){
				soma2 = soma2 + idade[i]
			}

			n = n + idade[i]
		}

	
		geral = n/150
		
		
		escreva("A maior idade digitada foi: ", maior, "\n")
		escreva("A média das idades maiores que 50 é: ", media, "\n")
		escreva("O nome da pessoa mais nova é: ", nova, "\n")
		escreva("A soma das idades de todas as pessoas entre 15 e 30 é de: ", soma2, "\n")
		escreva("Pessoa(s) com idade abaixo da média: ")

		// letra E
		para(i=0; i<150;i++){
			se(idade[i] < geral){
				escreva(nome[i], "\n")
				abaixo++
			}
		}

		escreva("Número de pessoas com idade abaixo da media: ", abaixo)
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 275; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */