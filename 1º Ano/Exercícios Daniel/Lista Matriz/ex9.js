ex9 = () => {
    
    let n = Number(prompt('Número: '))
    let mat = []
    let mult = []
    const aux = 3


    for (let i = 0; i < aux; i++) {
        let l = []
        for (let j = 0; j < aux; j++) {
            l.push(Math.floor(Math.random() * 10))
        }
        mat.push(l)
    }

    for (let i = 0; i < aux; i++) {
        mult[i] = []
    }

    for (let i = 0; i < aux; i++) {
        for (let j = 0; j < aux; j++) {
            mult[i][j] = mat[i][j] * n
        }
    }

    console.log(mult)
}
ex9()
