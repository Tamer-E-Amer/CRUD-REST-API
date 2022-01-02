import express from 'express';

import { getAllUsers, addUser, searchUser, deleteUser, updateUser } from '../controllers/userController.js';

const router = express.Router();
// get request 
router.get('/', getAllUsers);

// adding user to the database
router.post('/', addUser);

// searching for a user with certain Id
router.get('/:id', searchUser);

// delete the user from the array
router.delete('/:id', deleteUser);

// updating the user
router.patch('/:id', updateUser);
export default router;