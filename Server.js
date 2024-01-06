const uri="mongodb+srv://achuthkumartelugu123:95WQxIuhThbvy7a9@cluster0.9olya22.mongodb.net/?retryWrites=true&w=majority"
const express=require('express')

const app=express() //by creating object ,we create a server
app.use(express.json())//to let node server know that data from frontend is json format

//import mongoose
const mongoose=require('mongoose')
//connect with db
mongoose.connect(uri)
//get connection
const db=mongoose.connection; 
//check whether connection is success
db.once('open',()=>{
    console.log('connection is sucessful')
})

db.on('error',(error)=>{
    console.log(error)
})

app.get('/',(req,res)=>{
    // res.send('hello user')
    res.status(200).json({message:'hello ,welcome to mother earth'})
})

const Router=require('./routes/user')
app.use('/users',Router)
app.listen(3000)
console.log('server is listening')