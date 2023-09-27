const Sequelize=require("sequelize");
const database=require('./db')

const Produto=database.define('produto',{
    id:{
        type:Sequelize.INTEGER,
        autoInclement:true,
        allwNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING(150),
        allwNull:false
    },
    preco:{
        type:Sequelize.DECIMAL,
        descricao:Sequelize.s=String
    }
});
module.export=Produto;
    

    


