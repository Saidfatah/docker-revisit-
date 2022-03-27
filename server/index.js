const express = require('express')
const app = express()

const dockerCommands =[
    {
        title:'Build command',
        body :' docker build image-tag Dockerfile-path'
    },
    {
        title:'Run command',
        body :' docker run --name container-name image-rag'
    },
    {
        title:'Run with port mapping',
        body :'docker run --name container-name -p PORT_IN_HOST:PORT_IN_CONTAINER image-tag'
    },
    {
        title:'Run with port mapping and volumes',
        body :'docker run --name container-name -p PORT_IN_HOST:PORT_IN_CONTAINER -v abs-path-in-host:path-folder-in-container image-tag'
    },
]

app.get('/commands',(req,res)=>{

    res.json(dockerCommands)
})

app.listen(9090,()=>{
    console.log('listening at 9090')
})


