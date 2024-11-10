const express = require('express');
const router = express.Router();
const Usercontroller = require('../controllers/userController')

router.post('/dangki',Usercontroller.taotaikhoan)
router.post('/dangnhap',Usercontroller.dangnhap)
module.exports = router;