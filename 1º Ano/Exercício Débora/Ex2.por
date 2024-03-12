programa{
  // Testar no Portugol web pois no aplicativo pode dar erro

	funcao inicio(){
  
  inteiro a, b, c, d

	escreva("Escreva um valor em segundos: ")
	leia(a)

  b = a/3600;
 	c = (a%3600)/60;
 	d = ((a%3600)%60);

	escreva(b, "h:", c, "m:", d, "s:" )
}
}