import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './container/Navbar'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import TopArticles from './pages/TopArticles'

const App = () => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top-articles' element={<TopArticles />} />
            <Route path='/favourites' element={<Favourites />} />
        </Routes>
    </div>
  )
}

export default App