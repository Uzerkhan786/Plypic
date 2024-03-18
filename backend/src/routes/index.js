import express from 'express';
export const routes = express.Router();
import { router } from './v1/index.js';
routes.use('/v1', router);
