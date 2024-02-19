import {Router} from 'express'
import register from '../controller/register.controller.js'
import login from '../controller/login.controller.js'
import { admin } from '../controller/admin controller.js'
import payment from '../controller/payment.controller.js'
import contact from '../controller/contact.controller.js'
const router = Router()
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/admin').post(admin)
router.route('/payment').post(payment)
router.route('/contact').post(contact)
export default router