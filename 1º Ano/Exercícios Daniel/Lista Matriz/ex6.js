ex6 = () => {

  const l = 20
  const c = 10
  const mat = []
  const mat2 = []

  for (let i = 0; i < l; i++) {
    const l = [];
    for (let j = 0; j < c; j++) {
      l.push(Math.floor(Math.random() * 10))
    }
    mat.push(l)
  }

  const soma= Array(c).fill(0)


  for (let j = 0; j < c; j++) {
    for (let i = 0; i < l; i++) {
      soma[j] = soma[j] + mat[i][j]
    }
  }

  for (let i = 0; i < l; i++) {
    l = []
    for (let j = 0; j < c; j++) {
      l.push(mat[i][j] * soma[j])
    }
    mat2.push(l)
  }

  console.log(`Matriz original:\n ${mat}`)
  console.log(`Matriz final:\n ${mat2}`)

}
ex6()