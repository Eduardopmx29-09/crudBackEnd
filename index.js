const express =require('express');
const conectarDB =require('./config/db');
const router = require('./routes/cita');
const cors =require ('cors');

//creamos el servidor 
const app=express();

///conectamos a la bd
conectarDB();
app.use(cors());
app.use(express.json());
//definimos rutas

app.use('/api/citas',require('./routes/cita'));






app.listen(4000,()=>{
    console.log('el servidor esta corriendo perfectamente')
})