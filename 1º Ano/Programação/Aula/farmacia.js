function exFarmacia() {
    let farmacia = [];
    let qtdef = 2;
    let remedios = [];
    let qtder = 2;

    pegarFarmacia(farmacia, qtdef);
    pegarRemedios(remedios, qtder, farmacia);
    compra(farmacia, remedios)
}

//cadastra a farmácia
function pegarFarmacia(farmacia, qtdef) {
    for (let i = 0; i < qtdef; i++) {
        let obj = {
            nome: String(prompt("Nome da farmácia: ").toUpperCase()),
            codigo: Number(prompt("Código:")),
            endereco: String(prompt("Endereço:")),
        }

        //verifica a existencia de uma farmácia com o mesmo codigo
        while (farmacia.find(item => item.codigo === obj.codigo)) {
            obj.codigo = Number(prompt(`Código inválido, tente novamente: `));
        }

        farmacia.push(obj);
    }
}

//cadastra os remédios
function pegarRemedios(remedios, qtder, farmacia) {
    for (let i = 0; i < qtder; i++) {
        let obj = {
            nome: String(prompt("Nome do remédio:").toUpperCase()),
            codigof: Number(prompt("Código da farmácia:")),
            estoque: Number(prompt("Quantidade em estoque:")),
            preco: Number(prompt("Preço:"))
        }

        //verifica se existe farmácia com esse código
        while (!farmacia.find(item => item.codigo === obj.codigof)) {
            obj.codigof = Number(prompt(`Código inválido, tente novamente: `));
        }

        remedios.push(obj);
    }
}

//realiza a compra
function compra(farmacia, remedios){
    for(let i =0; i < 2; i++){
        let farm = String(prompt("Nome da farmácia em que está comprando: ").toUpperCase())
        //acha o nome de uma farmácia cadastrada
        while(!farmacia.find(item => item.nome ===farm )){ //verifica se a farmacia existe
            farm = String(prompt("Nome inválido, tente novamente").toUpperCase())
        }

        let comp = String(prompt("Qual remédio deseja comprar: ").toUpperCase())
        //acha o nome de um remédio cadastrado
        while(!remedios.find(item => item.nome === comp)){
            comp= String(prompt("Nome inválido, tente novamente").toUpperCase())
        }

        let quant = Number(prompt("Quantidade de remédios: "))

        let farmaciaSelecionada = farmacia.find(item => item.nome === farm);
        let remedioSelecionado = remedios.find(item => item.nome === comp);
        //verifica e atualiza o estoque
        if (remedioSelecionado.estoque >= quant) {
            remedioSelecionado.estoque = remedioSelecionado.estoque - quant
            console.log(`Compra de ${quant} unidades de ${remedioSelecionado.nome} na ${farmaciaSelecionada.nome} realizada com sucesso.`);
            //calcula o preço a pagar
            let pagar = remedioSelecionado.preco * quant

            console.log(`Total pago pela compra: R$ ${pagar.toFixed(2)}`);
        } 
        
        else {
            console.log(`Não há estoque suficiente de ${remedioSelecionado.nome} na ${farmaciaSelecionada.nome}. Ness farmácia há ${remedioSelecionado.estoque} remédios em estoque`);
        }
    }
}





exFarmacia2 = () => {
    let farmacia = [];
    let qtdef = 2;
    let remedios = [];
    let qtder = 2;

     do{
        opcao = Number(prompt(`Digite \n 1. Cadastra farmácia \n 2. Cadastra remédio \n 3. Realiza uma compra \n 
        4. Sair do programa `))

        switch(opcao){
            case 1:
               pegarFarmacia2(farmacia, qtdef)
            break

            case 2:
                pegarRemedios2(remedios, qtder, farmacia)
            break

            case 3:
                compra2(farmacia, remedios)
            break

            case 4: 
                alert(`O programa será encerrado`)
            break

            default: alert(`Opção inválida`)
        }
    } while(opcao != 4)
}

//cadastra a farmácia
pegarFarmacia2 = (farmacia, qtdef) => {
        let obj = {
            nome: String(prompt("Nome da farmácia: ").toUpperCase()),
            codigo: Number(prompt("Código:")),
            endereco: String(prompt("Endereço:")),
        }

        //verifica a existencia de uma farmácia com o mesmo codigo
        while (farmacia.find(item => item.codigo === obj.codigo)) {
            obj.codigo = Number(prompt(`Código inválido, tente novamente: `));
        }

        farmacia.push(obj);
}



//cadastra os remédios
pegarRemedios2 = (remedios, qtder, farmacia) => {

    if(farmacia.length == 0) {
        alert(`Farmácias não foram cadastradas`)
    }

    else{
        let obj = {
            nome: String(prompt("Nome do remédio:").toUpperCase()),
            codigof: Number(prompt("Código da farmácia:")),
            estoque: Number(prompt("Quantidade em estoque:")),
            preco: Number(prompt("Preço:"))
        }

        //verifica se existe farmácia com esse código
        while (!farmacia.find(item => item.codigo === obj.codigof)) {
            obj.codigof = Number(prompt(`Código inválido, tente novamente: `));
        }

        remedios.push(obj);
    }
}

//realiza a compra
compra2 = (farmacia, remedios) =>{
    if(farmacia.length == 0 || remedioSelecionado.length == 0) {
        alert(`Farmácias e/ou remédios não cadastrados`)
    }

    else{
        let farm = String(prompt("Nome da farmácia em que está comprando: ").toUpperCase())
        //acha o nome de uma farmácia cadastrada
        while(!farmacia.find(item => item.nome ===farm )){ //verifica se a farmacia existe
            farm = String(prompt("Nome inválido, tente novamente").toUpperCase())
        }

        let comp = String(prompt("Qual remédio deseja comprar: ").toUpperCase())
        //acha o nome de um remédio cadastrado
        while(!remedios.find(item => item.nome === comp)){
            comp= String(prompt("Nome inválido, tente novamente").toUpperCase())
        }

        let quant = Number(prompt("Quantidade de remédios: "))

        let farmaciaSelecionada = farmacia.find(item => item.nome === farm);
        let remedioSelecionado = remedios.find(item => item.nome === comp);
        //verifica e atualiza o estoque
        if (remedioSelecionado.estoque >= quant) {
            remedioSelecionado.estoque = remedioSelecionado.estoque - quant
            console.log(`Compra de ${quant} unidades de ${remedioSelecionado.nome} na ${farmaciaSelecionada.nome} realizada com sucesso.`);
            //calcula o preço a pagar
            let pagar = remedioSelecionado.preco * quant

            console.log(`Total pago pela compra: R$ ${pagar.toFixed(2)}`);
        } 
        
        else {
            console.log(`Não há estoque suficiente de ${remedioSelecionado.nome} na ${farmaciaSelecionada.nome}. Ness farmácia há ${remedioSelecionado.estoque} remédios em estoque`);
        }
    }
}