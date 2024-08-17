import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Footer from './Footer/Footer'
import LoginSection from './components/LoginSection/LoginSection'


const App = () => {
  
  // const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {/* {showLogin?<LoginSection/>:<></>} */}
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>


  )
}

export default App