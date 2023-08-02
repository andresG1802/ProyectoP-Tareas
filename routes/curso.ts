import { Router } from "express";
import { deleteCurso, getCurso, getCursos, postCurso, putCurso } from "../controllers/cursos";
import { existeCursoPorId } from "../helpers/db-validator";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";


const router = Router();


router.get('/',getCursos);
router.get('/:id',[
    check('id').custom(existeCursoPorId)
], getCurso);
router.post('/',[
    check('nombre','Debe de tener un nombre').not().isEmpty(),
    check('descripcion','Debe de tener una descripcion').not().isEmpty(),
    validarCampos
],postCurso);

router.put('/:id',[
    check('id').custom(existeCursoPorId),
    validarCampos
], putCurso);

router.delete('/:id',[
    check('id').custom(existeCursoPorId),
    validarCampos
],deleteCurso)

export default router;

