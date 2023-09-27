const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://mirian_menezes:mirian_menezes@cluster0.ktqwr.mongodb.net/api-carros?retryWrites=true&w=majority",
 { useNewUrlParser: true, useUnifiedTopology: true 
})

.then(()=>{
    console.log('Banco conectado');
})

module.exports