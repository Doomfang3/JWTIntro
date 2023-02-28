const isAdmin = (req, res, next) => {
  if (req.payload.data.user.role === 'ADMIN') {
    next()
  }
  res.status(403).json({ message: 'Admins only' })
}

module.exports = {
  isAdmin,
}
