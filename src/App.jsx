import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
<<<<<<< HEAD
import News from './pages/News/News'
=======
>>>>>>> 4f44149fb8c8e88bd8d9c501b65ebb4960df52e8
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/coin/:coinId' element={<Coin/>}/>
<<<<<<< HEAD
          <Route path="/news" element={<News/>}/>
=======
>>>>>>> 4f44149fb8c8e88bd8d9c501b65ebb4960df52e8
      </Routes>
      <Footer/>
    </div>
  )
}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> 4f44149fb8c8e88bd8d9c501b65ebb4960df52e8
