import React from 'react'
import Header from './header'
import Footer from './footer'

const index = ({children}) => {
  return (
    <div>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}

export default index