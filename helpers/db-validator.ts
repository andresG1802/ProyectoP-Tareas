import Curso from "../models/curso";
import Tarea from "../models/tarea";
import Usuario from "../models/usuario"
export const existeUsuarioPorId= async(id: number)=>{

    const existeUsuario = await Usuario.findByPk(id);

    if(!existeUsuario)
    {
        throw new Error(`El id no existe ${ id }`);
    }
}

export const existeCursoPorId = async(id:number)=>{
    const existeCurso = await Curso.findByPk(id);
    if(!existeCurso)
    {
        throw new Error(`El id no existe ${id}`);
    }
}

export const existeTareaPorId = async(id:number)=>{
    const existeTarea = await Tarea.findByPk(id);
    if(!existeTarea)
    {
        throw new Error(`El id no existe ${id}`); 
    }
}
