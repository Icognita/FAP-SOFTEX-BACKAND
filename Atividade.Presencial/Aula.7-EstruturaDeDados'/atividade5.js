const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

const anoDeCriacao=empresas.filter(empresa=>{ return empresa.anoDeCriacao > 2000})
console.log(anoDeCriacao);

const nomeEmpresa=empresas.map(empresa=> { console.log(empresa.nome + "CEO" +empresa.CEO)})
 const valorEmpresa= empresas.reduce((valortotal,empresa)=>valortotal+empresa.valorDeMercado,0)
 console.log(valorEmpresa);