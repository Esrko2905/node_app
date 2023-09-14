const express = require('express');
const app = express();


app.get("/", (req, res) => { return res.status(200).json({ message: 'Hello Bemeli' }) });


const port = 3000;
app.listen(port, () => { });