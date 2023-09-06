function prova(){
    let titulo = []
    let descricao = []
    let usuario = []
    let likes = []
    let mudanca = []
    let qtde = []
    let n = 0// Conta teste para ver se os likes ficarão negativos
    let pub

    //repete 10 vezes
    for(let i = 0; i < 10; i++){
        titulo.push(String(prompt(`Título: `)))
        descricao.push(String(prompt(`Descricao: `)))
        usuario.push(String(prompt(`Autor: `)))
        likes.push(Number(prompt(`Quantidade de likes: `)))

        if(likes[i] <= -1){
            alert(`Quantidade de likes inválida`)
            i--
        }

        if(usuario.includes(usuario)){
            alert(`Usuário inválido`)
            i--
        }

       
    }

    //repete 5 vezes
    for(let i = 0; i<5; i++){
          pub = Number(prompt(`Qual post deseja alterar (Post de 1 a 10): `))

                if(pub <1 || pub >10){
                    alert(`Publicação inválido`)
                    i--
                }

                else{
                    switch(pub){

                    case 1: i = 0; break;
                    case 2: i = 1; break;
                    case 3: i = 2; break;
                    case 4: i = 3; break;
                    case 5: i = 4; break;
                    case 6: i = 5; break;
                    case 7: i = 6; break;
                    case 8: i = 7; break;
                    case 9: i = 8; break;
                    case 10: i = 9; break;
                    }

                    mudanca[i] = String(prompt(`Deseja aumentar os likes ou diminuir (A/D)? `).toUpperCase)
                    qtde[i] = Number.prompt(`Quantidade de likes: `)

                    if(mudanca[i]== 'A'){
                        likes[i] = likes[i]+mudanca[i]
                    }

                    else if(mudanca[i]== 'D'){
                        n = qlikes - qtde
                        if(n < 0){
                            alert(`Número inválido`)
                            i--
                        }
                    }

                    else{
                        alert(`Inválido`)
                        i--
                    }
                }
    }

    let menosLikes = Math.min(likes)
    let maisLikes = Math.max(likes)

    alert(`Post com a menor qtde de likes é ${titulos.indexOf(menosLikes)} com a descrição ${descricao.indexOf(menosLikes)}`)
    alert(`Post com a maior qtde de likes é ${titulos.indexOf(maisLikes)} com a descrição ${descricao.indexOf(maisLikes)}`)
}

function p2(){
    let titulo = []
    let descricao = []
    let usuario = []
    let likes = []
    let mudanca = []
    let qtde = []
    let n = 0// Conta teste para ver se os likes ficarão negativos
    let pub
    let usuario2 =[]
    let i = 0

    //repete 10 vezes
    do{
        titulo.push(String(prompt(`Título: `)))
        descricao.push(String(prompt(`Descricao: `)))
        usuario.push(String(prompt(`Autor: `)))

        //valida o usuario
        if(usuario2.includes(usuario[i])){
            alert(`Usuário inválido`)
            i--
        }

        else{
            likes.push(Number(prompt(`Quantidade de likes: `)))
            //valida os likes
            if(likes[i] <= -1){
            usuario2.push(usuario[i])
            alert(`Quantidade de likes inválida`)
            i--
            }
        }
    }while(i<10)

    //repete 5 vezes
    for(let i = 0; i<5; i++){
        //escolhe qual dos 10 posts que alterar
          pub = Number(prompt(`Qual post deseja alterar (Post de 1 a 10): `))

                //caso seja um numero que menr q 1 ou maior q 10 não está entre os posts
                if(pub <1 || pub >10){
                    alert(`Publicação inválido`)
                    i--
                }

                //cada post possui sua posição no vetor, ent baseado nusso, cada caso é atribuido a um local no vetor
                else{
                    switch(pub){

                    case 1: i = 0; break;
                    case 2: i = 1; break;
                    case 3: i = 2; break;
                    case 4: i = 3; break;
                    case 5: i = 4; break;
                    case 6: i = 5; break;
                    case 7: i = 6; break;
                    case 8: i = 7; break;
                    case 9: i = 8; break;
                    case 10: i = 9; break;
                    }

                    //escolhe aumentar ou diminuir likes
                    mudanca[i] = String(prompt(`Deseja aumentar os likes ou diminuir (A/D)? `).toUpperCase)
                    qtde[i] = Number(prompt(`Quantidade de likes: `))

                    //se escolheu aumentar, adiciona aos likes q já existiam
                    if(mudanca[i]== 'A'){
                        likes[i] = likes[i]+mudanca[i]
                    }

                    //se escolheu diminuir, diminui dos likes que já existiam
                    else if(mudanca[i]== 'D'){
                        // faz a conta dos likes menos o que deseja diminuir
                        n = likes[i] - qtde
                        if(n < 0){
                            //se n negativo, não vai ser válido
                            alert(`Número inválido`)
                            i--
                        }
                    }

                    //se não escolher nem aumentar nem diminuir
                    else{
                        alert(`Inválido`)
                        i--
                    }
                }
    }

    let menosLikes = Math.min(likes)// verifica qual o maior numero de likes
    let maisLikes = Math.max(likes)//verifica qual o menor numero de likes

    alert(`Post com a menor qtde de likes é ${titulos.indexOf(menosLikes)} com a descrição ${descricao.indexOf(menosLikes)}`)
    alert(`Post com a maior qtde de likes é ${titulos.indexOf(maisLikes)} com a descrição ${descricao.indexOf(maisLikes)}`)
}