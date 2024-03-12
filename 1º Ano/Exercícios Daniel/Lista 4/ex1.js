Matriz = () => {
    const linhas = 3
    const colunas = 3
    let mat = new Array(linhas);

  for (let i = 0; i < linhas; i++) {
    mat[i] = [];
    for (let j = 0; j < colunas; j++) {
      mat[i][j] = Number(prompt("Número: "))
    }
  }

  const quant = Contar(mat, linhas, colunas)
  console.log(`Quantidade de elementos entre 15 e 20 na matriz: ${quant}`);
}

Contar = (mat, linhas, colunas) => {
  let cont = 0;
  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      if (mat[i][j] >= 15 && mat[i][j] <= 20) {
        cont++;
      }
    }
  }
  return cont;
}

Matriz()