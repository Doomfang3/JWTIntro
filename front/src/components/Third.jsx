import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

const Third = () => {
  const { count } = useContext(CountContext)

  return <>{count}</>
}

export default Third
