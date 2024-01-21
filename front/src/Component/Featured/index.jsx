import React, {  useContext, useEffect, useState } from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
import { WishlistContext } from '../../Context/WishlistContext'

function Featured() {
  const [fetchData, setfetchData] = useState([])
  const  {wishlist, addWishlist,removeWishlist,isWishlist}= useContext(WishlistContext)

  useEffect(() => {
   fetch("http://localhost:3200/")
   .then((res)=>res.json())
   .then((data)=>setfetchData(data))
  }, [])
  
  return (
    <section id='featured'>
      <div className="featured">
        <div className="featured_head">
          <span></span>
          <h1>Featured Products</h1>
        </div>
        <div className="featured_cards">

          {fetchData.map((x)=>(
            <div className="card" key={x._id}>
              <ul >
                <li> <img src={x.image} alt="" /></li>
                <li className='name'>{x.name}</li>
                <li className='desc'>{x.description}</li>
                <li className='price'>${x.price} </li>
                <li className='f_icons'>
                
                <li onClick={()=>addWishlist(x)}> 
                <i class="fa-solid fa-heart red" > </i>
                {/* onClick={()=>isWishlist(x) ? "red": ""} */}
                </li>
                <i class="fa-solid fa-cart-shopping"></i>
                <li> <NavLink to={"/detail/"+x._id}> see</NavLink> </li>
                {/* <NavLink > 
                <i class="fa-solid fa-eye" ></i>
                </NavLink> */}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured