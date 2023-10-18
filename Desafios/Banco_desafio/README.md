## FinAPI - FINANCEIRA


### Ferramentas que voces devem utilizar
- Node
- express
- Nodemon
- uuid - versão 4
- Insomnia - Testar as requisições

### Orientações
- devem criar um banco de dados ficticio (Array)
- use sempre o status code
- Não se preocupe em utilizar MVC. pode ser realizado em um unico arquivo.


### Requisitos

- [x] Deve ser possivel criar uma conta
- [x] Deve ser possivel buscar o extrato bancario do cliente
- [x] Deve ser possivel realizar um depósito
- [x] Deve ser possivel realizar um saque
- [x] Deve ser possivel buscar o extrato bancario do cliente por data 
- [x] Deve ser possivel atualizar dados da conta do cliente
- [x] Deve ser possivel obter dados da conta do cliente
- [x] Deve ser possivel deletar uma conta

### Regras de negocio

- [x] Não deve ser possivel cadastrar uma conta com CPF já existente
- x Não deve ser possivel fazer um deposito em uma conta não existente
- [x] Não deve ser possivel buscar extrato em uma conta não existente
- [x] Não deve ser possivel fazer saque em uma conta não existente
- [x] Não deve ser possivel excluir uma conta não existente
- [x] Não deve ser possivel fazer saque quando o saldo for insuficiente

