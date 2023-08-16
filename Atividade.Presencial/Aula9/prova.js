function vermelho(){
    if (cor>=0){
        console.log(cor1);
        vermelho(cor1-1);

        amarelo(cor1-3);


        

    }
}
function amarelo(cor2){
    if(cor1>=0);{
    console.log(cor2);
    vermelho(cor2-4);
    }
}
vermelho(7);
console.log(amarelo());