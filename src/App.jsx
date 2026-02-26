import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '@/Home.jsx'
import NotFound from '@/NotFound.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="*" element= {<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
