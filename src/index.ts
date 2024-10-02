import express from "express";

const app = express();

app.get('/', (req, res) => {
    // res.send("<h1>Hello World</h1>");
    res.status(401).json({message: 'Hello'});
})

app.listen(8000, () => {
    console.log('The app is running on http://localhost:8000')
})