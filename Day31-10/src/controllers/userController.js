const express = require('express')
const User = require('../models/user')
exports.getAllUser = (req,res)=>{
    User.getAll((err, result)=>{
        if(err) return res.status(500).json({err:err});
        res.status(200).json(result)
    })
}
exports.createUser =(req,res)=>{
    const{ name,  email, mobile, password} = req.body;
    User.create(name, email,mobile,password, (err,result) => {
        if(err) return res.status(500).json({error : err});
        res.status(201).json({message: 'User created succesfully'})
    })
}
exports.updateUser = (req,res) => {
    const {id} = req.params;
    const { name, email, mobile , password } = req.body;
    User.update(id, name,email, mobile , password ,(err, result)=> {
        if(err) return res.status(500).json({error : err});
        res.status(200).json({message :"user updated succesfully"})
    })
}
exports.deleteUser = (req , res) => {
    const {id} = req.params
    User.delete(id,(err,result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'User deleted successfully' })
    })
}