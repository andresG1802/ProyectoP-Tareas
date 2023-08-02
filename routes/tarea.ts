import { Router } from "express";
import { deleteTarea, getTarea, getTareas, postTarea, putTarea } from "../controllers/tareas";
import { check } from "express-validator";
import { existeTareaPorId } from "../helpers/db-validator";
import { validarCampos } from "../middlewares/validar-campos";


const router = Router();


router.get('/',getTareas);

router.get('/:id',[
    check('id').custom(existeTareaPorId)
],getTarea);

router.post('/',[
    check('descripcion','debe de tener un descripcion').not().isEmpty(),
    check('fecha_limite','debe de tener una fecha_limite').not().isEmpty(),
    validarCampos
],postTarea);

router.put('/:id',[
    check('id').custom(existeTareaPorId),
    validarCampos
],putTarea);


router.delete('/:id',[
    check('id').custom(existeTareaPorId),
    validarCampos
],deleteTarea);


export default router;