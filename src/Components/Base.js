import React from 'react'
import Navbarcomp from './Navbarcomp'
import Footer from './Footer'


const Base = ({children}) => {
  return (
   
   <>
   <Navbarcomp></Navbarcomp>
   {children}
   <Footer></Footer>

   </>
  )
}

export default Base