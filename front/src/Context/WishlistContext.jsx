import React, { createContext, useState } from 'react'

export const WishlistContext=createContext()

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([])
    
    function addWishlist(item) {
        const index= wishlist.findIndex((x)=>x_id===item._id)
        if (index===-1) {
            setWishlist([...wishlist, item])
        }  
        removeWishlist()       
    }

     function removeWishlist(item) {
        setWishlist(wishlist.filter((x)=>x._id===item._id))
     }

     function isWishlist(item) {
        const index=wishlist.findIndex((x)=>x._id===item._id)
        return index
     }
  return (
    <WishlistContext.Provider value={{wishlist, addWishlist,removeWishlist}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider