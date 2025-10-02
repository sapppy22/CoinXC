import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import News from './pages/News/News'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/coin/:coinId' element={<Coin/>}/>
          <Route path="/news" element={<News/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;