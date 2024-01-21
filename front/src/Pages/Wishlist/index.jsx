import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../Context/WishlistContext'

function Wishlist() {
 const {wishlist, addWishlist,removeWishlist,isWishlist}=useContext(WishlistContext)
 const [wishlistData, setWishlistData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3200/`)
    .then((res)=>res.json())
    .then((data)=>setWishlistData(data))
   }, [])
   
   {console.log(wishlist)}
  return (
    <div>
         <Helmet>
        <title>Wishlist Page</title>
      </Helmet>
      <h1>Wishlist</h1>
      
      <div className="wishlist">

        {wishlist.map((x)=>(
          <div className="card">
                <ul key={x._id}>
                 
                <li> <img src={x.image} alt="" /></li>
                <li className='name'>{x.name}</li>
                <li className='desc'>{x.description}</li>
                <li className='price'>${x.price} </li>
                <li className='f_icons'>
                <li onClick={()=>addWishlist(x)}> <i className= {` fa-solid fa-heart  onClick=${()=>isWishlist(x) ? "red" : ""} `} > </i></li>
                <i class="fa-solid fa-cart-shopping"></i>
                </li>
              </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist