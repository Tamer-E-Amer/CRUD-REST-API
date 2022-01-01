//requiring Packages
import express from 'express';
import bodyParser from 'body-parser'; // enable app to take in the PostRequest bodies
// importing router
import userRouter from './routes/userRoutes.js';
// instantiate the app
const app = express();

// using packages in the application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // when extended : true we cna post object for test in postman
//using router
app.use('/user', userRouter);

// configuring Port server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`The server is running on the Port: http://127.0.0.1:${PORT}/`);
});

// Routes
app.get('/', (req, res) => {
    res.send("Hi from the express server");
});