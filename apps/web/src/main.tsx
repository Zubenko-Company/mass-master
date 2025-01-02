import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Exercises from './pages/exercises/Exercises.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/Login.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
