"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Curso = connection_1.default.define('Curso', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    //Para que corra el modelo 
    timestamps: false
});
exports.default = Curso;
