import { createContext, useEffect, useState } from 'react'

export const SessionContext = createContext()

const SessionContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState()

  const verifyToken = async jwt => {
    try {
      await fetch('http://localhost:5006/auth/verify', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      setToken(jwt)
      setIsAuthenticated(true)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      window.localStorage.removeItem('authToken')
    }
  }

  useEffect(() => {
    const localToken = window.localStorage.getItem('authToken')
    verifyToken(localToken)
  }, [])

  useEffect(() => {
    console.log(token)
    if (token) {
      window.localStorage.setItem('authToken', token)
      if (!isAuthenticated) {
        setIsAuthenticated(true)
      }
    }
  }, [token])

  return (
    <SessionContext.Provider value={{ setToken, isAuthenticated, isLoading }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider
