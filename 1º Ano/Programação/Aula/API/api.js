const buscaCep = async () => {
    let cep = document.getElementById('cep').value

    let resposta = await fetch (`https://viacep.com.br/ws/${cep}/json/`)

    let dados = await resposta.json()

    document.getElementById('logradouro').innerHTML = dados.logradouro
    document.getElementById('bairro').innerHTML = dados.bairro
    document.getElementById('localidade').innerHTML = dados.localidade
    document.getElementById('uf').innerHTML = dados.uf
    document.getElementById('ibge').innerHTML = dados.ibge
    document.getElementById('gia').innerHTML = dados.gia
    document.getElementById('ddd').innerHTML = dados.ddd
    document.getElementById('siafi').innerHTML = dados.siafi
}