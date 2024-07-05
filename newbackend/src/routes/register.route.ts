import { Router } from 'express'
const router = Router();

import { createUser,getUser,createActivationToken,getActivationToken,checkActivation } from '../controllers/user.controller';

router.post('/create-user', createUser);

router.get('/get-users', getUser);

router.post('/create-activation-token', createActivationToken);

router.get('/get-activation-token/:email', getActivationToken);

router.get('/activation-account/:token/:email', checkActivation);

export default router;