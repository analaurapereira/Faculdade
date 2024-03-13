Matriz = () => {
  const linhas = 2;
  const colunas = 4;
  let mat = new Array(linhas);

  for (let i = 0; i < linhas; i++) {
    mat[i] = [];
    for (let j = 0; j < colunas; j++) {
      mat[i][j] = Number(prompt("Número: "));
    }
  }

  const quant = ContarLinhas(mat, linhas, colunas);
  console.log(`Quantidade de elementos entre 12 e 20 em cada linha: ${quant}`);

  const med = CalcularMedia(mat, linhas, colunas);
  console.log("Média dos elementos pares na matriz:", med);
}

ContarLinhas = (mat, linhas, colunas) => {
  const vetNum = [];
  for (let i = 0; i < linhas; i++) {
    let cont = 0;
    for (let j = 0; j < colunas; j++) {
      if (mat[i][j] >= 12 && mat[i][j] <= 20) {
        cont++;
      }
    }
    vetNum.push(cont);
  }
  return vetNum;
}

CalcularMedia = (mat, linhas, colunas) => {
  let soma = 0;
  let cont = 0;

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      if (mat[i][j] % 2 === 0) {
        soma += mat[i][j];
        cont++;
      }
    }
  }

  if (cont === 0) {
    return 0;
  } else {
    return soma / cont;
  }
}

Matriz();