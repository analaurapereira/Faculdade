provas = () => {
  const numAlunos = 15;
  const numProvas = 5;
  const nomes = [];
  let notas = new Array(numAlunos);

  guardar(notas, nomes, numProvas, numAlunos); 
  calcularMedia(notas, nomes, numProvas, numAlunos); 
}

guardar = (notas, nomes, numProvas, numAlunos) => {
  for (let i = 0; i < numAlunos; i++) {
    nomes.push(prompt(`Digite o nome do aluno ${i + 1}:`));

    notas[i] = [];

    for (let j = 0; j < numProvas; j++) {
      notas[i].push(Number(prompt(`Digite a nota da prova ${j + 1} para ${nomes[i]}:`)));
    }
  }
}

calcularMedia = (notas, nomes, numProvas, numAlunos) => {
  let somaMedias = 0;

  for (let i = 0; i < numAlunos; i++) {
    const mediaAluno = calcularMediaIndividual(notas[i]);
    somaMedias += mediaAluno;
    const situacaoAluno = determinarSituacao(mediaAluno);
    console.log(`Aluno: ${nomes[i]}, Média: ${mediaAluno.toFixed(2)}, Situação: ${situacaoAluno}`);
  }

  
  const mediaSala = somaMedias / numAlunos;
  console.log(`Média da sala: ${mediaSala.toFixed(2)}`);
}

calcularMediaIndividual = (notas) => {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

determinarSituacao = (media) => {
  if (media >= 7) {
    return "Aprovado";
  } 
  
  else if (media >= 5) {
    return "Em Exame";
  } 
  
  else {
    return "Reprovado";
  }
}

provas(); 