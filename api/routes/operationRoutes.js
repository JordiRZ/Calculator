import express from 'express';
import { calculateOperationHandler } from '../handlers/operationHandlers.ts';

const router = express.Router();

router.post('/calculate', calculateOperationHandler);

export default router;