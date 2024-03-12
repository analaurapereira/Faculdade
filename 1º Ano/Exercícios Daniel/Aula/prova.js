tarefas = () => {
    var album = [];
    var figuras = [];

    do{
        let opcao = Number(prompt(`Digite \n 
        1. Cadastrar album\n 
        2. Cadastrar figurinhas\n 
        3. Comprar figurinha\n 
        4. Trocar figurinhas\n 
        5. Calcular e mostrar todas as figurinhas que tem para troca\n
        6. Figurinha com maior quantidade\n
        7. Sair `))

        switch(opcao){
            case 1:
                cadastrarAlbum(album);
            break

            case 2:
                cadastrarFig(figuras, album);
            break

            case 3:
                compra(figuras, album)
            break

            case 4:
                trocar(album, figuras)

            break

            case 5:
                disp(figuras)
            break

            case 6:
                maiorQuant(figuras, album)

            break

            case 7:
                console.log(`Fim do programa`)
            break

            default: alert(`Opção inválida`)
        }
    }
    while(opcao != 7)

}

cadastrarAlbum = (album) => {
    var obj = {
            nome: String(prompt("Nome : ")),
            id: Number(prompt("ID:")),
            empresa: String(prompt("Empresa:")),
        }

        while (album.find(item => item.nome === obj.nome)) {
            obj.nome = Number(prompt(`Nome inválido, tente novamente: `));
        }

        while (album.find(item => item.id === obj.id)) {
            obj.id = Number(prompt(`Id inválido, tente novamente: `));
        }
        album.push(obj);
}

cadastrarFig = (figuras, album) => {

    if(album.length == 0){
        alert(`Albuns não cadastrados`)
    }

    else{
     var obj = {
            nome: String(prompt("Nome : ")),
            num: Number(prompt("Numero:")),
            time: String(prompt("Time:")),
            quant: 0,
            idAl: String(prompt("Id album: "))
        }

        while (figuras.find(item => item.num === obj.num)) {
            obj.num = Number(prompt(`Número inválido, tente novamente: `));
        }

        while (!album.find(item => item.id === obj.idAl)) {
            obj.idAl = Number(prompt(`Id inválido, tente novamente: `));
        }
        figuras.push(obj);
    }
}

compra = (figuras, album) => {
    if(figuras.length == 0 || album.length == 0) {
        alert(`Figuras e/ou album não cadastrados`)
    }

    else{
       let idAlb = String(prompt("Id do album: "))
  
        while(!album.find(item => item.id === idAlb )){ 
            idAlb = String(prompt("Id inválido, tente novamente"))
        }

        let comp = Number(prompt("Numero da figurinha:  "))

        while(!figuras.find(item => item.num === comp)){
            comp= Number(prompt("Número inválido, tente novamente"))
        }
    }


        let figSel = figuras.find(item => item.num === comp);
        //verifica e atualiza o estoque
        if (figSel.quant >= 1) {
            figSel.quant = figSel.quant - 1
        } 
    
        else {
            console.log(`Não há estoque suficiente `);
        }
}

trocar = (album, figuras) =>{
     if(figuras.length == 0 || album.length == 0) {
        alert(`Figuras e/ou album não cadastrados`)
    }

    else{
       let idAlb1 = String(prompt("Id do album que deseja trocar: "))
  
        while(!album.find(item => item.id === idAlb1 )){ 
            idAlb1 = String(prompt("Id inválido, tente novamente"))
        }

        let comp1 = Number(prompt("Numero da figurinha que deseja trocar:  "))

        while(!figuras.find(item => item.num === comp1)){
            comp1= Number(prompt("Número inválido, tente novamente"))
        }

        let idAlb2 = String(prompt("Id do album que deseja pedir: "))
  
        while(!album.find(item => item.id === idAlb2 )){ 
            idAlb2 = String(prompt("Id inválido, tente novamente"))
        }

        let comp2 = Number(prompt("Numero da figurinha que deseja pedir:  "))

        while(!figuras.find(item => item.num === comp2)){
            comp2= Number(prompt("Número inválido, tente novamente"))
        }
        
        let figSel1 = figuras.find(item => item.num === comp1);
        let figSel2 = figuras.find(item => item.num === comp2);
        //verifica e atualiza o estoque
        if (figSel1.quant >= 1) {
            figSel1.quant = figSel1.quant - 1
            figSel2.quant = figSel2.quant + 1
        } 

        else {
            console.log(`Não há estoque suficiente `);
        }
    }

        
}

disp = (figuras) => {

    let possui = []

    if(figuras.length == 0 ){
        alert(`Figuras não cadastradas`)
    }

    else{
        for(let i = 0; i < figuras.length; i++){
            if(figuras[i].quant >= 1){
                possui[i] = figuras[i]
            }
        }

        console.log(possui)
    }
}

maiorQuant = (figuras, album) =>{
    let maior = figuras[0].quant

    for(let i = 0; i < figuras.length; i++){
        if(figuras[i].quant > maior){
            figuras[i].quant = maior
        }
    }

    let m = figuras.find(item => item.quant === maior)

    console.log(m)
}