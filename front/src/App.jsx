import './App.css'
import MainLayout from './Layout/MainLayout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AddPage from './Pages/AddPage';
import Detail from './Pages/Detail';
import Basket from './Pages/Basket';
import Wishlist from './Pages/Wishlist';

function App() {

  return (
    
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Home></Home>}/> 
        <Route path="/add" element={<AddPage></AddPage>}/> 
        <Route path="/detail/:id" element={<Detail></Detail>}/> 
        <Route path="/basket" element={<Basket></Basket>}/> 
        <Route path="/wishlist" element={<Wishlist></Wishlist>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
     
    
  )
}

export default App
