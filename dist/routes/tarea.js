"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tareas_1 = require("../controllers/tareas");
const express_validator_1 = require("express-validator");
const db_validator_1 = require("../helpers/db-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', tareas_1.getTareas);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeTareaPorId)
], tareas_1.getTarea);
router.post('/', [
    (0, express_validator_1.check)('descripcion', 'debe de tener un descripcion').not().isEmpty(),
    (0, express_validator_1.check)('fecha_limite', 'debe de tener una fecha_limite').not().isEmpty(),
    validar_campos_1.validarCampos
], tareas_1.postTarea);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeTareaPorId),
    validar_campos_1.validarCampos
], tareas_1.putTarea);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeTareaPorId),
    validar_campos_1.validarCampos
], tareas_1.deleteTarea);
exports.default = router;
