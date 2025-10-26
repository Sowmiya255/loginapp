import express from 'express';
import { loginValidation, signupValidation } from '../Middlewares/Authvalidation.js';
import { signup,login} from '../controllers/Authcontroller.js';

const router = express.Router();

router.post('/login', loginValidation, login)
router.post('/signup', signupValidation, signup);

export default router;
