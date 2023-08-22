"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const curso_1 = __importDefault(require("./curso"));
const Tarea = connection_1.default.define('Tarea', {
    usuario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_1.default,
            key: 'id',
        },
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT
    },
    fecha_limite: {
        type: sequelize_1.DataTypes.DATE
    },
    completada: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    curso_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: curso_1.default,
            key: 'id'
        }
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    //Para que corra el modelo 
    timestamps: false
});
exports.default = Tarea;
