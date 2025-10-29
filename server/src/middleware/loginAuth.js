const jwt = require('jsonwebtoken')

function jwtAuth(req, res, next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({error : 'Unauthorized Access! Please login first.'})
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded

        next()
    }catch(error){
        console.log(error.message)
        return res.status(403).json({error: "Invalid or expired token"});
    }
}

module.exports = {
    jwtAuth
}