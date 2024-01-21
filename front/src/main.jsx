import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';
import SearchProvider from './Context/SearchContext.jsx';
import WishlistProvider from './Context/WishlistContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
      <SearchProvider>
<WishlistProvider>
    <App />
</WishlistProvider>
      </SearchProvider>
     </HelmetProvider>

  </React.StrictMode>,
)
