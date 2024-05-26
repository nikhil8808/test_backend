const router=require('express').Router()
const {createUser,getUser}=require('../controllers/userController')


router.post('/',createUser)

router.get('/:id',getUser)


module.exports=router