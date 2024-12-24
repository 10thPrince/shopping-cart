import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct'
import DeleteProduct from './pages/DeleteProduct'
import ShowProduct from './pages/ShowProduct'



function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/create' element={<CreateProduct />} />
        <Route path='/products/edit/:id' element={<EditProduct />} />
        <Route path='/products/delete/:id' element={<DeleteProduct />} />
        <Route path='/products/details/:id' element={<ShowProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
