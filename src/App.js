import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactUsPage from './pages/ContactUsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminPage from './pages/AdminPage';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Logout from './pages/logout';
import AdminLogin from './pages/AdminLogin';
import Signup from './pages/Signup';

//import SignupPage from './pages/SignupPage';

// Add this route inside the <Routes> component

function App() {
  return (
    
    <Router>
      <CartProvider>
        <Navbar/>
        
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
{/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/Adminlogin" element={<AdminLogin/>}/>
        <Route path="/SignupPage" element={<SignupPage/>}/>
        <Route path="/Adminsignup" element={<Signup/>}/>

        <Route path="/Adminpage" element={<AdminPage/>}/>
      </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
