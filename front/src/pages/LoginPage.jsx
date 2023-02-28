import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import { SessionContext } from '../contexts/SessionContext'

const LoginPage = () => {
  const navigate = useNavigate()

  const { setToken } = useContext(SessionContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    console.log({ username, password })
    const response = await fetch('http://localhost:5006/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    const parsed = await response.json()
    console.log(parsed)
    setToken(parsed.token)
    navigate('/profile')
  }

  return (
    <>
      <h1>Login</h1>
      <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        isLogin
      />
    </>
  )
}

export default LoginPage
