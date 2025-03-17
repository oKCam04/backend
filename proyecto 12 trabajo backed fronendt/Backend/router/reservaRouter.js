const express = require('express');
const router=express.Router();
const ReservaController=require('../controller/reservaController')

router.get("/res",ReservaController.listarReserva)
router.post("/res",ReservaController.crearReserva)
router.put("/res/:id",ReservaController.actualizarReserva)
router.delete("/res/:id",ReservaController.eliminarReserva)





module.exports=router;