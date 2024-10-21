const express = require("express")
const router = express.Router()

// const db = require("../database")
const { checkApiKey } = require("../middleware/checkApiKey.js");
const { getAllUsers, createNewUser , updateUser , deleteUser } = require('../controllers/usersControllers.js');

//GET METHODS
router.get("/users" , checkApiKey , getAllUsers);

//POST METHODS
router.post("/users", checkApiKey , createNewUser);

//PUT METHODS
router.put("/users/:id", checkApiKey , updateUser);

//DELETE METHODS
router.delete("/users/:id", checkApiKey , deleteUser);

module.exports = router