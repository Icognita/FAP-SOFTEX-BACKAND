var salario=0;
var previdencia=0;
var dependentes=0;
var outros=0;
var irrf=0;
var inss=0 ;


function salarioLiquido(){
    salario=document.getElementById('salarioBruto').value;


    if(salario <= 1320){
       return  inss = 0.075
    }else if(salario <= 1320){
        
    }
    switch (salario) {
        case salario <= 1320:
            break;
        case salario > 1320 && salario <=2571.29:
        inss = 0.09
        break;
        case salario > 2571.29 && salario <=3856.94:
        inss = 0.12
        break;
        case salario > 3856.94:
        inss = 0.14
        break;
        default:
            break;
    } 
    switch (salario) {
        case salario >= 1903.98:
            irrf = 0.075
            break;
        case salario > 1903.98 && salario <=2826.65:
            irrf =  0.15
            break;
        case salario > 2826.85 && salario <=3751.06:
            irrf = 0.225
            break;
        case salario > 3751.06:
            irrf =0.275
        break;
        default:
            break;
    }
    previdencia=(document.getElementById('previdencia').value);
    
    dependentes=document.getElementById('dependente').value;

    outros=(document.getElementById('outrosDescontos')).value;

    novoSalario=salario;
    

    document.getElementById('res').innerHTML= novoSalario;

}

