const mongoose =require('mongoose');
const citaSchema =mongoose.Schema({

color:{type:String,require:true},
descripcion:{type:String,require:true},
entrada:{type:Date,require:true},
salida:{type:Date,require:true },
titulo:{type:String,require:true}

});

module.exports =mongoose.model('Cita',citaSchema)