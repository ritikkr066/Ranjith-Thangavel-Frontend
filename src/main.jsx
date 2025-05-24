import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <div className='mt-16 bg-black'>
       <App />
   </div>
   
  </BrowserRouter>
)
