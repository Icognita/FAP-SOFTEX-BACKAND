/** 
 * Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela 

*/

function familia() {
  let  primeiro=null;
  let length=0
  const Node=(nome, idade, filho)=>{
    return{
    nome,
    idade,
    filho,
     next:null
    }
  }
  //adicionando pessoas a lista; 
  //ela retorna um valor
  
    const adicionaPessoa=(nome, idade, filho)=>{
      //criando o primeior nó, faz uma condição
  
      if(!primeiro){
        primeiro= Node(nome,idade, filho)
        length++
        return primeiro
      }else{
      next=Node(nome ,idade,filho)
      }
      //quando o next é nulo
      let node=primeiro
      while(node.next){
        node=node.next
      }
      node.next=Node(nome ,idade,filho)
      console.log(node);
    }
      
    return{
      length:()=> length,
      adicionaPessoa:(nome ,idade,filho)=> adicionaPessoa(nome ,idade,filho),
      print:()=>console.log(primeiro)
   

    }
    
  }
  const lista= familia();



  console.log(lista.length());
  lista.adicionaPessoa("Lampião", 25, null)
  lista.adicionaPessoa("Maria Bonita",35,"Joaquim")
  lista.adicionaPessoa("Joaquim",8,)






  
  




