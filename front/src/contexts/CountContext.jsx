import { createContext, useState } from 'react'

export const CountContext = createContext()

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return <CountContext.Provider value={{ count, increment }}>{children}</CountContext.Provider>
}

export default CountContextProvider
