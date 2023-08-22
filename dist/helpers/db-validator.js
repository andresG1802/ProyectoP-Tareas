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
exports.existeTareaPorId = exports.existeCursoPorId = exports.existeUsuarioPorId = void 0;
const curso_1 = __importDefault(require("../models/curso"));
const tarea_1 = __importDefault(require("../models/tarea"));
const usuario_1 = __importDefault(require("../models/usuario"));
const existeUsuarioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeUsuario = yield usuario_1.default.findByPk(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeUsuarioPorId = existeUsuarioPorId;
const existeCursoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeCurso = yield curso_1.default.findByPk(id);
    if (!existeCurso) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeCursoPorId = existeCursoPorId;
const existeTareaPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeTarea = yield tarea_1.default.findByPk(id);
    if (!existeTarea) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeTareaPorId = existeTareaPorId;
