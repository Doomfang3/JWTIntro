import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

const Button = () => {
  const { increment } = useContext(CountContext)

  return (
    <button type='button' onClick={increment}>
      Click
    </button>
  )
}

export default Button
