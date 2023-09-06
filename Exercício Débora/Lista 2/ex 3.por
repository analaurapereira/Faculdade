programa {
		//O programa apenas funciona no Portugol web devido ao tamanho do numero do CPF que nao e suportado no aplicativo
  funcao inicio() {
    inteiro cpf[11], novocpf[11]
    inteiro i, soma, resto, resto2, d, n, a
    cadeia validacao

    soma = 0
    i = 10
    a = 10

    escreva("Número de cpf: ")
    leia(n)

    // verifica se o número é maior que 0
    se(n > 0){
      // pega o número do cpf e coloca cada número em uma caixa do vetor
      enquanto(n > 0){
        d = n % 10
        cpf[i] = d

        n = n / 10
        i--
      }

      // verifica se os números não são iguais
      validacao = "nao"
      para(i = 0; i < 10; i++){
          se (cpf[i] != cpf[i+1]){
            validacao = "sim"
          }
        }
      }

      se (validacao == "sim"){

        // faz o primeiro cálculo pegando os 9 primeiros números e multiplicando de 10 até 2 e depois soma o resultado
        para(i = 0; i < 9; i++){
          soma = soma + (cpf[i] * a)
          a--
        }

        resto = soma % 11 // verifica o resto da divisão da soma por 11

        // verifica qual será o primeiro dígito verificado a partir das condições dadas
        se(resto == 0 ou resto == 1){
          novocpf[9] = 0
        } 
        
        senao{
          novocpf[9] = 11 - resto
        }

        a = 11
        soma = 0

        // faz o segundo cálculo pegando os 10 primeiros números e multiplicando de 11 até 2 e depois soma o resultado
        para(i = 0; i < 10; i++){
          soma = soma + (cpf[i] * a)
          a--
        }

        resto2 = soma % 11 // verifica o resto da divisão da soma por 11

        // verifica qual será o segundo dígito verificado a partir das condições dadas
        se(resto2 == 0 ou resto2 == 1){
          novocpf[10] = 0
        } 
        
        senao{
          novocpf[10] = 11 - resto2
        }

        // atribui 9 primeiros valores digitados para um novo vetor
        para(i = 0; i < 9; i++){
          novocpf[i] = cpf[i]
        }

        validacao = "sim"

        // verifica a validação
        para(i = 0; i < 11; i++){
          se(novocpf[i] != cpf[i]){
            validacao = "nao"
          }
        }

        se(validacao == "sim"){
          escreva("Cpf válido")
        } 
        
        senao{
          escreva("Cpf inválido")
        }
      } 
      
      senao{
        escreva("Cpf inválido")
      }
    } 
    
    senao{
      escreva("Valor inválido")
    }
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 323; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */