import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
},
{
    //Para que corra el modelo 
    timestamps:false
});


export default Usuario;