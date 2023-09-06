eleicao = () => {
    let partidos = []
    let candidatos = []
    let tam = 5
    let tamEleitor = 10

    cadastroPartido(partidos, tam)
    cadastroCandidato(partidos, candidatos, tam)
    votacao(candidatos, tamEleitor)

    let ganhou = resultado(candidatos, tamEleitor)

    if(ganhou){
        console.log(`O vencedor foi ${ganhou.nomeCand}`)
    }

    else {
        console.log(`A eleição ficou empatada`);
    }
}

cadastroPartido = (partidos, tam) => {
    for(let i = 0; i < tam; i++){
        let obj ={
            codPart : Number(prompt("Código do partido: ")),
            nomePart : String(prompt("Nome do partido: ").toUpperCase()),
            siglaPart: String(prompt("Sigla do partido: ").toUpperCase()),
            presidente: String(prompt("Presidente do partido: ").toUpperCase()),
            nroPoliticos: Number(prompt("Número de políticos: "))
        }

        while (partidos.find(item => item.codPart === obj.codPart)) {
            obj.codPart = Number(prompt(`Código inválido, tente novamente: `));
        }

        partidos.push(obj);
    }
}

cadastroCandidato = (partidos, candidatos, tam) => {
    for(let i = 0; i < tam; i++){
        let obj ={
            nomeCand : String(prompt("Nome do candidato: ").toUpperCase()),
            codCand : Number(prompt("Código do partido: ")),
            qtdeVotos: 0,
            cargo: String(prompt("Cargo: ").toUpperCase()),
        }

        
        while (!partidos.find(item => item.codPart === obj.codCand)) {
            obj.codCand = Number(prompt(`Código inválido, tente novamente: `));
        }

        candidatos.push(obj);
    }
}

votacao = (candidatos, tamEleitor) =>{
    for(let i = 0; i < tamEleitor; i++){
        let codPol = Number(prompt(`Número do candidato: `));
        let voto = candidatos.find(item => item.codCand === codPol);
        

        while(!voto){
            codPol = String(prompt(`Código inválido, tente novamente: `));
            voto = candidatos.find(item => item.codCand === codPol);
        }

        if(voto){
            voto.qtdeVotos++;
        }
    }
}

resultado = (candidatos, tamEleitor) => {
    let vencedor = candidatos.slice();
    vencedor.sort((a, b) => b.qtdeVotos - a.qtdeVotos);

    if (vencedor[0].qtdeVotos === vencedor[1].qtdeVotos) {
        return null; 
    }

    else{
        return vencedor[0]
    }
}
