import express from 'express'
import ApiPessoa from '../api/pessoa';

const router = express.Router();

const apiPessoa = new ApiPessoa()

router.get('/pessoas', apiPessoa.FindAll);
router.get('/pessoa/:index', apiPessoa.FindByIndex);
router.post('/pessoa', apiPessoa.Create);
router.put('/pessoa/:index', apiPessoa.Update);
router.delete('/pessoa/:index', apiPessoa.Delete);

export default router;