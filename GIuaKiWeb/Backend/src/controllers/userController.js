const User = require('../models/userModel')

exports.taotaikhoan = async (req,res) => {
    const {username , password} = req.body
    try { const xacThuc = await User.findOne({username});
    if(xacThuc){
        return res.status(400).json({message:"User này đã được đăng kí"})
    }
    const newUser = new User({username,password})
        await newUser.save()
        res.status(201).json({ message: 'Đăng ký thành công' });
    }catch(error){ res.status(500).json({ message: 'Lỗi dang ki', error });}
}
exports.dangnhap = async(req, res) =>{
    const {username, password} = req.body
    try{
        const user =await User.findOne({username});
        if(!user){
            return res.status(400).json({ message: 'Sai tên đăng nhập hoặc mật khẩu' });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: 'Sai tên đăng nhập hoặc mật khẩu' });
        }
        res.status(200).json({ message: 'Đăng nhập thành công', userId: user._id });
    } catch (error) {
        res.status(500).json({ message: 'Loi dang nhap ', error });}
}