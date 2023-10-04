import React from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Routers from '../../routes/Routers'

const Layout = () => {
  return <>
  <Header/>
  <Routers/>
  <Footer/>
  </>
}

export default Layout