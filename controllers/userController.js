import { v4 as uuidv4 } from 'uuid';

// empty array that wiil hold the users objects
let users = [];

// get all users
export const getAllUsers = (req, res) => {
    // res.send("Hello from get request of router");
    res.send(users);
}

/**
 * @description This function used to add certain user to the users array of objects 
 */
export const addUser = (req, res) => {
    //get teh req body and allign it to a user variable
    const user = req.body;
    // create a new UUID , destruct the user object and add this user id to the user object 
    users.push({...user, userId: uuidv4() });
    console.log(`user of name ${user.userName} has been added`)
    res.send(`user of name ${user.userName} has been added`);
}

/**
 * @description This function used to search for a certain user by its Id 
 */
export const searchUser = (req, res) => {
    // get the id parameter
    const { id } = req.params;
    // find the user where the userId === id
    const searchedUser = users.find((user) => user.userId === id);
    res.send(`You have searched about user of id:${id}`);

}

/**
 * @description This function used to delete certain user by using its Id
 */
export const deleteUser = (req, res) => {
    //get the id param
    const { id } = req.params;
    // remove the user with this id from teh users array
    users = users.filter((user) => user.userId !== id); // it willbe removed when the query resturns false
    res.send(`user of user id = ${id} has been deleted`);
}

/**
 * @description This function used to update certain user using its Id
 */
export const updateUser = (req, res) => {
    // get the id parameter
    const { id } = req.params;
    //get user by the id pramater
    const user = users.find((user) => user.userId === id);
    // destruct the request body
    const { userName, position, age } = req.body;
    // test request.body varables
    for (const key in req.body) {
        if (req.body.hasOwnProperty(key)) user[key] = req.body[key];
    }
    res.send(`User with id: ${id} hasbeen updated`);

}