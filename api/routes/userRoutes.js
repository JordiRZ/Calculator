import express from 'express';
import { registerUserHandler } from '../handlers/userHandlers.ts';

const router = express.Router();

router.post('/register', registerUserHandler);

export default router;