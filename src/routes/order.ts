import { Router } from 'express';
import { getItems } from '../controllers/order';
import { checkJwt } from '../middleware/session';
/**
 * Solo pueden acceder a esta ruta los usuarios autenticados JWT válido
 */

const router = Router();

router.get('/', checkJwt, getItems);

export { router };