const {User,sequelize}=require('../models/index.js')


const createUser=async (req,res)=>{
  try{
    let data=req.body
    let result=await User.create(data)
    if(result)
        {
            return res.status(200).json({success:true,message:"record created successfully",data:result})
        }
        else{
            return res.status(400).json({success:false,message:"Operation Failed"})

        }


    }
    catch(e)
    {
        console.log(e)
        return res.status(400).json({success:false,message:e.message})

    }


}

const getUser=async (req,res)=>{
    try{
      let {id}=req.params
      let result=await User.findOne({
        where:{
            id:id
        }
      })
      if(result)
          {
              return res.status(200).json({success:true,message:"record fetched successfully",data:result})
          }
          else{
              return res.status(400).json({success:false,message:"Operation Failed"})
  
          }
  
  
      }
      catch(e)
      {
          console.log(e)
          return res.status(400).json({success:false,message:e.message})
  
      }
  
  
  }

module.exports={createUser,getUser}