import express from 'express'
import ApiPessoa from '../api/pessoa';

const router = express.Router();

const apiPessoa = new ApiPessoa()

router.get('/pessoas', apiPessoa.FindAll);
router.get('/pessoa/:id', apiPessoa.FindById);
router.post('/pessoa', apiPessoa.Create);
router.put('/pessoa/:id', apiPessoa.Update);
router.delete('/pessoa/:id', apiPessoa.Delete);

export default router;