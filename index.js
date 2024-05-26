const express=require('express')
const dotenv=require('dotenv').config()
const db=require('./models/index')
const userRouter=require('./routes/userRoutes')
const cors=require('cors')




const PORT=process.env.PORT || 4000

const app=express()
app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)

db.sequelize.sync()
.then(()=>{
    console.log(`Database connected successfully`)

})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT,(err)=>{
    if(err)
        {
            console.log(err.message)
        }
        console.log(`server is running on port ${PORT}`)
})
