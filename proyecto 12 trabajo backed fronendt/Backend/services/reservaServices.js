const {Reserva}=require('../models')

class ReservaServices{
    static async listarReserva(){
        try{
            return await Reserva.findAll()
        }catch(e){
            console.log("Error en services")
        }
    }
    static async crearReservas(fechaReserva,lugar,nombreReserva){
        try{
            return await Reserva.create({fechaReserva,lugar,nombreReserva})
        }catch(e){
            console.log("Error en services")
        }

    }
    static async eliminarReserva(id){
        try{
            return await Reserva.destroy({where:{id}})
        }catch(e){
            console.log("Error en services")
        }
    }
    static async actualizarReserva(id,fechaReserva,lugar,nombreReserva){
        try{
            return await Reserva.update({fechaReserva,lugar,nombreReserva},{where:{id}})
        }catch(e){
            console.log("Error en services")
        }
    }
    
}


module.exports=ReservaServices;