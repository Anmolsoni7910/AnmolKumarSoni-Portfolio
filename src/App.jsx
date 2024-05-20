import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import SocialLinkMobile from './Components/SocialLinkMobile'
import About from './Components/About'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import PortfolioNew from './Components/PortfolioNew'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <PortfolioNew/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
      <SocialLinkMobile/>
    </div>
  )
}

export default App