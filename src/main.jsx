import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Forum from './Pages/Forum.jsx'
import Courses from './Pages/Courses.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <App/>
    </BrowserRouter> 
  </React.StrictMode>,
)




