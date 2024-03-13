ex8 = () => {
    
    let mat1 = []
    let mat2 = []
    let l = []
    let soma = []
    let sub = []

    for (let i = 0; i < 3; i++) {
        l = []
        for (let j = 0; j < 8; j++) {
            l.push(Math.floor(Math.random() * 10))
        }
        mat1.push(l)
    }

  
    for (let i = 0; i < 3; i++) {
        l = []
        for (let j = 0; j < 8; j++) {
            l.push(Math.floor(Math.random() * 10))
        }
        mat2.push(l)
    }

    for (let i = 0; i < 3; i++) {
        l = []
        for (let j = 0; j < 8; j++) {
            l.push(mat1[i][j] + mat2[i][j])
        }
        soma.push(l)
    }

    for (let i = 0; i < 3; i++) {
        l = []
        for (let j = 0; j < 8; j++) {
            l.push(mat1[i][j] - mat2[i][j])
        }
        sub.push(l)
    }

    console.log(`Matriz soma:\n ${soma}`)
    console.log(`Matriz subtração:\n ${sub}`)
}

ex8();
