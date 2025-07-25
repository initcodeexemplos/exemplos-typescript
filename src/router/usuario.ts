import express from 'express'
import ApiUsuario from '../api/usuario';
import logged from '../middleware/auth';

const router = express.Router();

const apiUsuario = new ApiUsuario()

router.post('/usuario', apiUsuario.Create);
router.post('/login', apiUsuario.Login);

router.get('/usuarios', logged, apiUsuario.FindAll);
router.get('/usuario/:id', logged, apiUsuario.FindById);
router.put('/usuario/:id', logged, apiUsuario.Update);
router.delete('/usuario/:id', logged, apiUsuario.Delete);


export default router;