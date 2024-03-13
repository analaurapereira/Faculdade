Matriz = () => {
  const linhas = 6;
  const colunas = 3;
  let mat = new Array(linhas);
  

  for (let i = 0; i < linhas; i++) {
    mat[i] = [];
    for (let j = 0; j < colunas; j++) {
      mat[i][j] = Number(prompt("Número: "));
    }
  }

  const {maior, maiorCoord} = maiorElemento(mat, linhas, colunas);
  console.log(`Maior elemento: ${maior} (Coordenadas: [${maiorCoord[0]}, ${maiorCoord[1]}])`);

  const {menor, menorCoord} = menorElemento(mat, linhas, colunas); 
  console.log(`Menor elemento: ${menor} (Coordenadas: [${menorCoord[0]}, ${menorCoord[1]}])`);
}

maiorElemento = (mat, linhas, colunas) => {
  let maior = mat[0][0];
  let maiorCoord = [0, 0];
  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      if (mat[i][j] > maior) {
        maior = mat[i][j];
        maiorCoord = [i, j];
      }
    }
  }
  return {maior, maiorCoord};
}

menorElemento = (mat, linhas, colunas) => {
  let menor = mat[0][0];
  let menorCoord = [0, 0];
  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      if (mat[i][j] < menor) {
        menor = mat[i][j];
        menorCoord = [i, j];
      }
    }
  }
  return {menor, menorCoord};
}

Matriz();