const Sequelize= require("sequelize")
const sequelize= new Sequelize('crud','root','admin',{
    dialect:"mysql",
    host:"localhost",
    port:3306,
   
})

sequelize.authenticate()
.then(function(){
    console.log("conectado");
}).catch(function(){
    console.log("nao conectado");

})
module.export=sequelize;