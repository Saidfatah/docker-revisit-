const express = require('express')
const app = express()

const posts =[
    {
        title:'post 1',
        body :' post 1 body'
    },
    {
        title:'post 2',
        body :' post 2 body'
    },
    {
        title:'post 3',
        body :' post 3 body'
    },
    {
        title:'post 4',
        body :' post 4 body'
    },
]

app.get('/posts',(req,res)=>{

    res.json(posts)
})

app.listen(9090,()=>{
    console.log('listening at 9090')
})


