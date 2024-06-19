import { Router } from 'express';
import { getMeasurements } from '../controllers/measurementsController';

const router = Router();

router.get('/:deviceId/measurements', getMeasurements);

export default router;
