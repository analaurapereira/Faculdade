programa {
  funcao inicio() {//matriz[i][j] - linha i, coluna j
    inteiro i, j,mat[3][3]
  
    para(i=0; i<3;i++){
      para(j=0;j <3; j++){
        escreva("Numero: ")
        leia(mat[i][j])
      }
    }

   para(i=0; i<3;i++){
      para(j=0;j <3; j++){
        escreva(mat[i][j], " ")
      }
      escreva("\n")
    }
  }
}