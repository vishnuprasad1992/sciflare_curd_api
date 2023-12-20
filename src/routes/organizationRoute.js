const express = require('express');
const { createOrg, getOrg, getAllOrgs, updateOrg, assignUserToOrg, deleteOrg } = require('../controllers/organizationController');
const { authAdmin } = require('../middleware/authenticator');

const orgRoute = express.Router();

orgRoute.get('/organization',authAdmin,getAllOrgs)
orgRoute.get('/organization/:id',getOrg)
orgRoute.post('/organization',authAdmin,createOrg)
orgRoute.put('/organization/:id',authAdmin,updateOrg)
orgRoute.put('/assign-user/',authAdmin,assignUserToOrg)
orgRoute.delete('/organization/:id',authAdmin,deleteOrg)

module.exports=orgRoute