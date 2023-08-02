import { Request,Response } from "express";
import Curso from "../models/curso";


export const getCursos = async( req: Request, res: Response)=>{
    const cursos = await Curso.findAll();

    res.json({cursos});
}

export const getCurso = async(req: Request, res: Response)=>{
    const {id} = req.params;

    const curso = await Curso.findByPk(id);

    if(curso)
    {
        res.json(curso);
    }
    else{
        res.status(404).json({
            msg:`No existe un curso con el id ${id}`
        });
    }
}

export const postCurso = async(req:Request,res:Response)=>{
    const {body} = req;

    try{
        const curso = Curso.build(body);
        await curso.save();

        res.json(curso);

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
}

export const putCurso = async(req:Request, res: Response)=>{
    const {id} = req.params;
    
    const {body} = req;
    try
    {
        const curso = await Curso.findByPk(id);

        if( !curso)
        {
            
            return res.status(404).json({
                msg:`No existe un cusro con el id ${id}` 
            });
        }
        await curso.update(body);

        res.json(curso);

    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
}

export const deleteCurso = async(req: Request, res: Response)=>{
    const {id} = req.params;


    const curso = await Curso.findByPk(id);

    if(!curso)
    {
        return res.status(404).json({
            msg:'No existe un curso con el id'+ id
        });
    }

    await curso.update({estado:false});

    res.json(curso);
}