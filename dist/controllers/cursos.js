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
exports.deleteCurso = exports.putCurso = exports.postCurso = exports.getCurso = exports.getCursos = void 0;
const curso_1 = __importDefault(require("../models/curso"));
const getCursos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cursos = yield curso_1.default.findAll();
    res.json({ cursos });
});
exports.getCursos = getCursos;
const getCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const curso = yield curso_1.default.findByPk(id);
    if (curso) {
        res.json(curso);
    }
    else {
        res.status(404).json({
            msg: `No existe un curso con el id ${id}`
        });
    }
});
exports.getCurso = getCurso;
const postCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const curso = curso_1.default.build(body);
        yield curso.save();
        res.json(curso);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postCurso = postCurso;
const putCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const curso = yield curso_1.default.findByPk(id);
        if (!curso) {
            return res.status(404).json({
                msg: `No existe un cusro con el id ${id}`
            });
        }
        yield curso.update(body);
        res.json(curso);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCurso = putCurso;
const deleteCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const curso = yield curso_1.default.findByPk(id);
    if (!curso) {
        return res.status(404).json({
            msg: 'No existe un curso con el id' + id
        });
    }
    yield curso.update({ estado: false });
    res.json(curso);
});
exports.deleteCurso = deleteCurso;
