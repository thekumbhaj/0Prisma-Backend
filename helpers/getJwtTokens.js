const jwt = require('jsonwebtoken')

const getJwtToken = (userid) => {
    return jwt.sign({userid : userid} , process.env.JWT_SECRET, {expiresIn: '1 day'})
}

module.exports = getJwtToken;