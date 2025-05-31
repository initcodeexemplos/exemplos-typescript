import express from 'express'
import { apiDiv, apiMult, apiSomar, apiSub } from '../api/calculadora';

const router = express.Router();

router.post('/somar', apiSomar);
router.post('/sub', apiSub);
router.post('/mult', apiMult);
router.post('/div', apiDiv);

export default router;