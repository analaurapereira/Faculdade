programa
{
        // Testar no Portugol web pois no aplicativo pode dar erro

	inclua biblioteca Matematica --> mat  
	funcao inicio()
	{
		real a, b, c, raiz_quadrada, r, arredondamento

		escreva("Insira tr�s valores abaixo para os lados de um paralelep�pedo: \n")
		escreva("Lado A:")
		leia(a)

		escreva("Lado B:")
		leia(b)

		escreva("Lado C:")
		leia(c)

  		r=(a*a+b*b+c*c)
   		raiz_quadrada = mat.raiz (r, 2.0)

  		arredondamento = mat.arredondar(raiz_quadrada, 2)
		
		escreva("Esse � o valor do per�metro: ", a*4 + b*4 + c*4)
    escreva("; j� esse � o valor do volume: ", a*b*c, ";", " ")
		escreva("o valor da �rea � de: \n", 2*(a*b+b*c+a*c), ";", " ")
		escreva("e, por fim, sua diagonal � de: ", arredondamento)
	}
}