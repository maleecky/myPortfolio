import React, { useEffect, useState } from 'react'
import Home from './Components/Home/Home'
import Jobs from './Components/Jobs/Jobs'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Menu from './Components/Menu/Menu'

function App() {
  const [loading,setLoading] = useState(true)
  let loader = document.getElementById('loader')


  useEffect(()=>{
    setTimeout(()=>{
      loader.style.display = 'none'
      document.body.style.overflowY = 'visible'
    },2000)
    setLoading(false)
  },[])
  return (
    !loading && (
      <>
      <a id="skip-nav" className="screenreader-text" href="#root">
        Skip to Content
      </a>
      <Header />
      <Aside />
      <Menu />
      <div className="cs-center">
        <Home />
        <Jobs />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
    )
    
  )
}

export default App
