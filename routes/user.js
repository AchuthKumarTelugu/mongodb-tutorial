
const express=require('express')
const Router=express.Router()
//to get all users data
Router.get('/',(req,res)=>{
    console.log(req.query)
    res.json({message:'welcome to user section, peeps'})
})
Router.get('/achuthkumar',(req,res)=>{
    res.json({message:'authenticated user arrived'})
})
//to get specific user data
Router.get('/:id',(req,res)=>{
    res.json({message:'single user acessed succesfully'})
})
//to create user
Router.post('/new',(req,res)=>{
    //created user in db
    console.log(req.body)//printing data that is posted
    res.status(200).json({message:'new user created sucessfully'})
})
//to update user
Router.put('/update/:id',(req,res)=>{
    //update user in db
    console.log(req.params)
    console.log(req.body)//printing data that is updated
    res.status(200).json({message:'data updated sucessfully'})
})
//to delete user
Router.delete('/delete/:id',(req,res)=>{
    //delete user in db
    console.log(req.params)//to check parameters passed to path
    res.status(200).json({message:'data deleted sucessfully'})
})

module.exports=Router