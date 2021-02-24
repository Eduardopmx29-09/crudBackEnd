const Citas = require("../models/Citas")

exports.CrearCita= async (req,res)=>{
    
    try{
        ///creamos nuestra cita
        cita= new Citas(req.body);
        await cita.save();
        res.send(cita);
    }catch(error){
        console.log(error)
        res.status(500).send('hubo un error')
    }
}

exports.ObtenerCitas =async (req,res)=>{
    try{
        const cita = await Citas.find();
        res.json(cita);
    }catch(error){
        console.log(error)
        res.status(500).send('hubo un error')
    }
}


exports.ActualizarCita =async (req,res)=>{
    try{
        const {color,descripcion,entrada,salida,titulo} =req.body;
        let cita =await Citas.findById(req.params.id);
        if(!cita){
            res.status(404).json({msg:'no existe la cita'})
        }
        cita.color=color;
        cita.descripcion=descripcion;
        cita.entrada=entrada;
        cita.salida=salida;
        cita.titulo=titulo;

        cita=await Citas.findByIdAndUpdate({_id: req.params.id},cita,{new:true})
        res.json(cita);
    }catch(error){
        console.log(error)
        res.status(500).send('hubo un error')
    }
}

exports.Obtenercita = async (req,res)=>{
    try{
        
        let cita =await Citas.findById(req.params.id);
        if(!cita){
            res.status(404).json({msg:'no existe la cita'})
        }
        
        res.json(cita);
    }catch(error){
        console.log(error)
        res.status(500).send('hubo un error')
    }
}

exports.EliminarCita = async (req,res)=>{
    try{
        
        let cita =await Citas.findById(req.params.id);
        if(!cita){
            res.status(404).json({msg:'no existe la cita'})
        }
            await Citas.findByIdAndRemove({_id:req.params.id})
        res.json({msg:'la cita se elimino correctamente'});
    }catch(error){
        console.log(error)
        res.status(500).send('hubo un error')
    }
}