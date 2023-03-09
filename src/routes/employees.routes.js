import {Router} from 'express';
import { getEmployees, createEmployee, updateloyees, deleteEmployees, getEmployee } from '../controllers/employess.controller.js';

const router = Router();

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee)

router.patch('/employees/:id', updateloyees)

router.delete('/employees/:id', deleteEmployees)

export default router;