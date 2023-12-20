const express = require('express');
const { getUser, getAllUsers, updateUser, deleteUser, login, registerUser } = require('../controllers/userController');
const { auth } = require('../middleware/authenticator');

const userRoute = express.Router();

userRoute.post('/user',registerUser)
userRoute.post('/login',login)
userRoute.get('/users',auth,getAllUsers)
userRoute.get('/user/:id',auth,getUser)
userRoute.put('/user/:id',auth,updateUser)
userRoute.delete('/user/:id',auth,deleteUser)

module.exports=userRoute