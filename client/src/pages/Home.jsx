import React from 'react'
import NavBar from '../components/NavBar'
import Annocement from '../components/Annocement'
import ImageCaurosel from '../components/ImageCaurosel'
import ProductCards from '../components/ProductCards'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
         <Annocement/>
         <NavBar/>
         <ImageCaurosel/>
         <ProductCards/>
         <Footer/>
    </div>
   
  )
}

export default Home
