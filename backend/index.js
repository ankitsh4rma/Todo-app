const express=require("express"); 
const { createTodo, updateTodo } = require("./type");
const todo = require("./db");
const {Boolean} = require("zod")
const cors = require("cors");
// const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors());
// app.use(cors());
// title string
//description string
app.post("/todo", async function(req,res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad)
    if(!parsePayLoad.success){
        res.status(411).json({
            message:"you sent wrong input"
        })
        return;
    }
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed: false
    })
    res.json({
        message:"todo created"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
    })
    

app.put("/completed",async function(req,res){
     const updatePayload=req.body;
     const parseupdatePayload = updateTodo.safeParse(updatePayload)
     if(!parseupdatePayload.success){
        res.status(411).json({
            message:" you send wrong input"
        })
        return;
     }
    await todo.updateOne({
        _id:req.body.id
        },
        {completed:true})
    res.json({
        message:"Todo marked as Done"
    })
        
})
app.listen(3000,()=>{
    console.log(" its working")
})