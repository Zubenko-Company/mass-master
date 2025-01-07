import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Exercises from './pages/exercises/Exercises.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './pages/login/Login.js';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthProvider } from './components/context/AuthContext.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/" element={<Exercises />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
