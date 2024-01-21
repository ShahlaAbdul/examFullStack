import React from 'react'
import "./style.scss"
import { Helmet } from 'react-helmet-async'
import Finding from '../../Component/Finding'
import FreeShipping from '../../Component/FreeShipping'
import Featured from '../../Component/Featured'
import BigSale from '../../Component/BigSale'

function Home() {
  return (
    <div>
         <Helmet>
        <title>Home Page</title>
      </Helmet>
      
      <Finding></Finding>
      <FreeShipping></FreeShipping>
      <Featured></Featured>
      <BigSale></BigSale>
    </div>
  )
}

export default Home