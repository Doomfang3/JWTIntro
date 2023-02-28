import { Route, Routes } from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import First from './components/First'
import PrivateRoute from './components/PrivateRoute'
import CountContextProvider from './contexts/CountContext'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path='/count'
          element={
            <>
              <p>Hey</p>
              <CountContextProvider>
                <First />
                <Button />
              </CountContextProvider>
            </>
          }
        />

        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
