import { Request , Response } from "express"

import Usuario from "../models/usuario"

export const login = async(req:Request, res:Response)=>{
    
    const {correo,password} = req.body;
    
    try{
        
        const usuario = await Usuario.findOne({
            where:{
                correo:correo,
                password:password,
                estado:true
            }
        });
        
        if(!usuario)
        {
            return res.status(400).json({
                msg:' El correo o la contraseña no son validos'
            });
        }

        return res.json(usuario);

    }
    catch (error){
        console.log(error);
        
         res.status(500).json({
            msg:'Hable con el administrador'
        });
    }
}