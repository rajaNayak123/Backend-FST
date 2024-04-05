import express from 'express';
import { findStudent,createStudent,deleteStudent,updateStudent } from '../controller/studentController.mjs';
const router = express.Router();
router.get('/student',findStudent);
router.post('/addstudent', createStudent);
router.delete('/deleteStudent', deleteStudent);
router.post('/updateStudent',updateStudent)
export default router;