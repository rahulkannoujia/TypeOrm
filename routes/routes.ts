import express from 'express'
import {homedetail} from '../controller/user'
const router=express.Router();
router.get('/home',homedetail)
export{
    router
}