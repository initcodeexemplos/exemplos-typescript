import express from 'express'
import ApiCalculadora from '../api/calculadora';

const router = express.Router();

const apiCalculadora = new ApiCalculadora()

router.post('/somar', apiCalculadora.apiSomar);
router.post('/sub', apiCalculadora.apiSub);
router.post('/mult', apiCalculadora.apiMult);
router.post('/div', apiCalculadora.apiDiv);

export default router;