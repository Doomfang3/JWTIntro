import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'

const SignupPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    console.log({ username, password })
    const response = await fetch('http://localhost:5006/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    if (response.status === 201) {
      navigate('/login')
    }
  }

  return (
    <>
      <h1>Signup</h1>
      <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default SignupPage
