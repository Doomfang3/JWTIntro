const { expressjwt: jwt } = require('express-jwt')

// Instantiate the JWT token validation middleware
const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'payload',
  getToken: getTokenFromHeaders,
})

// Function used to extracts the JWT token from the request's 'Authorization' Headers
function getTokenFromHeaders(req) {
  // Check if the token is available on the request Headers
  // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc1ODAyNTUsImRhdGEiOnsidXNlciI6eyJ1c2VybmFtZSI6Ikpvc2gifX0sImlhdCI6MTY3NzU3NjY1NX0.9LE1zfnTKd3wM2N_TqtAXzSUgaBgfdI8x-xPS2p2c-g'
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    // Get the encoded token string and return it
    const token = req.headers.authorization.split(' ')[1]
    return token
  }

  return null
}

// Export the middleware so that we can use it to create a protected routes
module.exports = {
  isAuthenticated,
}
