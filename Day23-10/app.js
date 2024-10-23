import express from 'express'
const app = express();
const port = 4000;

app.use(express.json());
app.listen(port, ()=> {
    console.log(` Server is running on port : ${port}`)
})

app.get('/users',(req,res)=>{
    res.json([
        {id : 1, name : 'John dow'},
        {id: 2 , name: "'nguyenduy"}
    ])
})
app.post('/users',(req, res)=>{
    const newUser = req.body;
    res.status(201).json({message : ' Nguoi dung moi duoc tao',user: newUser})
})
app.put('/user/:id', (req,res)=>{
    const userId = req.params.id;
    const updatedData = req.body;
    res.json({ message: `Nguoi dung cosID ${userId} da duoc update`,updatedData})
})
app.delete('/user/:id', (req, res)=> {
    const userId = req.params.id;
    res.json({message: ` Nguoi dung co Id ${userId} da bi xoa`})
})