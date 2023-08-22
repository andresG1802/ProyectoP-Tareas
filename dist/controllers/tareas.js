"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarea = exports.putTarea = exports.postTarea = exports.getTarea = exports.getTareas = void 0;
const tarea_1 = __importDefault(require("../models/tarea"));
const getTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tareas = yield tarea_1.default.findAll();
    res.json({ tareas });
});
exports.getTareas = getTareas;
const getTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield tarea_1.default.findByPk(id);
    if (tarea) {
        res.json(tarea);
    }
    else {
        res.status(404).json({
            msg: `No existe un tarea con el id ${id}`
        });
    }
});
exports.getTarea = getTarea;
const postTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    //Destructurar al body 
    const { descripcion, fecha_limite, estado } = body;
    const tareaBody = {
        usuario_id: 1,
        descripcion,
        fecha_limite,
        completada: false,
        curso_id: 1,
        estado
    };
    try {
        const tarea = tarea_1.default.build(tareaBody);
        yield tarea.save();
        res.json(tarea);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTarea = postTarea;
const putTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const { descripcion, fecha_limite, completada, estado } = body;
    const tareaBody = {
        usuario_id: 1,
        descripcion,
        fecha_limite,
        completada,
        curso_id: 1,
        estado
    };
    try {
        const tarea = yield tarea_1.default.findByPk(id);
        if (!tarea) {
            return res.status(404).json({
                msg: `No existe una tarea con el id ${id}`
            });
        }
        yield tarea.update(tareaBody);
        res.json(tarea);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTarea = putTarea;
const deleteTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield tarea_1.default.findByPk(id);
    if (!tarea) {
        return res.status(404).json({
            msg: 'No existe una tarea con el id' + id
        });
    }
    yield tarea.update({ estado: false });
    res.json(tarea);
});
exports.deleteTarea = deleteTarea;
