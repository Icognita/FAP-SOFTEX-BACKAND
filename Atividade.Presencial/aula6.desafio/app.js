var salario;
var previdencia;
var dependentes;
var outros;
var irrf;
var inss ;


function salarioLiquido(){
    salario=document.getElementById('salarioBruto').value;
    switch (salario) {
        case salario <= 1320:
            inss = 0.075
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
    previdencia=parseFloat(document.getElementById('previdencia').value);
    
    dependentes=document.getElementById('dependente').value;

    outros=parseFloat(document.getElementById('outrosDescontos')).value;

    novoSalario=salario;
    

    Document.getElementById('res').innerHTML= novoSalario;

}

salarioLiquido();