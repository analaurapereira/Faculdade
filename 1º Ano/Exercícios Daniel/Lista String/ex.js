ex1 = (str) =>{
    let i = 0

    while(str[i] != undefined){
        i++
    }

    console.log(`O tamanho é ${i}`)
}
ex1(String(prompt('Frase: ')))


ex2 = (str) => {
    if (str[0]== 'A'){
        console.log(`${str}`)
    }

}
ex2(String(prompt('Nome: ').toUpperCase()))


ex3 = (str) => {
   console.log(`${str.substring(0, 4)}`)
}
ex3(String(prompt('Nome: ')))

ex4 = (str) =>{
    r = str.replaceAll(' ', '').length
   console.log(`O tamanho é ${r}`)
}
ex4(String(prompt('Nome: ')))


ex5 = () => {
    nome = String(prompt('Nome: '))
    sexo = String(prompt('Sexo(F/M): ').toUpperCase())
    idade = Number(prompt('Idade: '))

    if (sexo == 'F' && idade < 25){
        console.log(`${nome} ACEITA`)
    }

    else{
        console.log(`NÂOACEITA`)
    }
}

ex5()


ex6 = () => {
    let p1 = Strin(("Palavra 1: ").toUpperCase)
    let p2 = Strin(("Palavra 2: ").toUpperCase)
    
    if(p1 === p2){
        console.log("Iguais")
    }

    else{
        console.log("Diferentes")
    }
}

ex6()


ex7 = (str) =>{
    let total = 0;

    for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      total++;
    }
  }

  console.log(total)
}
ex7(String('Digite um número: '))

ex8 = (str) => {
    str.replaceAll('0', '1')
    console.log(str)
}
ex8(String('Digite um número: '))


ex9 = (str) => {
    console.log(st.split('').reverse().join(''))
}
ex9(String('Digite um nome: '))


ex10 = (str) => {
    str.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '')
    console.log(str)
}
ex10(String('Digite um nome: ').toLowerCase)


ex11 = (str) => {
     const c = prompt("Digite um caracter :")

    const vogais = ['a', 'e', 'i', 'o', 'u']
    let cont = 0;
    let x = str

    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i].toUpperCase())) {
        cont++;
      }
    }


    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i].toUpperCase())) {
        str= str.substring(0, i) + c + str.substring(i + 1);
      }
    }

  console.log(`A palavra "${x}" possui ${cont} vogais.`);
  console.log(`Após a substituição: "${str}"`);
    
}
ex11(String('Digite um nome: '))


ex12 = (str) =>{
    const aux = str.split(' ').length - 1
  
  console.log(aux)
}
ex12(String('Digite um nome: '))


ex13 = (str) =>{

  const vet = str.split('')
  const vet2 = vet.filter(caracter => caracter !== ' ');
  const r = vet2.join('')
  console.log(r);
}
ex13(String('Digite um nome: '))


ex14 = (str) =>{
  const L1 = prompt("L1: ")
  const L2 = prompt("L2: ")

  const aux = str.replace(new RegExp(L1, 'g'), L2);
  console.log(aux);
}
ex14(String('Digite um nome: '))

ex15 = () =>{
  let nomes = []
  let idades = []
  let nomeNovo
  let nomeVelho
    let idadeNova = 0
    let idadeVelha = 0

  for (let i = 1; i <= 10; i++) {
    const nome = prompt(`Digite o nome:`);
    const idade = parseInt(prompt(`Digite a idade:`));

    if (idade < 0) {
      break;
    }

    nomes.push(nome);
    idades.push(idade);

    if (idade < idadeNova) {
      idadeNova = idade;
      nomeNovo = nome;
    }

    if (idade > idadeVelha) {
      idadeVelha = idade;
      nomeVelho = nome;
    }
  }

  console.log(`Pessoa mais jovem: ${nomeNovo}, idade ${idadeNova}`);
  console.log(`Pessoa mais velha: ${nomeVelho}, idade ${idadeVelha}`);
}
ex15()


ex21 = () => {
  const frase = prompt("Digite uma frase: ")
  const str = frase.split('').filter(char => char !== ' ').join('').toUpperCase()
  const reverse = str.split('').reverse().join('')

  if (str === reverse) {
    console.log(`É um palíndromo.`)
  } 
  
  else {
    console.log(`Não é um palíndromo.`)
  }
}

ex21()


ex22 = () => {
    const frase1 = String(prompt("Digite uma frase: "))
    const frase2 = String(prompt("Digite outra frase: "))

   const termina = frase1.endsWith(frase2);

  if (termina) {
    console.log("Está contida");
  } 
  
  else {
    console.log("Não está contida ");
  }
}
ex22()


ex23  = () =>{
  const frase1 = String(prompt("Digite uma frase: "))
  const frase2 = String(prompt("Digite outra frase: "))
  const n = Number(prompt("Digite um número: "))

  const aux = frase2.slice(0, n);
  const concat = frase1 + aux + '/0'
  console.log(concat)
}
ex23()


ex24 = () =>{
    const frase1 = String(prompt("Digite uma frase: ").toUpperCase())
    const frase2 = String(prompt("Digite outra frase: ").toUpperCase())

    let cont = 0

    for (let i = 0; i < frase1.length; i++) {
        if(frase2.includes(frase1[i])){
            cont++
        }
    }

    console.log(cont)
}
ex24()


ex25 = () =>{
    data = String(prompt("Digite uma data(DD/MM/AAAA): "))

    if (data.length === 10 && data[2] === '/' && data[5] === '/') {

        const divide = data.split('/');
        const dia = parseInt(divide[0], 10);  
        const mes = parseInt(divide[1], 10);  
        const ano = parseInt(divide[2], 10); 

        if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
            console.log("Dia:", dia);
            console.log("Mês:", mes);
            console.log("Ano:", ano);
        } 

        else {
            console.log("Formato inválido.");
        }
    } 
    
    else {
        console.log("Formato inválido.");
    }
}
ex25()