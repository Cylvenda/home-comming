import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Head from '../../Components/Head/Head'
import Boxes from '../../Components/Boxes/Boxes'
import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer'
import Doing from '../../Components/Doing/Doing'
import Contact from '../../Components/Contact/Contact'

const Home = () => {


  return (
    <>
      <Head />
      <Boxes />
      <About />
      <Doing />
      <Contact />
      <Footer />
    </>
  )
}

export default Home