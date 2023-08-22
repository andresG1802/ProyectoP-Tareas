"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuarios_1 = require("../controllers/usuarios");
const validar_campos_1 = require("../middlewares/validar-campos");
const db_validator_1 = require("../helpers/db-validator");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuarios);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeUsuarioPorId)
], usuarios_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('correo', 'Debe de tener un correo').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña debe de ser mas de 6 letras').isLength({ min: 6 }),
    validar_campos_1.validarCampos
], usuarios_1.postUsuario);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeUsuarioPorId),
    validar_campos_1.validarCampos
], usuarios_1.putUsuario);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeUsuarioPorId),
    validar_campos_1.validarCampos
], usuarios_1.deleteUsuario);
exports.default = router;
