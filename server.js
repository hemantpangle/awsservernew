const express=require ("express")
const app = express()
const path = require('path')
app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
})
app.use(express.static(path.join(__dirname,'public')))

app.listen(5005,'0.0.0.0',()=>{
    console.log("server is started")
})
