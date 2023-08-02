import { Router } from 'express';
import {check} from 'express-validator';
import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios';
import { validarCampos } from '../middlewares/validar-campos';
import { existeUsuarioPorId } from '../helpers/db-validator';

const router = Router();

router.get('/',getUsuarios );
router.get('/:id',[
    check('id').custom(existeUsuarioPorId)
],    getUsuario );
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('correo','Debe de tener un correo').not().isEmpty(),
    check('password','La contraseña debe de ser mas de 6 letras').isLength({min:6}),
    validarCampos
],postUsuario );
router.put('/:id',[
    check('id').custom(existeUsuarioPorId),
    validarCampos
],    putUsuario );
router.delete('/:id',[
    check('id').custom(existeUsuarioPorId),
    validarCampos
], deleteUsuario );

export default router;