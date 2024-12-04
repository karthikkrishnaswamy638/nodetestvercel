import http from 'http'


http.createServer((req,res)=>{
    res.end("data")
}).listen(3000,()=>{
    console.log('Server started');
    
})