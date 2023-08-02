import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';
import Curso from './curso';

const Tarea = db.define('Tarea',{
    usuario_id:{
        type: DataTypes.INTEGER,
        references:{
            model:Usuario,
            key:'id',
        },
    },
    descripcion:{
       type:DataTypes.TEXT 
    },
    fecha_limite:{
        type:DataTypes.DATE
    },
    completada:{
        type:DataTypes.BOOLEAN
    },
    curso_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Curso,
            key:'id'
        }
    },
    estado:{
        type:DataTypes.BOOLEAN
    },
},
{
    //Para que corra el modelo 
    timestamps:false
}
);

export default Tarea;