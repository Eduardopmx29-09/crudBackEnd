const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

const conectarDB =async ()=>{

    try{
        await mongoose.connect(process.env.DB_mongo,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
            
        })
        console.log("BD conectada")
    }catch(error){
        console.log(error);
        process.exit(1);///detenemos la app
    }

}
module.exports =conectarDB