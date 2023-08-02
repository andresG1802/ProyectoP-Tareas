import { Request, Response } from "express";
import Tarea from "../models/tarea";


export const getTareas = async(req: Request,res: Response)=>{
    const tareas = await Tarea.findAll();

    res.json({tareas});
}

export const getTarea = async(req: Request, res:Response)=>{
    const {id} = req.params;

    const tarea = await Tarea.findByPk(id);

    if(tarea)
    {
        res.json(tarea);
    }
    else{
        res.status(404).json({
            msg:`No existe un tarea con el id ${id}`
        });
    }
}

export const postTarea = async(req:Request,res:Response)=>{
    const {body} = req;

    //Destructurar al body 
    const {descripcion,fecha_limite,estado} = body;

    const tareaBody = {
        usuario_id:1,
        descripcion,
        fecha_limite,
        completada:false,
        curso_id:1,
        estado
    }
    try{
        const tarea = Tarea.build(tareaBody);
        await tarea.save();
        res.json(tarea);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
}

export const putTarea = async(req:Request, res: Response)=>{
    const {id} = req.params;

    const {body} = req;

    const {descripcion,fecha_limite,completada,estado} = body;

    const tareaBody = {
        usuario_id:1,
        descripcion,
        fecha_limite,
        completada,
        curso_id:1,
        estado
    } 

    try{
        const tarea = await Tarea.findByPk(id);
        
        if(!tarea)
        {
            return res.status(404).json({
                msg:`No existe una tarea con el id ${id}`
            });
        }
        await tarea.update(tareaBody);

        res.json(tarea);
    }catch(error)
    {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
}

export const deleteTarea = async(req:Request, res: Response)=>{
    const {id} = req.params;

    const tarea = await Tarea.findByPk(id);

    if(!tarea)
    {
        return res.status(404).json({
            msg:'No existe una tarea con el id'+ id
        });
    }
    await tarea.update({estado:false});

    res.json(tarea);
}