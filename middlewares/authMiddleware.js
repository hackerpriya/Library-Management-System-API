const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = (req,res,next)=>{
    const token = req.header('Authorization')
    if(!token) return res.status(401).json({
        message:'Access Denied'
    })

    try{
        const decoded = jwt.verify(token.split(' ')[1],process.env.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch(err){
        res.status(400).json({
            message: 'Invalid Token'
        })
    }
}

const adminMiddleware = (req, res, next)=>{
    if(req.user.role !== 'admin') return res.status(403).json({
        message: "Access Denied"
    })
    next()
}

module.exports = {authMiddleware,adminMiddleware}