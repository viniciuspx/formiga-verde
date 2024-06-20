import { Router } from 'express';
import { getMeasurements } from '../controllers/measurementsController';

const router = Router();

// Podemos adicionar mais rotas, temos somente um end-point
router.get('/:deviceId/measurements', getMeasurements);

export default router;
