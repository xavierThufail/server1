require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/', (req,res) => {
  res.send('hello world')
})

app.listen(port, console.log('connected to port: ' + port))