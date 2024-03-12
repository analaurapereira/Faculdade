programa {

  // Testar no Portugol web pois no aplicativo pode dar erro
  
  funcao inicio() {

    real a, b, c 

    escreva("Lado a: ")
    leia(a)
    
    escreva("Lado b: ")
    leia(b)

    escreva("Lado c: ")
    leia(c)

    se(a > b e a > c ){
      se(a >= b + c){
        escreva("Nenhum tri�ngulo � formado")
      }
      se((a*a) == (b*b)+(c*c)){ 
        escreva("Um tri�ngulo ret�ngulo � formado")
      }

      se((a*a) > (b*b)+(c*c)){
        escreva("Um tri�ngulo obtus�ngulo � formado")
      }

      se((a*a) < (b*b)+(c*c)){
        escreva("Um tri�ngulo acut�ngulo � formado")
      }
    }

    se(b > a e b > c ){
      se(b >= a + c){
        escreva("Nenhum tri�ngulo � formado")
      }
      se((b*b) == (a*a)+(c*c)){
        escreva("Um tri�ngulo ret�ngulo � formado")
      }

      se((b*b) > (a*a)+(c*c)){
        escreva("Um tri�ngulo obtus�ngulo � formado")
      }

      se((b*b) < (a*a)+(c*c)){
        escreva("Um tri�ngulo acut�ngulo � formado")
      }
    }

    se(c > b e c > a ){
      se(c >= b + a){
        escreva("Nenhum tri�ngulo � formado")
      }
      se((c*c) == (b*b)+(a*a)){ 
        escreva("Um tri�ngulo ret�ngulo � formado")
      }

      se((c*c) > (b*b)+(a*a)){
        escreva("Um tri�ngulo obtus�ngulo � formado")
      }

      se((c*c) < (b*b)+(a*a)){
        escreva("Um tri�ngulo acut�ngulo � formado")
      }
    }
  }
}