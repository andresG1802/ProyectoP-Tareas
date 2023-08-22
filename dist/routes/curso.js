"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursos_1 = require("../controllers/cursos");
const db_validator_1 = require("../helpers/db-validator");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', cursos_1.getCursos);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeCursoPorId)
], cursos_1.getCurso);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'Debe de tener un nombre').not().isEmpty(),
    (0, express_validator_1.check)('descripcion', 'Debe de tener una descripcion').not().isEmpty(),
    validar_campos_1.validarCampos
], cursos_1.postCurso);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeCursoPorId),
    validar_campos_1.validarCampos
], cursos_1.putCurso);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeCursoPorId),
    validar_campos_1.validarCampos
], cursos_1.deleteCurso);
exports.default = router;
