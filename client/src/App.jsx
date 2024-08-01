import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import "./App.css"
import { useSelector } from 'react-redux'
import useFetchAuthUser from './hooks/useFetchAuthUser'
import PageLoader from './components/PageLoader'


const App = () => {
  const { user, pageLoading } = useSelector(state => state.app)

  useFetchAuthUser()

  if (pageLoading) {
    return <PageLoader />
  }

  return (
    <>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
