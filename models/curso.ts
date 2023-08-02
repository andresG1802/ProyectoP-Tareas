import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';

const Curso = db.define('Curso',{
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
       type:DataTypes.TEXT 
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
},
{
    //Para que corra el modelo 
    timestamps:false
}
);

export default Curso;