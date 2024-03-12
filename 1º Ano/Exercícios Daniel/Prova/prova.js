function ex1(){
    let exp = Number(document.getElementById("exp").value)
    let select = Number(document.getElementById("select").value)
    let salario

    switch (select) {
        case 1:
            if(exp >=1 && exp<5){
                salario = 3000
            }

            else if(exp >= 5){
                salario = 6000
            }

         
        break;
    
        case 2:
            if(exp >=1 && exp<5){
                salario = 5000
            }

            else if(exp >= 5){
                salario = 8000
            }

           
        break;

        case 3:
            if(exp >=1 && exp<5){
                salario = 4000
            }

            else if(exp >= 5){
                salario = 7000
            }

           
        break
    }

    if (salario >=0 && salario<4500){
        document.getElementById("resultado").innerHTML = "Seu salário é de R$ "+salario+". Sua expectativa de arrumar uma vaga é alta"
    }

    else if (salario >=4500 && salario <=6000){
        document.getElementById("resultado").innerHTML = "Seu salário é de R$ "+salario+". Sua expectativa de arrumar uma vaga é média"
    }

    else if( salario>6000){
        document.getElementById("resultado").innerHTML = "Seu salário é de R$ "+salario+". Sua expectativa de arrumar uma vaga é baixa"
    }

    else{
        document.getElementById("resultado").innerHTML = "Dados inválidos"
    }
}