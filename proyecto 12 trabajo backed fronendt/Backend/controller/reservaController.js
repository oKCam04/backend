const ReservaService=require('../services/reservaServices')


class ReservaController{
    
    static async listarReserva(req,res){
        try{
            let lista=await ReservaService.listarReserva();
            res.json(lista);
        }catch(e){
            res.json({error:"error en la petición"})
        }
    }
    static async crearReserva(req,res){
        try{
            let {fechaReserva,lugar,nombreReserva}=req.body;
            let usuario=await ReservaService.crearReservas(fechaReserva,lugar,nombreReserva);
            res.json(usuario);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    static async eliminarReserva(req,res){
        try{
            let {id}=req.params;
            let usuario=await ReservaService.eliminarReserva(id);
            res.json("eliminado correctamente");
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    static async actualizarReserva(req,res){
        try{
            let {id}=req.params;
            let {fechaReserva,lugar,nombreReserva}=req.body;
            let usuario=await ReservaService.actualizarReserva(id,fechaReserva,lugar,nombreReserva);
            res.json(req.body);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
}

module.exports=ReservaController;