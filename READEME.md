# Node-Express.js REST API
CRUD Application using Node.js and Express.js 
## About the Project
In this Application I Utilize Node.js and express.js to build a REST API to  make CRUD operation for users that ustilise certain application

## How to use the application and test it
- Install Postman to add users as JSON object
- Run this command **node server.js** . It runs on **Port:8000**
- In browser: preferable **Chrome or firefox**, hit the address **127.0.0.1:8000/** the application will run.

## For testing Data
# get all users 
`127.0.0.1:8000/user/` whether in browser or in postman with get request 
# post user in postman
`127.0.0.1:8000/user/` and select the post request then add like the following
`{
    "userName": "Makck pullman",
    "position": "Senior web developer",
    "age": 41
}`
# get certain user in postman
`127.0.0.1:8000/user/` and put a certain user id after `/`
# delete certain user in postman
`127.0.0.1:8000/user/` and put a certain user id after `/` and select the request type of delete
# Updating certain user in postman
`127.0.0.1:8000/user/` and put a certain user id after `/` and select the request type of patch
and set the body of row option as the follow
`{
    "userName": "Johne" 
}`
this will update only the name
**Important thing:** when you type the JSON object in the postman be sure that you put it in the body section of **row** and **JSON** selection