ex10 = () => {
    
    let mat = []
    const aux = 5
    let l4 = 0
    let c2 = 0
    let diag1 = 0
    let diag2 = 0
    let total = 0

    for (let i = 0; i < aux; i++) {
        let l = []
        for (let j = 0; j < aux; j++) {
            l.push(Math.floor(Math.random() * 10))
        }
        mat.push(l)
    }

    for (let j = 0; j < aux; j++) {
        l4= l4 + mat[3][j]
    }


    for (let i = 0; i < aux; i++) {
        c2 = c2 + mat[i][1]
    }

    for (let i = 0; i < aux; i++) {
        diag1 = diag1 + mat[i][i]
    }

    for (let i = 0; i < aux; i++) {
        dias2 = diag2 + mat[i][4 - i]
    }

    for (let i = 0; i < aux; i++) {
        for (let j = 0; j < aux; j++) {
            total = total + mat[i][j]
        }
    }

    console.log(`Soma linha 4: ${l4}`)
    console.log(`Soma coluna 2: ${c2}`)
    console.log(`Soma da diagonal primária: ${diag1}`)
    console.log(`Soma da diagonal segundária: ${diag2}`)
    console.log(`Soma total: ${total}`)
}
ex10()