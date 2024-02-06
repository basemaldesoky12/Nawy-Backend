import http from 'http'
import app from './index'
const port = 8080

const server = http.createServer(app)
server.listen(port , ()=>{
    console.log(`server is listening on port ${port}`)
})