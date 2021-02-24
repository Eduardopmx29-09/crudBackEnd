/// rutas para citas

const express =require('express');
const router =express.Router();
const citaController=require("../controllers/citasController");

///api/citas

router.post('/',citaController.CrearCita);
router.get('/',citaController.ObtenerCitas);
router.put('/:id',citaController.ActualizarCita);
router.get('/:id',citaController.Obtenercita);
router.delete('/:id',citaController.EliminarCita);
module.exports = router;