vendas = () => {
  const linhas = 12; // meses
  const colunas = 4; // semanas
  let mat = new Array(linhas);
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  for (let i = 0; i < linhas; i++) {
    mat[i] = [];
    for (let j = 0; j < colunas; j++) {
      mat[i][j] = Number(prompt(`Digite o valor para ${meses[i]}, Semana ${j + 1}:`));
    }
  }

  const totalMensal = calcularTotalMensal(mat, linhas, colunas);
  const totalSemanal = calcularTotalSemanal(mat, linhas, colunas);
  const totalAnual = calcularTotalAnual(mat);

  for (let i = 0; i < linhas; i++) {
    console.log(`${meses[i]}: Total vendido no mês: ${totalMensal[i]}`);
  }

  for (let j = 0; j < colunas; j++) {
    console.log(`Semana ${j + 1}: Total vendido durante o ano: ${totalSemanal[j]}`);
  }

  console.log(`Total vendido pela loja no ano: ${totalAnual}`);
}

calcularTotalMensal = (mat, linhas, colunas) => {
  const totalMensal = new Array(linhas).fill(0);

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      totalMensal[i] += mat[i][j];
    }
  }

  return totalMensal;
}

calcularTotalSemanal = (mat, linhas, colunas) => {
  const totalSemanal = new Array(colunas).fill(0);

  for (let j = 0; j < colunas; j++) {
    for (let i = 0; i < linhas; i++) {
      totalSemanal[j] = totalSemanal[j] + mat[i][j];
    }
  }

  return totalSemanal;
}

calcularTotalAnual = (mat) => {
  const totalAnual = mat.flat().reduce((total, venda) => total + venda, 0);
  return totalAnual;
}

vendas();