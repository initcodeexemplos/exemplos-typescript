import express from 'express'
import ApiUsuario from '../api/usuario';

const router = express.Router();

const apiUsuario = new ApiUsuario()

router.get('/usuarios', apiUsuario.FindAll);
router.get('/usuario/:id', apiUsuario.FindById);
router.post('/usuario', apiUsuario.Create);
router.put('/usuario/:id', apiUsuario.Update);
router.delete('/usuario/:id', apiUsuario.Delete);

export default router;