import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
// empty array that wiil hold the users objects
let users = [];
// get request 
router.get('/', (req, res) => {
    // res.send("Hello from get request of router");
    res.send(users);
});

// adding user to the database
router.post('/', (req, res) => {
    const user = req.body;
    // create a new UUID , destruct the user object and add this usier id to the user object
    users.push({...user, userId: uuidv4() });
    console.log(`user of name ${user.userName} has been added`)
    res.send(`user of name ${user.userName} has been added`);
});
// searching for a user with certain Id
router.get('/:id', (req, res) => {
    // get the id parameter
    const { id } = req.params;
    // find the user where the userId === id
    const searchedUser = users.find((user) => user.userId === id);
    res.send(`You have searched about:${searchedUser}`);

});
// delete the user from the array

router.delete('/:id', (req, res) => {
    //get the id param
    const { id } = req.params;
    // remove the user with this id from teh users array
    users = users.filter((user) => user.userId !== id); // it willbe removed when the query resturns false
    res.send(`user of user id = ${id} has been deleted`);
});
export default router;