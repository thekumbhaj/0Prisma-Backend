const cookieParser = require('cookie-parser')
const express  = require ('express')

require('dotenv'). config()
const app = express ()
//need to add few more feature here in class

//regular middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie middleware 
app.use(cookieParser())

const userRouter = require('./routes/userRoutes')

app.use('/api' , userRouter)

app.get('/', (req, res)=>{
   res.send("hey it a building prisma")
})
app.listen(3002, ()=> {
    console.log('server is runniniggg in port 3002')
})