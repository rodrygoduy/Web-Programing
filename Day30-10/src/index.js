const  express = require('express');
const todosRouter = require('./routers/todos')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use('/todos', todosRouter);

const PORT = 3000; app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })

