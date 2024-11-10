const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const bodyParser = require('body-parser');
const cors = require('cors')
const todoRouter = require('./routers/taskRouter')
const userRouter = require('./routers/userRouter')
const app = express();
app.use(bodyParser.json()); 
app.use(cors())

app.use('/api',todoRouter)
app.use('/api/user',userRouter)


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
