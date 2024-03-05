const express = require('express');
const app = express();

const db = require("./db");
db.connect();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const likedRouter = require('./liked.route');
app.use('/liked', likedRouter);

const PORT = process.env.PORT || 2500;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}!`));
