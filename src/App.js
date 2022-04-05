import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import PublicRoute from './RouterGuard/PublicRoute'
import PrivateRoute from './RouterGuard/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>}
        />
        <Route path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App