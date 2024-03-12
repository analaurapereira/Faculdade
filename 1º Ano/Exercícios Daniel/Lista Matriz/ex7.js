ex17 = () => {

  const lM = 4
  const cM = 6
  const lN = 6
  const cN = 4
  const matM = []
  const matN = []

  for (let i = 0; i < lM; i++) {
    const lM = []
    for (let j = 0; j < cM; j++) {
      lM.push(Math.floor(Math.random() * 10))
    }
    matM.push(lM)
  }

  for (let i = 0; i < lN; i++) {
    const lN = []

    for (let j = 0; j < cN; j++) {
      lN.push(Math.floor(Math.random() * 10))
    }
    matN.push(lN)
  }

  const r = []
  const lR = []

  for (let i = 0; i < lM; i++) {
    

    for (let j = 0; j < cN; j++) {
      let soma = 0

      for (let k = 0; k < cM; k++) {
        soma = soma + (matM[i][k] * matN[k][j])
      }

      lR.push(soma)
    }
    r.push(lR)
  }

  console.log(`Matriz:\n ${resultado}`)

}
ex17()